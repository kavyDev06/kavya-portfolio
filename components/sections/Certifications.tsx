"use client";

import AnimatedSection from "../AnimatedSection";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const certs = [
  {
    title: "AI Fluency Framework & Foundations",
    issuer: "Authorized Provider", // Replace with real issuer if known
    date: "2024",
  },
  {
    title: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "Authorized Provider",
    date: "2024",
  }
];

export default function Certifications() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4 text-center md:text-left">Certifications</h2>
              <p className="text-[var(--text-secondary)] text-lg text-center md:text-left max-w-lg">Continuous learning and validation of new skills in the rapidly evolving tech landscape.</p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/5 flex items-center justify-center text-[var(--accent)]">
              <Award size={32} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certs.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 md:p-8 rounded-3xl flex items-start gap-6 group border border-transparent hover:border-[var(--accent)]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--surface-soft)] flex-shrink-0 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">{cert.title}</h3>
                  <div className="flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
