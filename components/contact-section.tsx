"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react"

const openingHours = [
  { day: "Monday", hours: "10:00 – 19:00" },
  { day: "Tuesday", hours: "10:00 – 19:00" },
  { day: "Wednesday", hours: "10:00 – 19:00" },
  { day: "Thursday", hours: "10:00 – 20:00" },
  { day: "Friday", hours: "10:00 – 18:00" },
  { day: "Saturday", hours: "By Appointment" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="py-24 bg-card">
      <div 
        ref={ref} 
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Contact & Booking
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready for beautiful nails? Reach out via Instagram DM for the fastest response.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-background border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Ramperstorffergasse 2</p>
                    <p className="text-muted-foreground">1050 Wien, Austria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+43 XXX XXX XXXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@lauranails.at</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              asChild 
              size="lg" 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
            >
              <a 
                href="https://www.instagram.com/lauranails_vienna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Book via Instagram DM
              </a>
            </Button>
          </div>

          {/* Opening Hours & Map */}
          <div className="space-y-6">
            <Card className="bg-background border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Opening Hours</h3>
                </div>
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
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8744761254743!2d16.354877376895867!3d48.18668897125099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078f8bfb1aaf%3A0x3a1e3b7c8c8c8c8c!2sRamperstorffergasse%202%2C%201050%20Wien%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890123!5m2!1sen!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laura Nails Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
