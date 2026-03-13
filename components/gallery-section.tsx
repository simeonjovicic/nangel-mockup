"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { Instagram } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Classic French tip manicure", size: "large" },
  { src: "/images/gallery-2.jpg", alt: "Natural nude gel manicure", size: "small" },
  { src: "/images/gallery-3.jpg", alt: "Minimal gold line nail art", size: "small" },
  { src: "/images/gallery-4.jpg", alt: "Soft blush pink gel nails", size: "medium" },
  { src: "/images/gallery-5.jpg", alt: "Milky white natural gel nails", size: "medium" },
  { src: "/images/gallery-6.jpg", alt: "Nude ombre gradient manicure", size: "large" },
]

export function GallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="gallery" className="py-24 bg-card">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Nail Art Inspirations
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the artistry and elegance crafted at Laura Nails.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                image.size === "large" ? "row-span-2" : ""
              } ${
                image.size === "medium" ? "aspect-square" : image.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"
              } ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            For more designs, visit{" "}
            <a
              href="https://www.instagram.com/lauranails_vienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              @lauranails_vienna
            </a>{" "}
            on Instagram.
          </p>
        </div>
      </div>
    </section>
  )
}
