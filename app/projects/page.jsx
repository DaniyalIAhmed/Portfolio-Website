"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaDatabase, 
  FaGithub, 
  FaExternalLinkAlt,
  FaDownload
} from "react-icons/fa"
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMysql, 
  SiPostgresql, 
  SiPrisma,
  SiNginx,
  SiTensorflow,
  SiReact,
  SiExpo
} from "react-icons/si"

// Projects data - easily updatable structure
const projects = {
  featured: [
    {
      id: 1,
      title: "NEXTaura",
      subtitle: "Real Estate Management System",
      description: "A comprehensive real estate management platform with both web and mobile applications. Features property listings, user management, booking system, and administrative dashboard.",
      image: "/assets/work/thumb1.png",
      category: "Full Stack",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "Expo", icon: <SiExpo /> }
      ],
      features: [
        "Property listing and management",
        "User authentication and authorization",
        "Booking and reservation system",
        "Admin dashboard with analytics",
        "Mobile app for iOS and Android",
        "Real-time notifications"
      ],
      links: {
        github: "https://github.com/DaniyalIAhmed/Next-Aura",
        download: "/assets/work/next.apk"
      },
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Xend",
      subtitle: "AI-Powered Car Marketplace",
      description: "An intelligent car marketplace platform that uses AI to provide smart recommendations, pricing analysis, and advanced search capabilities with image recognition.",
      image: "/assets/work/thumb2.png",
      category: "AI/ML",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AI SDK", icon: <FaReact /> }
      ],
      features: [
        "AI-powered car recommendations",
        "Name based Car image generation",
        "Dynamic pricing analysis",
        "Advanced filtering and search",
        "Containerized deployment"
      ],
      links: {
        demo: "https://car-market-smoky.vercel.app/",
        github: "https://github.com/DaniyalIAhmed/Car-Market"
      },
      status: "Completed",
      year: "2024"
    }
  ],
  ml: [
    {
      id: 3,
      title: "LeNet CNN Architecture",
      subtitle: "Fingerprint & Hand Digit Recognition",
      description: "Custom implementation of LeNet Convolutional Neural Network from scratch using pure Python for fingerprint and handwritten digit recognition with high accuracy.",
      image: "/assets/work/thumb3.png",
      category: "Machine Learning",
      tech: [
        { name: "Python", icon: <FaPython /> },
        { name: "NumPy", icon: <FaPython /> },
        { name: "CNN", icon: <SiTensorflow /> }
      ],
      features: [
        "Custom CNN implementation from scratch",
        "Fingerprint pattern recognition",
        "Handwritten digit classification",
        "No external ML libraries used",
        "High accuracy training results",
        "Data preprocessing pipelines"
      ],
      links: {
        github: "https://github.com/DaniyalIAhmed/CNN-LeNET",
      },
      status: "Completed",
      year: "2024"
    }
  ],
  infrastructure: [
    {
      id: 4,
      title: "Load Balancer System",
      subtitle: "HAProxy + Nginx Configuration",
      description: "High-performance load balancing solution using HAProxy and Nginx for distributing traffic across multiple servers with health checks and failover capabilities.",
      image: "/assets/work/thumb1.png",
      category: "DevOps",
      tech: [
        { name: "HAProxy", icon: <FaDatabase /> },
        { name: "Nginx", icon: <SiNginx /> },
        { name: "Docker", icon: <FaDocker /> }
      ],
      features: [
        "Traffic distribution algorithms",
        "Health check mechanisms",
        "Automatic failover",
        "SSL termination",
        "Performance monitoring",
        "Containerized deployment"
      ],
      links: {
      },
      status: "Completed",
      year: "2024"
    }
  ]
}
// Technology icons mapping for easy access
const techIcons = {
  "Next.js": <SiNextdotjs />,
  "React": <FaReact />,
  "Node.js": <FaNodeJs />,
  "Python": <FaPython />,
  "Express": <SiExpress />,
  "MySQL": <SiMysql />,
  "PostgreSQL": <SiPostgresql />,
  "Docker": <FaDocker />,
  "React Native": <SiReact />
}

