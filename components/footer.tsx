import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Address */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Laura Nails
            </h3>
            <p className="text-sm text-muted-foreground">
              Ramperstorffergasse 2, 1050 Wien
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/lauranails_vienna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Laura Nails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
