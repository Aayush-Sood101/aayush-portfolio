"use client"

import { motion } from "framer-motion"
import { Code, Trophy, Target, Calendar, Zap, TrendingUp, Award, Star } from 'lucide-react'
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
      progress: 90,
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Solved 100+ problems on CodeChef and Codeforces and participated in 25+ contests to sharpen cp skills",
      metric: "100+",
      color: "from-blue-500 to-purple-600",
      progress: 75,
    },
    {
      icon: Target,
      title: "Global Ranking",
      description: "Secured a global rank of 1004 in CodeChef Starters 174, reflecting effective problem-solving under pressure",
      metric: "#1004",
      color: "from-green-500 to-teal-600",
      progress: 85,
    },
    {
      icon: Calendar,
      title: "Consistency Badge",
      description: "Awarded the 100 Days Consistency badge on LeetCode (2024) with 250+ days of platform activity, highlighting consistent practice",
      metric: "250+",
      color: "from-purple-500 to-pink-600",
      progress: 95,
    },
    {
      icon: Zap,
      title: "C++ Proficiency",
      description: "Proficient in C++, honed through extensive problem-solving across multiple coding platforms",
      metric: "Expert",
      color: "from-indigo-500 to-blue-600",
      progress: 88,
    },
  ]

  const platforms = [
    { name: "LeetCode", problems: 450, total: 500, color: "bg-orange-500", icon: "🟠" },
    { name: "CodeChef", problems: 100, total: 500, color: "bg-blue-500", icon: "🔵" },
    { name: "Codeforces", problems: 82, total: 500, color: "bg-purple-500", icon: "🟣" },
  ]

  const stats = [
    { label: "LeetCode", value: "450+", icon: Code, color: "text-orange-600" },
    { label: "Contests", value: "25+", icon: Trophy, color: "text-blue-600" },
    { label: "Global Rank", value: "#1004", icon: Target, color: "text-green-600" },
    { label: "Active Days", value: "250+", icon: Calendar, color: "text-purple-600" },
  ]

  return (
    <section
      id="coding-platforms"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 25,
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
            className="inline-block p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6 shadow-2xl"
          >
            <Code className="h-12 w-12 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Coding Platforms
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Competitive Programming & Problem Solving Excellence
          </p>
        </motion.div>

        {/* Achievement Cards */}
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
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden group-hover:scale-105">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <motion.div 
                      className={`p-3 bg-gradient-to-br ${achievement.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      whileHover={{ rotate: 5 }}
                    >
                      <achievement.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <Badge variant="secondary" className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 font-bold">
                      {achievement.metric}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Progress</span>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6 flex items-center justify-center gap-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                Platform Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Progress Bars */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Problem Solving Progress
                  </h3>
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{platform.icon}</span>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{platform.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {platform.problems}/{platform.total} problems
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={(platform.problems / platform.total) * 100} className="h-3" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Achievement Highlights
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</span>
                        </div>
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50"
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Coding Journey Summary</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-orange-600">632+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Problems</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Contests</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-green-600">#1004</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Best Rank</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-purple-600">250+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Days</div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
