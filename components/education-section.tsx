"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950/50 transition-all duration-500"
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
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Academic Excellence & Continuous Learning</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto shadow-2xl hover:shadow-3xl card-hover transition-all duration-500 border-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-gray-700 dark:to-blue-900/30 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-float shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Vellore Institute of Technology, Vellore
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                      Bachelor of Technology in Computer Science and Engineering DS
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm dark:bg-gray-700 dark:text-gray-200">
                  Year of Completion: 2027
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Started: August 2023</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Vellore, Tamil Nadu</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-center">
                    <div className="flex items-center gap-2 justify-center mb-2">
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                      <span className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                        9.72
                      </span>
                      <span className="text-xl text-gray-600 dark:text-gray-400">/10</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Current CGPA</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Specialization Focus:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Software Engineering",
                    "Database Systems",
                    "Machine Learning",
                    "Web Development",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-white dark:bg-gray-800 dark:border-gray-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
