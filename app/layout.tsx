import "./globals.css"
import { ReactNode } from "react"

import { DefaultSeo } from "next-seo"
import type { Metadata } from "next"

import { defaultSeoConfig } from "@/lib/seo.config"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "AAA – Schlüsselfertige Industrie-Applikationen",
    template: "%s | AAA",
  },
  description:
    "Wir verkaufen Mehrwert, nicht Produkte: digitale Lösungen für Industrie-KMU – von Analyse bis Betrieb.",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <DefaultSeo {...defaultSeoConfig} />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
