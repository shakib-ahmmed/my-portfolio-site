import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "/project1.png",
    stack: "React, Tailwind CSS",
    description: "A modern portfolio website showcasing my skills and projects.",
    live: "#",
    github: "https://github.com/shakib-ahmmed",
    challenges: "Responsive design and animations.",
    future: "Add backend contact form and CMS integration."
  },
  // ... add other projects
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  if (!project) return <div className="p-10">Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <img src={project.image} alt={project.name} className="w-full h-64 object-cover mb-4"/>
      <p><strong>Technology Stack:</strong> {project.stack}</p>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Challenges:</strong> {project.challenges}</p>
      <p><strong>Future Improvements:</strong> {project.future}</p>
      <div className="mt-4">
        <a href={project.live} target="_blank" className="mr-4 text-blue-600 hover:underline">Live Project</a>
        <a href={project.github} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectDetail;
