"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Star, Zap } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Aayush-Sood101", 
      label: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-700"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/aayush-sood-493257267/", 
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600"
    },
    { 
      icon: Mail, 
      href: "mailto:aayushsoodhp@gmail.com", 
      label: "Email",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-600"
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-6h-6v6h6zm6-6h6v-6h-6v6zm-6 0h6v-6h-6v6zm-6 6h6v-6h-6v6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Enhanced Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-2xl">AS</span>
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Aayush Sood
                </h3>
                <p className="text-gray-400 text-lg flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Software Developer & CS Student
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Passionate about creating innovative solutions through technology. Always learning, always building,
              always growing. Dedicated to contributing to the tech community through continuous excellence.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>9.72 CGPA</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <span>450+ Problems Solved</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="block text-gray-400 hover:text-blue-400 transition-all duration-300 text-lg hover:bg-white/5 px-3 py-2 rounded-lg"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-gray-300 text-lg">
                  <span className="text-blue-400 font-semibold">Email:</span><br />
                  aayushsoodhp@gmail.com
                </p>
                <p className="text-gray-300 text-lg">
                  <span className="text-blue-400 font-semibold">Phone:</span><br />
                  +91-9882715895
                </p>
                <p className="text-gray-300 text-lg">
                  <span className="text-blue-400 font-semibold">Location:</span><br />
                  Palampur, HP, India
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-white/10 backdrop-blur-sm rounded-2xl ${social.color} ${social.bgColor} transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-gray-400 text-lg">
              <span>© {currentYear} Aayush Sood. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-5 w-5 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Code className="h-5 w-5 text-blue-400" />
              </motion.div>
              <span>lots of ☕</span>
            </div>
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-all duration-300 text-lg bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/10"
            >
              <ArrowUp className="h-5 w-5" />
              Back to top
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
