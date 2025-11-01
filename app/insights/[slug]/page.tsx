import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"

interface InsightPageProps {
  params: { slug: string }
}

function loadInsight(slug: string) {
  const filePath = path.join(process.cwd(), "content", "posts", `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    return null
  }
  const fileContent = fs.readFileSync(filePath, "utf8")
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(fileContent)
  if (!match) {
    return null
  }
  const frontmatter = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const [key, ...rest] = line.split(":")
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")]
    })
  ) as Record<string, string>
  const body = match[2].trim()
  return {
    title: frontmatter.title ?? slug,
    summary: frontmatter.summary ?? "",
    publishedAt: frontmatter.publishedAt ?? "",
    body,
  }
}

export default function InsightDetailPage({ params }: InsightPageProps) {
  const insight = loadInsight(params.slug)

  if (!insight) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{insight.publishedAt}</p>
        <h1 className="text-4xl font-semibold text-foreground">{insight.title}</h1>
        <p className="text-sm text-muted-foreground">{insight.summary}</p>
      </div>
      <article className="space-y-4 text-base leading-relaxed text-muted-foreground">
        {insight.body.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-foreground/80">
            {paragraph.replace(/^##\s*/, "")}
          </p>
        ))}
      </article>
    </div>
  )
}
