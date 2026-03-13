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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-5 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="font-serif text-xl sm:text-2xl font-medium text-foreground tracking-wide"
          >
            Laura Nails
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.15em]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/lauranails_vienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <Button 
              asChild 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 h-9 text-xs font-medium tracking-wide"
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
          className={`md:hidden fixed inset-0 top-[57px] bg-background z-40 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col p-6 gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium text-muted-foreground hover:text-foreground transition-all py-3 border-b border-border/50 ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-6 mt-4">
              <a
                href="https://www.instagram.com/lauranails_vienna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <Button 
                asChild 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full flex-1 h-12 text-sm font-medium"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
