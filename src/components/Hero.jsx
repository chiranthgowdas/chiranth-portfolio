import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#021B2B] to-[#0A3A4A] text-white px-4">
      
      <img
        src={profile}
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-lg mb-6 hover:scale-105 transition duration-300"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Chiranth Gowda S
      </h1>

      <p className="text-gray-300 mb-6">
        Data | AI | Software | Innovation
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg transition"
        >
          Connect on LinkedIn
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          Download Resume
        </a>

        {/* Projects */}
        <a
          href="/projects"
          className="bg-cyan-400 text-black px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
        >
          My Projects
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/chiranthgowdas"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          GitHub
        </a>

      </div>
    </section>
  );
};

export default Hero;