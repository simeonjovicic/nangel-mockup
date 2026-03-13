"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { Sparkles, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "Every nail crafted with precision",
  },
  {
    icon: Shield,
    title: "Hygiene First",
    description: "Top-tier sterilization standards",
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "Cozy atmosphere, just for you",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div 
        ref={ref}
        className={`container mx-auto px-5 md:px-8 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Portrait - Shows second on mobile */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto lg:max-w-none">
              <Image
                src="/images/laura-portrait.jpg"
                alt="Laura, nail artist and studio owner"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -z-10 top-4 sm:top-6 -left-4 sm:-left-6 w-full h-full bg-accent/10 rounded-2xl sm:rounded-3xl" />
          </div>

          {/* Content - Shows first on mobile */}
          <div className="order-1 lg:order-2">
            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4">
              About the Studio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance leading-tight">
              Where Beauty Meets Precision
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5">
              Welcome to Laura Nails, a boutique nail studio in Vienna&apos;s vibrant 5th district. 
              I&apos;m Laura, a dedicated nail artist passionate about creating beautiful, 
              natural-looking nail designs.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              Specializing in gel nails, BIAB natural nail strengthening, and delicate nail art, 
              I focus on quality over quantity. Every appointment is an experience in my cozy, 
              modern studio.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`text-center transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted mb-3">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground text-xs sm:text-sm mb-1">{feature.title}</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
