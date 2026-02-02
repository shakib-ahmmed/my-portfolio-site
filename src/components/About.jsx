import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Me
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          A passionate developer focused on building modern, scalable, and
          impactful digital experiences.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I began my programming journey by learning{" "}
            <span className="text-white font-medium">
              HTML, CSS, and JavaScript
            </span>
            , developing a strong foundation in web fundamentals. As my
            curiosity grew, I expanded into modern frameworks and backend
            technologies to build complete, real-world applications.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I have hands-on experience working with{" "}
            <span className="text-white font-medium">
              React, Node.js, Express, and MongoDB
            </span>
            , creating responsive user interfaces, REST APIs, and full-stack
            solutions. I focus on writing clean, maintainable code and following
            best practices.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            My goal is to continuously improve as a developer, stay updated
            with emerging technologies, and contribute to meaningful projects
            that solve real-world problems and deliver great user experiences.
          </p>
        </motion.div>

        {/* Right Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            What I Focus On
          </h3>

          <ul className="space-y-4 text-slate-400 text-lg">
            <li>⚡ Building fast, responsive, and accessible web interfaces</li>
            <li>🧩 Developing scalable full-stack applications</li>
            <li>🎯 Writing clean, optimized, and maintainable code</li>
            <li>🚀 Continuous learning and performance optimization</li>
            <li>🤝 Collaboration, communication, and problem solving</li>
          </ul>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
      >
        <div>
          <h4 className="text-4xl font-bold text-white">10+</h4>
          <p className="text-slate-400 mt-2">Projects Built</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-white">1+</h4>
          <p className="text-slate-400 mt-2">Years Learning</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-white">5+</h4>
          <p className="text-slate-400 mt-2">Technologies</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-white">100%</h4>
          <p className="text-slate-400 mt-2">Dedication</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
