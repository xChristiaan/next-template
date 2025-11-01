"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Lösungen" },
  { href: "/consulting", label: "Beratung" },
  { href: "/cases", label: "Cases" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "Über uns" },
]

export function Header() {
  const pathname = usePathname()

  const isActive = useMemo(
    () =>
      (href: string) => {
        if (href === "/") {
          return pathname === "/"
        }
        return pathname?.startsWith(href)
      },
    [pathname]
  )

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        href="#main"
      >
        Zum Inhalt springen
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 p-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            AAA
          </span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:block">
            Mehrwert. Nicht Produkte.
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition-colors hover:text-foreground ${
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary" aria-hidden />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:inline-flex"
          >
            Erstgespräch anfragen
          </Link>
        </div>
      </div>
    </header>
  )
}
