import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

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

// GitInsight AI
import gi1 from "../assets/gitinsight/gi1.png";
import gi2 from "../assets/gitinsight/gi2.png";
import gi3 from "../assets/gitinsight/gi3.png";
import gi4 from "../assets/gitinsight/gi4.png";
import gi5 from "../assets/gitinsight/gi5.png";

/* ═══════ PROJECT CARD ═══════ */
const ProjectCard = ({ title, desc, tech, images, github, index, highlight }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className={`glass-card p-6 md:p-8 group ${
        highlight
          ? "!border-[#06d6a0]/30 ring-1 ring-[#06d6a0]/10"
          : ""
      }`}
    >
      {/* Highlight badge */}
      {highlight && (
        <div className="inline-block mb-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-gradient-to-r from-[#06d6a0]/20 to-[#8b5cf6]/20 text-[#06d6a0] border border-[#06d6a0]/20">
          ⭐ Featured Project
        </div>
      )}

      {/* Title */}
      <h2 className="font-display text-2xl font-bold gradient-text mb-4">{title}</h2>

      {/* Images */}
      {images.length > 0 && (
        <div className={`grid ${images.length >= 4 ? "grid-cols-2 md:grid-cols-3" : "md:grid-cols-3"} gap-3 mb-5`}>
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImg(img)}
              className="relative overflow-hidden rounded-xl cursor-pointer group/img"
            >
              <img
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                className="w-full h-auto transition-transform duration-500 group-hover/img:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                <span className="text-white text-xs font-medium">Click to expand</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-300 mb-5 leading-relaxed">{desc}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#06d6a0]/15 to-[#8b5cf6]/15 text-[#06d6a0] border border-[#06d6a0]/20"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {github && (
          <button
            onClick={() => window.open(github, "_blank")}
            className="glow-btn text-sm !py-2 !px-5"
          >
            GitHub
          </button>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImg}
              alt="Preview"
              className="max-w-[90%] max-h-[90vh] rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card !p-0 flex items-center justify-center text-white text-xl hover:text-[#06d6a0] transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/*
 * Projects sorted by RECRUITMENT IMPORTANCE:
 * 1. GitInsight AI — AI/ML + Full-stack SaaS, GitHub OAuth, LLM integration (most impressive)
 * 2. MedSynth AI — Research-grade ML, CTGAN, Differential Privacy, Federated Learning
 * 3. Crowd Density Tracker — Real-time full-stack, Socket.IO, geolocation, Haversine math
 * 4. EventSphere — Full-stack CRUD with auth, MySQL, team management
 * 5. CampusVote — Flask full-stack, election system, result visualization
 * 6. Sixth Stage Inventory — React/TS enterprise dashboard, real-world client project
 * 7. Accident Severity Prediction — ML classification with visualization
 * 8. Bank Management System — Java desktop app (foundational)
 */

/* ═══════ PROJECTS PAGE ═══════ */
export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0a0e1a] text-white relative">
      <ParticleBackground />

      {/* Top bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold gradient-text">
            My Projects
          </h1>
          <p className="text-slate-300 text-sm mt-1 font-medium">
            Sorted by complexity & recruitment relevance
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="glow-btn-outline text-sm"
        >
          ← Back to Home
        </button>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 space-y-10">

        {/* 1. GitInsight AI — AI + Full-stack SaaS */}
        <ProjectCard
          index={0}
          highlight={true}
          title="GitInsight AI"
          desc="AI-powered GitHub engineering evaluator that analyzes repositories using static analysis (Semgrep, Bandit, Radon, ESLint, PMD), GPT-based insights for strengths/weaknesses/interview readiness, deterministic + LLM-backed skill inference, and a 10-category recruiter-focused scoring system. Features GitHub OAuth login, real-time progress tracking, skill radar charts, and comprehensive developer profile reports."
          tech={["Python", "TypeScript", "GPT API", "GitHub OAuth", "Static Analysis", "Docker", "Full-Stack"]}
          images={[gi1, gi2, gi3, gi4, gi5]}
          github="https://github.com/chiranthgowdas/GitInsight-AI"
        />

        {/* 2. MedSynth AI — Research-grade ML */}
        <ProjectCard
          index={1}
          highlight={true}
          title="MedSynth AI"
          desc="A privacy-preserving healthcare data generator combining CTGAN (Conditional Tabular GAN), Differential Privacy, ML utility validation, privacy attack testing, and Federated Learning for secure medical data sharing. Generates realistic synthetic patient records while mathematically guaranteeing privacy through epsilon-delta differential privacy bounds."
          tech={["Python", "CTGAN", "Differential Privacy", "Federated Learning", "Machine Learning", "Healthcare"]}
          images={[]}
          github="https://github.com/chiranthgowdas/Medsynth-AI"
        />

        {/* 3. Crowd Density Tracker — Real-time full-stack */}
        <ProjectCard
          index={2}
          title="Crowd Density Tracker"
          desc="Real-time crowd density monitoring system using browser geolocation and Socket.IO for live location tracking. Calculates crowd density within configurable geofenced areas using the Haversine formula, with threshold-based risk classification (LOW → MODERATE → HIGH → CRITICAL). Features admin dashboard with live KPIs, interactive Leaflet maps, JWT auth, and privacy-first design."
          tech={["JavaScript", "Node.js", "Express", "Socket.IO", "SQLite", "Leaflet.js", "JWT"]}
          images={[crowd1, crowd2, crowd3]}
          github="https://github.com/chiranthgowdas/Crowd-Density-Tracker"
        />

        {/* 4. EventSphere — Full-stack CRUD */}
        <ProjectCard
          index={3}
          title="EventSphere"
          desc="Full-stack college event management platform with student/organizer authentication, event creation & discovery, team registration with slot management, QR ticketing, dashboards, and Excel data exports. Built with server-side rendering and role-based access control."
          tech={["Node.js", "Express", "EJS", "MySQL", "Bootstrap", "Authentication"]}
          images={[img1, img2, img3]}
          github="https://github.com/chiranthgowdas/EventSphere"
        />

        {/* 5. CampusVote — Flask full-stack */}
        <ProjectCard
          index={4}
          title="CampusVote"
          desc="Web-based college election management system providing student authentication, election & candidate management, secure vote submission with duplicate prevention, and real-time election result visualization with charts. Built with Flask and MySQL for reliable backend processing."
          tech={["Python", "Flask", "MySQL", "HTML/CSS", "Authentication", "Data Visualization"]}
          images={[]}
          github="https://github.com/chiranthgowdas/Campus-Vote"
        />

        {/* 6. Sixth Stage Inventory Management — Enterprise React/TS */}
        <ProjectCard
          index={5}
          title="Sixth Stage Inventory Management"
          desc="Enterprise inventory management system designed for a real-world client (Sixth Stage Resto Bar). Features dashboards for inventory tracking, stock movements, wastage monitoring, supplier management, purchase orders, analytics, user management, activity logs, and notifications. Built with TypeScript for type safety."
          tech={["React", "TypeScript", "Vite", "Tailwind CSS", "Enterprise Dashboard"]}
          images={[]}
          github="https://github.com/chiranthgowdas/Sixth-Stage-Inventory-Management"
        />

        {/* 7. Accident Severity Prediction — ML */}
        <ProjectCard
          index={6}
          title="Accident Severity Prediction"
          desc="Machine learning system predicting accident severity levels using environmental and road features. Implements multiple classification models (Random Forest, Logistic Regression) with comparative analysis and data visualization insights for actionable safety recommendations."
          tech={["Python", "Random Forest", "Logistic Regression", "Pandas", "Matplotlib"]}
          images={[acc1, acc2, acc3]}
          github="https://github.com/chiranthgowdas"
        />

        {/* 8. Bank Management System — Java */}
        <ProjectCard
          index={7}
          title="Bank Management System"
          desc="Desktop banking system supporting account creation, transactions (deposit/withdraw/transfer), transaction history tracking, and complete account management. Built with Java Swing for the GUI and SQL for persistent data storage."
          tech={["Java", "SQL", "Swing", "Desktop Application"]}
          images={[bank1, bank2, bank3]}
          github="https://github.com/chiranthgowdas"
        />

      </div>
    </section>
  );
}