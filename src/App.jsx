import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectsPage from "./components/ProjectsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}