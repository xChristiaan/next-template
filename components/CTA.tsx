import Link from "next/link"

interface CTAProps {
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
}

export function CTA({
  title,
  description,
  ctaLabel = "Kontakt aufnehmen",
  ctaHref = "/contact",
}: CTAProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-8 py-12 text-center shadow-md">
        <h2 className="text-3xl font-semibold text-foreground">{title}</h2>
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
        <div className="mt-6 flex justify-center">
          <Link className="btn-primary inline-flex items-center justify-center" href={ctaHref}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
