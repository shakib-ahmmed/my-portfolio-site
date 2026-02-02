import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";

const techStack = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-400" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-400" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
  { icon: <FaDatabase />, name: "MongoDB", color: "text-emerald-400" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-36"
    >
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          About Me
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          I design and build high-quality web experiences with performance,
          aesthetics, and scalability in mind.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="relative grid md:grid-cols-2 gap-16 items-start">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            My journey into web development started with{" "}
            <span className="text-indigo-400 font-semibold">
              HTML, CSS, and JavaScript
            </span>
            . I enjoy understanding how things work under the hood and turning
            ideas into interactive digital products.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I specialize in building applications with{" "}
            <span className="text-pink-400 font-semibold">
              React, Node.js, Express, and MongoDB
            </span>
            , focusing on clean architecture, performance optimization, and
            maintainable code.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            I care deeply about{" "}
            <span className="text-purple-400 font-semibold">
              UI/UX, accessibility, and modern design
            </span>
            . I’m constantly learning, experimenting, and pushing my skills
            forward.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl bg-slate-900/70 border border-indigo-500/30 shadow-xl shadow-indigo-500/10 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            What I Focus On
          </h3>

          <ul className="space-y-4 text-slate-300 text-lg">
            <li>⚡ High-performance, responsive UI</li>
            <li>🧠 Scalable full-stack architecture</li>
            <li>🎨 Pixel-perfect modern design</li>
            <li>🚀 Optimization & best practices</li>
            <li>🤝 Teamwork & problem solving</li>
          </ul>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mt-28"
      >
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Tech Stack
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-slate-900/60 border border-slate-700 hover:border-indigo-400 transition-all duration-300 shadow-md hover:shadow-indigo-500/20"
            >
              <div
                className={`text-4xl ${tech.color} group-hover:drop-shadow-[0_0_10px_currentColor]`}
              >
                {tech.icon}
              </div>
              <p className="text-slate-300 font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative grid grid-cols-2 md:grid-cols-4 gap-10 mt-28 text-center"
      >
        {[
          { value: "18+", label: "Projects" },
          { value: "2+", label: "Years Learning" },
          { value: "5+", label: "Core Tech" },
          { value: "100%", label: "Passion" },
        ].map((stat, i) => (
          <div key={i}>
            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              {stat.value}
            </h4>
            <p className="text-slate-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
