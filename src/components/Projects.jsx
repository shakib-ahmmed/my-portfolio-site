import React from "react";
import ProjectCard from "./ProjectsCard";

const projects = [
  { id: 1, name: "Portfolio Website", image: "/project1.png" },
  { id: 2, name: "E-commerce App", image: "/project2.png" },
  { id: 3, name: "Blog Platform", image: "/project3.png" },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
