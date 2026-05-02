export default function Navbar() {
  return (
    <div className="fixed w-full top-0 bg-[#0b1727]/80 backdrop-blur-md px-10 py-4 flex justify-between z-50">
      <h1 className="text-cyan-400 font-bold text-xl">Chiranth</h1>

      <a
        href="https://www.linkedin.com/in/chiranth-gowda-s-67565a310"
        target="_blank"
        className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        LinkedIn
      </a>
    </div>
  );
}