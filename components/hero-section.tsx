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
        imageRef.current.style.transform = `translateY(${scrolled * 0.15}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Welcome to
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 text-balance">
              Laura Nails
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-serif italic">
              Your Nail Studio in Vienna
            </p>
            <p className="text-muted-foreground text-lg mb-6 max-w-lg leading-relaxed">
              Experience beautiful, precise manicures crafted with care in the heart of the 5th district. 
              Where elegance meets expertise.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm">Ramperstorffergasse 2, 1050 Wien</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base"
              >
                <a href="#contact">Book an Appointment</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-base border-accent/30 hover:bg-accent/10"
              >
                <a href="#prices">View Price List</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-nails.jpg"
                alt="Elegant manicure showcasing Laura Nails artistry"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-white/30 rounded-2xl pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Brand Ambassador</p>
              <p className="font-serif text-foreground font-medium">@etvoila.nails_official</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
