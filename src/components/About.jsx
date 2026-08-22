import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionReveal from "./SectionReveal";

function CountUp({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold gradient-text">
      {count.toFixed(suffix === "CGPA" ? 1 : 0)}
      {suffix === "+" ? "+" : ""}
    </span>
  );
}

const stats = [
  { value: 9.2, label: "CGPA", suffix: "CGPA", icon: "🎓", sub: "6th Semester" },
  { value: 8, label: "Projects", suffix: "+", icon: "🚀", sub: "Full-Stack & ML" },
  { value: 14, label: "Certifications", suffix: "+", icon: "📜", sub: "Verified Credentials" },
];

export default function About() {
  return (
    <SectionReveal id="about" className="py-24 px-6 relative">
      {/* Background blob */}
      <div className="blob blob-violet w-[350px] h-[350px] -left-40 top-1/2 -translate-y-1/2" />

      <motion.div variants={SectionReveal.itemVariants} className="max-w-4xl mx-auto">
        <h2 className="section-heading gradient-text">About Me</h2>
        <p className="text-slate-300 text-center mb-12 text-sm md:text-base font-normal">Get to know me better</p>

        <motion.div variants={SectionReveal.itemVariants} className="glass-card p-8 md:p-10">
          <p className="text-slate-200 leading-8 text-center text-base md:text-lg">
            I am a Computer Science Engineering student at KS Institute of Technology
            with a CGPA of 9.2 (current 6th semester). I am passionate about Data Engineering, AI/ML,
            Software Development, and DevOps.
          </p>

          <p className="text-slate-200 mt-6 leading-8 text-center text-base md:text-lg">
            I believe in innovation, continuous learning, and building impactful solutions.
            Inspired by Nikola Tesla, my goal is to invent, innovate and contribute
            meaningfully to society through technology.
          </p>
        </motion.div>

        {/* Stats Counter Cards: Dark translucent containers with subtle borders & equal visual weight */}
        <motion.div
          variants={SectionReveal.itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0c1424]/90 backdrop-blur-md border border-slate-700/70 hover:border-cyan-500/50 rounded-2xl p-6 md:p-7 text-center transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 group relative overflow-hidden"
            >
              {/* Subtle top glow highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform inline-block">
                {stat.icon}
              </div>

              <div>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-slate-100 text-base font-semibold mt-1 font-display">
                {stat.label}
              </p>
              <p className="text-slate-400 text-xs font-medium mt-0.5">
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionReveal>
  );
}