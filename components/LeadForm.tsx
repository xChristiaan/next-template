"use client"

import { useState } from "react"

import { z } from "zod"

const leadSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  message: z.string().min(10, "Bitte beschreiben Sie Ihr Anliegen."),
  company: z.optional(z.string()),
})

type LeadFormValues = {
  name: string
  email: string
  message: string
  company?: string
}

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>({ name: "", email: "", message: "", company: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setErrors({})

    const result = leadSchema.safeParse(values)

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string
        fieldErrors[path] = issue.message
      })
      setErrors(fieldErrors)
      setStatus("error")
      return
    }

    if (values.company) {
      setStatus("success")
      return
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      })

      if (!response.ok) {
        throw new Error("Network error")
      }

      setStatus("success")
      setValues({ name: "", email: "", message: "", company: "" })
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form aria-label="Kontaktformular" className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Name</span>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            required
            autoComplete="name"
          />
          {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">E-Mail</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            required
            autoComplete="email"
          />
          {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Nachricht</span>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={4}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          required
        />
        {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
      </label>
      <div aria-hidden className="hidden">
        <label>
          Firma
          <input name="company" value={values.company ?? ""} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        type="submit"
        className="btn-primary inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
      {status === "success" && (
        <p className="text-sm text-primary">Vielen Dank! Wir melden uns innerhalb von zwei Werktagen.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">Bitte prüfen Sie Ihre Eingaben oder versuchen Sie es später erneut.</p>
      )}
    </form>
  )
}
