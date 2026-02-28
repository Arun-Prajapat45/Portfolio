// components/ContactPage.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Primary: Send notification to you
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE2_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Secondary: Send auto-reply to sender (best-effort, don't fail on this)
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      } catch (replyError) {
        console.warn("Auto-reply failed (non-critical):", replyError);
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("EmailJS Error: " + (error?.text || error?.message || JSON.stringify(error)));
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 md:py-32 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-2">
            Open
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8" style={{ WebkitTextStroke: "2px rgba(0, 212, 255, 0.5)", color: "transparent" }}>
            Frequency
          </h2>
          <p className="text-white/30 text-sm md:text-base max-w-lg mx-auto mono">
            Have a project in mind or want to collaborate? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="cyber-card rounded-xl p-6 md:p-8 corner-decoration"
          >
            <h3 className="text-xl font-bold text-white mb-1">Initiate Protocol</h3>
            <p className="text-white/25 text-sm mono mb-6">Send me a message</p>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg mono text-sm text-[#00d4ff]/80">
                ✅ Transmission successful. I&apos;ll respond shortly.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/5 border border-red-500/20 rounded-lg mono text-sm text-red-400/80">
                ❌ Transmission failed. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-white/30 mb-2 text-xs mono tracking-wider uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder-white/15 focus:outline-none focus:border-[#00d4ff]/30 focus:shadow-[0_0_15px_rgba(0,212,255,0.08)] transition-all mono"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/30 mb-2 text-xs mono tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder-white/15 focus:outline-none focus:border-[#00d4ff]/30 focus:shadow-[0_0_15px_rgba(0,212,255,0.08)] transition-all mono"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/30 mb-2 text-xs mono tracking-wider uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder-white/15 focus:outline-none focus:border-[#00d4ff]/30 focus:shadow-[0_0_15px_rgba(0,212,255,0.08)] transition-all mono"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/30 mb-2 text-xs mono tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder-white/15 focus:outline-none focus:border-[#00d4ff]/30 focus:shadow-[0_0_15px_rgba(0,212,255,0.08)] transition-all mono resize-none"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 font-semibold mono text-sm tracking-wider ${isSubmitting
                  ? "bg-white/5 cursor-not-allowed text-white/30 border border-white/[0.06]"
                  : "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  }`}
              >
                <FaPaperPlane className={`text-xs ${isSubmitting ? "animate-pulse" : ""}`} />
                {isSubmitting ? "TRANSMITTING..." : "SEND TRANSMISSION"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Cards */}
            <div className="cyber-card rounded-xl p-6 md:p-8 corner-decoration">
              <span className="mono text-[10px] text-white/20 tracking-[0.2em] uppercase block mb-5">
                Contact Information
              </span>

              <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/[0.04] border border-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/10 transition-all">
                    <FaMapMarkerAlt className="text-[#00d4ff]/60 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white/60 font-medium text-sm">Location</h4>
                    <p className="text-white/30 text-sm mono">Surat, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/[0.04] border border-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/10 transition-all">
                    <FaPhone className="text-[#00d4ff]/60 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white/60 font-medium text-sm">Phone</h4>
                    <p className="text-white/30 text-sm mono">+91 8000206775</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/[0.04] border border-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/10 transition-all">
                    <FaEnvelope className="text-[#00d4ff]/60 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white/60 font-medium text-sm">Email</h4>
                    <p className="text-white/30 text-sm mono">arun.op.prajapati@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-card rounded-xl p-6 md:p-8">
              <span className="mono text-[10px] text-white/20 tracking-[0.2em] uppercase block mb-4">
                Connect
              </span>
              <div className="flex gap-3">
                {[
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/arun-prajapat-671b442a0/", label: "LinkedIn" },
                  { icon: <FaGithub />, href: "https://github.com/Arun-Prajapat45", label: "GitHub" },
                  { icon: <FaInstagram />, href: "https://instagram.com/appy_ptarun_45/", label: "Instagram" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] rounded-lg border border-white/[0.06] hover:border-[#00d4ff]/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.08)] transition-all duration-300"
                  >
                    <span className="text-white/40 text-lg">{social.icon}</span>
                    <span className="mono text-xs text-white/30 hidden sm:inline">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="cyber-card rounded-xl p-6 md:p-8 flex items-center justify-center min-h-[120px]">
              <p className="text-white/15 text-lg md:text-xl italic text-center font-light">
                &quot;Let&apos;s build something amazing together.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
