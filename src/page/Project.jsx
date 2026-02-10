import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Project = () => {
    const projects = [
        {
            title: "MediStore - Online Medicine Store",
            description: "A modern, full-featured online medicine store built with Next.js 15, featuring role-based access control (Admin, Seller, Customer), advanced search functionality, shopping cart, wishlist, and order management system.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Better Auth", "Radix UI", "Framer Motion"],
            github: "https://github.com/Mohammad-ikram-sarkar/medistore-frontend",
            live: "https://medistore-frontend-one.vercel.app"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            <div className="container mx-auto px-4 sm:px-8 py-12 lg:py-16">
                {/* Page Header */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-teal-400 to-primary bg-clip-text text-transparent mb-4">
                        My Projects
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects I've built using modern web technologies
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="glass h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden bg-muted">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="gap-2">
                                    <Button variant="outline" size="sm" className="flex-1" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                    <Button size="sm" className="flex-1" asChild>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Project;