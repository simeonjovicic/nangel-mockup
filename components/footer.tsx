import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="container mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-background mb-2">
              Laura Nails
            </h3>
            <p className="text-background/60 text-sm italic font-serif">
              Modern, natural-looking nails
            </p>
          </div>

          {/* Address */}
          <div className="text-center">
            <p className="text-background/80 text-sm">
              Ramperstorffergasse 2, 1050 Wien
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/lauranails_vienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Laura Nails. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-8 text-xs text-background/50">
            <a href="#" className="hover:text-background transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
