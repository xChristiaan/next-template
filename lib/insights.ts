import fs from "fs"
import path from "path"

export interface InsightEntry {
  title: string
  summary: string
  publishedAt: string
  slug: string
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts")

function parseFrontmatter(content: string) {
  const frontmatterMatch = /^---\n([\s\S]*?)\n---/.exec(content)
  if (!frontmatterMatch) {
    return {}
  }
  const frontmatter = frontmatterMatch[1]
  return Object.fromEntries(
    frontmatter.split("\n").map((line) => {
      const [key, ...rest] = line.split(":")
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")]
    })
  )
}

export function getInsights(): InsightEntry[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return []
  }

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(POSTS_DIR, file), "utf8")
      const data = parseFrontmatter(fileContent) as Record<string, string>
      const slug = file.replace(/\.mdx$/, "")

      return {
        title: data.title ?? slug,
        summary: data.summary ?? "",
        publishedAt: data.publishedAt ?? "",
        slug,
      }
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}
