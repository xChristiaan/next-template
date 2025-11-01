import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Insight = defineDocumentType({
  name: "Insight",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc: { _raw: { flattenedPath: string } }) => doc._raw.flattenedPath,
    },
  },
})

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Insight],
})
