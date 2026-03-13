"use client"

import { useInView } from "@/hooks/use-in-view"
import { Gem, Leaf, Paintbrush, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Gem,
    title: "Manicure & Gel Nails",
    description: "Classic or gel manicure with lasting shine and perfect shape. Choose from a variety of colors and finishes.",
    price: "from €45",
  },
  {
    icon: Leaf,
    title: "BIAB / Natural Strengthening",
    description: "Builder In A Bottle technique for healthy, natural-looking nails with added strength and durability.",
    price: "from €55",
  },
  {
    icon: Paintbrush,
    title: "Nail Art & French",
    description: "From timeless French tips to delicate minimal designs, express your style with custom nail art.",
    price: "from €55",
  },
  {
    icon: RefreshCw,
    title: "Refills & Removal",
    description: "Maintain your beautiful nails with professional refills or safe, gentle gel removal.",
    price: "from €35",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Tailored Nail Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From classic elegance to modern artistry, discover services designed to enhance your natural beauty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group bg-card hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-accent font-medium text-sm">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
