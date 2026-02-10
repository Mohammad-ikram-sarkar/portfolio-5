import React from 'react';
import { FiMail, FiMapPin, FiDownload } from 'react-icons/fi';
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import cover from "../assets/Gemini_Generated_Image_wuj3arwuj3arwuj3.png";
import resume from "../assets/ikram.pdf";

function Home() {
  const techStack = [
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3, name: "CSS3", color: "#1572B6" },
    { icon: IoLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "#06B6D4" }
  ];

  const stats = [
    { value: "1.5+", label: "Years Experience" },
    { value: "48+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-background">
      <div className="container mx-auto px-4 sm:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
            
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-teal-400 to-primary bg-clip-text text-transparent">
                  Ikram Sarkar
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl text-black/70 dark:text-white/70 font-medium"
              >
                MERN Stack Web Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-xl"
              >
                I craft beautiful, functional web applications with modern technologies. 
                Passionate about creating seamless user experiences and writing clean, maintainable code.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-black/60 dark:text-white/60"
            >
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary" size={16} />
                <span>Brahmanbaria, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary" size={16} />
                <a href="mailto:islamikram357@gmail.com" className="hover:text-primary transition-colors">
                  codewithikram@gmail.com
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" className="group">
                <a href="mailto:codewithikram@gmail.com" className="flex items-center gap-2">
                  Get In Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <a href={resume} download="Ikram_Sarkar_Resume.pdf" className="flex items-center gap-2">
                  <FiDownload className="group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>
              
              {/* Image Container */}
              <div className="relative z-10">
                <div className="aspect-square rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={cover}
                    alt="Ikram Sarkar"
                    className="w-full h-full object-cover transform scale-130"
                  />
                </div>
                
                {/* Floating Badge */}
              
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Tech Stack
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Technologies I work with
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-gray-900 border border-border shadow-lg flex items-center justify-center transition-all group-hover:shadow-xl group-hover:border-primary/50">
                  <tech.icon 
                    size={32} 
                    className="transition-colors"
                    style={{ color: tech.color }}
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-medium text-black/60 dark:text-white/60 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
