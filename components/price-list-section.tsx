"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"

const priceCategories = [
  {
    title: "Manicure",
    items: [
      { service: "Classic Manicure", duration: "45 min", price: "€35" },
      { service: "Gel Polish Manicure", duration: "60 min", price: "€45" },
      { service: "Full Gel Extension", duration: "90 min", price: "€65" },
      { service: "Gel Extension + Color", duration: "105 min", price: "€75" },
    ],
  },
  {
    title: "BIAB & Strengthening",
    items: [
      { service: "BIAB Natural Look", duration: "75 min", price: "€55" },
      { service: "BIAB with Color", duration: "90 min", price: "€60" },
      { service: "BIAB Refill", duration: "60 min", price: "€45" },
      { service: "Nail Repair (per nail)", duration: "10 min", price: "€5" },
    ],
  },
  {
    title: "Nail Art & Extras",
    items: [
      { service: "French Tips", duration: "+15 min", price: "+€10" },
      { service: "Minimal Nail Art", duration: "+15 min", price: "from €10" },
      { service: "Custom Design", duration: "+30 min", price: "from €15" },
      { service: "Chrome / Cat Eye", duration: "+10 min", price: "+€10" },
    ],
  },
  {
    title: "Maintenance",
    items: [
      { service: "Gel Refill (2-3 weeks)", duration: "60 min", price: "€45" },
      { service: "Gel Refill (3-4 weeks)", duration: "75 min", price: "€55" },
      { service: "Gel Removal", duration: "30 min", price: "€25" },
      { service: "Removal + Manicure", duration: "60 min", price: "€45" },
    ],
  },
]

export function PriceListSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="prices" className="py-20 md:py-28 relative">
      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Price List
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-5 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Quality services at fair prices. All treatments include premium products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {priceCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`bg-card rounded-2xl p-5 md:p-6 border border-border/50 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${catIndex * 80}ms` }}
            >
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-5">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.service} className="flex items-baseline justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <span className="text-foreground text-sm">{item.service}</span>
                      <span className="text-muted-foreground text-xs ml-2">({item.duration})</span>
                    </div>
                    <span className="font-medium text-foreground text-sm whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <p className="text-muted-foreground text-sm mb-6">
            Prices may vary based on complexity. Contact for a personalized quote.
          </p>
          <Button 
            asChild 
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-11 text-sm font-medium tracking-wide"
          >
            <a href="#contact">Book Your Appointment</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
