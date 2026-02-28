// components/AboutPage.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Commander Bio
          </h2>
        </div>

        {/* Single full-width card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cyber-card rounded-xl p-6 md:p-10 corner-decoration"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 md:gap-12">
            {/* Left: Profile image + identity */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border border-[#00d4ff]/20 flex-shrink-0">
                <Image
                  src="/portfolio-profile.jpeg"
                  alt="Arun Prajapat"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00d4ff]/[0.04] border border-[#00d4ff]/10">
                <div className="w-2 h-2 rounded-full status-dot-green" />
                <span className="mono text-xs text-white/40 tracking-wider">ONLINE</span>
              </div>
            </div>

            {/* Right: All text content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Arun Prajapat</h3>
              <p className="text-[#00d4ff] mono text-sm mb-6">Full Stack Developer &bull; AI-ML Enthusiast</p>

              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-4">
                I&apos;m a passionate full-stack developer with a strong foundation in
                the MERN stack and a growing interest in Artificial Intelligence,
                Machine Learning, and Deep Learning.
              </p>
              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-4">
                I enjoy building responsive web applications that not only look
                great but also solve real-world problems. Currently focused on
                combining my web development skills with intelligent systems to
                create smarter, data-driven experiences.
              </p>
              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8">
                My journey into tech is driven by curiosity and a desire to build
                things that make a difference. From crafting pixel-perfect UIs to
                training deep learning models, I thrive at the intersection of
                creativity and code.
              </p>

              {/* Education */}
              <div className="pt-6 border-t border-white/[0.04]">
                <span className="mono text-[10px] text-white/20 tracking-[0.2em] uppercase block mb-3">
                  Education
                </span>
                <div className="bg-white/[0.02] p-4 rounded-lg border border-white/[0.04]">
                  <h4 className="text-white/80 font-medium text-sm mb-1">
                    Computer Science Engineering
                  </h4>
                  <p className="text-[#00d4ff]/50 mono text-xs">IIITV &mdash; 2k27</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}