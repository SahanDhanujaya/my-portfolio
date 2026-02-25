"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Palette,
  Rocket,
  ArrowRight,
  Mail,
  Sparkles,
  Github,
  Linkedin,
  Database,
  Code as CodeIcon,
  Cloud,
} from "lucide-react";
import profilePic from '/public/assets/pictures/my-pic.png'
// import {
//   Code,
//   CodeBlock,
//   CodeHeader,
// } from "@/components/animate-ui/components/animate/code";

const features = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building modern web applications with clean code and a focus on performance and accessibility.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces for web and mobile applications.",
  },
  {
    icon: Rocket,
    title: "SEO Optimization",
    description:
      "Optimizing websites for search engines to improve visibility and traffic.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing and managing databases to store and retrieve data efficiently.",
  },
  {
    icon: CodeIcon,
    title: "Mobile Development",
    description:
      "Building mobile applications with clean code and a focus on performance and accessibility.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Deploying applications to the cloud for scalability and reliability.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden p-16">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-lg h-128 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Floating accent */}
        <div className="absolute top-32 right-20 pointer-events-none opacity-30">
          <Sparkles className="w-10 h-10 text-primary animate-float" />
        </div>
        <div className="absolute bottom-40 left-16 pointer-events-none opacity-20">
          <Sparkles
            className="w-8 h-8 text-primary animate-float"
            style={{ animationDelay: "1.2s" }}
          />
        </div>

        {/* Animated violet lines for light mode */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden dark:opacity-0">
          {/* Diagonal flowing lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="violet-gradient-1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(139, 92, 246)"
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor="rgb(139, 92, 246)"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(139, 92, 246)"
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="violet-gradient-2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(167, 139, 250)"
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor="rgb(167, 139, 250)"
                  stopOpacity="0.25"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(167, 139, 250)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            {/* Animated diagonal lines */}
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="url(#violet-gradient-1)"
              strokeWidth="2"
              className="animate-violet-line-1"
            />
            <line
              x1="0"
              y1="20%"
              x2="100%"
              y2="120%"
              stroke="url(#violet-gradient-2)"
              strokeWidth="1.5"
              className="animate-violet-line-2"
            />
            <line
              x1="0"
              y1="40%"
              x2="100%"
              y2="140%"
              stroke="url(#violet-gradient-1)"
              strokeWidth="1.5"
              className="animate-violet-line-3"
            />
            <line
              x1="0"
              y1="60%"
              x2="100%"
              y2="160%"
              stroke="url(#violet-gradient-2)"
              strokeWidth="2"
              className="animate-violet-line-4"
            />
            <line
              x1="0"
              y1="80%"
              x2="100%"
              y2="180%"
              stroke="url(#violet-gradient-1)"
              strokeWidth="1.5"
              className="animate-violet-line-5"
            />
          </svg>

          {/* Horizontal flowing lines */}
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-0 w-full h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent animate-violet-flow-horizontal" />
            <div
              className="absolute top-[30%] left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent animate-violet-flow-horizontal"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-[50%] left-0 w-full h-px bg-linear-to-r from-transparent via-violet-400/35 to-transparent animate-violet-flow-horizontal"
              style={{ animationDelay: "4s" }}
            />
            <div
              className="absolute top-[70%] left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent animate-violet-flow-horizontal"
              style={{ animationDelay: "6s" }}
            />
            <div
              className="absolute top-[90%] left-0 w-full h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent animate-violet-flow-horizontal"
              style={{ animationDelay: "8s" }}
            />
          </div>

          {/* Vertical flowing lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-[15%] h-full w-px bg-linear-to-b from-transparent via-violet-400/30 to-transparent animate-violet-flow-vertical" />
            <div
              className="absolute top-0 left-[35%] h-full w-px bg-linear-to-b from-transparent via-violet-500/25 to-transparent animate-violet-flow-vertical"
              style={{ animationDelay: "3s" }}
            />
            <div
              className="absolute top-0 left-[55%] h-full w-px bg-linear-to-b from-transparent via-violet-400/35 to-transparent animate-violet-flow-vertical"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="absolute top-0 left-[75%] h-full w-px bg-linear-to-b from-transparent via-violet-500/30 to-transparent animate-violet-flow-vertical"
              style={{ animationDelay: "4.5s" }}
            />
            <div
              className="absolute top-0 left-[95%] h-full w-px bg-linear-to-b from-transparent via-violet-400/30 to-transparent animate-violet-flow-vertical"
              style={{ animationDelay: "6s" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-3 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p
                className="text-sm md:text-base font-medium text-primary mb-4 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Hi, I'm a developer & designer
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                I build{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-primary animate-gradient-x">
                  digital experiences
                </span>{" "}
                that matter
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Crafting modern web apps with clean code, sharp design, and a
                focus on performance and accessibility.
              </p>
              <div
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.45s" }}
              >
                <Button asChild size="lg" className="group min-w-[160px]">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group min-w-[160px]"
                >
                  <Link to="/contact">
                    <Mail className="mr-2 size-4 group-hover:scale-110 transition-transform duration-200" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
              <div
                className="flex items-center justify-center lg:justify-start gap-6 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="size-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-scale pt-5"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="relative group">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

                {/* Image container with border and shadow */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 group-hover:border-primary/30 group-hover:shadow-primary/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full max-w-md h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* <Code
                  className="w-full max-w-md h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500 dark:bg-white"
                    code={`'use client';
 
import * as React from 'react';
  
type MyComponentProps = {
  myProps: string;
} & React.ComponentProps<'div'>;
  
function MyComponent(props: MyComponentProps) {
  return (
    <div {...props}>
      <p>My Component</p>
    </div>
  );
}

export { MyComponent, type MyComponentProps };`}
                  >
                    <CodeHeader icon={CodeIcon} title="my-component.tsx"  className="dark:bg-white"/>
                    <CodeBlock lang={"python"} />
                  </Code> */}
                </div>

                {/* Floating accent dots */}
                <div
                  className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary/60 animate-float"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="absolute -bottom-6 -left-6 w-4 h-4 rounded-full bg-primary/40 animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-primary/50 animate-float"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </section>

      {/* Features */}
      <section id="services" className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            What I do
          </h2>
          <p
            className="text-muted-foreground text-center max-w-xl mx-auto mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A blend of development and design to deliver products that look and
            work great.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
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
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
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
        @keyframes violet-line-1 {
          0% {
            transform: translateX(-100%) translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(100%);
            opacity: 0;
          }
        }
        @keyframes violet-line-2 {
          0% {
            transform: translateX(-100%) translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%) translateY(100%);
            opacity: 0;
          }
        }
        @keyframes violet-line-3 {
          0% {
            transform: translateX(-100%) translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(100%) translateY(100%);
            opacity: 0;
          }
        }
        @keyframes violet-line-4 {
          0% {
            transform: translateX(-100%) translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            transform: translateX(100%) translateY(100%);
            opacity: 0;
          }
        }
        @keyframes violet-line-5 {
          0% {
            transform: translateX(-100%) translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%) translateY(100%);
            opacity: 0;
          }
        }
        @keyframes violet-flow-horizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes violet-flow-vertical {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animate-violet-line-1 {
          animation: violet-line-1 20s linear infinite;
        }
        .animate-violet-line-2 {
          animation: violet-line-2 25s linear infinite;
        }
        .animate-violet-line-3 {
          animation: violet-line-3 30s linear infinite;
        }
        .animate-violet-line-4 {
          animation: violet-line-4 22s linear infinite;
        }
        .animate-violet-line-5 {
          animation: violet-line-5 28s linear infinite;
        }
        .animate-violet-flow-horizontal {
          animation: violet-flow-horizontal 12s ease-in-out infinite;
        }
        .animate-violet-flow-vertical {
          animation: violet-flow-vertical 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;
