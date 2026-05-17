"use client";

import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Dream Vision Infotech",
    role: "Flutter/FlutterFlow Developer",
    date: "Current",
    description: "Building cross-platform applications with robust architecture and beautiful UIs.",
    responsibilities: [
      "Cross-platform app development",
      "Firebase integrations & backend structuring",
      "REST API integrations",
      "Responsive UI development",
      "Performance optimization",
      "Reusable widgets and scalable architecture",
    ]
  },
  {
    company: "INNGuru",
    role: "Flutter Developer (Remote)",
    date: "Previous",
    description: "Developed and maintained IDGuru Hotel Management App.",
    responsibilities: [
      "Developed ID Scanning functionality",
      "Built Room Damage Reporting module",
      "Optimized Android & iOS performance",
      "Worked on hotel workflow systems",
      "Built responsive UI for hotel staff",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4">Work Experience</h2>
            <p className="text-[var(--text-secondary)] text-lg">My professional journey in mobile app development.</p>
          </div>

<div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start group">
                   
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--background)] md:border-[var(--surface)] md:-translate-x-1/2 top-6 z-10 group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Content (Alternating sides on desktop) */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 pt-2 md:pt-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                  }`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="glass-card p-6 md:p-8 rounded-3xl"
                    >
                      <div className="inline-block px-3 py-1 rounded-full bg-[var(--surface-soft)] text-[var(--text-secondary)] text-xs font-medium mb-4">
                        {exp.date}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1 font-display">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-[var(--accent)] mb-4">{exp.company}</h4>
                      <p className="text-[var(--text-secondary)] mb-6">{exp.description}</p>
                      
                      <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--accent)] mt-1 flex-shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
