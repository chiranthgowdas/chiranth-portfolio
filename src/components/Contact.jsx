import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chiranth-gowda-s-67565a310",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/chiranthgowdas",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <SectionReveal id="contact" className="py-24 px-6 relative">
      {/* Background blob */}
      <div className="blob blob-cyan w-[350px] h-[350px] right-0 bottom-0" />

      <motion.div variants={SectionReveal.itemVariants}>
        <h2 className="section-heading gradient-text">Get In Touch</h2>
        <p className="text-slate-300 text-center mb-12 text-sm md:text-base font-normal max-w-xl mx-auto">
          Let's connect and create something impactful. Reach out directly via email, phone, or LinkedIn.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Interactive Contact Cards */}
        <motion.div
          variants={SectionReveal.itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
        >
          {/* 1. Location Card */}
          <div className="bg-[#0c1424]/90 backdrop-blur-md border border-slate-700/70 hover:border-cyan-500 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#06d6a0]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#06d6a0] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className="text-xs text-slate-300 font-semibold mb-1 uppercase tracking-wider">Location</p>
              <p className="text-sm text-slate-100 font-medium font-display">Girinagar, Bangalore</p>
              <p className="text-xs text-slate-400 mt-1">Karnataka, India</p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="text-[11px] text-cyan-400 font-medium inline-flex items-center gap-1">
                <span>Bangalore, IN</span>
              </span>
            </div>
          </div>

          {/* 2. Email Card (Interactive with Compose + Copy) */}
          <div className="bg-[#0c1424]/90 backdrop-blur-md border border-slate-700/70 hover:border-cyan-500 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#06d6a0]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#06d6a0] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <p className="text-xs text-slate-300 font-semibold mb-1 uppercase tracking-wider">Email</p>
              <a
                href="mailto:chiranthgowdas13@gmail.com"
                className="text-sm text-slate-100 font-medium group-hover:text-cyan-300 transition-colors break-all hover:underline"
              >
                chiranthgowdas13@gmail.com
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
              <a
                href="mailto:chiranthgowdas13@gmail.com"
                className="flex-1 py-1.5 px-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium flex items-center justify-center gap-1 transition-colors"
              >
                <span>Compose</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <button
                onClick={(e) => copyToClipboard("chiranthgowdas13@gmail.com", "email", e)}
                className="py-1.5 px-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 text-xs font-medium transition-colors"
                title="Copy email to clipboard"
              >
                {copiedType === "email" ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>

          {/* 3. Phone Card (Interactive with Call + Copy) */}
          <div className="bg-[#0c1424]/90 backdrop-blur-md border border-slate-700/70 hover:border-cyan-500 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#06d6a0]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#06d6a0] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="text-xs text-slate-300 font-semibold mb-1 uppercase tracking-wider">Phone</p>
              <a
                href="tel:+918660435979"
                className="text-sm text-slate-100 font-medium font-mono group-hover:text-cyan-300 transition-colors hover:underline"
              >
                +91 8660435979
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
              <a
                href="tel:+918660435979"
                className="flex-1 py-1.5 px-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium flex items-center justify-center gap-1 transition-colors"
              >
                <span>Call Now</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <button
                onClick={(e) => copyToClipboard("+918660435979", "phone", e)}
                className="py-1.5 px-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 text-xs font-medium transition-colors"
                title="Copy phone number to clipboard"
              >
                {copiedType === "phone" ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA Direct Mail Button */}
        <motion.div variants={SectionReveal.itemVariants} className="text-center mb-10">
          <a
            href="mailto:chiranthgowdas13@gmail.com"
            className="glow-btn inline-flex items-center gap-2 text-sm font-semibold shadow-lg shadow-[#06d6a0]/20"
          >
            <span>Send me an Email</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={SectionReveal.itemVariants}
          className="flex justify-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass-card !p-0 flex items-center justify-center text-slate-300 hover:text-[#06d6a0] hover:border-[#06d6a0]/50 transition-all duration-300 hover:scale-110"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={SectionReveal.itemVariants}
        className="mt-20 pt-8 border-t border-white/10 text-center"
      >
        <p className="text-slate-400 text-xs font-medium">
          © {new Date().getFullYear()} Chiranth Gowda S · Computer Science & Engineering · KSIT
        </p>
      </motion.div>
    </SectionReveal>
  );
}