import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

  // ESC close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // certificate file names
  const certificates = Array.from({ length: 14 }, (_, i) => `c${i + 1}.png`);

  return (
    <div className="bg-[#0b1727] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-cyan-400 font-bold text-xl">Chiranth</h1>

        <div className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="/resume.pdf" className="bg-cyan-400 px-4 py-2 rounded text-black" download>
          Resume
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center py-20">
        <img
          src={profile}
          className="w-40 h-40 mx-auto rounded-full border-4 border-cyan-400"
        />

        <h1 className="text-4xl mt-6 font-bold">
          Chiranth Gowda S
        </h1>

        <p className="text-gray-300 mt-2">
          Data | AI | Software | Innovation
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a href="https://linkedin.com" target="_blank" className="bg-cyan-400 px-5 py-2 rounded text-black">
            LinkedIn
          </a>

          <a href="/resume.pdf" className="border px-5 py-2 rounded" download>
            Download Resume
          </a>

          <a href="/projects" className="bg-cyan-400 px-5 py-2 rounded text-black">
            My Projects
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="text-center max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-3xl text-cyan-400 mb-6">About Me</h2>

        <p className="text-gray-300 leading-7">
          I am a Computer Science Engineering student at KS Institute of Technology (CGPA: 9.2),
          specializing in Data Engineering, AI/ML, and Full Stack Development.
        </p>

        <p className="text-gray-300 mt-4 leading-7">
          I build real-world systems including event platforms, ML prediction systems,
          and real-time tracking applications.
        </p>

        <p className="text-gray-300 mt-4 leading-7">
          My focus is on scalable, impactful, and user-centric solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-10">
        <h2 className="text-3xl text-cyan-400 text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Technical */}
          <div>
            <h3 className="mb-4">Technical</h3>
            {[
              ["Java", 90],
              ["Python", 85],
              ["C/C++", 80],
              ["JavaScript", 85],
              ["React", 80],
            ].map(([skill, val]) => (
              <div key={skill} className="mb-4">
                <div className="flex justify-between">
                  <span>{skill}</span>
                  <span>{val}%</span>
                </div>
                <div className="bg-gray-700 h-2 rounded">
                  <div className="bg-cyan-400 h-2 rounded" style={{ width: `${val}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Non Technical */}
          <div>
            <h3 className="mb-4">Non-Technical</h3>
            {[
              ["Communication", 90],
              ["Leadership", 85],
              ["Critical Thinking", 88],
              ["Marketing", 80],
            ].map(([skill, val]) => (
              <div key={skill} className="mb-4">
                <div className="flex justify-between">
                  <span>{skill}</span>
                  <span>{val}%</span>
                </div>
                <div className="bg-gray-700 h-2 rounded">
                  <div className="bg-cyan-400 h-2 rounded" style={{ width: `${val}%` }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl text-cyan-400 mb-10">
          Certifications
        </h2>

        <div className="flex gap-6 overflow-x-auto px-6">
          {certificates.map((name, i) => {
            const path = `/certificates/${name}`;
            return (
              <img
                key={i}
                src={path}
                onClick={() => setSelectedImg(path)}
                className="w-80 rounded-lg cursor-pointer hover:scale-105 transition"
              />
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20">
        <h2 className="text-3xl text-cyan-400 mb-6">Contact</h2>

        <p>📍 Girinagar, Bangalore</p>
        <p>✉️ chiranthgowdas13@gmail.com</p>
        <p>📞 8660435979</p>

        <div className="flex justify-center gap-4 mt-6">
          <a href="mailto:chiranthgowdas13@gmail.com" className="bg-cyan-400 px-4 py-2 rounded text-black">
            Email Me
          </a>

          <a href="https://linkedin.com" target="_blank" className="border px-4 py-2 rounded">
            LinkedIn
          </a>
        </div>
      </section>

      {/* MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />

          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}