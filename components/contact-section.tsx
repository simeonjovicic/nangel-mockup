"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Instagram, Clock } from "lucide-react"

const openingHours = [
  { day: "Mon - Wed", hours: "10:00 - 19:00" },
  { day: "Thursday", hours: "10:00 - 20:00" },
  { day: "Friday", hours: "10:00 - 18:00" },
  { day: "Saturday", hours: "By Appointment" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-blush-light to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold-muted/30 hidden lg:block" />

      <div 
        ref={ref} 
        className="container mx-auto px-5 md:px-8"
      >
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-5">
            Contact & Booking
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-6 text-balance leading-tight">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            Ready for beautiful nails? DM on Instagram for the fastest response.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-5 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Location */}
            <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-gold/20 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blush flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">Location</h3>
                  <p className="text-foreground text-base font-medium">Ramperstorffergasse 2</p>
                  <p className="text-muted-foreground text-sm">1050 Wien, Austria</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-gold/20 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blush flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">Opening Hours</h3>
                  <ul className="space-y-2">
                    {openingHours.map((item) => (
                      <li key={item.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className={`font-medium ${item.hours === "Closed" ? "text-muted-foreground" : "text-foreground"}`}>
                          {item.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Book */}
            <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-gold/20 transition-colors duration-300">
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">How to Book</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Send a DM on Instagram or email for appointment requests. I typically respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  className="btn-fill bg-foreground text-background hover:text-foreground rounded-full h-12 text-sm font-medium tracking-wide flex-1"
                >
                  <a 
                    href="https://www.instagram.com/lauranails_vienna/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Book via Instagram
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="rounded-full h-12 text-sm font-medium border-gold/30 hover:bg-gold/10 hover:border-gold/50 text-foreground"
                >
                  <a href="mailto:hello@lauranails.at" className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative h-full min-h-[400px] sm:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-muted border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8744761254743!2d16.354877376895867!3d48.18668897125099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078f8bfb1aaf%3A0x3a1e3b7c8c8c8c8c!2sRamperstorffergasse%202%2C%201050%20Wien%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890123!5m2!1sen!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laura Nails Location"
                className="sepia-[0.2] contrast-[0.95] hover:sepia-0 hover:contrast-100 transition-all duration-500 absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
