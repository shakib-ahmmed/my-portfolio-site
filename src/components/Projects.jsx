import React from "react";
import ProjectCard from "./ProjectsCard";


// ✅ Project Data
const projects = [
  {
    id: 1,
    name: "Home Nest – Real Estate Platform",
    image: "/HOME-NEST - .png",
    live: "https://home-nest-84a80.web.app/",
    github: "https://github.com/shakib-ahmmed/home-nest",
    tech: ["React", "Tailwind", "Firebase", "Node.js", "MongoDB"],
    description: [
      "Property listing and full CRUD system",
      "Secure authentication with protected routes",
      "Fully responsive UI with modern design",
    ],
  },
  {
    id: 2,
    name: "Book My Seat – Ticket Booking System",
    image: "/BOOKMYSEAT-.png",
    live: "https://book-my-seat-77125.web.app/",
    github: "https://github.com/shakib-ahmmed/book-my-seat",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description: [
      "Dynamic ticket booking system",
      "REST API based data handling",
      "Real-time seat availability",
    ],
  },
  {
    id: 3,
    name: "Green Nest – Plant Shop",
    image: "/green-nest .png",
    live: "https://green-nest-cacc0.web.app/",
    github: "https://github.com/shakib-ahmmed/green-nest",
    tech: ["React", "Tailwind", "Stripe API", "Firebase"],
    description: [
      "Product listing and order management",
      "Clean and responsive UI",
      "Modern e-commerce flow with payment integration",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
