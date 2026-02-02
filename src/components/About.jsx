import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-32"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          Building modern, high-performance web experiences with creativity,
          precision, and passion.
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            My journey into web development started with{" "}
            <span className="text-indigo-400 font-semibold">
              HTML, CSS, and JavaScript
            </span>
            , where I learned how the web truly works. That foundation helped me
            transition into modern frameworks and backend technologies.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I specialize in building applications using{" "}
            <span className="text-pink-400 font-semibold">
              React, Node.js, Express, and MongoDB
            </span>
            , focusing on performance, scalability, and clean architecture. I
            enjoy turning complex problems into elegant solutions.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Beyond code, I care deeply about{" "}
            <span className="text-purple-400 font-semibold">
              user experience, accessibility, and visual polish
            </span>
            . I’m constantly learning, experimenting, and pushing my skills to
            the next level.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-indigo-500/20 shadow-lg shadow-indigo-500/10"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            What I Do Best
          </h3>

          <ul className="space-y-4 text-slate-300 text-lg">
            <li className="flex gap-3">
              <span className="text-indigo-400">⚡</span>
              High-performance, responsive UI development
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400">🧩</span>
              Scalable full-stack architecture
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">🎯</span>
              Clean, maintainable, optimized code
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-400">🚀</span>
              Continuous learning & improvement
            </li>
            <li className="flex gap-3">
              <span className="text-pink-400">🤝</span>
              Team collaboration & problem solving
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 text-center"
      >
        <div>
          <h4 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            10+
          </h4>
          <p className="text-slate-400 mt-2">Projects</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            1+
          </h4>
          <p className="text-slate-400 mt-2">Years Learning</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            5+
          </h4>
          <p className="text-slate-400 mt-2">Technologies</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            100%
          </h4>
          <p className="text-slate-400 mt-2">Passion</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
