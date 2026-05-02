import { useState } from "react";

// sample import (adjust paths)
import img1 from "../assets/eventsphere/1.png";
import img2 from "../assets/eventsphere/2.png";

const ProjectsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Event Sphere",
      description:
        "College event management platform with QR ticketing and dashboards.",
      images: [img1, img2],
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/chiranthgowdas",
    },
  ];

  return (
    <div className="bg-[#021B2B] min-h-screen text-white px-6 py-12">
      <h1 className="text-3xl text-center mb-10 text-cyan-400">
        My Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#0A3A4A] p-6 rounded-xl shadow-lg mb-10"
        >
          <h2 className="text-2xl text-cyan-300 mb-2">
            {project.title}
          </h2>

          <p className="text-gray-300 mb-4">
            {project.description}
          </p>

          {/* Images */}
          <div className="flex gap-4 overflow-x-auto mb-4">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
                className="w-64 rounded-lg cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>

          {/* Tech */}
          <div className="flex gap-2 flex-wrap mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-cyan-500 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;