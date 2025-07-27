"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CodingPlatformsSection } from "@/components/coding-platforms-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Portfolio() {
  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001
  });
  
  // Page load animations
  useEffect(() => {
    // Add a class to trigger page entrance animation
    document.body.classList.add('page-loaded');
    
    // Preload important assets
    const preloadLinks = [
      '/placeholder.jpg',
      '/placeholder.svg',
      '/placeholder-user.jpg',
    ];
    
    preloadLinks.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    return () => {
      document.body.classList.remove('page-loaded');
    }
  }, []);

  return (
    <div className="min-h-screen font-poppins relative overflow-x-hidden">
      {/* Background gradient with subtle animation */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-all duration-500 z-[-2]">
        <div className="absolute inset-0 opacity-20 z-[-1]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnptLTYgMGg2di02aC02djZ6TTI0IDI0aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnptLTYgMGg2di02aC02djZ6TTI0IDI0aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
      </div>
      
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[100]" 
        style={{ scaleX, transformOrigin: "0%" }}
      />

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
      
      {/* Quick navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['home', 'education', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-300"
              aria-label={`Navigate to ${section} section`}
            />
          ))}
        </div>
      </div>
      
      {/* Back to top button */}
      <a 
        href="#home"
        className="fixed bottom-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  )
}
