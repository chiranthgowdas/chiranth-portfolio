import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const linkedInUrl =
    "https://www.linkedin.com/in/chiranth-gowda-s-67565a310";

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#071c2f] text-white overflow-hidden">

      {/* NAVBAR */}
      <div className="absolute top-0 w-full flex justify-between items-center px-10 py-5">
        <h1 className="text-cyan-400 text-xl font-bold">Chiranth</h1>

        <button
          onClick={() => window.open(linkedInUrl, "_blank")}
          className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
        >
          LinkedIn
        </button>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-400 opacity-20 blur-[120px] rounded-full top-[45%] right-[10%]" />

      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-6 mt-12"
      >
        {/* GLOW RING */}
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-40 animate-pulse"></div>

        {/* IMAGE */}
        <div className="relative w-52 h-52 rounded-full border-4 border-cyan-400 overflow-hidden">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-full h-full object-cover"
            style={{ objectPosition: "100% 0%" }}
          />
        </div>
      </motion.div>

      {/* NAME */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Chiranth Gowda S
      </h1>

      {/* TAGLINE */}
      <p className="text-gray-300 mb-8 text-center px-4">
        Data | AI | Software | Innovation
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4 flex-wrap justify-center">

        {/* LinkedIn */}
        <button
          onClick={() => window.open(linkedInUrl, "_blank")}
          className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
        >
          Connect on LinkedIn
        </button>

        {/* Resume Download */}
        <a
          href="/resume.pdf"
          download
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
        >
          Download Resume
        </a>

        {/* My Projects */}
<button
  onClick={() => navigate("/projects")}
  className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
>
  My Projects
</button>
      </div>

    </section>
  );
}