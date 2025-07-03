import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiPostgresql, SiPrisma, SiVercel, SiTypescript, SiGo, SiAdobe, SiZod } from 'react-icons/si';
import { DiPython } from "react-icons/di";

// Main container for the entire skills section
const SkillsContainer = ({ children }) => (
  <div className="  w-full flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
    <div className="w-full max-w-6xl mx-auto">
      {children}
    </div>
  </div>
);

// Title component
const Title = () => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative mb-12 flex justify-center"
  >
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-700  border border-gray-200  px-8 py-3 rounded-lg shadow-lg shadow-blue-500/10">
       SKILLS
    </h1>
    {/* Decorative line */}
    <div className="absolute top-full mt-4 h-px w-1/2 bg-gradient-to-r from-transparent via-teal-600/20  to-transparent"></div>
  </motion.div>
);

// Individual skill tag component
const SkillTag = ({ icon, name }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={variants}
      className="flex items-center gap-2  border border-gray-700 text-gray-700 text-sm font-medium px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
};

// Component for a section of skills
const SkillSection = ({ title, skills, children }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <div className="mb-12">
            {title && <h2 className="text-xl font-semibold text-center text-blue-300 mb-6">{title}</h2>}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-3"
            >
                {skills ? skills.map((skill, index) => (
                    <SkillTag key={index} name={skill.name} icon={skill.icon} />
                )) : children}
            </motion.div>
        </div>
    );
};


// Main App Component
export default function Skill() {
  // Data for skills, mirroring the provided image
  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 size={18} /> },
    { name: 'CSS', icon: <FaCss3Alt size={18} /> },
    { name: 'JavaScript', icon: <FaJsSquare size={18} /> },
    { name: 'React', icon: <FaReact size={18} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={18} /> },
    { name: 'Zustand', icon: null },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
    { name: 'Framer Motion', icon: null },
    { name: 'DOM', icon: null },
    { name: 'Unit Test', icon: null },
    { name: 'Performance Optimize', icon: null },
    { name: 'SSR', icon: null },
  ];

  const backendSkills = [
    { name: 'Node', icon: <FaNodeJs size={18} /> },
    { name: 'Bun', icon: null },
    { name: 'Express', icon: <SiExpress size={18} /> },
    { name: 'REST API', icon: null },
    { name: 'Zod Validation', icon: <SiZod size={18} /> },
    { name: 'JWT/OAuth', icon: null },
    { name: 'SQL', icon: null },
    { name: 'Postgres', icon: <SiPostgresql size={18} /> },
    { name: 'Prisma ORM', icon: <SiPrisma size={18} /> },
    { name: 'DB Modeling', icon: null },
    { name: 'Stripe Payments', icon: null },
  ];
  
  const languages = [
    { name: 'JavaScript', icon: <FaJsSquare size={18} /> },
    { name: 'TypeScript', icon: <SiTypescript size={18} /> },

  ];

  const toolsAndPlatforms = [
     
      { name: 'Git', icon: <FaGitAlt size={18} /> },
      { name: 'GitHub', icon: <FaGithub size={18} /> },
      { name: 'Linux', icon: <FaLinux size={18} /> },
   
      { name: 'VPS', icon: null },
      { name: 'Vercel', icon: <SiVercel size={18} /> },
  ];

  const designSkills = [
      { name: 'UX/UI Design', icon: null },
      { name: 'Product Design', icon: null },
      { name: 'Figma', icon: <FaFigma size={18} /> },
  
      { name: 'Wireframe', icon: null },
  ];

  return (
    <SkillsContainer>
      <Title text="MY SKILLS" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 relative">
        {/* Decorative dividing line for large screens */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-teal-600/20 "></div>

        {/* Left Column */}
        <div className="flex flex-col">
            <SkillSection skills={frontendSkills} />
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
            <SkillSection skills={backendSkills} />
        </div>
        
        {/* Full-width sections */}
        <div className="lg:col-span-2">
            <SkillSection skills={languages} />
        </div>
        <div className="lg:col-span-2">
            <SkillSection skills={toolsAndPlatforms} />
        </div>
         <div className="lg:col-span-2">
            <SkillSection skills={designSkills} />
        </div>
      </div>
    </SkillsContainer>
  );
}
