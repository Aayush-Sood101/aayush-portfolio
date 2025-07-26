"use client"

import { motion } from "framer-motion"
import { ExternalLink, Trophy, Wrench, Truck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "LastMile",
      description:
        "Neighborhood Bulk Order Coordinator solving costly last-mile deliveries through community coordination",
      technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Chart.js"],
      category: "Full-Stack Web Application",
      date: "2024",
      link: "https://last-mile-theta.vercel.app/",
      icon: Truck,
      achievements: [
        "Developed comprehensive user authentication system with secure login/signup functionality using JWT tokens",
        "Built intuitive user dashboard with advanced product browsing, filtering, and shopping cart functionality",
        "Implemented community creation and management system allowing neighbors to coordinate bulk orders",
        "Created join request and membership management features for seamless community participation",
        "Designed order placement and real-time tracking system for enhanced user experience",
        "Integrated detailed carbon footprint visualization using Chart.js to promote environmental awareness",
        "Developed admin dashboard for Walmart with comprehensive order and inventory management",
        "Built community admin dashboard for local coordinators to manage group orders efficiently",
      ],
      features: [
        "User Authentication & Authorization",
        "Product Browsing & Filtering",
        "Shopping Cart & Checkout",
        "Community Management",
        "Order Tracking System",
        "Carbon Footprint Analytics",
        "Admin Dashboard",
        "Real-time Notifications",
      ],
      techStack: {
        frontend: ["React", "Next.js", "Tailwind CSS", "Chart.js", "Framer Motion"],
        backend: ["Node.js", "Express.js", "JWT Authentication", "bcrypt"],
        database: ["MongoDB", "Mongoose ODM"],
        deployment: ["Vercel", "MongoDB Atlas"],
        tools: ["Git", "VS Code", "Postman", "Figma"],
      },
    },
    {
      title: "Legal GPT",
      description: "AI-powered legal document generator with risk detection and compliance intelligence",
      technologies: ["Next.js", "Streamlit", "Flask", "Python", "Render"],
      category: "Tredence Hackathon",
      date: "April 2025",
      link: "https://legalgpt-seven.vercel.app/",
      icon: Trophy,
      achievements: [
        "Built an AI-powered legal document generator to create contracts with minimal user input",
        "Implemented risk detection system to identify potential legal vulnerabilities in uploaded documents",
        "Developed compliance intelligence feature to ensure contracts align with current legal regulations",
        "Deployed dual interfaces using Streamlit for rapid prototyping and Next.js for production-ready user experience",
      ],
      features: [
        "AI Document Generation",
        "Risk Assessment",
        "Compliance Checking",
        "Document Analysis",
        "Template Management",
      ],
      techStack: {
        frontend: ["Next.js", "React", "Tailwind CSS", "Streamlit"],
        backend: ["Flask", "Python", "OpenAI API"],
        deployment: ["Vercel", "Render"],
        tools: ["Git", "Python Libraries", "AI/ML Models"],
      },
    },
    {
      title: "Samadhan Setu",
      description: "Full-stack maintenance requisition platform for educational institutions",
      technologies: ["React", "Express.js", "MongoDB", "JWT", "PDFKit", "ExcelJS"],
      category: "Mini Project",
      date: "May 2025",
      link: "https://github.com/Aayush-Sood101/Samadhan-Setu",
      icon: Wrench,
      achievements: [
        "Developed a full-stack maintenance requisition platform enabling students to submit and track facility requests with image upload functionality and categorized request types",
        "Implemented JWT-based authentication with role-based access control and real-time status notifications for enhanced user communication",
        "Built an admin dashboard with request management capabilities and automated PDF/Excel report generation using PDFKit and ExcelJS",
        "Designed responsive UI with Framer Motion animations and Tailwind CSS ensuring smooth user experience across all devices",
      ],
      features: ["Request Management", "Image Upload", "Status Tracking", "Admin Dashboard", "Report Generation"],
      techStack: {
        frontend: ["React", "Tailwind CSS", "Framer Motion"],
        backend: ["Express.js", "Node.js", "JWT", "Multer"],
        database: ["MongoDB", "Mongoose"],
        tools: ["PDFKit", "ExcelJS", "Git"],
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Innovative Solutions & Technical Excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full">
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            {project.title}
                          </CardTitle>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Badge variant="outline" className="w-fit dark:border-gray-600">
                            {project.category}
                          </Badge>
                          <span>•</span>
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Key Features:</h4>
                      <div className="space-y-3">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-200"
                          >
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {project.features && (
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Core Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.techStack && (
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">
                          Technology Stack:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(project.techStack).map(([category, techs]) => (
                            <div key={category} className="space-y-2">
                              <h5 className="font-medium text-gray-700 dark:text-gray-300 capitalize">{category}:</h5>
                              <div className="flex flex-wrap gap-1">
                                {techs.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className="text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
