"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Linkedin, Github, MapPin, Send, MessageCircle, Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9882715895",
      href: "tel:+919882715895",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "aayushsoodhp@gmail.com",
      href: "mailto:aayushsoodhp@gmail.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Palampur, Himachal Pradesh 176062",
      href: "#",
      color: "from-purple-500 to-pink-600"
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aayush-sood-493257267/",
      color: "from-blue-600 to-blue-700",
      followers: "500+"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Aayush-Sood101",
      color: "from-gray-700 to-gray-800",
      followers: "100+"
    },
  ]

  const quickStats = [
    { icon: MessageCircle, label: "Response Time", value: "< 24hrs" },
    { icon: Calendar, label: "Availability", value: "Mon-Fri" },
    { icon: Clock, label: "Timezone", value: "IST (UTC+5:30)" },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
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
            className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl"
          >
            <Send className="h-12 w-12 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's connect and discuss opportunities</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 shadow-lg"
            >
              <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{stat.label}</div>
              <div className="text-blue-600 dark:text-blue-400 font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  Contact Information
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`p-3 bg-gradient-to-br ${info.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          whileHover={{ rotate: 5 }}
                        >
                          <info.icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">{info.label}</p>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}

                <div className="pt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <Github className="h-5 w-5 text-gray-600" />
                    Connect with me:
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Card className="p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-600 border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <motion.a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2"
                            whileHover={{ y: -2 }}
                          >
                            <div className={`p-3 bg-gradient-to-br ${social.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <social.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{social.label}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{social.followers}</div>
                            </div>
                          </motion.a>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
                  <Send className="h-6 w-6 text-purple-600" />
                  Send a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-2 focus:border-blue-500 dark:focus:border-blue-400 transition-colors" 
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-2 focus:border-blue-500 dark:focus:border-blue-400 transition-colors" 
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-2 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <Input
                      placeholder="Project Collaboration"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-2 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 border-2 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
