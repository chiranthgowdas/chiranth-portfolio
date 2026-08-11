import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";

const techSkills = [
  { name: "Java", level: 90, icon: "☕" },
  { name: "Python", level: 85, icon: "🐍" },
  { name: "C/C++", level: 80, icon: "⚙️" },
  { name: "JavaScript", level: 85, icon: "🟨" },
  { name: "React", level: 80, icon: "⚛️" },
  { name: "MongoDB", level: 85, icon: "🍃" },
];

const softSkills = [
  { name: "Communication", level: 90, icon: "💬" },
  { name: "Leadership", level: 85, icon: "🏆" },
  { name: "Critical Thinking", level: 88, icon: "🧠" },
  { name: "Marketing", level: 80, icon: "📈" },
];

/* ─── RADIAL PROGRESS RING ─── */
function RadialRing({ level, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div ref={ref} className="radial-progress mx-auto">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06d6a0" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle className="track" cx="50" cy="50" r={radius} />
        <motion.circle
          className="fill"
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.5, delay: delay * 0.1, ease: "easeOut" }}
          stroke="url(#progressGradient)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm">{level}%</span>
      </div>
    </div>
  );
}

/* ─── SKILL CARD ─── */
function SkillCard({ skill, index }) {
  return (
    <motion.div
      variants={SectionReveal.itemVariants}
      className="glass-card p-5 text-center group"
    >
      <div className="text-2xl mb-3">{skill.icon}</div>
      <RadialRing level={skill.level} delay={index} />
      <p className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionReveal id="skills" className="py-24 px-6 relative">
      {/* Background blobs */}
      <div className="blob blob-cyan w-[400px] h-[400px] -right-40 top-1/4" />
      <div className="blob blob-violet w-[300px] h-[300px] -left-20 bottom-20" />

      <motion.div variants={SectionReveal.itemVariants}>
        <h2 className="section-heading gradient-text">Skills</h2>
        <p className="text-gray-400 text-center mb-16 text-sm">Technologies & abilities I work with</p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Technical Skills */}
        <motion.div variants={SectionReveal.itemVariants}>
          <h3 className="text-lg font-display font-semibold text-center mb-8 text-[#06d6a0]">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-16">
            {techSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Non-Technical Skills */}
        <motion.div variants={SectionReveal.itemVariants}>
          <h3 className="text-lg font-display font-semibold text-center mb-8 text-[#8b5cf6]">
            Non-Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {softSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}