import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800 mt-24">
      {/* Glow */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-10 text-center"
      >
        {/* Name */}
        <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Shakib Ahmmed
        </h3>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/shakib-ahmmed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/shakib-ahmmed1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://www.facebook.com/shakib.uav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-pink-400 transition"
          >
            <FaFacebook size={20} />
          </a>

          <a
            href="mailto:shakibahmmed1@gmail.com"
            className="text-slate-400 hover:text-purple-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-sm mt-6">
          © 2026 Shakib Ahmmed. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
