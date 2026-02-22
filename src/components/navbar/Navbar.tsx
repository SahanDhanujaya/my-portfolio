'use client'

import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ModeToggle } from '../toggle/ModeToggle'
import { Menu, X } from 'lucide-react'
import logoLight from '/public/assets/logo/image-light.png'
import logoDark from '/public/assets/logo/image-dark.png'
import { useTheme } from '@/theme/theme-provider'

const navLinks = [
  { to: '/#about', label: 'About' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#services', label: 'Services' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#blog', label: 'Blog' },
]

function Navbar() {
  const theme = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { hash, pathname } = useLocation();
  useEffect(() => {
    console.log(hash, pathname);
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      console.log('element', element);
      
      if (element) {
        // Offset for fixed navbar height (approx 80px)
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between px-4 py-3 bg-card/80 dark:bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={theme.theme === 'dark' ? logoDark : logoLight}
                alt="logo"
                className="relative w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 rounded-lg border border-border/50 group-hover:border-primary/50"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={
                      `relative group px-4 py-2 rounded-lg font-medium text-sm tracking-tight transition-all duration-200
                      ${
                        pathname === to
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }
                      hover:bg-muted/60
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`
                    }
                  >
                    {(
                      <>
                        <span className="relative z-10">{label}</span>
                        <span
                          className={`absolute inset-x-2 bottom-1.5 h-0.5 rounded-full bg-primary transition-all duration-300 origin-left ${
                            pathname === to
                              ? 'opacity-100 scale-x-100'
                              : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                          }`}
                          aria-hidden
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 bg-card/80 dark:bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg">
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200
                      ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
