"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-[#e8edff] py-20 dark:to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
          variants={containerVariants}
          className="flex-1 space-y-6"
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Schlüsselfertige Applikationen
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Schlüsselfertige Applikationen. Messbarer Mehrwert.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            AAA digitalisiert industrielle Prozesse – von Analyse bis Betrieb. Wir liefern Ergebnisse, keine Features. Mit uns werden Effizienz, Transparenz und Verfügbarkeit zur messbaren Realität.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="btn-primary inline-flex items-center justify-center" href="/contact">
              Erstgespräch anfragen
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary"
              href="/solutions"
            >
              Lösungen entdecken
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.2 }}
          className="flex-1 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-xl backdrop-blur"
        >
          <div className="grid gap-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">KPI-Fokus</p>
              <p className="text-lg font-semibold">+18% Durchsatz in 12 Wochen</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Transparenz</p>
              <p className="text-lg font-semibold">Echtzeit-OEE für jede Linie</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Compliance</p>
              <p className="text-lg font-semibold">100% DSGVO-konformer Betrieb</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
