"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY
        imageRef.current.style.transform = `translateY(${scrolled * 0.1}px)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-12">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content - Shows first on mobile */}
          <div className="order-1 animate-fade-in-up">
            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-6">
              Nail Studio Vienna
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-5 text-balance">
              Laura Nails
            </h1>
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground mb-5 italic">
              Modern, natural-looking nails
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-5 max-w-md leading-relaxed">
              Beautiful, precise manicures crafted with care in the heart of Vienna&apos;s 5th district.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-sm">Ramperstorffergasse 2, 1050 Wien</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12 text-sm font-medium tracking-wide"
              >
                <a href="#contact">Book an Appointment</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-12 text-sm font-medium tracking-wide border-border hover:bg-muted hover:border-muted-foreground/20"
              >
                <a href="#prices">View Price List</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="relative order-2">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-nails.jpg"
                alt="Elegant manicure showcasing Laura Nails artistry"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle inner frame */}
              <div className="absolute inset-3 sm:inset-4 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-border">
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.15em] mb-0.5">Brand Ambassador</p>
              <p className="font-serif text-foreground text-sm sm:text-base">@etvoila.nails_official</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
