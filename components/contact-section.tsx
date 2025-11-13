"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anuragdhole02@gmail.com",
    href: "mailto:anuragdhole02@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anuragdhole/",
    href: "https://linkedin.com/in/anuragdhole/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/anuragd02",
    href: "https://github.com/anuragd02",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 74994 94188",
    href: "tel:+917499494188",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            {"Let's connect and discuss opportunities in automation and robotics"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-border text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Open to opportunities in automation, robotics, and product development
              </p>
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          <p>© 2025 Anurag Dhole. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
