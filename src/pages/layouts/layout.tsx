'use client'

import Navbar from '@/components/navbar/Navbar'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Home from '../homeSection/Home'
import About from '../aboutSection'
import Experience from '../experienceSection'
import Projects from '../projectSection'
import Contact from '../contactSection'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar - fixed at top */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main content - grows to fill space */}
      <main className="flex-1">
        <Home />
        <About />
        <Experience />  
        <Projects />  
        <Contact />  
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Sahan Dhanujaya
              </Link>
              <span className="text-muted-foreground text-sm">· Software Engineer</span>
            </div>

            {/* Quick links */}
            <nav className="flex items-center gap-6">
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/experience"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Contact"
              >
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
  )
}

export default Layout
