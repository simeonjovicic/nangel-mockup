"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const priceCategories = [
  {
    title: "Manicure",
    items: [
      { service: "Classic Manicure", price: "€35" },
      { service: "Gel Polish Manicure", price: "€45" },
      { service: "Full Gel Extension", price: "€65" },
      { service: "Gel Extension with Color", price: "€75" },
    ],
  },
  {
    title: "BIAB & Strengthening",
    items: [
      { service: "BIAB Natural Look", price: "€55" },
      { service: "BIAB with Color", price: "€60" },
      { service: "BIAB Refill", price: "€45" },
      { service: "Nail Repair (per nail)", price: "€5" },
    ],
  },
  {
    title: "Nail Art & Extras",
    items: [
      { service: "French Tips", price: "+€10" },
      { service: "Minimal Nail Art", price: "from €10" },
      { service: "Custom Design", price: "from €15" },
      { service: "Chrome / Cat Eye Finish", price: "+€10" },
    ],
  },
  {
    title: "Maintenance",
    items: [
      { service: "Gel Refill (2-3 weeks)", price: "€45" },
      { service: "Gel Refill (3-4 weeks)", price: "€55" },
      { service: "Gel Removal", price: "€25" },
      { service: "Gel Removal + Manicure", price: "€45" },
    ],
  },
]

export function PriceListSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="prices" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Price List
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality services at fair prices. All treatments include premium products and personalized care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {priceCategories.map((category, catIndex) => (
            <Card
              key={category.title}
              className={`bg-card border-border/50 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="font-serif text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.service} className="flex justify-between items-start text-sm">
                      <span className="text-muted-foreground">{item.service}</span>
                      <span className="font-medium text-foreground ml-2 whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Prices may vary based on complexity. Contact for a personalized quote.
        </p>
      </div>
    </section>
  )
}
