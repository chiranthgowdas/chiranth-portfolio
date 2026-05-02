import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* 🔥 PROFILE IMAGE WITH GLOW RING */}
      <div className="relative mb-6 group">
        
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

        {/* Image */}
        <img
          src={profile}
          alt="Chiranth"
          className="
            relative
            w-56 h-56 md:w-72 md:h-72
            rounded-full
            border-4 border-cyan-400
            object-cover
            object-[50%_20%]
            scale-105
            transition duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* 🔥 NAME */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
        Chiranth Gowda S
      </h1>

      {/* 🔥 TAGLINE */}
      <p className="text-gray-300 text-lg md:text-xl mb-6">
        Data | AI | Software | Innovation
      </p>

      {/* 🔥 BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chiranth-gowda-s-67565a310/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3 rounded-lg
            bg-cyan-400 text-black font-semibold
            hover:bg-cyan-300
            transition duration-300
          "
        >
          Connect on LinkedIn
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="
            px-6 py-3 rounded-lg
            bg-gray-200 text-black font-semibold
            hover:bg-white
            transition duration-300
          "
        >
          Download Resume
        </a>

        {/* Projects */}
        <a
          href="/projects"
          className="
            px-6 py-3 rounded-lg
            bg-cyan-400 text-black font-semibold
            hover:bg-cyan-300
            transition duration-300
          "
        >
          My Projects
        </a>

      </div>
    </section>
  );
}