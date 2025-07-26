"use client"

import { motion } from "framer-motion"
import { Code, Trophy, Target, Calendar, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function CodingPlatformsSection() {
  const achievements = [
    {
      icon: Code,
      title: "LeetCode Mastery",
      description: "Solved 450+ problems on LeetCode, showcasing strong skills in algorithms and data structures",
      metric: "450+",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description:
        "Solved 100+ problems on CodeChef and Codeforces and participated in 25+ contests to sharpen cp skills",
      metric: "100+",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Global Ranking",
      description:
        "Secured a global rank of 1004 in CodeChef Starters 174, reflecting effective problem-solving under pressure",
      metric: "#1004",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Calendar,
      title: "Consistency Badge",
      description:
        "Awarded the 100 Days Consistency badge on LeetCode (2024) with 250+ days of platform activity, highlighting consistent practice",
      metric: "250+",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "C++ Proficiency",
      description: "Proficient in C++, honed through extensive problem-solving across multiple coding platforms",
      metric: "Expert",
      color: "from-indigo-500 to-blue-600",
    },
  ]

  const platforms = [
    { name: "LeetCode", problems: 450, total: 500, color: "bg-orange-500" },
    { name: "CodeChef", problems: 100, total: 500, color: "bg-blue-500" },
    { name: "Codeforces", problems: 82, total: 500, color: "bg-purple-500" },
  ]

  return (
    <section
      id="coding-platforms"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
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
            Coding Platforms
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Competitive Programming & Problem Solving Excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 bg-gradient-to-br ${achievement.color} rounded-full`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1 dark:bg-gray-700 dark:text-gray-200">
                        {achievement.metric}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
                Platform Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {platforms.map((platform, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{platform.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {platform.problems}/{platform.total} problems
                      </span>
                    </div>
                    <Progress value={(platform.problems / platform.total) * 100} className="h-3" />
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">450+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Contests</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">#1004</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Global Rank</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">250+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Days</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
