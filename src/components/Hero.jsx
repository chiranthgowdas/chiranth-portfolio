import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RESUME_PATH = "/Chiranth-Resume.pdf";

const taglines = [
  "Data Engineering",
  "Artificial Intelligence",
  "Software Development",
  "DevOps & Cloud",
  "Innovation",
];

export default function Hero() {
  const navigate = useNavigate();
  const [tagIdx, setTagIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [showResume, setShowResume] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const word = taglines[tagIdx];
    let timer;

    if (!deleting && displayed.length < word.length) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTagIdx((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, tagIdx]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showResume]);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowResume(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Scroll fade for indicator
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-12 pb-24"
    >
      {/* Floating gradient blobs */}
      <div className="blob blob-cyan w-[500px] h-[500px] -top-32 -right-32 animate-float" />
      <div className="blob blob-violet w-[400px] h-[400px] bottom-20 -left-40 animate-float-delayed" />
      <div className="blob blob-blue w-[300px] h-[300px] top-1/3 left-1/3 animate-pulse-glow" />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8 mt-12 group"
      >
        {/* Outer ambient glow with controlled radius and high vibrancy */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#06d6a0] via-[#22d3ee] to-[#8b5cf6] opacity-60 blur-xl animate-pulse-glow" />

        {/* Sharp rotating neon border ring */}
        <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-[#06d6a0] via-[#22d3ee] to-[#8b5cf6] animate-spin-slow opacity-95 shadow-[0_0_20px_rgba(6,214,160,0.6)]" />

        {/* Dark isolation barrier & inner frame */}
        <div className="relative p-[3px] rounded-full bg-[#0a0e1a]">
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-[#0a0e1a] shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Chiranth Gowda S"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "100% 0%" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-display text-4xl md:text-6xl font-bold text-center gradient-text mb-3"
      >
        Chiranth Gowda S
      </motion.h1>

      {/* Typewriter tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-slate-200 font-medium mb-10 h-8 font-display flex items-center justify-center"
      >
        <span>{displayed}</span>
        <span
          className="inline-block w-[2px] h-5 bg-[#06d6a0] ml-1 align-middle shadow-[0_0_8px_#06d6a0]"
          style={{ animation: "typewriter-blink 1s step-end infinite" }}
        />
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex gap-4 flex-wrap justify-center items-center mb-8"
      >
        {/* Primary CTA */}
        <button
          onClick={() => navigate("/projects")}
          className="glow-btn text-sm md:text-base flex items-center gap-2 font-semibold shadow-lg shadow-[#06d6a0]/20"
        >
          <span>My Projects</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => setShowResume(true)}
          className="glow-btn-outline text-sm md:text-base flex items-center gap-2"
        >
          <span>📄 View Resume</span>
        </button>

        {/* Outlined / Tertiary */}
        <a
          href="https://www.linkedin.com/in/chiranth-gowda-s-67565a310"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 text-sm md:text-base font-medium text-gray-200 hover:text-white border border-white/20 hover:border-[#06d6a0]/50 rounded-xl bg-white/[0.04] hover:bg-[#06d6a0]/10 transition-all duration-300 flex items-center gap-2 shadow-sm"
        >
          <svg className="w-4 h-4 fill-current text-[#06d6a0]" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>Connect on LinkedIn</span>
        </a>
      </motion.div>

      {/* Scroll indicator: Positioned at bottom-4 with fade-out on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 0.85, y: hasScrolled ? 10 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[10px] text-slate-300 font-semibold tracking-widest uppercase opacity-80">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border-2 border-slate-400/60 flex justify-center pt-1"
        >
          <div className="w-1 h-1 rounded-full bg-[#06d6a0] shadow-[0_0_6px_#06d6a0]" />
        </motion.div>
      </motion.div>

      {/* ═══════ RESUME PREVIEW MODAL ═══════ */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[95vw] max-w-4xl h-[90vh] glass-card !rounded-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06d6a0]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#06d6a0]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-sm">Resume</h3>
                    <p className="text-slate-300 text-xs">Chiranth Gowda S</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Download button */}
                  <a
                    href={RESUME_PATH}
                    download="Chiranth-Resume.pdf"
                    className="glow-btn !text-xs !py-2 !px-4 flex items-center gap-1.5 font-semibold"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>

                  {/* Open in new tab */}
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass-card !p-0 flex items-center justify-center text-slate-300 hover:text-[#06d6a0] transition-colors"
                    title="Open in new tab"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>

                  {/* Close button */}
                  <button
                    onClick={() => setShowResume(false)}
                    className="w-8 h-8 rounded-lg glass-card !p-0 flex items-center justify-center text-slate-300 hover:text-red-400 transition-colors"
                    title="Close (Esc)"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF Embed */}
              <div className="flex-1 bg-[#1a1a2e]">
                <iframe
                  src={`${RESUME_PATH}#toolbar=1&navpanes=0&view=FitH`}
                  title="Resume Preview"
                  className="w-full h-full border-0"
                  style={{ minHeight: "100%" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}