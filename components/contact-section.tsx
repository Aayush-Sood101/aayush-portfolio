"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Linkedin, Github, MapPin, Send } from "lucide-react"
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
    },
    {
      icon: Mail,
      label: "Email",
      value: "aayushsoodhp@gmail.com",
      href: "mailto:aayushsoodhp@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Palampur, Himachal Pradesh 176062",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aayush-sood-493257267/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Aayush-Sood101",
      color: "from-gray-700 to-gray-800",
    },
  ]

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
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
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-200"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{info.label}</p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect with me:</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-gradient-to-br ${social.color} rounded-full text-white hover:shadow-lg transition-all duration-200`}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">Send a Message</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <Input
                      placeholder="Project Collaboration"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
