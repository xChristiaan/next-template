import { CTA } from "@/components/CTA"
import { Hero } from "@/components/Hero"
import { HowWeWork } from "@/components/HowWeWork"
import { ValueTiles } from "@/components/ValueTiles"

export default function Page() {
  return (
    <div className="space-y-16">
      <Hero />
      <ValueTiles />
      <HowWeWork />
      <CTA
        title="Starten wir mit einem Wirkungs-Workshop"
        description="In 60 Minuten identifizieren wir Prozesse mit dem größten Mehrwerthebel und skizzieren einen umsetzbaren Fahrplan."
      />
    </div>
  )
}
