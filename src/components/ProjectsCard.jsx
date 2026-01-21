import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <div className="bg-[#020617] border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-400 transition">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        {project.name}
      </h3>
      <Link
        to={`/projects/${project.id}`}
        className="text-cyan-400 hover:underline"
      >
        View Details →
      </Link>
    </div>
  </div>
);

export default ProjectCard;
