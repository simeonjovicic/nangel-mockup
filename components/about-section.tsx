"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { Sparkles, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "Every nail is a canvas for precision and artistry",
  },
  {
    icon: Shield,
    title: "Hygiene First",
    description: "Top-tier sterilization and premium products always",
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "A cozy, relaxing atmosphere tailored to you",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto">
              <Image
                src="/images/laura-portrait.jpg"
                alt="Laura, nail artist and studio owner"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-accent/10 rounded-3xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
              About the Studio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
              Where Beauty Meets Precision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to Laura Nails, a boutique nail studio in Vienna&apos;s vibrant 5th district. 
              I&apos;m Laura, a dedicated nail artist passionate about creating beautiful, 
              modern nail designs that make you feel confident and elegant.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Specializing in gel nails, BIAB natural nail strengthening, and delicate nail art, 
              I focus on quality over quantity. Every appointment is an experience—enjoy a cozy, 
              modern studio atmosphere while I craft your perfect manicure with meticulous care.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
