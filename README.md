# AAA Website

Schlüsselfertige Industrie-Applikationen – gebaut mit Next.js, Tailwind CSS und einem komponentenbasierten Designsystem. Dieses Repository enthält die Marketing- und Lead-Generierungsseite von AAA.

## Tech-Stack

- Next.js App Router (TypeScript)
- Tailwind CSS mit Design Tokens und Dark Mode
- Statische Inhalte via MDX (Contentlayer-Ready)
- Eigene UI-Komponenten inspiriert von shadcn/ui
- Formvalidierung mit Zod (Stub)
- SEO-Defaults via `next-seo` (Stub)

## Voraussetzungen

- Node.js 18+
- npm (v9) oder kompatibler Paketmanager

> Hinweis: In restriktiven Umgebungen kann der Zugriff auf die npm Registry blockiert sein. Prüfen Sie ggf. Proxy/Registry-Einstellungen.

## Setup

```bash
npm install
```

Falls Registry-Zugriff nicht möglich ist, erfassen Sie interne Spiegel in `.npmrc` oder hinterlegen Sie die Pakete in einem artefact-Repository.

### Entwicklungsserver starten

```bash
npm run dev
```

Der Server läuft standardmäßig unter <http://localhost:3000>.

### Linting & Tests

```bash
npm run lint
npm run typecheck
```

### Produktion

```bash
npm run build
npm run start
```

## Projektstruktur

```
app/            # Routen (App Router)
components/     # UI-Bausteine (Header, Hero, Form, ...)
content/        # MDX-Inhalte für Insights
lib/            # Utilities, Stubs und Konfigurationen
public/         # Assets
```

## Environment Variablen

Siehe `.env.example` für alle benötigten Variablen. Legen Sie diese lokal und in Vercel/CI an.

## Deployment (Vercel)

1. Repository in Vercel importieren
2. `npm install`, `npm run build` als Build-Steps
3. Environment-Variablen setzen (`PLAUSIBLE_DOMAIN`, `NEXT_PUBLIC_SITE_URL`, ...)
4. Preview-Umgebung testen (Lighthouse ≥95 anstreben)
5. Go-Live: Domains verknüpfen, Security-Header aktivieren, Monitoring (Plausible) prüfen

## Go-Live Checkliste

- [ ] Rechtstexte juristisch freigeben (Impressum, Datenschutz, AGB)
- [ ] Tracking-Konfiguration mit Consent überprüfen
- [ ] Kontaktformular End-to-End testen (inkl. Spam-Schutz)
- [ ] Performance-Audits (Lighthouse/WebPageTest)
- [ ] 404/500 Seiten personalisieren

## Fehlerbehebung

| Problem | Lösung |
| --- | --- |
| `403 Forbidden` beim Installieren | Registry/Proxy prüfen oder Artefakte manuell bereitstellen |
| Dark Mode wechselt nicht | Sicherstellen, dass `ThemeProvider` `attribute="class"` nutzt |
| Inhalte fehlen | `content/posts` prüfen und Build erneut starten |

## Lizenz

© AAA. Individuelle Nutzung nach interner Abstimmung.
