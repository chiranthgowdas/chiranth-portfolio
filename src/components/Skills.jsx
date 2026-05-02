import { motion } from "framer-motion";

const techSkills = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "C/C++", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "MongoDB", level: 85 },
];

const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Leadership", level: 85 },
  { name: "Critical Thinking", level: 88 },
  { name: "Marketing", level: 80 },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-cyan-400 opacity-20 blur-3xl rounded-full"></div>

      <h2 className="text-3xl text-center text-cyan-400 mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* TECHNICAL */}
        <div>
          <h3 className="mb-6 text-xl">Technical</h3>

          {techSkills.map((skill, i) => (
            <div key={i} className="mb-5">

              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-cyan-400"
                />
              </div>

            </div>
          ))}
        </div>

        {/* NON TECHNICAL */}
        <div>
          <h3 className="mb-6 text-xl">Non-Technical</h3>

          {softSkills.map((skill, i) => (
            <div key={i} className="mb-5">

              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-cyan-400"
                />
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}