import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-[#021B2B] text-white z-50 shadow-md">
      
      <h1 className="text-xl font-bold text-cyan-400">
        Chiranth
      </h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-cyan-400">
          Home
        </Link>
        <Link to="/projects" className="hover:text-cyan-400">
          Projects
        </Link>
      </div>
    </nav>
  );
}