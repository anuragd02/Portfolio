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
            I’m a mechatronics engineer passionate about building systems that connect mechanical design, electronics, 
            and intelligent control. At Boeing, I work on developing and deploying ROS-based navigation systems for 
            automated guided vehicles (AGVs) that support production operations. My background from Manipal Institute 
            of Technology and my experience across robotics, control systems, and data-driven reliability have taught 
            me to approach problems with both technical depth and practical focus. I enjoy creating solutions that are 
            robust, efficient, and make engineering work better on the ground.
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
