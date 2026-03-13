import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyLauraSection } from "@/components/why-laura-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
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
      <WhyLauraSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <PriceListSection />
      <ContactSection />
      <InstagramStrip />
      <Footer />
    </main>
  )
}
