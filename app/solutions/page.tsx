import Link from "next/link"

const solutions = [
  {
    title: "Produktion",
    description:
      "Digitale Werksführung mit Echtzeit-OEE, Stillstandsanalysen und Shopfloor-Feedbacks – für stabile Linienleistung.",
    kpi: "+12% OEE in 16 Wochen",
  },
  {
    title: "Instandhaltung",
    description:
      "Predictive Maintenance, mobile Workflows und Ersatzteil-Transparenz reduzieren ungeplante Ausfälle signifikant.",
    kpi: "-30% ungeplante Stillstände",
  },
  {
    title: "Energie",
    description:
      "Lastspitzen-Management, Verbrauchsanalysen und CO₂-Reporting sichern Kosten- und ESG-Ziele.",
    kpi: "15% Energieeinsparung",
  },
  {
    title: "Supply Chain",
    description:
      "End-to-End-Transparenz über Materialflüsse, Lieferperformance und Engpassprognosen.",
    kpi: "99% Liefertermintreue",
  },
]

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Lösungen</p>
        <h1 className="text-4xl font-semibold">Digitale Wirkungspakete für jede Wertschöpfungsstufe</h1>
        <p className="max-w-3xl text-muted-foreground">
          Unsere Module kombinieren Datenintegration, automatisierte Workflows und Change Enablement. Damit schaffen wir Wirkung ohne Produkt-Flickenteppich.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {solutions.map((solution) => (
          <article key={solution.title} className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">{solution.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{solution.description}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-primary">KPI-Ziel</p>
            <p className="text-lg font-semibold">{solution.kpi}</p>
          </article>
        ))}
      </section>
      <section className="rounded-3xl border border-primary/20 bg-primary/5 p-10">
        <h2 className="text-2xl font-semibold text-foreground">Gemeinsam den größten Wirkungshebel finden</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Wir starten mit einem Wirkungs-Assessment und liefern eine priorisierte Roadmap. Jede Lösung ist messbar auf Ihre KPIs ausgerichtet.
        </p>
        <Link className="btn-primary mt-6 inline-flex" href="/contact">
          Erstgespräch anfragen
        </Link>
      </section>
    </div>
  )
}
