"use client";
import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp } from "lucide-react";

interface FloatingNavProps {
  onOpenContact: () => void;
}

const FloatingNavigator = ({ onOpenContact }: FloatingNavProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[60] flex flex-col gap-3 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      {/* Scroll to Top Button (Optional but helpful) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
      >
        <ArrowUp className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
      </button>

      {/* The "Get in Touch" Pop-up Button */}
      <button
        onClick={onOpenContact}
        className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-full shadow-xl shadow-violet-500/20 transition-all hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-medium">Get in Touch</span>
      </button>
    </div>
  );
};

export default FloatingNavigator;