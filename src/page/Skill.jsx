import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiPostgresql, SiPrisma, SiVercel, SiTypescript, SiZod } from 'react-icons/si';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Individual skill component
const SkillBadge = ({ icon, name }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Badge
        variant="outline"
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md border-border"
      >
        {icon && <span className="text-base">{icon}</span>}
        <span>{name}</span>
      </Badge>
    </motion.div>
  );
};

// Skill section component
const SkillSection = ({ title, skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <Card className="glass hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        {title && (
          <h2 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wide">
            {title}
          </h2>
        )}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} icon={skill.icon} />
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
};

// Main Skills Component
export default function Skill() {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-8 py-12 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-teal-400 to-primary bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillSection title="Frontend Development" skills={frontendSkills} />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillSection title="Backend Development" skills={backendSkills} />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillSection title="Programming Languages" skills={languages} />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SkillSection title="Tools & Platforms" skills={toolsAndPlatforms} />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <SkillSection title="Design" skills={designSkills} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
