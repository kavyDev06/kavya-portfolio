"use client";

import AnimatedSection from "../AnimatedSection";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const skills = [
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", darkIcon: "/github-white-icon.webp" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "FlutterFlow", icon: "https://josipmisko.com/img/software/flutterflow/flutterflow-logo.png" },
  { name: "REST APIs", icon: "🔗", isText: true },
  { name: "Prompt Eng", icon: "🤖", isText: true },
];

export default function Skills() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted && currentTheme === 'dark';
  return (
    <section id="skills" className="py-24 relative bg-[var(--surface-soft)]/50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4">Technical Arsenal</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
              A comprehensive list of my technical skills, tools, and technologies that I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-[var(--accent)] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 flex items-center justify-center text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {skill.isText ? (
                    <span>{skill.icon}</span>
                  ) : (
                    <img src={isDark && (skill as any).darkIcon ? (skill as any).darkIcon : skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  )}
                </div>
                <span className="font-medium text-[var(--text-primary)] relative z-10 whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