const ProjectCard = ({ project }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = project.links.download;
    link.download = `${project.title.toLowerCase()}.apk`;
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#232329] rounded-xl p-4 sm:p-6 hover:bg-[#2a2a30] transition-all duration-300 group"
    >
      <div className="flex flex-col h-full">
        {/* Project Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full whitespace-nowrap">
                {project.status}
              </span>
            </div>
            <p className="text-accent text-sm font-medium mb-2">{project.subtitle}</p>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <h4 className="text-white font-medium mb-2 text-sm sm:text-base">Tech Stack:</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.tech.map((tech, index) => (
              <TooltipProvider key={index} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#27272c] rounded-md text-white/80 hover:text-accent transition-colors">
                      <span className="text-xs sm:text-sm">{tech.icon}</span>
                      <span className="text-[10px] sm:text-xs">{tech.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6 flex-1">
          <h4 className="text-white font-medium mb-2 text-sm sm:text-base">Key Features:</h4>
          <ul className="text-white/60 text-xs sm:text-sm space-y-1">
            {project.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
            {project.features.length > 4 && (
              <li className="text-accent text-[10px] sm:text-xs">+{project.features.length - 4} more features</li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-white/10">
          {project.links.github && (
            <Button size="sm" variant="outline" className="flex-1 bg-transparent border-accent/30 text-accent hover:bg-accent hover:text-primary text-xs sm:text-sm">
              <FaGithub className="mr-1 sm:mr-2 h-3 w-3" />
              Code
            </Button>
          )}
          {project.links.demo && (
            <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-primary text-xs sm:text-sm">
              <FaExternalLinkAlt className="mr-1 sm:mr-2 h-3 w-3" />
              Demo
            </Button>
          )}
          {project.links.download && (
            <Button size="sm" variant="secondary" className="flex-1 text-xs sm:text-sm" onClick={handleDownload}>
              <FaDownload className="mr-1 sm:mr-2 h-3 w-3" />
              APK
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const allProjects = [...projects.featured, ...projects.ml, ...projects.infrastructure]
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex justify-center items-center py-8 sm:py-12 xl:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="text-center mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.1] mb-4">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="max-w-[600px] text-white/80 mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
            Showcasing my latest work in web development, mobile applications, machine learning, and infrastructure. 
            Each project demonstrates different skills and technologies.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full flex flex-col sm:flex-row gap-2 justify-center mb-8 max-w-[600px] mx-auto">
            <TabsTrigger value="all" className="flex-1 text-sm sm:text-base">All Projects</TabsTrigger>
            <TabsTrigger value="featured" className="flex-1 text-sm sm:text-base">Featured</TabsTrigger>
            <TabsTrigger value="ml" className="flex-1 text-sm sm:text-base">ML/AI</TabsTrigger>
            <TabsTrigger value="infrastructure" className="flex-1 text-sm sm:text-base">DevOps</TabsTrigger>
          </TabsList>

          <div className="w-full">
            <TabsContent value="all">
              <ScrollArea className="h-[500px] sm:h-[600px] w-full pr-2 sm:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {allProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="featured">
              <ScrollArea className="h-[500px] sm:h-[600px] w-full pr-2 sm:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {projects.featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="ml">
              <ScrollArea className="h-[500px] sm:h-[600px] w-full pr-2 sm:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {projects.ml.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="infrastructure">
              <ScrollArea className="h-[500px] sm:h-[600px] w-full pr-2 sm:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {projects.infrastructure.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.0 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          <div className="bg-[#232329] rounded-xl p-3 sm:p-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-accent">{allProjects.length}</h3>
            <p className="text-white/60 text-xs sm:text-sm">Total Projects</p>
          </div>
          <div className="bg-[#232329] rounded-xl p-3 sm:p-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-accent">{projects.featured.length}</h3>
            <p className="text-white/60 text-xs sm:text-sm">Featured Projects</p>
          </div>
          <div className="bg-[#232329] rounded-xl p-3 sm:p-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-accent">8+</h3>
            <p className="text-white/60 text-xs sm:text-sm">Technologies</p>
          </div>
          <div className="bg-[#232329] rounded-xl p-3 sm:p-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-accent">2024</h3>
            <p className="text-white/60 text-xs sm:text-sm">Year Active</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects