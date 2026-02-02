import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-slate-800 mt-20">
      {/* Subtle Glow */}
      <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-64 h-64 bg-indigo-500/15 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-6 text-center"
      >
        {/* Name */}
        <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Shakib Ahmmed
        </h3>

        {/* Status */}
        <div className="flex justify-center items-center gap-2 mt-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <p className="text-slate-400 text-sm">
            Available for opportunities
          </p>
        </div>

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
        <p className="text-slate-500 text-sm mt-4">
          © 2026 Shakib Ahmmed. All rights reserved.
        </p>
      </motion.div>

      {/* Scroll To Top */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg"
        >
          <FaArrowUp size={14} />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
