import { LeadForm } from "@/components/LeadForm"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-16">
      <section className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Kontakt</p>
        <h1 className="text-4xl font-semibold">Lassen Sie uns über Ihren Mehrwert sprechen</h1>
        <p className="text-muted-foreground">
          Buchen Sie ein Erstgespräch oder senden Sie uns Ihr Anliegen. Wir melden uns innerhalb von zwei Werktagen.
        </p>
      </section>
      <section className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
        <LeadForm />
      </section>
    </div>
  )
}
