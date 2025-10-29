import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { MiniProjectsSection } from "@/components/mini-projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { PatentsSection } from "@/components/patents-section"
import { SkillsSection } from "@/components/skills-section"
import { AwardsSection } from "@/components/awards-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <MiniProjectsSection />
      <ExperienceSection />
      <PatentsSection />
      <SkillsSection />
      <AwardsSection />
      <InterestsSection />
      <ContactSection />
    </main>
  )
}
