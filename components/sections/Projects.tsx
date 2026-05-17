"use client";

import AnimatedSection from "../AnimatedSection";
import { ExternalLink, Smartphone } from "lucide-react";
import { FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IDGuru Hotel Management App",
    description: "Hotel operations app focused on ID scanning and room damage reporting for hotel staff. Features real-time sync and responsive UI.",
    tech: ["Flutter","TCP-Sockets", "REST APIs", "Camera Integration"],
    github: null, 
    live: null,
    playStore: "https://play.google.com/store/apps/details?id=net.innguru.idguru",
    appStore: "https://apps.apple.com/us/app/idguru-innguru-suite/id6758965722",
    featured: true,
  },
  {
    title: "Netflix Clone",
    description: "A visually stunning replica of the Netflix mobile app with smooth scrolling, movie previews, and responsive UI.",
    tech: ["Flutter", "TMDB API", "UI/UX","Firebase"],
    github: "https://github.com/KavyaMistry369/netflix_clone",
    live: null,
    featured: false,
  },
  {
    title: "ChatGPT Clone",
    description: "An AI chat interface mimicking ChatGPT with real-time response rendering and conversational state management.",
    tech: ["Flutter", "OpenAI API", "State Management"],
    github: "https://github.com/KavyaMistry369/chatgpt_clone",
    live: null,
    featured: false,
  },
  {
    title: "News App",
    description: "A modern news reading application fetching live articles, featuring category filtering and bookmarking.",
    tech: ["Flutter", "News API", "REST"],
    github: "https://github.com/KavyaMistry369/news_app",
    live: null,
    featured: false,
  },
  {
    title: "Khata Sathi",
    description: "A digital ledger app helping small businesses manage their daily transactions and accounts efficiently.",
    tech: ["Flutter", "Local Storage", "SQLite"],
    github: "https://github.com/KavyaMistry369/khata_sathi",
    live: null,
    featured: false,
  },
  {
    title: "Toder",
    description: "A clean, minimalist todo application focused on user productivity and seamless task management.",
    tech: ["Flutter", "State Management" ,"Firebase"],
    github: "https://github.com/KavyaMistry369/toder",
    live: null,
    featured: false,
  }
];

export default function Projects() {
  const handleCardClick = (url: string | null) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <section id="projects" className="py-24 relative bg-[var(--surface-soft)]/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4">Featured Projects</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl text-lg">A selection of my best work in mobile application development.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const primaryUrl = project.github || project.playStore || project.appStore || project.live;
              
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleCardClick(primaryUrl)}
                  className={`glass-card rounded-3xl p-6 md:p-8 flex flex-col h-full group relative overflow-hidden cursor-pointer ${
                    project.featured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[var(--surface-soft)]" : ""
                  }`}
                >
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {project.featured ? (
                    // Featured Project Layout (Split)
                    <div className="relative z-10 flex flex-col md:flex-row h-full gap-8">
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                            <Smartphone size={24} />
                          </div>
                          <div className="flex gap-3">
                            {project.playStore && (
                              <a href={project.playStore} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-3 py-1.5 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] text-xs font-bold text-[var(--accent)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                                Play Store
                              </a>
                            )}
                            {project.appStore && (
                              <a href={project.appStore} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-3 py-1.5 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] text-xs font-bold text-[var(--accent)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                                App Store
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-3 font-display group-hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-[var(--text-secondary)] mb-8 flex-grow max-w-md">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white text-xs font-medium text-[var(--text-secondary)] shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Revolving Visual for Featured Project */}
                      <div className="hidden md:flex flex-1 items-center justify-center relative min-h-[250px]">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                          {/* Orbit */}
                          <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border)] animate-[spin_15s_linear_infinite]" />
                          
                          {/* Apple Revolving */}
                          <div className="absolute w-full h-full animate-[spin_15s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-[var(--border)] flex items-center justify-center animate-[spin_15s_linear_infinite_reverse] overflow-hidden">
                              <img src="/appStore.png" alt="App Store" className="w-full h-full object-cover scale-110" />
                            </div>
                          </div>
                          
                          {/* Android Revolving */}
                          <div className="absolute w-full h-full animate-[spin_15s_linear_infinite]" style={{ animationDelay: '-7.5s' }}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-[var(--border)] flex items-center justify-center animate-[spin_15s_linear_infinite_reverse] overflow-hidden" style={{ animationDelay: '-7.5s' }}>
                              <img src="/playstore.webp" alt="Play Store" className="w-full h-full object-cover scale-110" />
                            </div>
                          </div>

                          {/* Center IDGuru Logo */}
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-xl z-10 bg-transparent flex items-center justify-center border border-[var(--border)]">
                            <img src="/idguru.webp" alt="IDGuru Logo" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular Project Layout
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                          <Smartphone size={24} />
                        </div>
                        <div className="flex gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                              <FaGithub size={22} />
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                              <ExternalLink size={22} />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 font-display group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-[var(--text-secondary)] mb-8 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-[var(--surface-soft)] text-xs font-medium text-[var(--text-secondary)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
