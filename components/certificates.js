'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: "AI/ML Internship Certificate | Infosys Springboard",
    description: "This program is designed to provide a strong foundation in AI and Machine Learning concepts. It covers topics such as data preprocessing, model training, evaluation, and deployment. The program also includes hands-on projects to help learners apply their knowledge to real-world problems.",
    tags: ["Data Preprocessing", "Model Training", "Model Evaluation", "Model Deployment"],
    viewLink: "https://drive.google.com/file/d/1ch_1bThxcq0pNtB_ciVDuyWxcXkbo1d6/view?usp=drive_link",
    issuer: "Infosys Springboard",
    status: "Verified"
  },
  {
    title: "Infosys Springboard Data Science",
    description: "An intensive program focused on machine learning foundations, optimization, and large-scale model applications.",
    tags: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    viewLink: "https://drive.google.com/file/d/1xqScMDsAgLZ5JaxwNZWx9JSc_VuUSemi/view?usp=drive_link",
    issuer: "Infosys Springboard",
    status: "Verified"
  },
  {
    title: "Infosys Springboard Deep Learning",
    description: "An intensive program focused on machine learning foundations, optimization, and large-scale model applications.",
    tags: ["Deep Learning", "Neural Networks", "Optimization"],
    viewLink: "https://drive.google.com/file/d/1Y-ZeyxHW3ZrNTsNGDcFnYQQxW94sGUa2/view?usp=drive_link",
    issuer: "Infosys Springboard",
    status: "Verified"
  },
  {
    title: "Infosys Springboard NLP",
    description: "Comprehensive certification covering data analytics, machine learning, and cloud-based AI solutions.",
    tags: ["NLP", "Data Science", "Machine Learning", "AI"],
    viewLink: "https://drive.google.com/file/d/1OauWAF9VBA8bUBamtx27VGUu1waKrkT8/view?usp=drive_link",
    issuer: "Infosys Springboard",
    status: "Verified"
  },
  {
    title: "NVIDIA Deep Learning Fundamentals",
    description: "Hands-on training on neural networks, GPU computing, and deep learning model development.",
    tags: ["Deep Learning", "CUDA", "GPU Computing", "AI"],
    viewLink: "https://drive.google.com/file/d/1ljYWbNodsNTikJJzUqsEEJG3jqqyIL7U/view?usp=drive_link",
    issuer: "NVIDIA",
    status: "Certified"
  }
];

export default function CertificatesPage() {
  return (
    <div className="py-20 md:py-32 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Certifications
          </h2>
        </div>
        <p className="text-white/30 text-sm md:text-base max-w-2xl mb-12 mono">
          Professional certifications and achievements representing continuous learning.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="cyber-card rounded-xl p-6 md:p-8 corner-decoration group"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#00d4ff]/60" />
                  <span className="mono text-xs text-[#00d4ff]/60 tracking-widest uppercase">
                    {cert.issuer}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00e5a0] shadow-[0_0_6px_rgba(0,229,160,0.5)]" />
                  <span className="mono text-xs text-white/30 tracking-wider">
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff]/90 transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-white/35 text-sm mb-5 leading-relaxed">
                {cert.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/[0.04]">
                <a
                  href={cert.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-[#00d4ff] transition-colors mono text-xs tracking-wider"
                >
                  <ExternalLink size={14} />
                  VIEW CERTIFICATE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
