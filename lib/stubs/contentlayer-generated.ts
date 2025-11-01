export type Insight = {
  title: string
  slug: string
  summary: string
  publishedAt: string
}

export const allInsights: Insight[] = [
  {
    title: "Predictive Maintenance neu gedacht",
    slug: "predictive-maintenance-industrie",
    summary: "Wie mittelständische Werke Predictive Maintenance ohne Overhead einführen.",
    publishedAt: "2024-03-12",
  },
  {
    title: "Energieeffizienz als Wettbewerbsvorteil",
    slug: "energieeffizienz-produktion",
    summary: "Welche KPIs wirklich zählen, um Energie in der Fertigung zu optimieren.",
    publishedAt: "2024-05-18",
  },
]
