"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, BookOpen } from "lucide-react"

const patents = [
  {
    title: "AI-Integrated Hydroponic System for Plant Health and Nutrient Management",
    status: "Published 2024",
    applicationNo: "202441071347",
    description:
      "Engineered an IoT-enabled, autonomous platform for real-time crop monitoring and adaptive nutrient delivery, reducing manual interventions by 80%.",
  },
  {
    title: "Automated Dosa-Making Machine",
    status: "Published 2025",
    applicationNo: "202541049509",
    description:
      "Led a team of 6 to design and prototype a fully automated food-processing device integrating mechanical systems, embedded hardware, and custom software under an academia–industry MoU.",
  },
]

const publications = [
  {
    title:
      "Web-Based Decision Support System for Real-Time Detection and Management of Northern Corn Leaf Blight in Maize",
    status: "Under review",
    journal: "IEEE Transactions on Geoscience and Remote Sensing",
    impactFactor: "8.8",
  },
  {
    title:
      "Digital Decision Support with Precision Fungicide Application for Southern Corn Leaf Blight Management in Maize",
    status: "Under review",
    journal: "Expert Systems and Applications",
    impactFactor: "8.5",
  },
  {
    title: "AI-Powered Decision-Support System for Maize Turcicum Leaf Blight",
    status: "Published",
    journal: "Computers and Electronics in Agriculture",
    impactFactor: "8.9",
  },
  {
    title: "AI-Powered Decision Support System for Smart Detection and Management of Cucumber Powdery Mildew",
    status: "Under review",
    journal: "IEEE Access",
    impactFactor: "3.6",
  },
  {
    title: "AI-Driven Decision Support for Castor Powdery Mildew",
    status: "Ongoing Research",
    journal: "Research in Progress",
    impactFactor: "-",
  },
]

const conferences = [
  {
    title: "AI-Powered Agricultural Crop Recommendation System",
    conference: "INCET 2025, Belagavi",
    role: "Led UI/UX design, data pipeline construction, and mobile deployment",
  },
  {
    title: "Analysis of Lung Cancer Detection and Classification",
    conference: "Third International Conf. on ARET 2025, Kolkata",
    role: "CNN model achieving 94% accuracy",
  },
  {
    title: "Modern Loan Approval Prediction System",
    conference: "Third International Conf. on ARET 2025, Kolkata",
    role: "Bias-reduction algorithm using historical data",
  },
]

export function PatentsSection() {
  return (
    <section id="patents" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Patents & Publications</h2>
          <p className="text-lg text-muted-foreground">Research contributions in AI and agricultural technology</p>
        </motion.div>

        {/* Patents */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Patents
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg leading-tight">{patent.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline" className="text-xs">
                        {patent.status}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        India {patent.applicationNo}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{patent.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Publications
          </h3>
          <div className="grid gap-4">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-base leading-tight">{pub.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-2 items-center pt-2">
                      <Badge variant={pub.status === "Published" ? "default" : "outline"} className="text-xs">
                        {pub.status}
                      </Badge>
                      <span className="text-xs">•</span>
                      <span className="text-xs">{pub.journal}</span>
                      {pub.impactFactor !== "-" && (
                        <>
                          <span className="text-xs">•</span>
                          <span className="text-xs font-semibold">IF {pub.impactFactor}</span>
                        </>
                      )}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Conference Presentations</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {conferences.map((conf, index) => (
              <motion.div
                key={conf.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-base leading-tight">{conf.title}</CardTitle>
                    <CardDescription className="pt-2">
                      <Badge variant="secondary" className="text-xs mb-2">
                        {conf.conference}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-2">{conf.role}</p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
