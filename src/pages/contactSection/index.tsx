"use client";

import { FireworksBackground } from "@/components/animate-ui/components/backgrounds/fireworks";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface ContactForm {
  fName: string;
  lName: string;
  email: string;
  message: string;
}

const initialFormData: ContactForm = {
  fName: "",
  lName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [activeForm, setActiveForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<ContactForm>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fName.trim()) {
      toast.error("First name is required");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email address is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSending(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          first_name: formData.fName,
          last_name: formData.lName,
          user_email: formData.email,
          from_name: `${formData.fName} ${formData.lName}`,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      toast.success("Message sent successfully");
      setFormData(initialFormData);
      setActiveForm(false);
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to build something meaningful together.
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

      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pb-8 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in-scale bg-background border border-border">
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none z-0"
              aria-hidden="true"
            >
              <div className="violet-line vl-1" />
              <div className="violet-line vl-2" />
              <div className="violet-line vl-3" />
              <div className="violet-line vl-4" />
              <div className="violet-line vl-5" />
              <div className="violet-h-line vh-1" />
              <div className="violet-h-line vh-2" />
              <div className="violet-v-line vv-1" />
              <div className="violet-v-line vv-2" />
            </div>

            <button
              onClick={() => !isSending && setActiveForm(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-20"
              aria-label="Close contact form"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 grid md:grid-cols-[320px_1fr]">
              <div className="relative p-8 md:p-10 bg-linear-to-br from-primary/15 via-primary/5 to-transparent border-r border-border">
                <div className="relative z-10 h-full flex flex-col">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      Contact Information
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Fill out the form and I’ll get back to you as soon as
                      possible.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-10">
                    <div className="flex items-center gap-3 text-sm text-foreground">
                      <Mail className="w-10 h-10 p-2 rounded-xl bg-background/80 border border-border shadow-sm text-primary" />
                      <span>sahandhanujaya18@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground">
                      <Phone className="w-10 h-10 p-2 rounded-xl bg-background/80 border border-border shadow-sm text-primary" />
                      <span>0756519837</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground">
                      <MapPin className="w-10 h-10 p-2 rounded-xl bg-background/80 border border-border shadow-sm text-primary" />
                      <span>Kandy, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="rounded-2xl border border-primary/15 bg-background/70 backdrop-blur-md px-4 py-4">
                      <p className="text-sm text-muted-foreground">
                        Available for freelance work, internships, and software
                        projects.
                      </p>
                    </div>
                  </div>
                </div>

                <FireworksBackground className="absolute inset-0 opacity-40" />
              </div>

              <div className="p-8 md:p-10">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fName"
                        placeholder="John"
                        value={formData.fName}
                        onChange={handleChange}
                        disabled={isSending}
                        className="px-4 py-3 rounded-xl border border-border bg-muted/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lName"
                        placeholder="Doe"
                        value={formData.lName}
                        onChange={handleChange}
                        disabled={isSending}
                        className="px-4 py-3 rounded-xl border border-border bg-muted/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="[email protected]"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSending}
                      className="px-4 py-3 rounded-xl border border-border bg-muted/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSending}
                      className="px-4 py-3 rounded-xl border border-border bg-muted/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-6 rounded-xl text-lg group"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .violet-line {
          position: absolute;
          width: 160%;
          height: 1.5px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(139, 92, 246, 0.35) 30%,
            rgba(167, 139, 250, 0.55) 50%,
            rgba(139, 92, 246, 0.35) 70%,
            transparent 100%
          );
          transform-origin: center;
          will-change: transform, opacity;
        }

        .dark .violet-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167, 139, 250, 0.5) 30%,
            rgba(196, 181, 253, 0.75) 50%,
            rgba(167, 139, 250, 0.5) 70%,
            transparent 100%
          );
        }

        .violet-h-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(139, 92, 246, 0.3) 50%,
            transparent 100%
          );
          will-change: transform, opacity;
        }

        .violet-v-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(139, 92, 246, 0.3) 50%,
            transparent 100%
          );
          will-change: transform, opacity;
        }

        .dark .violet-h-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167, 139, 250, 0.45) 50%,
            transparent 100%
          ) !important;
        }

        .dark .violet-v-line {
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(167, 139, 250, 0.45) 50%,
            transparent 100%
          ) !important;
        }

        .vl-1 { top: 18%; animation: diag-sweep 18s linear infinite 0s; }
        .vl-2 { top: 35%; animation: diag-sweep 24s linear infinite 4s; }
        .vl-3 { top: 52%; animation: diag-sweep 20s linear infinite 8s; }
        .vl-4 { top: 68%; animation: diag-sweep 28s linear infinite 2s; }
        .vl-5 { top: 82%; animation: diag-sweep 22s linear infinite 6s; }

        .vh-1 { top: 30%; animation: h-flow 12s ease-in-out infinite 0s; }
        .vh-2 { top: 65%; animation: h-flow 15s ease-in-out infinite 5s; }

        .vv-1 { left: 40%; animation: v-flow 14s ease-in-out infinite 3s; }
        .vv-2 { left: 75%; animation: v-flow 18s ease-in-out infinite 7s; }

        @keyframes diag-sweep {
          0%   { transform: translateX(-80%) rotate(-12deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(80%) rotate(-12deg); opacity: 0; }
        }

        @keyframes h-flow {
          0%   { transform: translateX(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes v-flow {
          0%   { transform: translateY(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
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
