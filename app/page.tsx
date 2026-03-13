import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { PriceListSection } from "@/components/price-list-section"
import { ContactSection } from "@/components/contact-section"
import { InstagramStrip } from "@/components/instagram-strip"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PriceListSection />
      <ContactSection />
      <InstagramStrip />
      <Footer />
    </main>
  )
}
