"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "MyFarm",
    description: "IoT-based hydroponics solution",
    image: "/iot-hydroponics-system-with-sensors-and-plants.jpg",
    achievements: [
      "Led cross-functional team to win 1st Place, Best Implementation, and Market-Ready Product at the E-Yantra Innovation Challenge (IIT Bombay)",
      "Designed a Raspberry Pi–based environmental control system integrating sensor array (pH, TDS, temperature, humidity, water level) and actuators for closed-loop autonomous nutrient and climate regulation, improving lettuce and spinach yield by 30%",
      "Developed MQTT-driven IoT backend and Flutter mobile app for real-time monitoring, control, and data visualization, featuring a modular architecture that ensured seamless field deployment and system scalability",
    ],
    tags: ["IoT", "Raspberry Pi", "MQTT", "Flutter", "Automation"],
  },
  {
    title: "Solar Mobil",
    description: "Solar electric vehicle championship winner",
    image: "/solar-electric-vehicle-racing-car.jpg",
    achievements: [
      "Engineered and integrated a custom multi-speed gearbox, securing team victory in the Solar Endurance Race and 4th place overall at the 2023 Solar Electric Vehicle Championship",
      "Optimized multi-speed gearbox gear ratios through precise torque–speed analysis, enhancing vehicle acceleration by 15% and reducing solar energy consumption by 18%",
      "Led complete electric powertrain design including motor selection, battery configuration, and power delivery calibration validated through rigorous on-track testing",
    ],
    tags: ["Electric Vehicle", "Powertrain", "Energy Optimization", "Mechanical Design"],
  },
  {
    title: "Moto Manipal",
    description: "Formula-style racing vehicle development",
    image: "/formula-racing-car-chassis-engineering.jpg",
    achievements: [
      "Engineered chassis, swingarm, subframe, and transmission components using advanced CAD and FEA tools (SolidWorks, CATIA, ANSYS)",
      "Developed custom jigs and fixtures to enhance fabrication precision",
      "Optimized parts manufacturing by selecting CNC, TIG welding, tube bending, and laser cutting processes based on strength–weight–cost trade-offs",
      "Reduced chassis cost by ~50% through structural and process redesign",
    ],
    tags: ["CAD", "FEA", "Manufacturing", "Cost Optimization"],
  },
  {
    title: "Automatic Dosa Making Machine",
    description: "Automated food processing system",
    image: "/automated-food-processing-machine-robotic-arm.jpg",
    achievements: [
      "Led a team of 6 to design and prototype a fully automated food-processing device",
      "Integrated mechanical systems, embedded hardware, and custom software",
      "Developed under an academia–industry MoU",
      "Patent published in 2025 (India Application No. 202541049509)",
    ],
    tags: ["Automation", "Embedded Systems", "Product Development", "Patent"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Major Projects</h2>
          <p className="text-lg text-muted-foreground">Award-winning innovations in automation and robotics</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden bg-secondary/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
