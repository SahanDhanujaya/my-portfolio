'use client'

import {
  GraduationCap,
  Code,
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
  Rocket,
} from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Lecturer - Software Development',
    company: 'Educational Institution',
    location: 'Remote/On-site',
    duration: '1.5 Years',
    type: 'Full-time',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    description: 'Teaching software development concepts and best practices to students',
    technologies: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'MERN Stack',
      'Spring Boot',
      'Python',
      'SQL',
      'NoSQL',
    ],
    achievements: [
      'Delivered comprehensive lectures on modern web development',
      'Mentored students in full-stack development practices',
      'Created hands-on projects and assignments',
      'Stayed updated with latest industry trends and technologies',
    ],
  },
  {
    id: 2,
    title: 'Freelance Software Developer',
    company: 'Self-employed',
    location: 'Remote',
    duration: '1 Year',
    type: 'Freelance',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    description: 'Developed custom software solutions for various clients',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'JavaScript',
      'TypeScript',
      'REST APIs',
      'Git',
    ],
    achievements: [
      'Delivered multiple successful projects on time',
      'Collaborated with international clients',
      'Built scalable and maintainable applications',
      'Provided ongoing support and maintenance',
    ],
  },
  {
    id: 3,
    title: 'Trainee Software Engineer',
    company: 'Software Company',
    location: 'On-site',
    duration: '6 Months',
    type: 'Full-time',
    icon: Rocket,
    color: 'from-green-500 to-emerald-500',
    description: 'Learned and contributed to real-world software development projects',
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Git',
      'Agile',
      'REST APIs',
      'Testing',
    ],
    achievements: [
      'Completed comprehensive training program',
      'Contributed to production codebase',
      'Participated in code reviews and team meetings',
      'Gained hands-on experience with enterprise applications',
    ],
  },
]

function Experience() {
  return (
    <div id='experience' className="min-h-screen bg-background">
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
          <BookOpen className="w-8 h-8 text-primary animate-float" style={{ animationDelay: '1.2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            <Briefcase className="w-4 h-4" />
            Professional Journey
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            My Experience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A journey through teaching, freelancing, and professional software development
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border dark:bg-border/50" />
                )}

                <div className="relative flex gap-6 group">
                  {/* Icon */}
                    <div className="relative shrink-0">
                    <div className={`absolute inset-0 bg-linear-to-br ${exp.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${exp.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Briefcase className="w-4 h-4" />
                              {exp.company}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6">{exp.description}</p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/50 text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Rocket className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">1.5 Years</div>
              <div className="text-sm text-muted-foreground">Teaching Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 mb-4">
                <Code className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">1 Year</div>
              <div className="text-sm text-muted-foreground">Freelance Development</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 text-green-500 mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">6 Months</div>
              <div className="text-sm text-muted-foreground">Trainee Experience</div>
            </div>
          </div>
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

export default Experience
