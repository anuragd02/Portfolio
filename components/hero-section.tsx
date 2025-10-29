"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="summary" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance"
          >
            Anurag Dhole
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-primary font-medium"
          >
            Mechatronics Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty"
          >
            Passionate mechatronics engineer seeking an opportunity to work in the field of automation and product
            development. Experienced at enhancing product efficiency, with strengths in problem-solving and
            communication. Involved in diverse extracurriculars like debating, agriculture, volunteering, and organizing
            cultural events. Seeking to drive innovation as an automation engineer for impactful product development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Explore My Work</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
