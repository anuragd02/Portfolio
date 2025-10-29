"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Trophy, Star } from "lucide-react"

const awards = [
  {
    title: "Director's Award",
    year: "2023",
    icon: Star,
    description:
      "Recognized by the Head of the Institute for leading and representing the university, achieving multiple podium finishes in prestigious national competitions.",
  },
  {
    title: "Boeing Recognition Program Awardee",
    year: "2025",
    icon: Award,
    description:
      "Honoured for engineering two breakthrough automation solutions that achieved 95% reduction in AGV operational interruptions and 96% time reduction in equipment maintenance analysis.",
  },
  {
    title: "E-Yantra Competition - First Place",
    year: "2023",
    icon: Trophy,
    description:
      "Won 1st Place, Best Implementation, and Market-Ready Product at the E-Yantra Innovation Challenge (IIT Bombay) for MyFarm IoT hydroponics solution.",
  },
  {
    title: "Solar Endurance Race Winners",
    year: "2023",
    icon: Trophy,
    description:
      "Secured team victory in the Solar Endurance Race and 4th place overall at the 2023 Solar Electric Vehicle Championship.",
  },
]

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Awards & Certificates</h2>
          <p className="text-lg text-muted-foreground">Recognition for excellence in engineering and innovation</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <award.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{award.title}</CardTitle>
                      <CardDescription className="text-sm font-semibold text-primary">{award.year}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
