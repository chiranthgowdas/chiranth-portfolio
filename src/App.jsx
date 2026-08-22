import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ProjectsPage from "./components/ProjectsPage";

function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

function SectionDivider() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 pointer-events-none">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#06d6a0]/40 to-transparent blur-[1px]" />
    </div>
  );
}

function Home() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Certificates />
      <SectionDivider />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}