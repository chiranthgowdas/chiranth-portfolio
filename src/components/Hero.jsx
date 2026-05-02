import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#021B2B] via-[#06283D] to-[#0A2A43] text-white overflow-hidden">

      {/* 🔥 GLOW BACKGROUND (does NOT block clicks) */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 blur-[140px] rounded-full 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      pointer-events-none"></div>

      {/* PROFILE IMAGE */}
      <div className="relative mb-6">
        <div className="w-56 h-56 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee] overflow-hidden">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "120% 0%"   // 🔥 CHANGE THIS VALUE TO ADJUST FACE
            }}
          />
        </div>
      </div>

      {/* NAME */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Chiranth Gowda S
      </h1>

      {/* TAGLINE */}
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Data | AI | Software | Innovation
      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 px-4">

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/chiranth-gowda-s-67565a310/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold 
          hover:bg-cyan-300 transition 
          inline-flex items-center justify-center cursor-pointer"
        >
          Connect on LinkedIn
        </a>

        {/* DOWNLOAD RESUME */}
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Chiranth_Gowda_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold 
          hover:bg-cyan-300 transition 
          inline-flex items-center justify-center cursor-pointer"
        >
          Download Resume
        </button>

        {/* PROJECTS */}
        <Link
          to="/projects"
          className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold 
          hover:bg-cyan-300 transition 
          inline-flex items-center justify-center cursor-pointer"
        >
          My Projects
        </Link>

      </div>
    </section>
  );
};

export default Hero;