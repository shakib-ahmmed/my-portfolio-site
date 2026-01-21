import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/Projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  if (!project) return <div className="p-10 text-white">Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">{project.name}</h2>

      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-auto object-contain rounded-xl shadow-lg mb-6"
      />


      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-sm font-medium shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <ul className="list-disc list-inside mb-6 space-y-1">
        {project.description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href={project.live || "#"}
          target="_blank"
          rel="noreferrer"
          className={`px-5 py-2 rounded-md text-sm font-semibold transition
            ${project.live
              ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_10px_cyan]"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"}`
          }
        >
          Live Project
        </a>

        <a
          href={project.github || "#"}
          target="_blank"
          rel="noreferrer"
          className={`px-5 py-2 rounded-md text-sm font-semibold transition
            ${project.github
              ? "border border-slate-600 text-slate-300 hover:border-white hover:text-white hover:shadow-[0_0_10px_white]"
              : "border border-gray-600 text-gray-400 cursor-not-allowed"}`
          }
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
