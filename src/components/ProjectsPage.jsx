import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Event Sphere
import img1 from "../assets/eventsphere/1.png";
import img2 from "../assets/eventsphere/2.png";
import img3 from "../assets/eventsphere/3.png";

// Accident
import acc1 from "../assets/accident/4.png";
import acc2 from "../assets/accident/5.png";
import acc3 from "../assets/accident/6.png";

// Bank
import bank1 from "../assets/bank/10.png";
import bank2 from "../assets/bank/11.png";
import bank3 from "../assets/bank/12.png";

// Crowd
import crowd1 from "../assets/crowd/13.png";
import crowd2 from "../assets/crowd/14.png";
import crowd3 from "../assets/crowd/15.png";

/* ================= PROJECT CARD ================= */
const ProjectCard = ({ title, desc, tech, images, github }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="bg-[#112233] p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition">

      <h2 className="text-2xl text-cyan-300 mb-3">{title}</h2>

      {/* Images */}
      {images.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="project"
              onClick={() => setSelectedImg(img)}
              className="rounded-lg cursor-pointer hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">{desc}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-cyan-400/90 text-black px-3 py-1 rounded-full text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {github && (
          <button
            onClick={() => window.open(github, "_blank")}
            className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            GitHub
          </button>
        )}

        <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          Live Demo
        </button>
      </div>

      {/* 🔍 MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="preview"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
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
};

/* ================= MAIN PAGE ================= */
export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0b1727] text-white px-6 py-20">

      {/* Top Bar */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-4xl text-cyan-400">My Projects</h1>

        <button
          onClick={() => navigate("/")}
          className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
        >
          Back to Home
        </button>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">

        {/* CampusHive */}
        <ProjectCard
          title="CampusHive (Upcoming)"
          desc="A cloud-based campus platform for complaints, lost & found, and student engagement. Integrates machine learning to prioritize issues and improve transparency."
          tech={["Flutter", "Flask", "MySQL", "Machine Learning"]}
          images={[]}
          github={null}
        />

        {/* Event Sphere */}
        <ProjectCard
          title="Event Sphere"
          desc="A college event management platform with QR ticketing, dashboards, and role-based authentication."
          tech={["React", "Node.js", "MongoDB"]}
          images={[img1, img2, img3]}
          github="https://github.com/chiranthgowdas"
        />

        {/* Accident */}
        <ProjectCard
          title="Accident Severity Prediction"
          desc="ML system predicting accident severity using environmental and road features with visualization insights."
          tech={["Python", "ML", "Random Forest", "Logistic Regression"]}
          images={[acc1, acc2, acc3]}
          github="https://github.com/chiranthgowdas"
        />

        {/* Bank */}
        <ProjectCard
          title="Bank Management System"
          desc="Desktop banking system supporting transactions, history tracking, and account management."
          tech={["Java", "SQL", "Swing"]}
          images={[bank1, bank2, bank3]}
          github="https://github.com/chiranthgowdas"
        />

        {/* Crowd */}
        <ProjectCard
          title="Crowd Density Tracker"
          desc="Real-time system calculating crowd density, tracking location, and predicting overcrowding probability using geospatial data."
          tech={["JavaScript", "Maps API", "Geolocation"]}
          images={[crowd1, crowd2, crowd3]}
          github="https://github.com/chiranthgowdas"
        />

      </div>

    </section>
  );
}