"use client"

import { FaCss3, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { TbBrandTypescript } from "react-icons/tb";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about =
{
  title: "About Me",
  description: "I am a software engineer with a passion for building web applications. I am a quick learner and I am always looking to improve my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Daniyal Ahmed",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 332 4982332",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "m.daniyal0201@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "I am a software engineer with a passion for building web applications. I am a quick learner and I am always looking to improve my skills.",
  items: [
    {
      company: "The Dawood Foundation",
      position: "IT Department Intern",
      duration: "Summer 2024",
      description: "I was an intern at The Dawood Foundation. I was task with creating an efficient complaint management system fullstacked using expo go and express",
      skills: ["React", "Typescript", "React", "Node.js", "MongoDB"],

    }
  ]
}
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "I am currently a 7th semester student at Fast NUCES. I am studying Computer Science",
  items: [
    {
      institute: "Fast NUCES",
      program: "BS Computer Science",
      duration: "Undergraduate",
    },
    {
      institute: "Adamjee Govt. Science College",
      program: "Intermediate",
      duration: "2020-2022",
    },
    {
      institute: "Happy Home High School",
      program: "Matriculation",
      duration: "2010-2020",
    }
  ]
}
const skills = {
  icon: '/assets/resume/cap.svg',
  title: "My Skills",
  description: "Showcasing my skills and expertise",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <TbBrandTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="w-full flex flex-col max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className='w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className='w-full'>
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.program}</h3>
                        <div className="flex items-center gap-3">
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institute}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className='w-full h-full'>
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 gap-[30px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.items.map((item,index)=>{
                      return <li key={index} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className='w-full text-center xl:text-left'>
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] tex-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] xl:grid-cols-2 mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className="flex flex-col gap-2">
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-white/60">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
            </Tabs>
          </div>
        </motion.div>
        )
}

        export default Resume