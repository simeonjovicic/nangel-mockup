"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const headlineWords = ["Modern,", "Natural-Looking", "Nails"]

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [wordsVisible, setWordsVisible] = useState<boolean[]>(new Array(headlineWords.length).fill(false))
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check for mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    // Parallax effect (disabled on mobile)
    const handleScroll = () => {
      if (imageRef.current && !isMobile) {
        const scrolled = window.scrollY
        imageRef.current.style.transform = `translateY(${scrolled * 0.1}px)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Word-by-word animation
    const timers: ReturnType<typeof setTimeout>[] = []
    headlineWords.forEach((_, index) => {
      const timer = setTimeout(() => {
        setWordsVisible(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, 400 + index * 200)
      timers.push(timer)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [isMobile])
  
  if (!mounted) {
    return (
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background">
        <div className="container mx-auto px-5 md:px-8" />
      </section>
    )
  }

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Grain texture overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.03] hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Blush gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light via-background to-blush" />

      {/* Decorative gold line */}
      <div className="absolute top-32 left-8 w-px h-32 bg-gradient-to-b from-transparent via-gold-muted to-transparent hidden lg:block" />
      <div className="absolute bottom-32 right-8 w-px h-32 bg-gradient-to-b from-transparent via-gold-muted to-transparent hidden lg:block" />

      {/* Abstract nail shape outline - decorative */}
      <svg 
        className="absolute top-1/4 left-[5%] w-16 h-24 text-gold-muted/30 hidden lg:block animate-float"
        viewBox="0 0 40 60" 
        fill="none"
        style={{ animationDelay: '0s' }}
      >
        <path 
          d="M20 2C10 2 2 15 2 35C2 50 8 58 20 58C32 58 38 50 38 35C38 15 30 2 20 2Z" 
          stroke="currentColor" 
          strokeWidth="1"
        />
      </svg>
      <svg 
        className="absolute bottom-1/4 right-[8%] w-12 h-18 text-gold-muted/20 hidden lg:block animate-float"
        viewBox="0 0 40 60" 
        fill="none"
        style={{ animationDelay: '2s' }}
      >
        <path 
          d="M20 2C10 2 2 15 2 35C2 50 8 58 20 58C32 58 38 50 38 35C38 15 30 2 20 2Z" 
          stroke="currentColor" 
          strokeWidth="1"
        />
      </svg>

      {/* Small dot pattern */}
      <div className="absolute top-40 right-[15%] hidden lg:grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gold-muted/40" />
        ))}
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[100svh] py-24 lg:py-0">
          {/* Text Content - Left Side */}
          <div className="order-1 lg:pr-12">
            <p 
              className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              Nail Studio Vienna
            </p>
            
            {/* Main headline with word-by-word animation */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground leading-[1.05] mb-6">
              <span 
                className="block opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                Laura Nails
              </span>
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-muted-foreground">
                {headlineWords.map((word, index) => (
                  <span
                    key={index}
                    className="inline-block mr-3 transition-all duration-700 ease-out"
                    style={{
                      opacity: wordsVisible[index] ? 1 : 0,
                      transform: wordsVisible[index] ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>

            <p 
              className="text-muted-foreground text-base sm:text-lg md:text-xl mb-6 max-w-md leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              Beautiful, precise manicures crafted with care in the heart of Vienna&apos;s 5th district.
            </p>
            
            <div 
              className="flex items-center gap-2 text-muted-foreground mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
              <span className="text-sm tracking-wide">Ramperstorffergasse 2, 1050 Wien</span>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            >
              <Button 
                asChild 
                size="lg" 
                className="btn-fill bg-foreground text-background hover:text-foreground rounded-full px-10 h-14 text-sm font-medium tracking-wider uppercase"
              >
                <a href="#contact">Book an Appointment</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-10 h-14 text-sm font-medium tracking-wider uppercase border-gold/30 hover:bg-gold/10 hover:border-gold/50 text-foreground"
              >
                <a href="#prices">View Prices</a>
              </Button>
            </div>
          </div>

          {/* Hero Image - Right Side (Full height on desktop) */}
          <div ref={imageRef} className="relative order-2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full rounded-2xl lg:rounded-none overflow-hidden">
              <Image
                src="/images/hero-nails.jpg"
                alt="Elegant manicure showcasing Laura Nails artistry"
                fill
                className="object-cover"
                priority
              />
              {/* Soft pink overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blush/60 via-transparent to-blush/30 lg:bg-gradient-to-r lg:from-blush/80 lg:via-transparent lg:to-transparent" />
              
              {/* Subtle inner frame on mobile */}
              <div className="absolute inset-4 border border-card/20 rounded-xl pointer-events-none lg:hidden" />
            </div>
            
            {/* Floating Badge */}
            <div 
              className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-8 lg:bottom-16 lg:left-auto lg:-right-0 lg:translate-x-[-50%] bg-card/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl border border-gold/20 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em] mb-1">Brand Ambassador</p>
              <p className="font-serif text-foreground text-sm sm:text-base">@etvoila.nails_official</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block z-10 lg:left-[25%]">
        <div className="w-6 h-10 border border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
