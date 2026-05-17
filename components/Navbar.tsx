"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navItems.map((item) => item.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
            isScrolled ? "glass-card" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="text-xl font-display font-bold text-[var(--accent)] tracking-tight flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full border-2 border-[var(--accent)] overflow-hidden">
              <img src="/kavya.jpg?v=4" alt="Kavya" className="w-full h-full object-cover" />
            </div>
            Kavya.
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 relative">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-[var(--accent)]",
                    activeSection === item.name.toLowerCase()
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)]"
                  )}
                >
                  {item.name}
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full mx-4"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent)] transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-zinc-900 dark:text-white dark:border dark:border-zinc-800 text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 glass-card rounded-2xl p-4 flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  activeSection === item.name.toLowerCase()
                    ? "bg-[var(--surface-soft)] text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)]"
                )}
              >
                {item.name}
              </a>
            ))}
            {mounted && (
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] transition-colors"
              >
                <span>Theme</span>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 px-4 py-3 rounded-xl bg-black text-white dark:bg-zinc-900 dark:text-white dark:border dark:border-zinc-800 text-sm font-medium text-center transition-all active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}
