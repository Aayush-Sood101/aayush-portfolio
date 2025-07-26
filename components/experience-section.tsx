"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const achievements = [
    "Architected a full-stack Newspaper Management System using Next.js, Node.js, Express, and MongoDB, enabling real-time delivery tracking and dynamic pricing adjustments.",
    "Implemented secure role-based authentication with dedicated admin and user dashboards, reducing unauthorized access risks through input validation and session management.",
    "Developed automated monthly Excel (.xlsx) report generation system, eliminating manual compilation processes and streamlining data export workflows.",
    "Designed responsive user interfaces with React components and implemented comprehensive form validation, enhancing user experience across subscription management and delivery tracking modules.",
    "Built and deployed a MARC Records Processor using Python and Flask on Render, automating bibliographic data parsing and .mrk file generation with a user-friendly web interface.",
  ]

  const technologies = ["Next.js", "Node.js", "Express", "MongoDB", "React", "Python", "Flask", "Excel.js"]

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-950/50 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Professional Journey & Impact</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-5xl mx-auto shadow-2xl hover:shadow-3xl card-hover transition-all duration-500 border-0 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-800 dark:via-gray-700 dark:to-emerald-900/30 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-full animate-float shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Software Developer Intern
                      </CardTitle>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href="https://drive.google.com/file/d/1aMmgZ8FO9OSceKlfwqXbZle5_IIs0i0Q/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      Appilogics IT Solutions Pvt. Ltd.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>May 2025 - June 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Palampur, HP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700">
                  Internship Completed
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Key Achievements:</h4>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-200"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
