"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Trophy, Wrench, Truck, Github, ArrowRight, ArrowLeft, Code, Eye, X, Maximize, ZoomIn } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageDialogOpen, setImageDialogOpen] = useState(false)
  
  const projects = [
    {
      title: "LastMile",
      description:
        "Neighborhood Bulk Order Coordinator solving costly last-mile deliveries through community coordination",
      technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Chart.js"],
      category: "Full-Stack",
      date: "2024",
      link: "https://last-mile-theta.vercel.app/",
      github: "https://github.com/Aayush-Sood101/LastMile",
      icon: Truck,
      color: "from-emerald-500 to-teal-600",
      bgPattern: "bg-[radial-gradient(#0f766e_1px,transparent_1px)] bg-[size:20px_20px]",
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
      screenshots: [
        "/projects/lastmile/walmart-dashboard.png", 
        "/projects/lastmile/user-dashboard.png", 
        "/projects/lastmile/cart-page.png"
      ],
      impact: {
        "Carbon Reduction": 85,
        "User Engagement": 78,
        "Community Growth": 92,
      }
    },
    {
      title: "Legal GPT",
      description: "AI-powered legal document generator with risk detection and compliance intelligence",
      technologies: ["Next.js", "Streamlit", "Flask", "Python", "Render", "OpenAI"],
      category: "AI/ML",
      date: "April 2025",
      link: "https://legalgpt-seven.vercel.app/",
      github: "https://github.com/Aayush-Sood101/LegalGPT",
      icon: Trophy,
      color: "from-blue-500 to-indigo-600",
      bgPattern: "bg-[linear-gradient(45deg,transparent_25%,#4f46e520_25%,#4f46e520_50%,transparent_50%,transparent_75%,#4f46e520_75%)] bg-[size:20px_20px]",
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
      screenshots: [
        "/projects/legalgpt/contractgenerator.jpg", 
        "/projects/legalgpt/riskdetection.jpg", 
        "/projects/legalgpt/compliancechecker.jpg"
      ],
      impact: {
        "Legal Accuracy": 95,
        "Time Saved": 88,
        "Risk Detection": 92,
      }
    },
    {
      title: "Samadhan Setu",
      description: "Full-stack maintenance requisition platform for educational institutions",
      technologies: ["React", "Express.js", "MongoDB", "JWT", "PDFKit", "ExcelJS"],
      category: "Web App",
      date: "May 2025",
      link: "https://github.com/Aayush-Sood101/Samadhan-Setu",
      github: "https://github.com/Aayush-Sood101/Samadhan-Setu",
      icon: Wrench,
      color: "from-purple-500 to-pink-600",
      bgPattern: "bg-[radial-gradient(#d946ef40_1.5px,transparent_1.5px)] bg-[size:15px_15px]",
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
      screenshots: [
        "/projects/samadhan-setu/student-dashboard.png", 
        "/projects/samadhan-setu/pdf-report.png", 
        "/projects/samadhan-setu/admin-dashboard.png"
      ],
      impact: {
        "Maintenance Efficiency": 78,
        "Response Time": 85,
        "User Satisfaction": 92,
      }
    },
  ]

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(activeTab.toLowerCase()))

  const navigateProjects = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
      )
    } else {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      )
    }
  }

  const toggleProjectExpansion = (index: number) => {
    if (isExpanded === index) {
      setIsExpanded(null);
    } else {
      setIsExpanded(index);
    }
  }

  return (
    <section id="projects" className="py-20 px-4 dark:bg-gray-900/95 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Background Elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="px-4 py-2 mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700">
            <Code className="w-4 h-4 mr-2" />
            Development Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative solutions that demonstrate my expertise in building robust and user-friendly applications
          </p>
        </motion.div>

        <div className="mb-10">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 sm:grid-cols-4 max-w-md mx-auto bg-blue-50 dark:bg-gray-800/50 p-1 rounded-2xl">
              <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-xl">
                All
              </TabsTrigger>
              <TabsTrigger value="full-stack" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-xl">
                Full-Stack
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-xl">
                AI/ML
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-xl">
                Web Apps
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 gap-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex gap-4">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentProjectIndex 
                      ? "bg-blue-600 scale-125" 
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500"
                  }`}
                  aria-label={`View project ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              index === currentProjectIndex && (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative"
                >
                  <Card className={`overflow-hidden border-0 shadow-2xl glass card-hover ${project.bgPattern}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 backdrop-blur-sm"></div>
                    
                    <CardHeader className="relative z-10 pb-2">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="flex items-start gap-5">
                          <motion.div 
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className={`p-4 bg-gradient-to-br ${project.color} rounded-2xl shadow-lg`}
                          >
                            <project.icon className="h-8 w-8 text-white" />
                          </motion.div>
                          
                          <div>
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                                {project.title}
                              </CardTitle>
                              
                              <Badge variant="outline" className="bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                                {project.category}
                              </Badge>
                              
                              <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                {project.date}
                              </Badge>
                            </div>
                            
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-3 mb-2">
                              <Button asChild size="sm" variant="default" 
                                className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white shadow-md hover:shadow-xl transition-all`}>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                  <Eye className="h-4 w-4" />
                                  Live Demo
                                </a>
                              </Button>
                              
                              <Button asChild size="sm" variant="outline" 
                                className="border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                  <Github className="h-4 w-4" />
                                  Source Code
                                </a>
                              </Button>
                              
                              <Button size="sm" variant="ghost"
                                onClick={() => toggleProjectExpansion(index)}
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                              >
                                {isExpanded === index ? "Show Less" : "Show More Details"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 pt-4">
                      {/* Technology Badges */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Screenshots */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                          <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                            <span className="text-green-600 dark:text-green-400 text-xs">👁️</span>
                          </span>
                          Project Showcase
                        </h4>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {project.screenshots.map((screenshot, idx) => (
                              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                                <div 
                                  className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 card-3d cursor-pointer"
                                  onClick={() => {
                                    setSelectedImage(screenshot);
                                    setImageDialogOpen(true);
                                  }}
                                >
                                  <img
                                    src={screenshot}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-52 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                                    <div className="p-4 text-white">
                                      <p className="text-sm font-medium">{project.title} - View {idx + 1}</p>
                                    </div>
                                    <div className="p-4">
                                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                                        <ZoomIn className="h-4 w-4 text-white" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <div className="flex items-center justify-center gap-2 mt-4">
                            <CarouselPrevious className="static translate-y-0 h-8 w-8" />
                            <div className="flex gap-1">
                              {project.screenshots.map((_, dotIdx) => (
                                <span 
                                  key={dotIdx}
                                  className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                                    dotIdx === 0 ? `bg-gradient-to-r ${project.color}` : 'bg-gray-300 dark:bg-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <CarouselNext className="static translate-y-0 h-8 w-8" />
                          </div>
                        </Carousel>
                      </div>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {project.impact && Object.entries(project.impact).map(([metric, value]) => (
                          <div key={metric} className="p-4 bg-white/70 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-700">
                            <h5 className="text-sm text-gray-600 dark:text-gray-400 mb-2">{metric}</h5>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}%</span>
                            </div>
                            <Progress value={value} className="h-2" />
                          </div>
                        ))}
                      </div>

                      {/* Expandable Details Section */}
                      <AnimatePresence>
                        {isExpanded === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-white/50 dark:bg-gray-800/40 rounded-xl p-6 border border-gray-100 dark:border-gray-700 mb-6">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Key Achievements:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.achievements.map((achievement, achievementIndex) => (
                                  <motion.div
                                    key={achievementIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: achievementIndex * 0.05 }}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/80 dark:hover:bg-gray-700/50 transition-all duration-200"
                                  >
                                    <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Core Features */}
                              {project.features && (
                                <div className="bg-white/50 dark:bg-gray-800/40 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                                    <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                                      <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
                                    </span>
                                    Core Features
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.features.map((feature) => (
                                      <Badge
                                        key={feature}
                                        variant="secondary"
                                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800"
                                      >
                                        {feature}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Technology Stack */}
                              {project.techStack && (
                                <div className="bg-white/50 dark:bg-gray-800/40 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                                    <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-2">
                                      <span className="text-purple-600 dark:text-purple-400 text-xs">⚙️</span>
                                    </span>
                                    Technology Stack
                                  </h4>
                                  <div className="space-y-4">
                                    {Object.entries(project.techStack).map(([category, techs]) => (
                                      <div key={category} className="space-y-2">
                                        <h5 className="font-medium text-gray-700 dark:text-gray-300 capitalize text-sm">{category}:</h5>
                                        <div className="flex flex-wrap gap-1.5">
                                          {techs.map((tech: string) => (
                                            <Badge
                                              key={tech}
                                              variant="outline"
                                              className="text-xs bg-white/70 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600/50"
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
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                    
                    <CardFooter className="relative z-10">
                      <div className="w-full flex justify-between items-center">
                        <Button 
                          size="sm"
                          variant="ghost" 
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                          onClick={() => navigateProjects('prev')}
                        >
                          <ArrowLeft className="h-5 w-5 mr-2" />
                          Previous Project
                        </Button>
                        
                        <Button 
                          size="sm"
                          variant="ghost" 
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                          onClick={() => navigateProjects('next')}
                        >
                          Next Project
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        {/* Image Viewing Dialog */}
        <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none shadow-none">
            <div className="relative w-full overflow-hidden rounded-lg">
              {selectedImage && (
                <div className="relative bg-black/80 p-2 rounded-lg">
                  <div className="absolute top-4 right-4 z-50">
                    <DialogClose asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8 rounded-full bg-black/50 border-white/20 hover:bg-black/70">
                        <X className="h-4 w-4 text-white" />
                      </Button>
                    </DialogClose>
                  </div>
                  <img
                    src={selectedImage}
                    alt="Project screenshot"
                    className="mx-auto max-h-[80vh] object-contain"
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
