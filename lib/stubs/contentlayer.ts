export type DocumentType = {
  name: string
  filePathPattern: string
  fields: Record<string, { type: string; required?: boolean }>
  computedFields?: Record<string, { resolve: (doc: any) => unknown }>
}

export function defineDocumentType<T extends DocumentType>(config: T): T {
  return config
}

export function makeSource(_config: { contentDirPath: string; documentTypes: DocumentType[] }) {
  return {}
}
