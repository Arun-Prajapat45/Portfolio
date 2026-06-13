'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Adoreprints",
    description: "An end-to-end E-Commerce Web application for printing needs, providing a seamless experience from design to delivery.",
    tags: ["Next.js", "MySQL", "React-Konva", "TailwindCSS"],
    category: "Web",
    status: "Live",
    liveLink: "https://adorprints.in/",
    codeLink: "https://github.com/Arun-Prajapat45/OMGS"
  },
  {
    title: "CryptoPulse",
    description: "A real-time full-stack web application for cryptocurrency price analysis and forecasting. Achieved 91-99% accuracy using LSTM and Gradient Boosting Algorithms.",
    tags: ["React", "Python", "FastAPI", "MongoDB", "Binance api", "GoogleAuth"],
    category: "Web",
    status: "Live",
    liveLink: "https://github.com/Springboard-Internship-2025/ML-Driven-Web-Platform-for-Cryptocurrency-Price-Forecasting_November_Batch-5_2025/tree/Arun/WebApplication",
    codeLink: "https://github.com/Springboard-Internship-2025/ML-Driven-Web-Platform-for-Cryptocurrency-Price-Forecasting_November_Batch-5_2025/tree/Arun/WebApplication"
  },
  {
    title: "AI Research Assistant",
    description: " AI Research Assistant chatbot with long term memory that processes research papers and dynamically handle search, summarization, and citation generation..",
    tags: ["Python", "Streamlit", "LangChain", "LangGraph", "LangSmith", "GROQ API", "RAG"],
    category: "AI",
    status: "Live",
    liveLink: "https://github.com/Arun-Prajapat45/AI-Research-Assistant",
    codeLink: "https://github.com/Arun-Prajapat45/AI-Research-Assistant"
  },
  {
    title: "Postal Automation",
    description: "An end-to-end automation pipeline (Image Acquisition → Preprocessing → DAB Detection → OCR → Entity Validation → Auto-Correction) to extract destination address from postcard images.",
    tags: ["Python", "OpenCV", "Scikit-learn", "Streamlit", "FastAPI", "MongoDB"],
    category: "ML",
    status: "Live",
    liveLink: "https://github.com/Arun-Prajapat45/Postal_Automation-",
    codeLink: "https://github.com/Arun-Prajapat45/Postal_Automation-"
  },
  {
    title: "MovieFlix",
    description: "A Hybrid Movie Recommendation System using Collaborative Filtering and Content-Based Filtering.",
    tags: ["Python", "Scikit-learn", "Next.js", "TailwindCSS", "MongoDB"],
    category: "Web",
    status: "Live",
    liveLink: "https://github.com/Arun-Prajapat45/end-to-end-Movie-Recommender-System",
    codeLink: "https://github.com/Arun-Prajapat45/end-to-end-Movie-Recommender-System"
  },
  {
    title: "Plant Disease Detection",
    description: "Developed Mixture of Experts deep learning system using Python and TensorFlow (Keras) to detect plant leaf diseases with more than 97% accuracy. Engineered a custom Gate Network (CNN) that dynamically assigns weights to VGG16, VGG19, InceptionV3, and ResNet101 predictions based on input image patterns.",
    tags: ["Python", "TensorFlow", "Keras"],
    category: "ML",
    status: "",
    liveLink: "https://github.com/Arun-Prajapat45/Plant-Leaf-Disease-Detection",
    codeLink: "https://github.com/Arun-Prajapat45/Plant-Leaf-Disease-Detection"
  }
];

const categories = ["All", "Web", "ML", "AI"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-10 md:py-2 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 gap-8">
          <div>
            <h2 className="text-5xl md:text-5xl lg:text-6xl font-black text-white leading-none mb-2">
              Featured
            </h2>
            <h2 className="text-5xl md:text-5xl lg:text-6xl font-black leading-none" style={{ WebkitTextStroke: "2px rgba(0, 212, 255, 0.5)", color: "transparent" }}>
              Work
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="cyber-card rounded-xl p-6 md:p-8 relative corner-decoration group"
              >
                {/* Top Row: Category + Status */}
                <div className="flex items-center justify-between mb-6">
                  <span className="mono text-xs text-[#00d4ff] tracking-widest uppercase font-semibold px-3 py-1 bg-[#00d4ff]/[0.06] rounded border border-[#00d4ff]/15">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="status-dot" />
                    <span className="mono text-xs text-white/40 tracking-wider">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00d4ff]/90 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm md:text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Matrix */}
                <div className="mb-6">
                  <span className="mono text-[10px] text-white/20 tracking-[0.2em] uppercase block mb-3">
                    Tech Matrix
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/[0.04]">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/40 hover:text-[#00d4ff] transition-colors mono text-xs tracking-wider"
                  >
                    <ExternalLink size={14} />
                    LIVE DEMO
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/40 hover:text-[#00d4ff] transition-colors mono text-xs tracking-wider"
                  >
                    <Github size={14} />
                    SOURCE
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}