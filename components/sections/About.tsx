"use client";

import AnimatedSection from "../AnimatedSection";
import { Briefcase, Code2, Rocket, Globe } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
    value: "Multiple",
    label: "Technologies",
  },
  {
    icon: <Globe className="w-6 h-6 text-green-500" />,
    value: "Cross-platform",
    label: "Expertise",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Bio Content */}
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--accent)]/5 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface-soft)] flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <h2 className="text-3xl font-display font-bold text-[var(--text-primary)]">About Me</h2>
              </div>
              
              <div className="space-y-6 text-lg text-[var(--text-secondary)] relative z-10">
                <p>
                  I&apos;m a passionate <strong className="text-[var(--text-primary)] font-semibold">Flutter & FlutterFlow Developer</strong> with over 2 years of professional experience in building scalable, cross-platform mobile applications.
                </p>
                <p>
                  Currently, I work at <strong className="text-[var(--text-primary)] font-semibold">Dream Vision Infotech</strong>, where I focus on developing high-performance apps with beautiful UIs and seamless user experiences. My expertise spans across Flutter, Firebase, Supabase, and REST API integrations.
                </p>
                <p>
                  I love turning complex problems into simple, beautiful, and intuitive designs. When I&apos;m not coding, I&apos;m exploring new technologies and refining my skills in UI/UX architecture.
                </p>
              </div>

              <div className="mt-8">
                <a href="#experience" className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline underline-offset-4">
                  View my work experience
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--background)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2 font-display">{stat.value}</h3>
                  <p className="text-sm font-medium text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
