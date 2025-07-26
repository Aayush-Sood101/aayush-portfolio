"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Linkedin, Github, Code, Trophy, Award, Download, Sparkles, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const socialLinks = [
    { icon: Phone, href: "tel:+919882715895", label: "+91-9882715895", color: "from-green-500 to-emerald-600" },
    {
      icon: Mail,
      href: "mailto:aayushsoodhp@gmail.com",
      label: "aayushsoodhp@gmail.com",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aayush-sood-493257267/",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-700",
    },
    { icon: Github, href: "https://github.com/Aayush-Sood101", label: "GitHub", color: "from-gray-700 to-gray-900" },
    {
      icon: Code,
      href: "https://codolio.com/profile/aayushsood",
      label: "Codolio",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Trophy,
      href: "https://leetcode.com/u/Aayush__Sood/",
      label: "LeetCode",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Award,
      href: "https://codeforces.com/profile/kingopro",
      label: "Codeforces",
      color: "from-blue-600 to-purple-600",
    },
  ]

  const stats = [
    {
      value: "450+",
      label: "LeetCode Problems",
      color: "text-orange-600",
      bgColor: "from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30",
    },
    {
      value: "100+",
      label: "CP Problems",
      color: "text-purple-600",
      bgColor: "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
    },
    {
      value: "25+",
      label: "Contests",
      color: "text-indigo-600",
      bgColor: "from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30",
    },
    {
      value: "9.72",
      label: "CGPA",
      color: "text-green-600",
      bgColor: "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Badge className="text-sm px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to my digital portfolio
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Aayush Sood
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge
                variant="secondary"
                className="text-lg px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700 shadow-lg"
              >
                Software Developer
              </Badge>
              <Badge
                variant="secondary"
                className="text-lg px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700 shadow-lg"
              >
                CS Student
              </Badge>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 font-medium">
              Bachelor of Technology in Computer Science and Engineering DS
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
              Vellore Institute of Technology, Vellore | CGPA: 9.72/10
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
              <span className="text-2xl">📍</span>
              Palampur, Himachal Pradesh 176062
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className={`p-2 bg-gradient-to-r ${link.color} rounded-xl`}>
                  <link.icon size={20} className="text-white" />
                </div>
                <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  View My Work
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              >
                <a
                  href="https://drive.google.com/file/d/1UDCegFx9l8WXfudwzWel1ls_8v5tBiSw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
