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
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div 
        ref={ref} 
        className={`container mx-auto px-5 md:px-8 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Contact & Booking
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-5 text-balance">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Ready for beautiful nails? DM on Instagram for the fastest response.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Location */}
            <div className="bg-background rounded-xl p-5 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-2">Location</h3>
                  <p className="text-foreground text-sm">Ramperstorffergasse 2</p>
                  <p className="text-foreground text-sm">1050 Wien, Austria</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-background rounded-xl p-5 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-3">Opening Hours</h3>
                  <ul className="space-y-1.5">
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
            <div className="bg-background rounded-xl p-5 border border-border/50">
              <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-3">How to Book</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Send a DM on Instagram or email for appointment requests. I typically respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full h-10 text-sm font-medium flex-1"
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
                  className="rounded-full h-10 text-sm font-medium border-border hover:bg-muted"
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
          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] rounded-xl overflow-hidden bg-muted border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8744761254743!2d16.354877376895867!3d48.18668897125099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078f8bfb1aaf%3A0x3a1e3b7c8c8c8c8c!2sRamperstorffergasse%202%2C%201050%20Wien%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890123!5m2!1sen!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laura Nails Location"
                className="grayscale-[50%] hover:grayscale-0 transition-all duration-500 absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
