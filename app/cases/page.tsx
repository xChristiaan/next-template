import Link from "next/link"

const cases = [
  {
    client: "Werk A – Maschinenbau",
    challenge: "Hohe Stillstandszeiten durch fehlende Transparenz.",
    approach: "Rollout einer OEE-Plattform mit Shopfloor-Feedback und Eskalations-Workflows.",
    result: {
      headline: "+14% OEE in 5 Monaten",
      kpis: ["ROI < 10 Monate", "Stillstände -28%"],
    },
  },
  {
    client: "Werk B – Lebensmittel",
    challenge: "Energieverbrauch steigt trotz Modernisierung.",
    approach: "Energiemonitoring mit digitalen Lastgängen, Alerts und Optimierungsvorschlägen.",
    result: {
      headline: "Energie -18% in 2 Quartalen",
      kpis: ["Transparenz für 9 Linien", "CO₂-Reporting automatisiert"],
    },
  },
]

export default function CasesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Cases</p>
        <h1 className="text-4xl font-semibold">Messbare Ergebnisse aus der Praxis</h1>
        <p className="max-w-3xl text-muted-foreground">
          Wir begleiten Industrie-KMU von der Idee bis zum Betrieb. Unsere Kunden sichern sich Transparenz, Effizienz und Compliance.
        </p>
      </section>
      <section className="space-y-6">
        {cases.map((item) => (
          <article key={item.client} className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">{item.client}</h2>
                <p className="text-sm text-muted-foreground">{item.challenge}</p>
              </div>
              <p className="text-base font-semibold text-primary">{item.result.headline}</p>
            </header>
            <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
              <p className="text-sm text-muted-foreground">{item.approach}</p>
              <ul className="space-y-2 text-xs font-medium text-foreground/80">
                {item.result.kpis.map((kpi) => (
                  <li key={kpi} className="flex items-center gap-2">
                    <span className="inline-flex size-1.5 rounded-full bg-primary" aria-hidden />
                    {kpi}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
        <h2 className="text-2xl font-semibold text-foreground">Bereit für messbare Wirkung?</h2>
        <p className="mt-3 text-muted-foreground">
          Lassen Sie uns über Ihre Produktions- und Energieziele sprechen. Wir bringen konkrete Ideen mit.
        </p>
        <Link className="btn-primary mt-6 inline-flex" href="/contact">
          Erstgespräch sichern
        </Link>
      </section>
    </div>
  )
}
