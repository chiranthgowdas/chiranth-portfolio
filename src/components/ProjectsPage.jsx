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
const ProjectCard = ({ title, desc, tech, images = [], github, liveDemo, index, highlight }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[activeImgIdx] || images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group ${
        highlight
          ? "ring-1 ring-cyan-500/20 shadow-lg shadow-cyan-500/5"
          : ""
      }`}
    >
      <div>
        {/* Header Badge */}
        {highlight && (
          <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <span>⭐ Featured Project</span>
          </div>
        )}

        {/* Title: Crisp white with subtle cyan hover */}
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 tracking-tight">
          {title}
        </h2>

        {/* Description: Optimized ~75-80 char max-width and 1.6+ line-height for scannability */}
        <p className="text-slate-300 text-sm md:text-base leading-[1.65] max-w-3xl mb-6 font-normal">
          {desc}
        </p>

        {/* Primary Hero Image / Clean Carousel Preview (Replaces dense 5-thumbnail grid) */}
        {images.length > 0 && (
          <div className="mb-6">
            <div className="relative w-full max-h-[380px] rounded-xl overflow-hidden bg-[#070b14] border border-slate-700/60 group/preview shadow-lg">
              {/* Main Image */}
              <div
                onClick={() => setSelectedImg(currentImage)}
                className="cursor-pointer relative flex items-center justify-center min-h-[220px] md:min-h-[320px] max-h-[380px] bg-black/40 overflow-hidden"
              >
                <img
                  src={currentImage}
                  alt={`${title} screenshot ${activeImgIdx + 1}`}
                  className="w-full h-full object-contain max-h-[380px] transition-transform duration-500 group-hover/preview:scale-[1.02]"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 shadow-xl backdrop-blur-sm">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                    Click to Enlarge
                  </span>
                </div>
              </div>

              {/* Prev / Next controls for multi-image projects */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-md backdrop-blur-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-md backdrop-blur-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>

                  {/* Pagination dots & counter badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      {images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImgIdx(dotIdx);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            dotIdx === activeImgIdx
                              ? "w-5 bg-cyan-400"
                              : "w-1.5 bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-300 font-mono ml-1">
                      {activeImgIdx + 1}/{images.length}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Clean Mini-Thumbnails (limited to 2-3 previews for rapid switching) */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 mt-3">
                {images.slice(0, 4).map((thumb, thumbIdx) => (
                  <button
                    key={thumbIdx}
                    onClick={() => setActiveImgIdx(thumbIdx)}
                    className={`h-14 w-24 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-black/40 ${
                      thumbIdx === activeImgIdx
                        ? "border-cyan-400 shadow-md shadow-cyan-400/20 scale-105"
                        : "border-slate-700/60 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${thumbIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer: Tech Stack Tags + Elevated Action CTAs */}
      <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Tech Stack: Subtle dark pill container with thin border for high legibility */}
        <div className="flex flex-wrap gap-2 items-center">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0b1329] text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 hover:text-white transition-colors shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Elevated Action Buttons at Bottom Right */}
        <div className="flex items-center gap-3 flex-shrink-0 self-end md:self-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-slate-800/90 hover:bg-[#06d6a0] hover:text-[#0a0e1a] border border-slate-600/70 hover:border-[#06d6a0] rounded-xl flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-[#06d6a0]/25 group/btn"
            >
              <svg className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </a>
          )}

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn !text-xs md:!text-sm !py-2 !px-4 flex items-center gap-1.5 font-semibold shadow-md"
            >
              <span>Live Demo</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] bg-[#0a0e1a] rounded-2xl overflow-hidden border border-white/20 shadow-2xl p-2 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Enlarged preview"
                className="max-w-full max-h-[82vh] object-contain rounded-xl"
              />
              <button
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 hover:bg-red-500/80 border border-white/20 flex items-center justify-center text-white text-base transition-colors"
                onClick={() => setSelectedImg(null)}
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
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