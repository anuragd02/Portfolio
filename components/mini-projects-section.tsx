"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const miniProjects = [
  {
    title: "Smart Irrigation System",
    category: "IoT | Embedded Systems | Agriculture Automation",
    image: "/smart-irrigation-system-with-sensors.jpg",
    description:
      "Automated irrigation system using sensors and IoT connectivity to regulate water flow based on soil conditions. Provides remote monitoring and precise control for efficient crop watering.",
    components: "Soil Moisture Sensor, ESP32, Relay Module, Pump Driver, IoT Dashboard",
  },
  {
    title: "Line Follower and Obstacle Avoidance Robot",
    category: "Robotics | Embedded Systems | Control Systems",
    image: "/line-follower-robot-with-sensors.jpg",
    description:
      "Built an autonomous robot that follows lines and avoids obstacles using IR and ultrasonic sensors with PID-based control for smooth and adaptive navigation.",
    components: "IR Sensor Array, Arduino, L293D Motor Driver, DC Motors, PID Controller",
  },
  {
    title: "Home Automation with IoT",
    category: "IoT | Embedded Systems | Automation",
    image: "/smart-home-automation-iot-devices.jpg",
    description:
      "IoT-based home automation system enabling remote and voice-controlled operation of appliances via Wi-Fi.",
    components: "ESP32, Relay Module, Blynk App, Google Assistant Integration, MQTT Protocol",
  },
  {
    title: "3D Printed Gear Mechanisms / Drone Frame",
    category: "Mechanical Design | CAD | Additive Manufacturing",
    image: "/3d-printed-gears-and-drone-frame.jpg",
    description:
      "Designed and 3D printed functional gear mechanisms and drone frame prototypes optimized for strength and weight efficiency.",
    components: "CAD Modeling, PLA/ABS Filament, FDM 3D Printer, Gear Design, Structural Simulation",
  },
  {
    title: "Climate Control using STM Board",
    category: "Embedded Systems | Automation | Environmental Control",
    image: "/climate-control-system-temperature-sensor.jpg",
    description:
      "Environmental control system using STM32 board to automatically regulate temperature and humidity through feedback control.",
    components: "STM32 Board, DHT11 Sensor, Relay Module, Cooling/Heating Units, PID Control",
  },
  {
    title: "Pneumatic Gripper System",
    category: "Mechatronics | Robotics | Industrial Automation",
    image: "/pneumatic-gripper-robotic-arm.jpg",
    description:
      "Microcontroller-based pneumatic gripper for automated pick-and-place operations using solenoid-controlled air actuation.",
    components: "Pneumatic Cylinder, Solenoid Valve, Compressor, Pressure Regulator, Arduino Controller",
  },
  {
    title: "Custom Fit Design Using 3D Face Scanning",
    category: "CAD | Computer Vision | Product Design",
    image: "/3d-face-scanning-technology.jpg",
    description:
      "3D scanning-based system to generate customized product designs, enabling perfect ergonomic fit through parametric modeling.",
    components: "3D Scanner, CAD Software, Mesh Reconstruction, Parametric Modeling",
  },
  {
    title: "Gantry Control using Servo Motors",
    category: "Robotics | Motion Control | Automation",
    image: "/gantry-system-servo-motors-cnc.jpg",
    description:
      "3-axis servo-based gantry system for precision linear motion, featuring synchronized multi-axis control and feedback sensors.",
    components: "Servo Motors, PWM Controller, Limit Switches, Embedded Controller, Linear Guides",
  },
  {
    title: "Combat Robot",
    category: "Robotics | Mechanical Design | Power Systems",
    image: "/combat-robot-battle-bot.jpg",
    description:
      "Remote-controlled combat robot with high-torque drive, modular weapon system, and aluminum chassis for competitive performance.",
    components: "DC Motors, RF Receiver/Transmitter, LiPo Battery, Motor Driver, Aluminum Chassis",
  },
]

export function MiniProjectsSection() {
  return (
    <section id="mini-projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Mini Projects</h2>
          <p className="text-lg text-muted-foreground">Hands-on experience across diverse engineering domains</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden bg-secondary/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-xs">{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground/70">
                      <span className="font-semibold text-foreground">Key Components:</span> {project.components}
                    </p>
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
