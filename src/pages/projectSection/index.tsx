'use client'

import { Button } from '@/components/ui/button'
import {
  Code,
  ExternalLink,
  Github,
  Sparkles,
  ShoppingCart,
  Heart,
  BookOpen,
  Hotel,
  ArrowRight,
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'POS Retail System',
    description: 'A comprehensive Point of Sale retail management system for managing sales, inventory, and customer transactions efficiently.',
    icon: ShoppingCart,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'MySQL',
      'REST APIs',
      'JavaScript',
    ],
    features: [
      'Sales transaction management',
      'Inventory tracking and management',
      'Customer management system',
      'Real-time reporting and analytics',
      'Receipt generation',
    ],
    stack: 'Full-stack',
  },
  {
    id: 2,
    title: 'Medicare System',
    description: 'A healthcare management system built with Spring Boot backend and React frontend for managing patient records, appointments, and medical services.',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    technologies: [
      'Spring Boot',
      'React',
      'Java',
      'MySQL',
      'REST APIs',
      'JavaScript',
    ],
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Medical service tracking',
      'Secure data handling',
      'User authentication and authorization',
    ],
    stack: 'Spring Boot + React',
  },
  {
    id: 3,
    title: 'Library Management System',
    description: 'A complete library management solution built with MERN stack for managing books, members, borrowing, and returns.',
    icon: BookOpen,
    color: 'from-purple-500 to-indigo-500',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JavaScript',
      'REST APIs',
    ],
    features: [
      'Book catalog management',
      'Member registration and management',
      'Borrowing and return tracking',
      'Fine calculation system',
      'Search and filter functionality',
    ],
    stack: 'MERN Stack',
  },
  {
    id: 4,
    title: 'Hotel Booking System',
    description: 'A full-featured hotel reservation system built with MERN stack for managing room bookings, customer information, and hotel operations.',
    icon: Hotel,
    color: 'from-green-500 to-emerald-500',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JavaScript',
      'REST APIs',
    ],
    features: [
      'Room availability management',
      'Online booking system',
      'Customer reservation tracking',
      'Payment processing integration',
      'Admin dashboard for hotel management',
    ],
    stack: 'MERN Stack',
  },
]

function Projects() {
  return (
    <div id='projects' className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-lg h-128 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating accents */}
        <div className="absolute top-32 right-20 pointer-events-none opacity-30">
          <Sparkles className="w-10 h-10 text-primary animate-float" />
        </div>
        <div className="absolute bottom-40 left-16 pointer-events-none opacity-20">
          <Code className="w-8 h-8 text-primary animate-float" style={{ animationDelay: '1.2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            <Code className="w-4 h-4" />
            Portfolio Projects
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A collection of full-stack applications built with modern technologies and best practices
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Header with icon */}
                <div className="relative p-8">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${project.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${project.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {project.stack}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/50 text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with action buttons */}
                <div className="px-8 pb-8 pt-4 border-t border-border bg-muted/20">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="group">
                      <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm" className="group">
                      <ExternalLink className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            I'm always open to discussing new projects and opportunities
          </p>
          <Button asChild size="lg" className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </Button>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

export default Projects
