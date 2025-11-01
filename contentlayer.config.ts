import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Insight = defineDocumentType(() => ({
  name: "Insight",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
    url: {
      type: "string",
      resolve: (doc) => `/insights/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Insight],
})
