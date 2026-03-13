"use client"

import { useInView } from "@/hooks/use-in-view"
import { Award, ShieldCheck, Sparkles, Star } from "lucide-react"

const trustBadges = [
  {
    icon: Award,
    title: "Certified Nail Artist",
    description: "Professionally trained with international certifications",
  },
  {
    icon: Sparkles,
    title: "Premium Gel Products",
    description: "Only top-tier, long-lasting gel systems used",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Studio",
    description: "Sterilized tools and single-use items always",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently praised by happy clients",
  },
]

export function WhyLauraSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blush-light to-card relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-transparent to-gold-muted/30 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-transparent to-gold-muted/30 hidden lg:block" />

      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div 
          className={`text-center max-w-2xl mx-auto mb-14 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-5">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-6 text-balance leading-tight">
            Why Laura?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            Experience the difference of a dedicated artist who treats every appointment as an art form.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.title}
              className={`text-center group transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-5">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
                {/* Inner circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border border-gold/20 flex items-center justify-center group-hover:bg-gold/5 transition-colors duration-300">
                  <badge.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
