import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

import c1 from "../assets/certificates/c1.png";
import c2 from "../assets/certificates/c2.png";
import c3 from "../assets/certificates/c3.png";
import c4 from "../assets/certificates/c4.png";
import c5 from "../assets/certificates/c5.png";
import c6 from "../assets/certificates/c6.png";
import c7 from "../assets/certificates/c7.png";
import c8 from "../assets/certificates/c8.png";
import c9 from "../assets/certificates/c9.png";
import c10 from "../assets/certificates/c10.png";
import c11 from "../assets/certificates/c11.png";
import c12 from "../assets/certificates/c12.png";
import c13 from "../assets/certificates/c13.png";
import c14 from "../assets/certificates/c14.png";

const certificatesData = [
  {
    id: 1,
    title: "Introduction to HTML5",
    issuer: "University of Michigan (Coursera)",
    date: "Sep 2024",
    badge: "Coursera",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    verifyUrl: "https://coursera.org/verify/IXF1GD39W24G",
    credentialId: "IXF1GD39W24G",
    image: c1,
  },
  {
    id: 2,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Sep 2024",
    badge: "IBM",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    verifyUrl: "https://www.credly.com/go/G9uDFcTd",
    credentialId: "G9uDFcTd",
    image: c2,
  },
  {
    id: 3,
    title: "BYTE BATTLE Coding Contest",
    issuer: "DSATM (Autonomous under VTU)",
    date: "Oct 2025",
    badge: "Contest",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    verifyUrl: null,
    credentialId: "DSATM/CSE-AI/C/48",
    image: c3,
  },
  {
    id: 4,
    title: "Infosys Springboard Summit 2024",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Springboard Summit",
    image: c4,
  },
  {
    id: 5,
    title: "Innovation Ambassador: Reskilling",
    issuer: "MoE's Innovation Cell & AICTE",
    date: "Feb 2026",
    badge: "AICTE / MoE",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    verifyUrl: null,
    credentialId: "IA/Foundation/1082302",
    image: c5,
  },
  {
    id: 6,
    title: "Innovation Ambassador: Advanced Level",
    issuer: "MoE's Innovation Cell & AICTE",
    date: "Feb 2026",
    badge: "AICTE / MoE",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    verifyUrl: null,
    credentialId: "IA/Foundation/1082302",
    image: c6,
  },
  {
    id: 7,
    title: "Networking and Web Technology",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c7,
  },
  {
    id: 8,
    title: "Unix Linux OS & Shell Programming",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c8,
  },
  {
    id: 9,
    title: "Beginning Java Data Structures & Algorithms",
    issuer: "Infosys Springboard",
    date: "May 2025",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c9,
  },
  {
    id: 10,
    title: "Software Engineering & Agile Development",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c10,
  },
  {
    id: 11,
    title: "Explore Machine Learning using Python",
    issuer: "Infosys Springboard",
    date: "Apr 2026",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c11,
  },
  {
    id: 12,
    title: "Computer Network & Internet Security",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c12,
  },
  {
    id: 13,
    title: "Computational Theory & Automata",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c13,
  },
  {
    id: 14,
    title: "Design Thinking for Innovation",
    issuer: "Infosys Springboard",
    date: "May 2024",
    badge: "Infosys",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Wingspan Verified",
    image: c14,
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <SectionReveal id="certificates" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="blob blob-violet w-[350px] h-[350px] -right-32 top-10" />

      <motion.div variants={SectionReveal.itemVariants} className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="section-heading gradient-text">Certifications & Credentials</h2>
        <p className="text-slate-300 text-center text-sm md:text-base font-normal max-w-xl mx-auto">
          Verified academic and professional credentials from global universities, tech leaders, and national institutes
        </p>
      </motion.div>

      {/* Marquee with Uniform Cards */}
      <motion.div variants={SectionReveal.itemVariants} className="marquee-container group">
        <div
          className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] py-4"
          style={{ width: "max-content" }}
        >
          {[...certificatesData, ...certificatesData].map((cert, i) => (
            <div
              key={`${cert.id}-${i}`}
              className="flex-shrink-0 w-[320px] md:w-[350px] glass-card p-4 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-[#06d6a0]/50 hover:shadow-xl hover:shadow-[#06d6a0]/5 transition-all duration-300 group/card"
            >
              {/* Header Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}
                  >
                    {cert.badge}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Image Thumbnail */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-44 rounded-xl overflow-hidden mb-3 bg-[#0a0e1a] border border-white/10 cursor-pointer group-hover/card:border-[#06d6a0]/30 transition-colors flex items-center justify-center"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                      Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display font-semibold text-white text-sm line-clamp-1 mb-1 group-hover/card:text-[#06d6a0] transition-colors" title={cert.title}>
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 text-xs font-semibold text-[#06d6a0] hover:text-white bg-[#06d6a0]/10 hover:bg-[#06d6a0]/20 border border-[#06d6a0]/30 hover:border-[#06d6a0] rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300"
                  >
                    <span>Verify Credential</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/25 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300"
                  >
                    <span>View Credential</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  title="Enlarge Certificate"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Subtle hint */}
      <p className="text-slate-400 text-xs text-center mt-6 font-medium">
        Hover to pause • {certificatesData.length} verified certificates • Click to view full credential
      </p>

      {/* ═══════ CERTIFICATE MODAL PREVIEW ═══════ */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl glass-card !rounded-2xl overflow-hidden flex flex-col border border-white/15 bg-[#0a0e1a]/95 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${selectedCert.badgeColor}`}>
                    {selectedCert.badge}
                  </span>
                  <div>
                    <h3 className="text-white font-display font-semibold text-base leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-slate-300 text-xs mt-0.5">
                      {selectedCert.issuer} · {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn !text-xs !py-1.5 !px-3 flex items-center gap-1.5 font-semibold"
                    >
                      Verify
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-8 h-8 rounded-lg glass-card !p-0 flex items-center justify-center text-slate-300 hover:text-red-400 transition-colors"
                    title="Close (Esc)"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Preview */}
              <div className="p-4 bg-[#0a0e1a] flex items-center justify-center max-h-[75vh] overflow-auto">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg border border-white/10 shadow-xl"
                />
              </div>

              {/* Footer details */}
              {selectedCert.credentialId && (
                <div className="px-6 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-slate-300">
                  <span>Credential Identifier: <strong className="text-white font-mono">{selectedCert.credentialId}</strong></span>
                  <span className="text-slate-400">Issued: {selectedCert.date}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionReveal>
  );
}