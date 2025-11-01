import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { MdxContent } from "@/components/mdx-content"
import { getInsightBySlug, getInsights } from "@/lib/insights"

interface InsightPageProps {
  params: { slug: string }
}

const formatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
})

function formatPublishedAt(value: string) {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? value : formatter.format(date)
}

export function generateStaticParams() {
  return getInsights().map((insight) => ({ slug: insight.slug }))
}

export function generateMetadata({ params }: InsightPageProps): Metadata {
  const insight = getInsightBySlug(params.slug)

  if (!insight) {
    return {}
  }

  return {
    title: `${insight.title} | AAA Insights`,
    description: insight.summary,
  }
}

export default function InsightDetailPage({ params }: InsightPageProps) {
  const insight = getInsightBySlug(params.slug)

  if (!insight) {
    notFound()
  }

  const body = insight.body?.code ?? ""

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {formatPublishedAt(insight.publishedAt)}
        </p>
        <h1 className="text-4xl font-semibold text-foreground">{insight.title}</h1>
        <p className="text-sm text-muted-foreground">{insight.summary}</p>
      </div>
      <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary">
        <MdxContent code={body} />
      </article>
    </div>
  )
}
