"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const techStack = [
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", darkIcon: "/github-white-icon.webp" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "FlutterFlow", icon: "https://images.g2crowd.com/uploads/product/image/95b2a41d662694c0f1bc8f33c3156cc9/flutterflow.png" },
  { name: "REST APIs", icon: "🔗", isText: true },
  { name: "Prompt Eng", icon: "🤖", isText: true },
];
export default function Hero() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted && currentTheme === 'dark';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[var(--accent)] mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]"></span>
              </span>
              Available for work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight text-[var(--text-primary)] mb-4"
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-500">Kavya Mistry</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6"
            >
              Flutter & FlutterFlow Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building scalable, responsive, and modern mobile applications with Flutter. Passionate about crafting seamless digital experiences with elegant UI and performant architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className={`group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full overflow-hidden transition-all hover:scale-105 ${
                  isDark 
                    ? "bg-white text-black border border-white shadow-lg shadow-black/20 hover:shadow-black/40" 
                    : "bg-black text-white shadow-lg shadow-black/20 hover:shadow-black/40"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-medium border rounded-full transition-all hover:scale-105 ${
                  isDark 
                    ? "bg-white text-black border-white hover:bg-gray-100" 
                    : "bg-black text-white border-black hover:bg-gray-800"
                }`}
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-[var(--text-muted)]"
            >
              <a href="https://github.com/KavyaMistry369" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:-translate-y-1 transition-all">
                {isDark ? (
                  <img src="/github-white-icon.webp" alt="GitHub" className="w-6 h-6" />
                ) : (
                  <FaGithub size={24} />
                )}
              </a>
              <a href="https://www.linkedin.com/in/kavy-mistry-34572a252/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:-translate-y-1 transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:kavyamistry0612@gmail.com" className="hover:text-[var(--accent)] hover:-translate-y-1 transition-all">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full flex flex-col items-center justify-center mt-12 lg:mt-0"
          >
            {/* Outer revolving container */}
            <div className="relative w-[280px] h-[280px] sm:w-80 sm:h-80 md:w-[460px] md:h-[460px] flex items-center justify-center">
              
              {/* Orbit Circle */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border)] animate-[spin_40s_linear_infinite]" />
              
              {/* Revolving Tech Stack */}
              <div className="absolute w-full h-full animate-[spin_40s_linear_infinite]">
                {techStack.map((tech, index) => {
                  const angle = (360 / techStack.length) * index;
                  return (
                    <div 
                      key={index}
                      className="absolute top-1/2 left-1/2 w-full h-full"
                      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div 
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white dark:bg-[#111111] rounded-2xl shadow-lg flex items-center justify-center p-2 animate-[spin_40s_linear_infinite_reverse] border border-[var(--border)]"
                        >
                          <div style={{ transform: `rotate(-${angle}deg)` }} className="w-full h-full flex items-center justify-center" title={tech.name}>
                            {tech.isText ? (
                              <span className="text-xl sm:text-2xl">{tech.icon}</span>
                            ) : (
                              <img 
                                src={isDark && (tech as any).darkIcon ? (tech as any).darkIcon : tech.icon} 
                                alt={tech.name} 
                                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain rounded-md" 
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Circular Avatar */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 bg-[var(--surface-soft)]">
                {/* Profile Image */}
                <img 
                  src="/kavya.jpg?v=4" 
                  alt="Kavya Mistry" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Bottom Contact Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 lg:absolute lg:bottom-[-20px] lg:left-1/2 lg:-translate-x-1/2 z-20"
            >
              <div className="glass-card px-6 py-4 rounded-full flex items-center gap-4 shadow-xl">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                <div className="flex flex-col text-left mr-4">
                  <span className="text-sm font-bold text-[var(--text-primary)]">Kavya Mistry</span>
                  <span className="text-xs text-[var(--text-muted)]">Available for Collab</span>
                </div>
                <a 
                  href="mailto:kavyamistry0612@gmail.com"
                  className={`px-4 py-2 text-xs font-medium rounded-full hover:scale-105 transition-transform ${
                    isDark 
                      ? "bg-white text-black border border-white" 
                      : "bg-black text-white border border-black"
                  }`}
                >
                  Send Mail
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
