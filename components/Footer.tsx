import Link from "next/link"

const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/privacy", label: "Datenschutz" },
  { href: "/terms", label: "Terms" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-foreground">
            AAA – Schlüsselfertige Industrie-Applikationen
          </p>
          <p className="max-w-lg leading-relaxed">
            Wir liefern Effizienz, Transparenz und messbare Ergebnisse für Industrie-KMU – partnerschaftlich und DSGVO-konform.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
