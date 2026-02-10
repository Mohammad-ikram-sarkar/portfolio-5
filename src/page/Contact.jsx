import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add a toast notification or API call here
    };

    const contactInfo = [
        {
            icon: FiMail,
            title: "Email",
            value: "codewithikram@gmail.com",
            link: "mailto:codewithikram@gmail.com",
            color: "text-blue-500"
        },
        {
            icon: FiMapPin,
            title: "Location",
            value: "Brahmanbaria, Bangladesh",
            link: "#",
            color: "text-red-500"
        },
        // Add more contact info if needed
    ];

    const socialLinks = [
        { icon: FiGithub, url: "https://github.com/Mohammad-ikram-sarkar", label: "GitHub" },
        { icon: FiLinkedin, url: "https://www.linkedin.com/in/ikram-islam/", label: "LinkedIn" },
        { icon: FiTwitter, url: "https://x.com/IkramIslam84992", label: "Twitter" }
    ];

    return (
        <section id="contact" className="min-h-screen bg-background py-20 lg:py-32 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

            <div className="container mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent inline-block">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="grid gap-6">
                            {contactInfo.map((item, index) => (
                                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300">
                                    <CardContent className="flex items-center gap-6 p-6">
                                        <div className={`p-4 rounded-full bg-background shadow-sm ${item.color}`}>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.title}</h3>
                                            <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                                                {item.value}
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 text-center space-y-6">
                            <h3 className="text-xl font-semibold">Connect on Social Media</h3>
                            <div className="flex justify-center gap-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-background shadow-md hover:scale-110 hover:shadow-primary/20 transition-all duration-300 text-foreground/80 hover:text-primary"
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                            <CardHeader className="bg-primary/5 border-b border-border/50 p-6">
                                <CardTitle className="text-2xl">Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="Project discussion"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all"
                                            placeholder="Tell me about your project..."
                                            required
                                        ></textarea>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full h-12 text-lg font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300">
                                        <span className="flex items-center gap-2">
                                            Send Message <FiSend />
                                        </span>
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
