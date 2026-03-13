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
    <section id="gallery" className="py-24 md:py-32 bg-gradient-to-b from-blush-light to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-px h-24 bg-gradient-to-b from-transparent via-gold-muted/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-20 right-8 w-px h-24 bg-gradient-to-b from-transparent via-gold-muted/50 to-transparent hidden lg:block" />
      
      <div ref={ref} className="container mx-auto px-5 md:px-8">
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-5">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-6 text-balance leading-tight">
            Nail Art Gallery
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            A glimpse into the artistry crafted at Laura Nails.
          </p>
        </div>

        {/* Masonry-style Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
          {/* Large item - spans 2 cols on mobile, 2 cols on desktop */}
          <div
            className={`group relative col-span-2 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Rose gold border highlight on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl md:rounded-3xl transition-colors duration-300" />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-card text-sm sm:text-base font-serif italic tracking-wide">
                {galleryImages[0].caption}
              </span>
            </div>
          </div>

          {/* Small items */}
          {galleryImages.slice(1, 3).map((image, index) => (
            <div
              key={image.src}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-square transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl md:rounded-3xl transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-card text-xs sm:text-sm font-serif italic tracking-wide">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}

          {/* Medium items */}
          {galleryImages.slice(3, 5).map((image, index) => (
            <div
              key={image.src}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl md:rounded-3xl transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-card text-xs sm:text-sm font-serif italic tracking-wide">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}

          {/* Last large item - spans 2 cols */}
          <div
            className={`group relative col-span-2 rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Image
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl md:rounded-3xl transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-card text-sm sm:text-base font-serif italic tracking-wide">
                {galleryImages[5].caption}
              </span>
            </div>
          </div>
        </div>

        {/* Instagram CTA */}
        <div 
          className={`text-center mt-14 md:mt-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-muted-foreground text-sm">
            See more on{" "}
            <a
              href="https://www.instagram.com/lauranails_vienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold transition-colors font-medium underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
            >
              @lauranails_vienna
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
