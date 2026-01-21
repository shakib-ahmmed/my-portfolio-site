import React from "react";
import ProjectCard from "./ProjectsCard";
import { projects } from "../data/Projects";


const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
