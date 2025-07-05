"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description: "React, Nextjs, Tailwind, HTML, CSS, JavaScript",
    href:""
  },
  {
    num: "02",
    title: "AI/ML",
    description: "Python, Pandas, Numpy, Scikit-learn, TensorFlow, OpenCV",
    href:""
  },
  {
    num: "03",
    title: "App Development",
    description: "React Native, Typescript, Nodejs",
    href:""
  },
  {
    num: "04",
    title: "Backend Development",
    description: "Nodejs, Express, MongoDB, MySQL, PostgreSQL, Redis",
    href:""
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.4, delay: 2.4, ease: "easeIn"}}} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {
            services.map((service, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col gap-6 justify-center group">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    <Link href={`#${service.title}`} className=" w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full hover:-rotate-45 group-hover:bg-accent transition-all duration-500">
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/10 w-full"></div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services