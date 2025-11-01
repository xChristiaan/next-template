export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-16">
      <h1 className="text-4xl font-semibold">Impressum</h1>
      <p className="text-sm text-muted-foreground">
        Angaben gemäß § 5 TMG. Inhalte werden aktuell finalisiert. <strong>Bitte rechtlich prüfen.</strong>
      </p>
      <section className="space-y-3 text-sm">
        <p>AAA GmbH</p>
        <p>Straße 12</p>
        <p>12345 Musterstadt</p>
        <p>Deutschland</p>
      </section>
      <section className="space-y-3 text-sm">
        <p>Vertreten durch: Laura König</p>
        <p>Kontakt: hallo@aaa.de</p>
        <p>Telefon: +49 (0)30 123456</p>
      </section>
      <p className="text-xs text-muted-foreground">Stand: {new Date().getFullYear()} – Platzhalter, bitte juristisch freigeben.</p>
    </div>
  )
}
