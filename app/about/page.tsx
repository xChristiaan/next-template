const values = [
  {
    title: "Mehrwert statt Produkt",
    description: "Wir starten immer bei der betriebswirtschaftlichen Wirkung und denken Technologie nur als Mittel zum Zweck.",
  },
  {
    title: "Industrie-DNA",
    description: "Unser Team kombiniert Werksleitung, OT-Security und Data-Science – für Lösungen, die in der Produktion funktionieren.",
  },
  {
    title: "Partnerschaftlich",
    description: "Wir arbeiten eng mit Ihren Teams, bauen Know-how auf und bleiben nach dem Go-Live an Ihrer Seite.",
  },
]

const team = [
  { name: "Laura König", role: "Geschäftsführerin", focus: "Strategie & Kundenwirkung" },
  { name: "Dr. Jens Walter", role: "Leiter Technologie", focus: "Architektur & Security" },
  { name: "Sofia Brandt", role: "Head of Delivery", focus: "Programm-Management" },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
      <section className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Über AAA</p>
          <h1 className="text-4xl font-semibold">Wir stehen für messbare Industrie-Digitalisierung</h1>
          <p className="text-muted-foreground">
            AAA liefert schlüsselfertige Applikationen für Produktion, Instandhaltung und Energie – mit klaren KPIs, transparentem Reporting und einem Fokus auf Menschen im Wandel.
          </p>
        </div>
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 text-sm text-muted-foreground">
          <p className="font-semibold text-primary">USP</p>
          <p className="mt-2 text-base text-foreground">
            Wir verkaufen Mehrwert, keine Produkte. Unsere Kunden erhalten Klarheit über Wirkung, Kosten und Umsetzungsgeschwindigkeit.
          </p>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">{value.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
          </article>
        ))}
      </section>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
              <p className="text-lg font-semibold text-foreground">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="mt-3 text-xs text-muted-foreground">{member.focus}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
