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
    <section id="prices" className="py-24 md:py-32 bg-gradient-to-b from-card via-background to-blush-light relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute top-32 left-[10%] hidden lg:grid grid-cols-4 gap-3 opacity-40">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gold-muted" />
        ))}
      </div>
      <div className="absolute bottom-32 right-[10%] hidden lg:grid grid-cols-4 gap-3 opacity-40">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gold-muted" />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-5">
            Price List
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-6 text-balance leading-tight">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            Quality services at fair prices. All treatments include premium products.
          </p>
        </div>

        {/* Elegant two-column price grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {priceCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-6 pb-3 border-b border-gold/30">
                {category.title}
              </h3>
              <ul className="space-y-0">
                {category.items.map((item) => (
                  <li 
                    key={item.service} 
                    className="flex items-baseline justify-between gap-4 py-4 border-b border-border/30 last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-foreground text-sm sm:text-base font-medium">{item.service}</span>
                      <span className="text-muted-foreground text-xs sm:text-sm ml-2 opacity-70">({item.duration})</span>
                    </div>
                    {/* Gold separator line */}
                    <span className="hidden sm:block flex-1 border-b border-dotted border-gold-muted/50 mx-3" />
                    <span className="font-serif text-base sm:text-lg text-foreground font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-14 md:mt-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-muted-foreground text-sm mb-8">
            Prices may vary based on complexity. Contact for a personalized quote.
          </p>
          <Button 
            asChild 
            className="btn-fill bg-foreground text-background hover:text-foreground rounded-full px-10 h-14 text-sm font-medium tracking-wider uppercase"
          >
            <a href="#contact">Book Your Appointment</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
