type Issue = { path: (string | number)[]; message: string }

type SafeParseSuccess<T> = { success: true; data: T }
type SafeParseError = { success: false; error: { issues: Issue[] } }

type SafeParseReturn<T> = SafeParseSuccess<T> | SafeParseError

class ZodString {
  private validators: ((value: string) => string | null)[] = []

  min(length: number, message = `Must be at least ${length} characters`) {
    this.validators.push((value) => (value.length >= length ? null : message))
    return this
  }

  email(message = "Invalid email") {
    const emailRegex = /.+@.+\..+/
    this.validators.push((value) => (emailRegex.test(value) ? null : message))
    return this
  }

  nonempty(message = "Required") {
    return this.min(1, message)
  }

  parse(value: string) {
    for (const validator of this.validators) {
      const result = validator(value)
      if (result) {
        throw new Error(result)
      }
    }
    return value
  }

  safeParse(value: string) {
    try {
      this.parse(value)
      return { success: true, data: value } as SafeParseSuccess<string>
    } catch (error) {
      return {
        success: false,
        error: { issues: [{ path: [], message: error instanceof Error ? error.message : "Invalid" }] },
      } satisfies SafeParseError
    }
  }
}

class ZodOptional<T> {
  constructor(private schema: T) {}

  safeParse(value: unknown) {
    if (value === undefined || value === null || value === "") {
      return { success: true, data: undefined } as SafeParseSuccess<undefined>
    }
    if (this.schema instanceof ZodString) {
      return this.schema.safeParse(String(value))
    }
    return { success: true, data: value } as SafeParseSuccess<unknown>
  }
}

type Shape = Record<string, ZodString | ZodOptional<unknown>>

class ZodObject<T extends Shape> {
  constructor(private shape: T) {}

  safeParse(data: Record<string, unknown>): SafeParseReturn<{ [K in keyof T]: unknown }> {
    const parsed: Record<string, unknown> = {}
    const issues: Issue[] = []

    for (const key of Object.keys(this.shape)) {
      const schema = this.shape[key as keyof T]
      const value = data[key]

      if (schema instanceof ZodString) {
        const result = schema.safeParse(typeof value === "string" ? value : "")
        if (result.success) {
          parsed[key] = result.data
        } else {
          issues.push({ path: [key], message: result.error.issues[0]?.message ?? "Invalid" })
        }
      } else if (schema instanceof ZodOptional) {
        const result = schema.safeParse(value)
        if (result.success) {
          parsed[key] = result.data
        } else {
          issues.push({ path: [key], message: result.error.issues[0]?.message ?? "Invalid" })
        }
      }
    }

    if (issues.length > 0) {
      return { success: false, error: { issues } }
    }

    return { success: true, data: parsed as { [K in keyof T]: unknown } }
  }
}

export const z = {
  string() {
    return new ZodString()
  },
  object<T extends Shape>(shape: T) {
    return new ZodObject(shape)
  },
  optional<T>(schema: T) {
    return new ZodOptional(schema)
  },
}
