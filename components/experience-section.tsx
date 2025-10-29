"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    company: "The Boeing Company",
    role: "Equipment and Tooling Engineer",
    location: "Bangalore, India",
    period: "Sept 2024 – Present",
    achievements: [
      "Optimized 28 AGV operations at 777X Composite Wing Centre using Dijkstra's algorithm for collision-free routing; developed Python automation framework for ACE Table coding with QA and real-time simulation, reducing test interruptions by 95%",
      "Spearheaded AI-driven reliability analysis system for equipment maintenance processing 600+ work orders with 86% failure code tagging accuracy, reducing maintenance analysis time by 96%; scalable to 35 assets and 30,000+ work orders",
      "Built Equipment Engineering Training Lab, contributing to CAD design, assembly, and PLC programming for servo-based 3-axis gantry and pneumatic pick-and-place systems using Siemens S7-1500 PLCs, accelerating new engineer onboarding",
      "Built a Notes revision Tool for legacy drawings standards, automating cross-referencing and saving 250+ hours per month",
    ],
    tags: ["Python", "AI/ML", "PLC Programming", "Automation", "CAD"],
  },
  {
    company: "Amazon India",
    role: "Operations Manager Intern",
    location: "Mumbai, India",
    period: "Jan 2024 – Jun 2024",
    achievements: [
      "Engineered and deployed data-driven automation tools using Python and VBA to streamline outbound, stowing, and inventory workflows, eliminating manual dependencies and non-value-added activities by over 15 hours daily",
      "Led cross-functional teams to implement direction-line workflows and OB-dock realignment, resulting in a 19% increase in on-time dispatch, enhanced customer satisfaction, and marked improvements in key operational KPIs",
    ],
    tags: ["Python", "VBA", "Operations", "Process Optimization"],
  },
  {
    company: "Omega Seiki Mobility",
    role: "Project Intern",
    location: "Pune, India",
    period: "Dec 2022 – Feb 2023",
    achievements: [
      "Developed an ESP32-based connector system using relays, push-buttons, and reverse-engineered BMS wiring, reducing battery SOC detection time by 88% during Inward Quality Checks",
    ],
    tags: ["ESP32", "Embedded Systems", "Hardware Development"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">Professional journey in automation and engineering</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        {exp.company}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">{exp.role}</CardDescription>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
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
