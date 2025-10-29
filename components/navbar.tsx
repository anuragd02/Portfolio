"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Summary", href: "#summary" },
  { name: "Projects", href: "#projects" },
  { name: "Mini Projects", href: "#mini-projects" },
  { name: "Experience", href: "#experience" },
  { name: "Patents", href: "#patents" },
  { name: "Skills", href: "#skills" },
  { name: "Awards", href: "#awards" },
  { name: "Interests", href: "#interests" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#summary"
            className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            AD
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-secondary/30 backdrop-blur-sm rounded-full px-2 py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <Button
            size="lg"
            className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
          >
            <Download className="h-4 w-4" />
            Download CV
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu")
              mobileMenu?.classList.toggle("hidden")
            }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        <div id="mobile-menu" className="hidden lg:hidden pb-6">
          <div className="flex flex-col gap-2 bg-secondary/50 backdrop-blur-sm rounded-2xl p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href)
                  document.getElementById("mobile-menu")?.classList.add("hidden")
                }}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Button size="lg" className="mt-2 w-full">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
