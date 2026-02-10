import React from 'react';
import { FiMail, FiMapPin, FiDownload } from 'react-icons/fi';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import cover from "../assets/Gemini_Generated_Image_wuj3arwuj3arwuj3.png";
import resume from "../assets/ikram.pdf";
import Project from '../page/Project';
import Skill from '../page/Skill';
import Experience from '../page/Experience';
import Contact from '../page/Contact';

function Home() {


  return (
    <div id="home" className="min-h-screen bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-24 lg:py-32">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                Welcome to my portfolio
              </Badge>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                  Ikram Sarkar
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl text-muted-foreground font-medium"
              >
                Full Stack Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
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
              className="flex flex-wrap gap-6 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary" size={18} />
                <span>Brahmanbaria, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary" size={18} />
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
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button size="lg" className="h-12 px-8 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300">
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
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-2 hover:bg-muted/50 transition-all duration-300">
                <a href={resume} download="Ikram_Sarkar_Resume.pdf" className="flex items-center gap-2">
                  <FiDownload className="" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-teal-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-card/50 backdrop-blur-sm">
                <img
                  src={cover}
                  alt="Ikram Sarkar"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <Skill />
      <Project />
      <Experience />
      <Contact />

    </div>
  );
}

export default Home;
