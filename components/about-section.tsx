"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-blush to-blush-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-12 w-px h-32 bg-gradient-to-b from-transparent via-gold-muted/40 to-transparent hidden lg:block" />
      
      {/* Abstract nail shape decoration */}
      <svg 
        className="absolute bottom-20 left-[5%] w-20 h-28 text-gold-muted/15 hidden lg:block"
        viewBox="0 0 40 60" 
        fill="none"
      >
        <path 
          d="M20 2C10 2 2 15 2 35C2 50 8 58 20 58C32 58 38 50 38 35C38 15 30 2 20 2Z" 
          stroke="currentColor" 
          strokeWidth="1"
        />
      </svg>

      <div 
        ref={ref}
        className="container mx-auto px-5 md:px-8"
      >
        {/* Asymmetric Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait - Offset positioning */}
          <div 
            className={`lg:col-span-5 lg:col-start-1 relative order-2 lg:order-1 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none lg:ml-0">
                <Image
                  src="/images/laura-portrait.jpg"
                  alt="Laura, nail artist and studio owner"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
              
              {/* Decorative frame offset */}
              <div className="absolute -z-10 top-6 -left-6 w-full h-full border border-gold/30 rounded-2xl sm:rounded-3xl hidden lg:block" />
              
              {/* Small accent image - asymmetric placement */}
              <div className="absolute -bottom-8 -right-4 lg:-right-12 w-24 h-32 sm:w-32 sm:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-card hidden sm:block">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Detail of nail work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content - Wider column with editorial typography */}
          <div 
            className={`lg:col-span-6 lg:col-start-7 order-1 lg:order-2 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-5">
              About the Studio
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 leading-[1.1]">
              Where Beauty
              <span className="block italic text-muted-foreground">Meets Precision</span>
            </h2>
            <div className="space-y-5 mb-10">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Welcome to Laura Nails, a boutique nail studio in Vienna&apos;s vibrant 5th district. 
                I&apos;m Laura, a dedicated nail artist passionate about creating beautiful, 
                natural-looking nail designs.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Specializing in gel nails, BIAB natural nail strengthening, and delicate nail art, 
                I focus on quality over quantity. Every appointment is an experience in my cozy, 
                modern studio where attention to detail and your comfort come first.
              </p>
            </div>

            {/* Signature element */}
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent max-w-[100px]" />
              <p className="font-serif text-xl sm:text-2xl italic text-foreground">Laura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
