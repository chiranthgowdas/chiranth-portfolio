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
  { value: 9.2, label: "CGPA", suffix: "CGPA" },
  { value: 8, label: "Projects", suffix: "+" },
  { value: 14, label: "Certifications", suffix: "+" },
];

export default function About() {
  return (
    <SectionReveal id="about" className="py-24 px-6 relative">
      {/* Background blob */}
      <div className="blob blob-violet w-[350px] h-[350px] -left-40 top-1/2 -translate-y-1/2" />

      <motion.div variants={SectionReveal.itemVariants} className="max-w-4xl mx-auto">
        <h2 className="section-heading gradient-text">About Me</h2>
        <p className="text-gray-400 text-center mb-12 text-sm">Get to know me better</p>

        <motion.div variants={SectionReveal.itemVariants} className="glass-card p-8 md:p-10">
          <p className="text-gray-300 leading-8 text-center text-base md:text-lg">
            I am a Computer Science Engineering student at KS Institute of Technology
            with a CGPA of 9.2 (current 6th semester). I am passionate about Data Engineering, AI/ML,
            Software Development, and DevOps.
          </p>

          <p className="text-gray-300 mt-6 leading-8 text-center text-base md:text-lg">
            I believe in innovation, continuous learning, and building impactful solutions.
            Inspired by Nikola Tesla, my goal is to invent, innovate and contribute
            meaningfully to society through technology.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={SectionReveal.itemVariants}
          className="grid grid-cols-3 gap-4 mt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionReveal>
  );
}