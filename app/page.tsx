import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-[var(--text-muted)] text-sm border-t border-[var(--border)] mt-auto bg-[var(--surface-soft)]">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Kavya Mistry. All rights reserved.</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </SmoothScroll>
  );
}
