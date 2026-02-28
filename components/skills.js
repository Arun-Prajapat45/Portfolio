// components/SkillsPage.js
'use client';

import { motion } from 'framer-motion';
import {
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiPython, SiGit, SiTailwindcss,
  SiFigma, SiTensorflow, SiKeras, SiScikitlearn, SiMongodb
} from 'react-icons/si';
import { FaServer, FaMobileAlt, FaDatabase, FaCodeBranch } from 'react-icons/fa';

const skillsData = [
  {
    category: "Frontend",
    icon: <FaMobileAlt className="text-lg text-[#00d4ff]" />,
    technologies: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, proficiency: "Intermediate" },
      { name: "React", icon: <SiReact className="text-cyan-400" />, proficiency: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, proficiency: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" />, proficiency: "Expert" },
    ]
  },
  {
    category: "Backend",
    icon: <FaServer className="text-lg text-[#00d4ff]" />,
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, proficiency: "Advanced" },
      { name: "Express", icon: <SiExpress className="text-gray-300" />, proficiency: "Intermediate" },
      { name: "Python", icon: <SiPython className="text-blue-400" />, proficiency: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, proficiency: "Advanced" }
    ]
  },
  {
    category: "Machine Learning",
    icon: <FaDatabase className="text-lg text-[#00d4ff]" />,
    technologies: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" />, proficiency: "Basic" },
      { name: "Keras", icon: <SiKeras className="text-red-400" />, proficiency: "Basic" },
      { name: "scikit-learn", icon: <SiScikitlearn className="text-blue-400" />, proficiency: "Basic" },
      { name: "Pandas", icon: <SiPython className="text-blue-500" />, proficiency: "Advanced" },
      { name: "NumPy", icon: <SiPython className="text-green-400" />, proficiency: "Advanced" }
    ]
  },
  {
    category: "Tools & Other",
    icon: <FaCodeBranch className="text-lg text-[#00d4ff]" />,
    technologies: [
      { name: "Git", icon: <SiGit className="text-orange-500" />, proficiency: "Expert" },
      { name: "Figma", icon: <SiFigma className="text-purple-400" />, proficiency: "Intermediate" }
    ]
  }
];

const proficiencyLevels = {
  "Basic": "40%",
  "Intermediate": "70%",
  "Advanced": "85%",
  "Expert": "95%"
};

const proficiencyColors = {
  "Basic": "from-white/20 to-white/10",
  "Intermediate": "from-indigo-400/60 to-indigo-500/30",
  "Advanced": "from-[#00d4ff]/60 to-[#00d4ff]/20",
  "Expert": "from-[#00d4ff] to-[#00d4ff]/40"
};

export default function SkillsPage() {
  return (
    <div className="py-20 md:py-32 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Tech Arsenal
          </h2>
        </div>
        <p className="text-white/30 text-sm md:text-base max-w-2xl mb-12 mono">
          A comprehensive overview of the technologies I work with and my proficiency levels.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="cyber-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/[0.06] border border-[#00d4ff]/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                        {tech.icon}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-white/70 text-sm font-medium group-hover:text-[#00d4ff] transition-colors truncate">
                          {tech.name}
                        </h4>
                      </div>
                      <span className="mono text-[10px] text-white/20 tracking-wider flex-shrink-0">
                        {proficiencyLevels[tech.proficiency]}
                      </span>
                    </div>
                    <div className="h-[3px] bg-white/[0.04] rounded-full overflow-hidden ml-8">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: proficiencyLevels[tech.proficiency] }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${proficiencyColors[tech.proficiency]} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}