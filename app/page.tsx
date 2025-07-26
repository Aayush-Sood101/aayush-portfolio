"use client"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CodingPlatformsSection } from "@/components/coding-platforms-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-all duration-500">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CodingPlatformsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
