"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const interests = [
  {
    name: "Trekking",
    description: "Exploring nature and challenging terrains",
    image: "/mountain-trekking-hiking-adventure.jpg",
  },
  {
    name: "Boxing",
    description: "Discipline, fitness, and mental strength",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Running",
    description: "Endurance training and personal wellness",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function InterestsSection() {
  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Interests & Hobbies</h2>
          <p className="text-lg text-muted-foreground">Beyond engineering - staying active and exploring</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <div className="relative h-64 w-full overflow-hidden bg-secondary/50">
                  <Image
                    src={interest.image || "/placeholder.svg"}
                    alt={interest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{interest.name}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
