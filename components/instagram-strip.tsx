"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { Instagram } from "lucide-react"

const instagramPosts = [
  { src: "/images/gallery-1.jpg", alt: "French tip manicure" },
  { src: "/images/gallery-2.jpg", alt: "Natural gel nails" },
  { src: "/images/hero-nails.jpg", alt: "Elegant manicure" },
  { src: "/images/gallery-3.jpg", alt: "Minimal nail art" },
  { src: "/images/gallery-4.jpg", alt: "Blush pink nails" },
  { src: "/images/gallery-5.jpg", alt: "White gel nails" },
  { src: "/images/gallery-6.jpg", alt: "Ombre gradient" },
  { src: "/images/gallery-1.jpg", alt: "French tips" },
]

export function InstagramStrip() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-blush-light">
      <div 
        ref={ref}
        className={`text-center mb-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <a
          href="https://www.instagram.com/lauranails_vienna/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
            <Instagram className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium tracking-[0.15em] uppercase">@lauranails_vienna</span>
        </a>
      </div>

      {/* Scrolling Strip */}
      <div className="relative">
        <div 
          className={`flex gap-4 transition-all duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* First Set */}
          <div className="flex gap-4 animate-scroll">
            {instagramPosts.map((post, index) => (
              <a
                key={`first-${index}`}
                href="https://www.instagram.com/lauranails_vienna/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 group"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gold border highlight on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-2xl transition-colors duration-300" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-4 animate-scroll">
            {instagramPosts.map((post, index) => (
              <a
                key={`second-${index}`}
                href="https://www.instagram.com/lauranails_vienna/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 group"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-2xl transition-colors duration-300" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
