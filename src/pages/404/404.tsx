'use client'

import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Compass, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden px-4 pt-20 pb-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-lg h-128 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Violet animated orbs for light theme */}
          <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-violet-400/30 dark:bg-violet-400/5 rounded-full blur-3xl animate-violet-float" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/25 dark:bg-violet-500/3 rounded-full blur-3xl animate-violet-float" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Compass className="w-8 h-8 text-primary/20" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
            <Search className="w-6 h-6 text-primary/20" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <Compass className="w-10 h-10 text-primary/15" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
            <Search className="w-7 h-7 text-primary/20" />
          </div>
          <div className="absolute top-1/2 left-1/2 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-12 h-12 text-primary/15" />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* 404 Number with glitch effect */}
          <div className="relative mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-primary animate-gradient-x">
              404
            </h1>
            <div className="absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-bold text-primary/20 blur-sm animate-glitch" aria-hidden>
              404
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
              The page you're looking for seems to have wandered off into the digital void. Let's get you back on track.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="group min-w-[160px]">
              <Link to="/">
                <Home className="mr-2 size-4 group-hover:scale-110 transition-transform duration-200" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group min-w-[160px]">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform duration-200" />
                Go Back
              </button>
            </Button>
          </div>

          {/* Quick links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground mb-4">Or try these pages:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['About', 'Projects', 'Contact'].map((page) => (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200 border border-transparent hover:border-border"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
        
        @keyframes violet-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translate(30px, -40px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translate(-20px, -60px) scale(0.95);
            opacity: 0.9;
          }
          75% {
            transform: translate(40px, -30px) scale(1.05);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-glitch {
          animation: glitch 0.3s ease-in-out infinite;
        }
        
        .animate-violet-float {
          animation: violet-float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default NotFound
