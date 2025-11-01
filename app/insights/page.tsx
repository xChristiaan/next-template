import Link from "next/link"

import { getInsights } from "@/lib/insights"

export default function InsightsPage() {
  const insights = getInsights()

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-16">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Insights</p>
        <h1 className="text-4xl font-semibold">Impulse für Industrie-Digitalisierung</h1>
        <p className="max-w-3xl text-muted-foreground">
          Analysen, Erfahrungsberichte und Best Practices rund um Produktion, Energie und Supply Chain in Industrie-KMU.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {insights.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.publishedAt}</p>
            <h2 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{post.summary}</p>
            <Link className="mt-4 inline-flex text-sm font-semibold text-primary" href={`/insights/${post.slug}`}>
              Beitrag lesen
            </Link>
          </article>
        ))}
      </section>
      <section className="rounded-3xl border border-primary/20 bg-primary/5 p-10">
        <h2 className="text-2xl font-semibold text-foreground">Sie möchten tiefer einsteigen?</h2>
        <p className="mt-3 text-muted-foreground">
          Vereinbaren Sie einen Insight-Briefing-Call mit unserem Team und erhalten Sie relevante Benchmarks für Ihre Branche.
        </p>
        <a className="btn-primary mt-6 inline-flex" href="/contact">
          Insight-Briefing anfragen
        </a>
      </section>
    </div>
  )
}
