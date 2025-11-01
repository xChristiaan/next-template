import fs from "fs"
import { createRequire } from "module"
import path from "path"

const require = createRequire(import.meta.url)

interface InsightLike {
  title: string
  summary: string
  publishedAt: string
  slug: string
  body?: { code: string }
}

function loadFromContentlayer(): InsightLike[] | null {
  try {
    const generated = require("contentlayer/generated") as { allInsights?: InsightLike[] }
    if (generated?.allInsights) {
      return generated.allInsights
    }
    return null
  } catch (error) {
    return null
  }
}

function parseFrontmatter(content: string) {
  const frontmatterMatch = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(content)
  if (!frontmatterMatch) {
    return { data: {}, body: content }
  }

  const [, frontmatter, body] = frontmatterMatch
  const data = Object.fromEntries(
    frontmatter.split("\n").map((line) => {
      const [key, ...rest] = line.split(":")
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")]
    })
  ) as Record<string, string>

  return { data, body: body.trim() }
}

function loadFromFilesystem(): InsightLike[] {
  const postsDir = path.join(process.cwd(), "content", "posts")
  if (!fs.existsSync(postsDir)) {
    return []
  }

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(postsDir, file), "utf8")
      const { data, body } = parseFrontmatter(fileContent)
      const slug = file.replace(/\.mdx$/, "")

      return {
        title: data.title ?? slug,
        summary: data.summary ?? "",
        publishedAt: data.publishedAt ?? "",
        slug,
        body: { code: body },
      }
    })
}

function sortInsights(entries: InsightLike[]) {
  return [...entries].sort((a, b) => {
    const dateA = new Date(a.publishedAt)
    const dateB = new Date(b.publishedAt)
    if (Number.isNaN(dateA.valueOf()) || Number.isNaN(dateB.valueOf())) {
      return a.title.localeCompare(b.title)
    }

    return dateB.getTime() - dateA.getTime()
  })
}

export function getInsights() {
  const fromContentlayer = loadFromContentlayer()
  if (fromContentlayer) {
    return sortInsights(fromContentlayer)
  }

  return sortInsights(loadFromFilesystem())
}

export function getInsightBySlug(slug: string) {
  const fromContentlayer = loadFromContentlayer()
  const entries = fromContentlayer ?? loadFromFilesystem()
  return entries.find((insight) => insight.slug === slug) ?? null
}
