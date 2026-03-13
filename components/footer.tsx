import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Address */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg font-medium text-foreground mb-1">
              Laura Nails
            </h3>
            <p className="text-xs text-muted-foreground">
              Ramperstorffergasse 2, 1050 Wien
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/lauranails_vienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Laura Nails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
