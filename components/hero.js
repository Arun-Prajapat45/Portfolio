// components/HeroCard.js
"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

export default function HeroCard() {
  const [displayedText, setDisplayedText] = useState("");
  const texts = [
    " Full Stack Developer",
    " Data Analyst",
    " AI-ML Enthusiast",
    " Agentic AI Developer"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  // Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter — 2s to type, 1s pause, ~0.7s delete ≈ 4s per text
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    if (!currentText) return;

    // Typing finished → pause 1 second then start deleting
    if (!isDeleting && charIndex === currentText.length) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pauseTimer);
    }

    // Calculate per-char speed: 2000ms spread across all characters
    const typeSpeed = Math.floor(2000 / currentText.length);
    // Delete faster: ~700ms total
    const deleteSpeed = Math.floor(700 / currentText.length);

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Arun_Prajapat_resume.pdf";
    link.download = "Arun_Prajapat_Resume.pdf";
    link.click();
  };

  const scrollToWork = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const marqueeItems = [
    "GATE 2026 QUALIFIED",
    "●",
    "FULL STACK DEVELOPER",
    "●",
    "AI-ML ENTHUSIAST",
    "●",
    "Generative AI Enthusiast",
    "●",
    "DATA ANALYST",
    "●",
    "CODECHEF 2★",
    "●",
    "LEETCODE 1681",
    "●",
  ];

  return (
    <div className="relative">
      {/* Marquee Ticker Bar */}
      <div className="w-full border-b border-[#00d4ff]/10 bg-[#050510]/80 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center h-10">
          {/* Left: Scrolling Marquee */}
          <div className="flex-1 overflow-hidden relative">
            <div className="marquee-track flex items-center whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className={`mx-4 mono text-xs tracking-widest ${item === "●"
                    ? "text-[#00d4ff]/40"
                    : "text-white/40"
                    }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Status + Clock */}
          <div className="hidden sm:flex items-center gap-4 px-4 border-l border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="text-[#00d4ff] text-xs">▶</span>
              <span className="mono text-xs text-[#00d4ff] tracking-wider font-semibold">
                Protocol: START
              </span>
            </div>
            <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <span className="mono text-xs text-white/40">⊕ LOCAL:</span>
              <span className="mono text-xs text-white/60 font-medium">
                {currentTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="w-full max-w-6xl text-center">
          {/* Greeting Label */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#00d4ff]/[0.05] border border-[#00d4ff]/10">
            <div className="w-2 h-2 rounded-full status-dot-green" />
            <span className="mono text-xs text-white/50 tracking-widest uppercase">
              Available for Work
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none mb-4">
            Arun
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6" style={{ WebkitTextStroke: "2px rgba(0, 212, 255, 0.4)", color: "transparent" }}>
            Prajapat
          </h1>

          {/* Typewriter Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-white/40 text-lg md:text-xl mono">$</span>
            <span className="text-[#00d4ff] text-lg md:text-xl mono font-medium">
              {displayedText}
            </span>
            <span className="animate-pulse text-[#00d4ff] text-lg md:text-xl">▊</span>
          </div>

          {/* Description */}
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            MERN Stack Developer with a strong passion for AI, Machine
            Learning, and Deep Learning — building intelligent and scalable
            web applications that blend data-driven insights with modern UI/UX.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToWork}
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm mono tracking-wider"
            >
              View Selected Work
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-8 py-3 border border-[#00d4ff]/30 text-[#00d4ff] font-medium rounded-full hover:bg-[#00d4ff]/10 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] transition-all duration-300 text-sm mono tracking-wider"
            >
              <FaDownload className="w-3.5 h-3.5" />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://www.linkedin.com/in/arun-prajapat-671b442a0/"
              target="_blank"
              className="text-white/30 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#00d4ff]"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/Arun-Prajapat45"
              target="_blank"
              className="text-white/30 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#00d4ff]"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/appy_ptarun_45/"
              target="_blank"
              className="text-white/30 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#00d4ff]"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}