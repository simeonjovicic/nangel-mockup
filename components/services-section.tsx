"use client"

import { useInView } from "@/hooks/use-in-view"
import { Gem, Leaf, Paintbrush, RefreshCw } from "lucide-react"

const services = [
  {
    icon: Gem,
    title: "Gel Manicure",
    description: "Long-lasting gel polish with perfect shape and shine. Chip-free for 2-3 weeks.",
    duration: "60-90 min",
    price: "from €45",
  },
  {
    icon: Leaf,
    title: "BIAB / Builder Base",
    description: "Builder In A Bottle for healthy, natural-looking nails with added strength and flexibility.",
    duration: "75-90 min",
    price: "from €55",
  },
  {
    icon: Paintbrush,
    title: "French & Nail Art",
    description: "Classic French tips or delicate minimal designs tailored to your style.",
    duration: "varies",
    price: "from €55",
  },
  {
    icon: RefreshCw,
    title: "Refills & Removal",
    description: "Maintain your beautiful nails with professional refills or gentle, safe gel removal.",
    duration: "45-60 min",
    price: "from €35",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-5 text-balance">
            Tailored Nail Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From classic elegance to modern artistry, services designed to enhance your natural beauty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">{service.duration}</span>
                <span className="text-sm font-medium text-foreground">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
