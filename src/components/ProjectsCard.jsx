import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#020617] border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all"
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 md:h-56 object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>

        <div className="flex flex-wrap gap-2">
          {project.tech?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-xs font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-2">
          {/* Live Project */}
          <a
            href={project.live || "#"}
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2 rounded-md text-sm font-semibold transition 
              ${project.live
                ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_10px_cyan]"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"}`
            }
          >
            Live View
          </a>

          {/* GitHub Repo */}
          <a
            href={project.github || "#"}
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2 rounded-md text-sm font-semibold transition 
              ${project.github
                ? "border border-slate-600 text-slate-300 hover:border-white hover:text-white hover:shadow-[0_0_10px_white]"
                : "border border-gray-600 text-gray-400 cursor-not-allowed"}`
            }
          >
            GitHub
          </a>
        </div>

        {/* Optional Details Page */}
        <div className="mt-4">
          <Link
            to={`/projects/${project.id}`}
            className="inline-block px-5 py-2 rounded-md text-sm font-semibold bg-gray-800/50 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_10px_cyan] transition"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard
