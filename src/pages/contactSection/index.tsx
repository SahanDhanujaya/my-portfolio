'use client'
import { FireworksBackground } from "@/components/animate-ui/components/backgrounds/fireworks";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useState } from "react";

interface ContactForm {
  fName: string;
  lName: string;
  email: string;
  message: string;
}
const Contact = () => {
  const [activeForm, setActiveForm] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const emailProps = {
      from: formData.email,
      subject: `Message from ${formData.fName} ${formData.lName}`,
      text: formData.message,
    }
    await fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailProps),
    });
    setFormData({
      fName: "",
      lName: "",
      email: "",
      message: "",
    });
    setActiveForm(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6 ">
      {/* Hero CTA */}
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4">Interested in Working Together?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <Button
          onClick={() => setActiveForm(true)}
          size="lg"
          className="group px-8 py-6 text-lg rounded-full"
        >
          Get in Touch
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>

      {/* Contact Form and Details Card */}
      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-fade-in-scale
                          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">

            {/* ── Violet animated lines layer ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
              {/* Diagonal sweep lines */}
              <div className="violet-line vl-1" />
              <div className="violet-line vl-2" />
              <div className="violet-line vl-3" />
              <div className="violet-line vl-4" />
              <div className="violet-line vl-5" />
              {/* Horizontal flow */}
              <div className="violet-h-line vh-1" />
              <div className="violet-h-line vh-2" />
              {/* Vertical flow */}
              <div className="violet-v-line vv-1" />
              <div className="violet-v-line vv-2" />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveForm(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 flex flex-col md:flex-row dark:text-black">
              {/* Sidebar Info */}
              <div className="relative md:w-80 bg-linear-to-r from-violet-300 to-white p-8 flex flex-col gap-6 shrink-0 border">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-sm leading-relaxed text-primary/70 dark:text-black">
                    Fill out the form and I will get back to you within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-center gap-3 text-sm ">
                    <Mail className="w-6 h-6 p-1 rounded-lg shadow " />
                    <span>sahandhanujaya18@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-6 h-6 p-1 rounded-lg shadow " />
                    <span>0756519837</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-6 h-6 p-1 rounded-lg shadow " />
                    <span>Kandy, Sri Lanka</span>
                  </div>
                </div>
                <FireworksBackground className="absolute" />
              </div>

              {/* Form */}
              <div className="flex-1 p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">First Name</label>
                      <input
                        type="text"
                        className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                                   bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100
                                   focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                        placeholder="eg: Jane"
                        value={formData.fName}
                        onChange={(e) => setFormData({ ...formData, fName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Last Name</label>
                      <input
                        type="text"
                        className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                                   bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100
                                   focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                        placeholder="eg: Smith"
                        value={formData.lName}
                        onChange={(e) => setFormData({ ...formData, lName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
                    <input
                      type="email"
                      className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                                 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100
                                 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                        placeholder="eg: example@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                    <textarea
                      rows={5}
                      className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                                 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100
                                 focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"
                        placeholder="How can help you ?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button onClick={handleSubmit} className="w-full py-6 rounded-xl text-lg group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Violet line base ── */
        .violet-line {
          position: absolute;
          width: 160%;
          height: 1.5px;
          /* Light mode: subtle violet */
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(139,92,246,0.35) 30%,
            rgba(167,139,250,0.55) 50%,
            rgba(139,92,246,0.35) 70%,
            transparent 100%
          );
          transform-origin: center;
          will-change: transform, opacity;
        }

        /* Dark mode: brighter lines */
        @media (prefers-color-scheme: dark) {
          .violet-line {
            background: linear-gradient(90deg,
              transparent 0%,
              rgba(167,139,250,0.5) 30%,
              rgba(196,181,253,0.75) 50%,
              rgba(167,139,250,0.5) 70%,
              transparent 100%
            );
          }
          .violet-h-line {
            background: linear-gradient(90deg,
              transparent 0%,
              rgba(167,139,250,0.45) 50%,
              transparent 100%
            ) !important;
          }
          .violet-v-line {
            background: linear-gradient(180deg,
              transparent 0%,
              rgba(167,139,250,0.45) 50%,
              transparent 100%
            ) !important;
          }
        }

        /* Tailwind dark class support */
        .dark .violet-line {
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(167,139,250,0.5) 30%,
            rgba(196,181,253,0.75) 50%,
            rgba(167,139,250,0.5) 70%,
            transparent 100%
          );
        }
        .dark .violet-h-line {
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(167,139,250,0.45) 50%,
            transparent 100%
          ) !important;
        }
        .dark .violet-v-line {
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(167,139,250,0.45) 50%,
            transparent 100%
          ) !important;
        }

        /* Diagonal positions & animations */
        .vl-1 { top: 18%;  animation: diag-sweep 18s linear infinite 0s; }
        .vl-2 { top: 35%;  animation: diag-sweep 24s linear infinite 4s; }
        .vl-3 { top: 52%;  animation: diag-sweep 20s linear infinite 8s; }
        .vl-4 { top: 68%;  animation: diag-sweep 28s linear infinite 2s; }
        .vl-5 { top: 82%;  animation: diag-sweep 22s linear infinite 6s; }

        @keyframes diag-sweep {
          0%   { transform: translateX(-80%) rotate(-12deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(80%)  rotate(-12deg); opacity: 0; }
        }

        /* Horizontal thin lines */
        .violet-h-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(139,92,246,0.3) 50%,
            transparent 100%
          );
          will-change: transform, opacity;
        }
        .vh-1 { top: 30%; animation: h-flow 12s ease-in-out infinite 0s; }
        .vh-2 { top: 65%; animation: h-flow 15s ease-in-out infinite 5s; }

        @keyframes h-flow {
          0%   { transform: translateX(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(100%);  opacity: 0; }
        }

        /* Vertical thin lines */
        .violet-v-line {
          position: absolute;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(139,92,246,0.3) 50%,
            transparent 100%
          );
          will-change: transform, opacity;
        }
        .vv-1 { left: 40%;  animation: v-flow 14s ease-in-out infinite 3s; }
        .vv-2 { left: 75%;  animation: v-flow 18s ease-in-out infinite 7s; }

        @keyframes v-flow {
          0%   { transform: translateY(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }

        /* ── Page-level animations ── */
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Contact;