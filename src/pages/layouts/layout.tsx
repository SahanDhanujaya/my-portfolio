/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import Navbar from '@/components/navbar/Navbar'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Home from '../homeSection/Home'
import About from '../aboutSection'
import Experience from '../experienceSection'
import Projects from '../projectSection'
import Contact from '../contactSection'
import { useEffect, useState } from 'react'

function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Vite is fast — enforce a minimum loader display time (e.g. 1.5s)
    const minDisplay = new Promise((resolve) => setTimeout(resolve, 1500));

    const pageReady = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    // Wait for BOTH: min time AND page ready
    Promise.all([minDisplay, pageReady]).then(() => {
      setIsFadingOut(true);                          // fade out loader
      setTimeout(() => setIsLoading(false), 600);   // then reveal page
    });
  }, []);

  return (
    <>
      {/* ── Loader overlay ── */}
      {isLoading && (
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-50
            transition-opacity duration-[600ms]
            ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Spinner */}
          <div className="w-12 h-12 rounded-full border-4 border-gray-700 border-t-purple-500 animate-spin mb-4" />
          {/* Name branding instead of plain "Loading..." */}
          <p className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">
            Sahan Dhanujaya
          </p>
        </div>
      )}

      {/* ── Main page — fades + slides up on reveal ── */}
      <div
        className={`min-h-screen flex flex-col bg-background
          transition-all duration-700 ease-out
          ${isLoading
            ? 'opacity-0 translate-y-6 pointer-events-none'
            : 'opacity-100 translate-y-0'
          }`}
      >
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        <main className="flex-1">
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="flex items-center gap-2">
                <Link to="/#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  Sahan Dhanujaya
                </Link>
                <span className="text-muted-foreground text-sm">· Software Engineer</span>
              </div>

              <nav className="flex items-center gap-6">
                <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link to="/#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</Link>
                <Link to="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
                <Link to="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </nav>

              <div className="flex items-center gap-4">
                <a href="https://github.com/SahanDhanujaya" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/sahan-dhanujaya-040aa4359/" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Contact">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-1">
                Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Sahan Dhanujaya
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;