"use client"

import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    quote: "Laura has the most incredible attention to detail. My nails have never looked better, and they last for weeks without chipping.",
    author: "Sophie M.",
    service: "BIAB Client",
  },
  {
    quote: "Finally found my go-to nail artist in Vienna! The studio is beautiful, the atmosphere is so relaxing, and the results speak for themselves.",
    author: "Anna K.",
    service: "Gel Manicure",
  },
  {
    quote: "The French tips Laura does are absolutely flawless. It's the small details that make all the difference.",
    author: "Maria L.",
    service: "French Tips",
  },
]

export function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-16 left-8 text-gold-muted/10 text-[200px] font-serif leading-none hidden lg:block">
        &ldquo;
      </div>
      <div className="absolute bottom-16 right-8 text-gold-muted/10 text-[200px] font-serif leading-none hidden lg:block rotate-180">
        &ldquo;
      </div>

      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div 
          className={`text-center max-w-2xl mx-auto mb-14 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-5">
            Client Love
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-6 text-balance leading-tight">
            What They Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`relative transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Pull quote styling */}
              <div className="relative">
                {/* Gold accent line */}
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold-muted to-transparent" />
                
                <blockquote className="pl-6 md:pl-8">
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center">
                      <span className="font-serif text-sm text-foreground font-medium">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <cite className="not-italic font-medium text-foreground text-sm">
                        {testimonial.author}
                      </cite>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.service}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
