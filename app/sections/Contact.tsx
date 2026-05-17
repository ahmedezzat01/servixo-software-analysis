"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  UserCheck,
  Send,
  ArrowUp,
  Crown,
  Presentation,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Project <span className="text-accent">Contact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal">
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Supervision</h3>

              <div className="space-y-6">
                {/* Doctor */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Nesma Ibrahim</h4>
                    <p className="text-sm text-muted">Course Supervisor</p>
                    <p className="text-sm text-muted mt-1">System Analysis Course</p>
                  </div>
                </div>

                {/* TA */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <UserCheck size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Eng. Menna El-Zawawy</h4>
                    <p className="text-sm text-muted">Teaching Assistant</p>
                  </div>
                </div>

                <div className="h-px bg-glass-border my-6" />

                {/* Team Leaders */}
                <h3 className="text-lg font-semibold mb-4">Team Leadership</h3>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                    <Crown size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">El-Sayed Helmy</h4>
                    <p className="text-sm text-muted">Team Leader</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Presentation size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ahmed Ezzat</h4>
                    <p className="text-sm text-muted">Presentation Lead</p>
                  </div>
                </div>

                <div className="h-px bg-glass-border my-6" />

                {/* All Members */}
                <h3 className="text-lg font-semibold mb-4">Team 6 Members</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Ahmed Ezzat",
                    "El-Sayed Helmy",
                    "Khaled Abukhalifa",
                    "Raneem Eissa",
                    "Rawan El-Khatib",
                    "Shahd Lotfy",
                  ].map((name, i) => (
                    <span key={i} className="text-sm text-muted">
                      {name}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-glass-border my-6" />

                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent" />
                  <span className="text-sm text-muted">College of Computer Science — 2025-2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Send Message</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg">Message Sent!</h4>
                  <p className="text-muted text-sm mt-2">Thank you for reaching out.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:border-accent/50 focus:outline-none text-sm transition-colors"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:border-accent/50 focus:outline-none text-sm transition-colors"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:border-accent/50 focus:outline-none text-sm transition-colors"
                      placeholder="Message subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:border-accent/50 focus:outline-none text-sm transition-colors resize-none"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 magnetic-btn"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-glass-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">S</span>
              </div>
              <span className="font-semibold">Srvixo SA</span>
            </div>

            {/* Links */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted mb-8">
              <button onClick={scrollToTop} className="hover:text-white transition-colors">
                Overview
              </button>
              <button onClick={scrollToTop} className="hover:text-white transition-colors">
                Diagrams
              </button>
              <button onClick={scrollToTop} className="hover:text-white transition-colors">
                Team
              </button>
            </div>
          </div>

          <div className="text-center mt-8 pb-8">
            <p className="text-xs text-muted">
              © 2025-2026 Servixo Project — Team 6 — System Analysis
            </p>
            <p className="text-xs text-muted mt-1">
              Dr. Nesma Ibrahim — Eng. Menna El-Zawawy
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center hover:bg-accent/30 transition-all z-50 group pulse-ring"
      >
        <ArrowUp size={18} className="text-accent group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </section>
  );
}