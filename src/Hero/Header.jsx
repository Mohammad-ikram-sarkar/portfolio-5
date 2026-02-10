import React, { useState, useEffect } from 'react';
import { TbMenu3 } from "react-icons/tb";
import { FiX } from 'react-icons/fi';
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/project" },
    { name: "SKILLS", path: "/skill" },
    { name: "JOURNEY", path: "/experience" }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/ikram-islam/", size: 18, label: "LinkedIn" },
    { icon: IoLogoGithub, url: "https://github.com/Mohammad-ikram-sarkar", size: 20, label: "GitHub" },
    { icon: FaXTwitter, url: "https://x.com/IkramIslam84992", size: 18, label: "Twitter" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with Animation */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-teal-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-teal-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-black dark:text-white leading-none font-mono">
                  &lt;IkramSarkar /&gt;
                </span>
                <span className="text-xs text-black/60 dark:text-white/60 font-mono">
                  // MERN Developer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => "relative px-4 py-2 group"}
              >
                {({ isActive }) => (
                  <>
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-sm font-semibold transition-colors ${
                        isActive 
                          ? 'text-foreground' 
                          : 'text-foreground/60 hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-teal-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-teal-400 group-hover:w-full transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Side - Social & Theme */}
          <div className="hidden md:flex items-center gap-1">
            {socialLinks.map((social, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="relative group hover:text-foreground transition-colors text-foreground/60"
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <social.icon size={social.size} className="relative z-10" />
                  </a>
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {menuOpen ? <FiX size={24} /> : <TbMenu3 size={24} />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-1 border-t border-border/40">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      window.location.pathname === item.path
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile Social Links */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 pt-4 px-4 border-t border-border/40 mt-4"
                >
                  {socialLinks.map((social, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="icon"
                      asChild
                      className="hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                    >
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon size={social.size} />
                      </a>
                    </Button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
