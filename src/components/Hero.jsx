import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#021B2B] to-[#0A3D62] text-white px-4 relative">

      {/* 🔥 GLOW BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-400 opacity-20 blur-[120px] rounded-full top-1/4"></div>

      {/* 🔥 PROFILE IMAGE */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-40"></div>
        <img
          src="/profile.jpg"
          alt="profile"
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-400 object-cover"
        />
      </div>

      {/* 🔥 NAME */}
      <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-wide">
        Chiranth Gowda S
      </h1>

      {/* 🔥 TAGLINE */}
      <p className="text-gray-300 text-lg md:text-xl mb-8">
        Data | AI | Software | Innovation
      </p>

      {/* 🔥 BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4">

        <a
          href="https://www.linkedin.com/in/chiranth-gowda-s-67565a310/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Connect on LinkedIn
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Download Resume
        </a>

        <Link
          to="/projects"
          className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          My Projects
        </Link>

      </div>
    </section>
  );
}