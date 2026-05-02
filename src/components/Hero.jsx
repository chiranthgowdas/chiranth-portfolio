import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#021B2B] to-[#0A3D62] text-white px-4 relative z-10">
      
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Chiranth Gowda S
      </h1>

      <p className="text-gray-300 mb-6">
        Data | AI | Software | Innovation
      </p>

      {/* 🔥 BUTTONS (mobile safe) */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">

        <a
          href="https://linkedin.com/in/YOUR-LINK"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-cyan-500 rounded-lg text-black font-medium"
        >
          Connect on LinkedIn
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          Download Resume
        </a>

        <Link
          to="/projects"
          className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-medium"
        >
          My Projects
        </Link>

      </div>
    </section>
  );
}