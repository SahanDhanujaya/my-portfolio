"use client";
import { FireworksBackground } from "@/components/animate-ui/components/backgrounds/fireworks";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [activeForm, setActiveForm] = useState(false);
  // Create the ref at the top level of the component
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace these with your real IDs from the EmailJS Dashboard
    const serviceID = "service_degohk9";
    const templateID = "template_wgjxm3e";
    const publicKey = "9djKixHFkO1MeL7vt";

    if (formRef.current) {
      emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message Sent! I will get back to you soon.");
          setActiveForm(false); // Close the modal
          // Reset form
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send...", error.text);
          alert("Oops! Something went wrong. Please try again.");
        },
      );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6">
      {/* Hero CTA */}
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
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

      {/* Contact Form Modal */}
      {activeForm && (
        <div className="fixed inset-0 z-999 flex items-end justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-2xl shadow-2xl animate-fade-in-scale
                          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row"
          >
            {/* ── Background Animations ── */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none z-0"
              aria-hidden="true"
            >
              <div className="violet-line vl-1" />
              <div className="violet-line vl-2" />
              <div className="violet-line vl-3" />
              <div className="violet-h-line vh-1" />
              <div className="violet-v-line vv-1" />
            </div>

            {/* Close Button - Increased Z-index */}
            <button
              onClick={() => setActiveForm(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-50 text-zinc-500"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sidebar Info */}
            <div className="relative md:w-80 bg-violet-100 dark:bg-violet-950/30 p-8 flex flex-col gap-8 shrink-0 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">
                  Contact Info
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Fill out the form and I will get back to you within 24 hours.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-6 mt-auto">
                <div className="flex items-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                    <Mail className="w-5 h-5 text-violet-600" />
                  </div>
                  <span>sahandhanujaya18@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                    <Phone className="w-5 h-5 text-violet-600" />
                  </div>
                  <span>0756519837</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                    <MapPin className="w-5 h-5 text-violet-600" />
                  </div>
                  <span>Kandy, Sri Lanka</span>
                </div>
              </div>

              {/* Fireworks in background of sidebar only */}
              <div className="absolute inset-0 z-0 opacity-50">
                <FireworksBackground />
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 p-8 md:p-12 relative z-10">
              {/* Linked the Ref here and the onSubmit handler */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      First Name
                    </label>
                    <input
                      name="first_name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                                   bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100
                                   focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Last Name
                    </label>
                    <input
                      name="last_name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                                   bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100
                                   focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                               bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100
                               focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700
                               bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100
                               focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  className="w-full py-7 rounded-xl text-lg group bg-violet-600 hover:bg-violet-700 text-white"
                  type="submit"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .violet-line { position: absolute; width: 160%; height: 1.5px; will-change: transform; pointer-events: none; }
        .vl-1 { top: 18%; animation: diag-sweep 18s linear infinite; background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent); }
        @keyframes diag-sweep {
          0% { transform: translateX(-80%) rotate(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(80%) rotate(-12deg); opacity: 0; }
        }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-scale { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Contact;
