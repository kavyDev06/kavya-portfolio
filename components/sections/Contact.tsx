"use client";

import AnimatedSection from "../AnimatedSection";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzdwpkej");

  if (state.succeeded) {
    return (
      <div className="w-full max-w-lg flex flex-col items-center justify-center py-8 px-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">Message Sent!</h3>
        <p className="text-green-600 dark:text-green-400 text-center">Thanks! I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mb-16 flex flex-col gap-4 text-left">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-soft)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="role" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Role / Company</label>
          <input 
            type="text" 
            id="role" 
            name="role" 
            required 
            placeholder="Recruiter at TechCorp"
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-soft)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={4}
          placeholder="Hi Kavya, I'd like to discuss a project..."
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-soft)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={state.submitting}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black dark:bg-zinc-900 dark:text-white dark:border dark:border-zinc-800 rounded-xl overflow-hidden shadow-xl shadow-black/20 dark:shadow-none hover:shadow-black/40 transition-all mt-2 disabled:opacity-70"
      >
        <span className="relative z-10 flex items-center gap-3">
          {state.submitting ? "Sending..." : "Send Message"}
          {!state.submitting && <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
        </span>
        {!state.submitting && (
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
      </motion.button>
    </form>
  );
}

export default function Contact() {

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <AnimatedSection>
          <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            {/* Animated Gradient Border Overlay */}
            <div className="absolute inset-0 border-2 border-transparent" style={{ 
              background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, var(--accent) 0%, transparent 50%, var(--accent) 100%) border-box",
              opacity: 0.2
            }} />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--surface-soft)] flex items-center justify-center mb-8">
                <span className="text-4xl">🚀</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[var(--text-primary)] mb-6">
                Let&apos;s work together
              </h2>
              
              <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mb-12">
                I&apos;m currently open for new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <ContactForm />

              <div className="flex flex-wrap justify-center gap-4 w-full border-t border-[var(--border)] pt-12">
                <SocialButton href="https://www.linkedin.com/in/kavy-mistry-34572a252/" icon={<FaLinkedin size={20} />} label="LinkedIn" />
                <SocialButton href="https://github.com/KavyaMistry369" icon={<FaGithub size={20} />} label="GitHub" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300 font-medium"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
