import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";

// 🔹 Home Page (All sections)
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Contact />
      <Footer /> {/* ✅ correct placement */}
    </>
  );
}

// 🔹 Main App Routing
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}