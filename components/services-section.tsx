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
    <section id="services" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-gold-muted/30 to-transparent hidden xl:block" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-gold-muted/30 to-transparent hidden xl:block" />

      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-5">
            Services
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-6 text-balance leading-tight">
            Tailored Nail Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            From classic elegance to modern artistry, services designed to enhance your natural beauty.
          </p>
        </div>

        {/* Asymmetric service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${index % 2 === 1 ? "lg:translate-y-8" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 group-hover:border-gold/30 transition-all duration-500 h-full group-hover:shadow-xl">
                {/* Gold accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-500" />
                
                <div className="w-14 h-14 rounded-2xl bg-blush flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors duration-500" />
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-5 border-t border-border/50">
                  <span className="text-xs text-muted-foreground tracking-wide">{service.duration}</span>
                  <span className="font-serif text-lg text-foreground font-medium">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
