"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Classic French tip manicure", caption: "Classic French" },
  { src: "/images/gallery-2.jpg", alt: "Natural nude gel manicure", caption: "Soft Nude BIAB" },
  { src: "/images/gallery-3.jpg", alt: "Minimal gold line nail art", caption: "Minimal Gold Accent" },
  { src: "/images/gallery-4.jpg", alt: "Soft blush pink gel nails", caption: "Blush Pink Gel" },
  { src: "/images/gallery-5.jpg", alt: "Milky white natural gel nails", caption: "Milky Sheer" },
  { src: "/images/gallery-6.jpg", alt: "Nude ombre gradient manicure", caption: "Nude Ombre" },
]

export function GallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="gallery" className="py-20 md:py-28 bg-card">
      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-5 text-balance">
            Nail Art Gallery
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A glimpse into the artistry crafted at Laura Nails.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => {
            // Vary the aspect ratios for visual interest
            const aspectClasses = [
              "aspect-[3/4]",
              "aspect-square",
              "aspect-[4/5]",
              "aspect-[4/5]",
              "aspect-square", 
              "aspect-[3/4]",
            ]
            
            return (
              <div
                key={image.src}
                className={`group relative rounded-xl md:rounded-2xl overflow-hidden ${aspectClasses[index]} ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ 
                  transitionProperty: "opacity, transform",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDelay: `${index * 60}ms` 
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Hover Overlay with Caption */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end justify-center p-4">
                  <span className="text-background text-xs sm:text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {image.caption}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-muted-foreground text-sm">
            See more on{" "}
            <a
              href="https://www.instagram.com/lauranails_vienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              @lauranails_vienna
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
