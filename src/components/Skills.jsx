import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages & Core" },
  { id: "web", label: "Web & Frameworks" },
  { id: "data-ai", label: "Data & AI/ML" },
  { id: "tools", label: "DevOps & Tools" },
  { id: "soft", label: "Professional" },
];

const allSkills = [
  // Languages & Core
  {
    name: "Java",
    category: "languages",
    level: "Proficient",
    levelType: "proficient",
    icon: "☕",
    description: "OOP, Multithreading, Core Java & DSA",
  },
  {
    name: "Python",
    category: "languages",
    level: "Proficient",
    levelType: "proficient",
    icon: "🐍",
    description: "Data Engineering, AI/ML scripting & automation",
  },
  {
    name: "C / C++",
    category: "languages",
    level: "Intermediate",
    levelType: "intermediate",
    icon: "⚙️",
    description: "Systems programming, memory management & logic",
  },
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    level: "Proficient",
    levelType: "proficient",
    icon: "🟨",
    description: "Async/Await, DOM, Modern frontend logic",
  },
  {
    name: "SQL & Databases",
    category: "languages",
    level: "Proficient",
    levelType: "proficient",
    icon: "🗄️",
    description: "Relational modeling, complex queries & indexing",
  },

  // Web & Frameworks
  {
    name: "React.js",
    category: "web",
    level: "Proficient",
    levelType: "proficient",
    icon: "⚛️",
    description: "Hooks, SPA routing, state management & UI",
  },
  {
    name: "Node.js & Express",
    category: "web",
    level: "Intermediate",
    levelType: "intermediate",
    icon: "🟢",
    description: "REST APIs, middleware & backend services",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    level: "Proficient",
    levelType: "proficient",
    icon: "🎨",
    description: "Responsive layouts, animations & design systems",
  },
  {
    name: "HTML5 & Modern CSS",
    category: "web",
    level: "Proficient",
    levelType: "proficient",
    icon: "🌐",
    description: "Semantic web, flexbox/grid, accessibility",
  },

  // Data Engineering & AI/ML
  {
    name: "Machine Learning",
    category: "data-ai",
    level: "Proficient",
    levelType: "proficient",
    icon: "🤖",
    description: "Supervised/Unsupervised models & evaluation",
  },
  {
    name: "Data Structures & Algorithms",
    category: "data-ai",
    level: "Proficient",
    levelType: "proficient",
    icon: "🌲",
    description: "Trees, Graphs, DP, Sorting & Optimization",
  },
  {
    name: "Pandas & NumPy",
    category: "data-ai",
    level: "Proficient",
    levelType: "proficient",
    icon: "📊",
    description: "Data manipulation, pipelines & analysis",
  },
  {
    name: "MongoDB",
    category: "data-ai",
    level: "Proficient",
    levelType: "proficient",
    icon: "🍃",
    description: "NoSQL document storage & aggregation",
  },
  {
    name: "AI Fundamentals",
    category: "data-ai",
    level: "Proficient",
    levelType: "proficient",
    icon: "🧠",
    description: "Neural net concepts, IBM & Infosys certified",
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Tools / Frameworks",
    levelType: "tool",
    icon: "🐙",
    description: "Branching workflows, version control & CI",
  },
  {
    name: "Linux & Unix Shell",
    category: "tools",
    level: "Tools / Frameworks",
    levelType: "tool",
    icon: "🐧",
    description: "Bash scripting, process & network management",
  },
  {
    name: "Docker Basics",
    category: "tools",
    level: "Tools / Frameworks",
    levelType: "tool",
    icon: "🐳",
    description: "Containerization & reproducible environments",
  },
  {
    name: "Postman & REST",
    category: "tools",
    level: "Tools / Frameworks",
    levelType: "tool",
    icon: "📮",
    description: "API testing, validation & documentation",
  },
  {
    name: "Vite & Build Tools",
    category: "tools",
    level: "Tools / Frameworks",
    levelType: "tool",
    icon: "⚡",
    description: "Fast frontend bundler & optimization",
  },

  // Professional & Soft Skills
  {
    name: "Problem Solving",
    category: "soft",
    level: "Core Competency",
    levelType: "core",
    icon: "💡",
    description: "Analytical decomposition of complex challenges",
  },
  {
    name: "Technical Leadership",
    category: "soft",
    level: "Core Competency",
    levelType: "core",
    icon: "🏆",
    description: "MoE Innovation Ambassador & project lead",
  },
  {
    name: "Agile & Scrum",
    category: "soft",
    level: "Core Competency",
    levelType: "core",
    icon: "🔄",
    description: "Iterative sprints, collaboration & delivery",
  },
  {
    name: "Clear Communication",
    category: "soft",
    level: "Core Competency",
    levelType: "core",
    icon: "💬",
    description: "Cross-functional presentation & documentation",
  },
];

function getLevelBadgeStyle(levelType) {
  switch (levelType) {
    case "proficient":
      return {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        dot: "bg-emerald-400",
      };
    case "intermediate":
      return {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-300",
        dot: "bg-cyan-400",
      };
    case "tool":
      return {
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
        text: "text-violet-300",
        dot: "bg-violet-400",
      };
    case "core":
    default:
      return {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-300",
        dot: "bg-amber-400",
      };
  }
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <SectionReveal id="skills" className="py-24 px-6 relative">
      {/* Background blobs */}
      <div className="blob blob-cyan w-[400px] h-[400px] -right-40 top-1/4" />
      <div className="blob blob-violet w-[300px] h-[300px] -left-20 bottom-20" />

      <motion.div variants={SectionReveal.itemVariants} className="max-w-6xl mx-auto">
        <h2 className="section-heading gradient-text">Skills & Expertise</h2>
        <p className="text-slate-300 text-center mb-8 text-sm md:text-base font-normal max-w-xl mx-auto">
          Categorized technical competencies, frameworks, and developer toolchains
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#06d6a0] to-[#22d3ee] text-[#0a0e1a] font-semibold shadow-md shadow-[#06d6a0]/20"
                    : "glass-card text-slate-300 hover:text-white hover:border-[#06d6a0]/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Proficiency Legend */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-10 px-4 py-3 glass-card max-w-2xl mx-auto text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-200 font-medium">Proficient</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-200 font-medium">Intermediate</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-slate-200 font-medium">Tools / Frameworks</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-slate-200 font-medium">Core Competency</span>
          </div>
        </div>

        {/* Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const badge = getLevelBadgeStyle(skill.levelType);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="glass-card p-5 group flex flex-col justify-between hover:border-[#06d6a0]/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-[#06d6a0] transition-colors text-base font-display">
                            {skill.name}
                          </h3>
                        </div>
                      </div>

                      {/* Proficiency Tag */}
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${badge.bg} ${badge.border} ${badge.text}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </SectionReveal>
  );
}