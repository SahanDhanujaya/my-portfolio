'use client'

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  GraduationCap,
  Code,
  Sparkles,
  User,
  ArrowRight,
} from 'lucide-react'
import profilePic from '/public/assets/pictures/my-pic.png'
// import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars'

function About() {
  
  return (
    <div id='about' className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-lg h-128 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="absolute top-32 right-20 pointer-events-none opacity-30">
          <Sparkles className="w-10 h-10 text-primary animate-float" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 animate-fade-in-up">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 group-hover:border-primary/30 transition-all duration-500">
                  <img
                    src={profilePic}
                    alt="Sahan Dhanujaya"
                    className="w-full max-w-sm aspect-3/4 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
                <User className="w-4 h-4" />
                About Me
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Sahan Dhanujaya
              </h1>
              <p className="text-xl md:text-2xl font-medium text-primary mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                Software Engineer
              </p>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                IJSE graduated student with a passion for building modern software solutions. 
                I combine teaching experience, freelance development, and professional training 
                to deliver clean, scalable code and great user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Button asChild size="lg" className="group">
                  <Link to="/#experience">
                    View Experience
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Role Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up`}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
              <p className="text-primary font-semibold text-lg mb-2">IJSE — Institute of Java and Software Engineering</p>
              <p className="text-muted-foreground">Graduated with a strong foundation in software development, covering full-stack technologies and industry best practices.</p>
            </div>

            {/* Role Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Software Engineer</h3>
              <p className="text-muted-foreground mb-4">
                Building and maintaining applications with modern stacks. Experienced in lecturing, freelancing, and working as a trainee in professional environments.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Full-stack', 'Teaching', 'Freelance', 'MERN', 'Spring Boot', 'Python'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/50 text-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      {/* <section className="relative py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-card border border-border">
                <User className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">Sahan Dhanujaya</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-card border border-border">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">IJSE Graduate</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-card border border-border">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">Software Engineer</span>
            </div>
          </div>
        </div>
      </section> */}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
      `}</style> 
    </div>
  )
}

export default About
