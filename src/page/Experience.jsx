import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
    const journey = [
        {
            title: "Self-Taught MERN Stack Developer",
            organization: "Independent Learning",
            duration: "2023 - Present",
            location: "Bangladesh",
            description: "Mastered full-stack web development through online courses, documentation, and building real-world projects. Completed 48+ projects demonstrating proficiency in modern web technologies.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"],
            type: "learning"
        },
        {
            title: "MediStore - E-Commerce Platform",
            organization: "Personal Project",
            duration: "2024",
            location: "Remote",
            description: "Built a full-featured online medicine store with role-based access control, advanced search, shopping cart, and order management. Deployed on Vercel with production-ready features.",
            tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Better Auth"],
            type: "project"
        },
        {
            title: "Freelance Web Development",
            organization: "Various Clients",
            duration: "2023 - Present",
            location: "Remote",
            description: "Delivered 20+ web development projects for clients worldwide. Specialized in responsive websites, e-commerce solutions, and custom web applications using MERN stack.",
            tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
            type: "freelance"
        }
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'learning': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'project': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'freelance': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
            default: return 'bg-primary/10 text-primary border-primary/20';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'learning': return 'Education';
            case 'project': return 'Project';
            case 'freelance': return 'Freelance';
            default: return 'Experience';
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
                        My Journey
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Education, projects, and freelance work that shaped my development career
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {journey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                                    {/* Content Card */}
                                    <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        <Card className="glass hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                                            <CardHeader>
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Badge className={`text-xs border ${getTypeColor(item.type)}`}>
                                                                {getTypeLabel(item.type)}
                                                            </Badge>
                                                        </div>
                                                        <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                                                        <CardDescription className="text-base font-semibold text-primary">
                                                            {item.organization}
                                                        </CardDescription>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{item.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{item.location}</span>
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <CardContent>
                                                <p className="text-foreground mb-4 leading-relaxed">
                                                    {item.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {item.tech.map((tech, techIndex) => (
                                                        <Badge key={techIndex} variant="secondary" className="text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;