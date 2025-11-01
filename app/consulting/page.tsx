import Link from "next/link"

const phases = [
  { title: "Audit", description: "Standort- und Prozessanalyse, KPI-Benchmarking, System-Check." },
  { title: "Konzept", description: "Use-Case-Auswahl, Architektur und Roadmap inklusive Business-Case." },
  { title: "Integration", description: "System- und Datenintegration, Applikations-Setup, Security-Checks." },
  { title: "Schulung", description: "Enablement für Teams, Change-Kommunikation, Trainingsunterlagen." },
  { title: "Erfolgsmessung", description: "KPI-Reviews, kontinuierliche Optimierung, Skalierung." },
]

const packages = [
  {
    name: "Wirkungs-Check",
    description: "2-wöchiger Quick Scan für klare Entscheidungsgrundlagen.",
    deliverables: ["KPI-Analyse", "Use-Case-Map", "Business-Case-Skizze"],
  },
  {
    name: "Rollout-Sprint",
    description: "12-wöchiges Implementierungsprogramm mit KPI-Garantie.",
    deliverables: ["Produktionsreife Lösung", "Change-Plan", "Wirkungsreport"],
  },
  {
    name: "Continuous Impact",
    description: "Managed Service für Betrieb, KPI-Monitoring und Weiterentwicklung.",
    deliverables: ["Quartalsweise KPI-Reviews", "Enablement", "Roadmap-Updates"],
  },
]

export default function ConsultingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Beratung</p>
        <h1 className="text-4xl font-semibold">Vom Audit bis zur Wirkung</h1>
        <p className="max-w-3xl text-muted-foreground">
          Unser Consulting-Team begleitet Sie durchgängig – mit Technologiekompetenz, Industrie-Know-how und konsequenter KPI-Ausrichtung.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-5">
        {phases.map((phase) => (
          <article key={phase.title} className="rounded-3xl border border-border/60 bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">{phase.title}</h2>
            <p className="mt-2 text-xs text-muted-foreground">{phase.description}</p>
          </article>
        ))}
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <article key={pkg.name} className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">{pkg.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{pkg.description}</p>
              <ul className="mt-4 space-y-2 text-xs font-medium text-foreground/80">
                {pkg.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex size-1.5 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link className="btn-primary mt-6 inline-flex" href="/contact">
              Paket anfragen
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
