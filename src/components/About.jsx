import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24 text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white mb-8"
      >
        About Me
      </motion.h2>

      {/* Paragraph 1 */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-6"
      >
        I’m a passionate web developer who started my journey with{" "}
        <span className="text-white font-medium">
          HTML, CSS, and JavaScript
        </span>
        . Over time, I’ve built real-world projects using{" "}
        <span className="text-white font-medium">
          React, Node.js, and MongoDB
        </span>
        , focusing on clean code and scalable solutions.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto"
      >
        I love crafting{" "}
        <span className="text-white font-medium">
          modern, responsive, and user-friendly
        </span>{" "}
        web applications. I’m always eager to learn new technologies, improve my
        skills, and turn ideas into meaningful digital experiences.
      </motion.p>
    </section>
  );
};

export default About;
