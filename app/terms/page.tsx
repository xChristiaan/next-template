export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-16">
      <h1 className="text-4xl font-semibold">Allgemeine Geschäftsbedingungen</h1>
      <p className="text-sm text-muted-foreground">
        Diese AGB sind Platzhalter und müssen durch Ihre Rechtsabteilung bestätigt werden.
      </p>
      <section className="space-y-4 text-sm leading-relaxed">
        <p>
          AAA liefert schlüsselfertige Applikationen inkl. Beratung, Implementierung und Betrieb. Leistungen, Reaktionszeiten und Haftungsfragen werden nach rechtlicher Prüfung ergänzt.
        </p>
        <p>
          Zahlungsbedingungen, Laufzeiten und Support-Level werden in den individuellen Verträgen geregelt. Dieser Abschnitt dient als Platzhalter.
        </p>
        <p>
          <strong>TODO:</strong> Vollständige Vertragsbedingungen und Hinweise zur Streitbeilegung ergänzen.
        </p>
      </section>
      <p className="text-xs text-muted-foreground">Stand: {new Date().getFullYear()} – Bitte rechtlich freigeben.</p>
    </div>
  )
}
