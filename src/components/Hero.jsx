import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#021B2B] via-[#052F4F] to-[#0A3D62] text-white px-4 overflow-hidden">

      {/* 🔥 ANIMATED GLOW BLOBS */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-400 opacity-20 blur-[140px] rounded-full animate-pulse top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[140px] rounded-full animate-pulse bottom-[-120px] right-[-120px]" />

      {/* ✨ FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white opacity-30 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* 🔥 PROFILE IMAGE (PERFECT CENTER + GLOW) */}
      <div className="relative mb-6 group">
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-50 group-hover:opacity-70 transition"></div>

        <img
          src="/profile.jpg"
          alt="profile"
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 object-cover object-center shadow-2xl group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* 🔥 NAME WITH GRADIENT */}
      <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
        Chiranth Gowda S
      </h1>

      {/* 🔥 TAGLINE */}
      <p className="text-gray-300 text-lg md:text-xl mb-8">
        Data | AI | Software | Innovation
      </p>

      {/* 🔥 BUTTONS (GLASS + ANIMATION) */}
      <div className="flex flex-wrap justify-center gap-4">

        <a
          href="https://www.linkedin.com/in/chiranth-gowda-s-67565a310/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-cyan-500/90 backdrop-blur-md hover:bg-cyan-400 text-black rounded-xl font-semibold shadow-lg hover:scale-110 transition duration-300"
        >
          Connect on LinkedIn
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-white/90 backdrop-blur-md text-black rounded-xl font-semibold shadow-lg hover:scale-110 transition duration-300"
        >
          Download Resume
        </a>

        <Link
          to="/projects"
          className="px-6 py-3 bg-cyan-400/90 backdrop-blur-md hover:bg-cyan-300 text-black rounded-xl font-semibold shadow-lg hover:scale-110 transition duration-300"
        >
          My Projects
        </Link>

      </div>

    </section>
  );
}