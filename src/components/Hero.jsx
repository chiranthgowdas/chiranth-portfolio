import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Profile */}
      <div className="relative mb-6 group">

        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

        {/* IMAGE */}
        <img
          src={profile}
          alt="Chiranth"
          className="
            relative
            w-56 h-56 md:w-72 md:h-72
            rounded-full
            border-4 border-cyan-400
            object-cover
            object-[100%_0%]   /* 👈 CONTROL THIS */
            scale-105
            transition duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
        Chiranth Gowda S
      </h1>

      {/* Tagline */}
      <p className="text-gray-300 text-lg md:text-xl mb-6">
        Data | AI | Software | Innovation
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chiranth-gowda-s-67565a310/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
        >
          Connect on LinkedIn
        </a>

        {/* Resume VIEW */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gray-200 text-black font-semibold hover:bg-white"
        >
          View Resume
        </a>

        {/* Resume DOWNLOAD (force) */}
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Chiranth_Gowda_Resume.pdf";
            link.click();
          }}
          className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
        >
          Download Resume
        </button>

        {/* Projects (FIXED) */}
        <Link
          to="/projects"
          className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
        >
          My Projects
        </Link>

      </div>
    </section>
  );
}