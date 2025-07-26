"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Medal, BadgeIcon as Certificate, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Certificate,
      title: "Certificate of Merit - 2nd Year",
      organization: "VIT University",
      description: "Awarded Certificate of Merit for academic excellence in 2nd year at VIT University",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1arwi3jgIZhI9LT1XgygnKSbV_e0YrB3d/view?usp=drive_link",
      color: "from-yellow-500 to-orange-600",
      category: "Academic Excellence",
    },
    {
      icon: Trophy,
      title: "UBS Campus Hackathon Selection",
      organization: "UBS & VIT University",
      description: "Selected among top 12 out of 2000+ candidates to represent VIT at the UBS Campus Hackathon",
      date: "2025",
      link: "https://drive.google.com/file/d/1gL_PxCNIhvaYZcq0V1nujzFQKJJnderG/view?usp=sharing",
      color: "from-blue-500 to-purple-600",
      category: "Competition",
    },
    {
      icon: Certificate,
      title: "Certificate of Merit - 1st Year",
      organization: "VIT University",
      description: "Received Certificate of Merit for outstanding academic performance in 1st year at VIT University",
      date: "May 2024",
      link: "https://drive.google.com/file/d/1HcAomH750oyYY4WUa6wupZzn6EiXrphD/view?usp=drive_link",
      color: "from-green-500 to-teal-600",
      category: "Academic Excellence",
    },
    {
      icon: Medal,
      title: "Coding Odyssey - 1st Rank",
      organization: "VIT University",
      description:
        "Secured 1st Rank among participants in Coding Odyssey – Debugging Contest organized in September 2023",
      date: "September 2023",
      link: "https://drive.google.com/file/d/17racDkhAoxLDdOTrKAzHupuSGdFj5wpo/view?usp=drive_link",
      color: "from-purple-500 to-pink-600",
      category: "Programming Contest",
    },
    {
      icon: Star,
      title: "NTSE Stage 1 Scholar",
      organization: "National Talent Search Examination",
      description: "Recognized as a National Talent Search Examination (NTSE) Stage 1 Scholar for academic distinction",
      date: "2021",
      link: "https://drive.google.com/file/d/1eEocsdRKAZDe49IL5Z8gDwQMzA5glc0F/view?usp=drive_link",
      color: "from-indigo-500 to-blue-600",
      category: "National Recognition",
    },
    {
      icon: Certificate,
      title: "DSA Course Certification",
      organization: "PW (Physics Wallah)",
      description: "Successfully completed and earned certification for Data Structures and Algorithms Course by PW",
      date: "2024",
      link: "https://drive.google.com/file/d/1njy2YbYd5wM7Ga8T7iq5eiV43mEBVjNj/view?usp=drive_link",
      color: "from-red-500 to-pink-600",
      category: "Professional Development",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Recognition & Awards for Excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`p-3 bg-gradient-to-br ${achievement.color} rounded-full group-hover:scale-110 transition-transform duration-200`}
                    >
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {achievement.title}
                  </CardTitle>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{achievement.organization}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs dark:border-gray-600">
                        {achievement.category}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Achievement Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">6</div>
                  <div className="text-gray-600 dark:text-gray-400">Total Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-400">Academic Merits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-400">National Recognition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1st</div>
                  <div className="text-gray-600 dark:text-gray-400">Contest Rank</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
