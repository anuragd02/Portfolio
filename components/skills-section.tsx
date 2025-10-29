"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
  { name: "scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
  { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "ROS", logo: "https://cdn.simpleicons.org/ros/22314E" },
  { name: "Arduino", logo: "https://cdn.simpleicons.org/arduino/00979D" },
  { name: "Raspberry Pi", logo: "https://cdn.simpleicons.org/raspberrypi/A22846" },
  { name: "SolidWorks", logo: "https://cdn.simpleicons.org/dassaultsystemes/005386" },
  { name: "Fusion 360", logo: "https://cdn.simpleicons.org/autodesk/0696D7" },
  { name: "ANSYS", logo: "https://cdn.simpleicons.org/ansys/FFB71B" },
  { name: "MQTT", logo: "https://cdn.simpleicons.org/mqtt/660066" },
  { name: "ESP32", logo: "https://cdn.simpleicons.org/espressif/E7352C" },
  { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "MATLAB", logo: "https://cdn.simpleicons.org/mathworks/0076A8" },
  { name: "CAD", logo: "https://cdn.simpleicons.org/autodesk/0696D7" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">Comprehensive expertise across multiple engineering domains</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="relative w-16 h-16 rounded-xl bg-secondary/50 p-3 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Image
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
