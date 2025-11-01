const tiles = [
  {
    title: "Schneller zur Wirkung",
    description:
      "Von der Analyse bis zum Rollout in Wochen statt Monaten – klar strukturierte Workstreams und messbare Meilensteine.",
  },
  {
    title: "Industrie-fit ab Tag 1",
    description:
      "Vorvalidierte Module für Produktion, Instandhaltung und Energie liefern passgenaue Funktionen ohne Overhead.",
  },
  {
    title: "Transparenz in Zahlen",
    description:
      "Dashboards, OEE-Reports und Energiemonitoring schaffen Klarheit für Management und Shopfloor gleichermaßen.",
  },
  {
    title: "Partnerschaftlich",
    description:
      "Wir bleiben über den Go-Live hinaus an Ihrer Seite – mit Enablement, On-the-job-Coaching und Service-SLAs.",
  },
]

export function ValueTiles() {
  return (
    <section className="border-y border-border/50 bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Mehrwert in jedem Schritt</p>
            <h2 className="text-3xl font-semibold">Warum Industrie-KMU mit AAA skalieren</h2>
          </div>
          <p className="max-w-xl text-muted-foreground">
            Wir verbinden Automatisierung, Datenveredelung und Change Management zu einem Paket, das wirtschaftliche Resultate liefert – nachvollziehbar für CFO, COO und Werksleitung.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {tiles.map((tile) => (
            <article
              key={tile.title}
              className="group rounded-3xl border border-border/60 bg-card/70 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground">{tile.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground">
                {tile.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
