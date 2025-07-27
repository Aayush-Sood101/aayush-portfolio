"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Medal, BadgeIcon as Certificate, ExternalLink, Award, Crown, Zap } from 'lucide-react'
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
      priority: "high"
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
      priority: "high"
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
      priority: "high"
    },
    {
      icon: Medal,
      title: "Coding Odyssey - 1st Rank",
      organization: "VIT University",
      description: "Secured 1st Rank among participants in Coding Odyssey – Debugging Contest organized in September 2023",
      date: "September 2023",
      link: "https://drive.google.com/file/d/17racDkhAoxLDdOTrKAzHupuSGdFj5wpo/view?usp=drive_link",
      color: "from-purple-500 to-pink-600",
      category: "Programming Contest",
      priority: "featured"
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
      priority: "featured"
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
      priority: "normal"
    },
  ]

  const categories = ["All", "Academic Excellence", "Competition", "National Recognition", "Professional Development"]

  return (
    <section id="achievements" className="py-20 px-4 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
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
            className="inline-block p-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mb-6 shadow-2xl"
          >
            <Trophy className="h-12 w-12 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Recognition & Awards for Excellence</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                index === 0
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 dark:text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 overflow-hidden ${
                achievement.priority === 'featured' ? 'ring-2 ring-yellow-400/50 dark:ring-yellow-500/50' : ''
              }`}>
                {achievement.priority === 'featured' && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      className={`p-3 bg-gradient-to-br ${achievement.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}
                      whileHover={{ rotate: 5 }}
                    >
                      <achievement.icon className="h-6 w-6 text-white" />
                      {achievement.priority === 'featured' && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Crown className="h-2 w-2 text-yellow-800" />
                        </div>
                      )}
                    </motion.div>
                    <Button variant="ghost" size="sm" asChild className="hover:bg-blue-100 dark:hover:bg-blue-900/20">
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{achievement.organization}</p>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`text-xs dark:border-gray-600 ${
                          achievement.priority === 'featured' 
                            ? 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300' 
                            : ''
                        }`}
                      >
                        {achievement.category}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{achievement.date}</span>
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

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mb-4"
                >
                  <Award className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Achievement Summary</h3>
                <p className="text-gray-600 dark:text-gray-400">A testament to consistent excellence and dedication</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Awards", value: "6", icon: Trophy, color: "text-yellow-600" },
                  { label: "Academic Merits", value: "2", icon: Star, color: "text-blue-600" },
                  { label: "National Recognition", value: "1", icon: Crown, color: "text-purple-600" },
                  { label: "Contest Rank", value: "1st", icon: Medal, color: "text-green-600" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Excellence Streak</span>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                  Consistent academic and competitive achievements spanning multiple years, 
                  demonstrating sustained excellence and continuous growth in various domains.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
