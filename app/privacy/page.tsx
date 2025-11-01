export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-16">
      <h1 className="text-4xl font-semibold">Datenschutzerklärung</h1>
      <p className="text-sm text-muted-foreground">
        Diese Inhalte sind Platzhalter und müssen rechtlich geprüft und finalisiert werden.
      </p>
      <section className="space-y-4 text-sm leading-relaxed">
        <p>
          Wir verarbeiten personenbezogene Daten ausschließlich zum Zweck der Kontaktaufnahme und Projektabwicklung.
          Rechtsgrundlage und Speicherfristen werden nach juristischer Prüfung ergänzt.
        </p>
        <p>
          Besucherstatistiken werden optional mit Plausible Analytics erhoben. Es werden keine Cookies gesetzt und alle Daten sind anonymisiert.
        </p>
        <p>
          <strong>TODO:</strong> Rechtstext für Betroffenenrechte, Auftragsverarbeitung, Hosting und Sicherheitsmaßnahmen hinzufügen.
        </p>
      </section>
      <p className="text-xs text-muted-foreground">Stand: {new Date().getFullYear()} – Bitte rechtlich freigeben.</p>
    </div>
  )
}
