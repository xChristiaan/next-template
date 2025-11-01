const steps = [
  {
    title: "Analyse",
    description:
      "Workshops auf Shopfloor und Management-Level, Daten-Audits sowie KPI-Benchmarking schaffen den Ausgangspunkt.",
    kpis: ["Use-Case-Roadmap", "Invest-Business-Case"],
  },
  {
    title: "Umsetzung",
    description:
      "Iterative Umsetzung mit klaren Sprints, Integration in bestehende Systeme und strukturierte Change-Kommunikation.",
    kpis: ["Produktionsstart < 90 Tage", "Adoption > 80%"],
  },
  {
    title: "Betrieb & Mehrwert",
    description:
      "Run-Phase mit Monitoring, Enablement und kontinuierlicher Optimierung. KPI-Reviews sichern Wirkung und Skalierung.",
    kpis: ["Quartalsweise KPI-Reviews", "ROI-Tracking"],
  },
]

export function HowWeWork() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Wie wir arbeiten</p>
          <h2 className="text-3xl font-semibold">Drei Schritte zum messbaren Ergebnis</h2>
          <p className="text-muted-foreground">
            Wir verbinden Technologie, Prozessexpertise und Menschen. Jeder Schritt liefert belastbare Entscheidungsgrundlagen für das Management.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
              <ul className="mt-4 space-y-2 text-xs font-medium text-foreground/80">
                {step.kpis.map((kpi) => (
                  <li key={kpi} className="flex items-center gap-2">
                    <span className="inline-flex size-1.5 rounded-full bg-primary" aria-hidden />
                    {kpi}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
