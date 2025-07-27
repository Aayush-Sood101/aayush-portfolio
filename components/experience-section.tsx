"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle, Code, Database, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const achievements = [
    {
      icon: Globe,
      title: "Full-Stack Architecture",
      description: "Architected a full-stack Newspaper Management System using Next.js, Node.js, Express, and MongoDB, enabling real-time delivery tracking and dynamic pricing adjustments.",
    },
    {
      icon: CheckCircle,
      title: "Security Implementation",
      description: "Implemented secure role-based authentication with dedicated admin and user dashboards, reducing unauthorized access risks through input validation and session management.",
    },
    {
      icon: Database,
      title: "Automation System",
      description: "Developed automated monthly Excel (.xlsx) report generation system, eliminating manual compilation processes and streamlining data export workflows.",
    },
    {
      icon: Code,
      title: "UI/UX Development",
      description: "Designed responsive user interfaces with React components and implemented comprehensive form validation, enhancing user experience across subscription management and delivery tracking modules.",
    },
    {
      icon: Globe,
      title: "MARC Records Processor",
      description: "Built and deployed a MARC Records Processor using Python and Flask on Render, automating bibliographic data parsing and .mrk file generation with a user-friendly web interface.",
    },
  ]

  const technologies = [
    { name: "Next.js", color: "from-black to-gray-700" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "Express", color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", color: "from-green-600 to-green-800" },
    { name: "React", color: "from-blue-500 to-blue-700" },
    { name: "Python", color: "from-yellow-500 to-yellow-700" },
    { name: "Flask", color: "from-red-500 to-red-700" },
    { name: "Excel.js", color: "from-emerald-500 to-emerald-700" }
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-950/50 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6 shadow-2xl"
          >
            <Briefcase className="h-12 w-12 text-white" />
          </motion.div>
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
          <Card className="max-w-5xl mx-auto shadow-2xl hover:shadow-3xl card-hover transition-all duration-500 border-0 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-800 dark:via-gray-700 dark:to-emerald-900/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-full animate-float shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Briefcase className="h-8 w-8 text-white" />
                  </motion.div>
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
                          className="hover:bg-blue-100 dark:hover:bg-blue-900/20"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      Appilogics IT Solutions Pvt. Ltd.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        <span>May 2025 - June 2025</span>
                      </div>
                      <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                        <MapPin className="h-4 w-4" />
                        <span>Palampur, HP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 px-4 py-2">
                  Internship Completed
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-6 text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Key Achievements:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Card className="h-full p-4 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                              <achievement.icon className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">
                                {achievement.title}
                              </h5>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-6 text-lg flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          className={`bg-gradient-to-r ${tech.color} text-white border-0 px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          {tech.name}
                        </Badge>
                      </motion.div>
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
