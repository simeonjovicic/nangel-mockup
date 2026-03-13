"use client"

import { useState, useEffect } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#prices", label: "Prices" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className={`mx-4 md:mx-8 mt-4 transition-all duration-500 ${
        scrolled 
          ? "bg-card/80 backdrop-blur-xl shadow-lg border border-gold/10 rounded-full" 
          : "bg-transparent"
      }`}>
        <nav className={`container mx-auto transition-all duration-500 ${
          scrolled ? "px-6 md:px-8 py-3" : "px-5 md:px-8 py-4"
        }`}>
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className="font-serif text-xl sm:text-2xl font-medium text-foreground tracking-wide"
            >
              Laura Nails
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em] group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-5">
              <a
                href="https://www.instagram.com/lauranails_vienna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <Button 
                asChild 
                className="btn-fill bg-foreground text-background hover:text-foreground rounded-full px-7 h-10 text-xs font-medium tracking-wider uppercase"
              >
                <a href="#contact">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden fixed inset-0 top-0 bg-card/98 backdrop-blur-xl z-40 transition-all duration-500 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-8">
              <div className="flex-1 flex flex-col justify-center gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`font-serif text-3xl sm:text-4xl font-medium text-foreground hover:text-gold transition-all py-3 ${
                      isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                <a
                  href="https://www.instagram.com/lauranails_vienna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <Button 
                  asChild 
                  className="btn-fill bg-foreground text-background hover:text-foreground rounded-full flex-1 h-14 text-sm font-medium tracking-wider uppercase"
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>Book Now</a>
                </Button>
              </div>
            </div>
            {/* Close button in mobile menu */}
            <button
              className="absolute top-6 right-6 text-foreground p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
