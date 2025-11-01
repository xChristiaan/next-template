import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center gap-4 sm:justify-between sm:gap-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center gap-1">
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <div className={buttonVariants({ size: "icon", variant: "ghost" })}>
                <Icons.linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <Link href={siteConfig.links.mail}>
              <div className={buttonVariants({ size: "icon", variant: "ghost" })}>
                <Icons.mail className="size-5" />
                <span className="sr-only">E-Mail</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
