// components/ExperiencesPage.js
'use client';

import { motion } from 'framer-motion';


const experiences = [
  {
    type: "research",
    title: "Research Intern",
    institution: "Indian Institute of Information Technology Vadodara",
    period: "JUN 2026 - PRESENT",
    description:
      "Conducting research in Artificial Intelligence and Machine Learning, focusing on applied research, experimentation, and model development."
  },
  {
    type: "internship",
    title: "Software Developer Intern",
    institution: "Ideal Web Infotech",
    period: "MAY 2026 - PRESENT",
    description:
      "Working on full-stack web development projects, developing scalable web applications, APIs, and modern user-centric digital solutions."
  },
  {
    type: "teaching",
    title: "Teaching Assistant – Experimental Physics",
    institution: "Indian Institute of Information Technology Vadodara",
    period: "JAN 2026 - APR 2026",
    description:
      "Assisted faculty in conducting laboratory sessions, mentoring students, evaluating assignments, and supporting practical experiments in Experimental Physics."
  },
  {
    type: "internship",
    title: "AI/ML Engineer Intern",
    institution: "Infosys Springboard",
    period: "NOV 2025 - JAN 2026",
    description:
      "Developed CryptoPulse, a real-time cryptocurrency forecasting platform using Machine Learning and Full-Stack technologies for market analysis and prediction."
  }
];

export default function ExperiencesPage() {
  return (
    <div className="py-10 md:py-2 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Mission Log
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-8">
          {/* Vertical Line */}
          <div className="timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className="timeline-dot" style={{ top: "28px" }} />

                {/* Card */}
                <div className="cyber-card rounded-xl p-6 md:p-8 corner-decoration">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[#00d4ff] mono text-sm">
                        {exp.company || exp.institution}
                      </p>
                    </div>
                    <span className="mono text-xs text-white/30 tracking-wider px-3 py-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  {exp.description && (
                    <p className="text-white/35 text-sm leading-relaxed border-l-2 border-white/[0.06] pl-4">
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}