import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const [dark, setDark] = useState(true);

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <footer className="relative mt-32 border-t border-slate-800 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-12 text-center"
      >
        {/* Name */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Shakib Ahmmed
        </h3>

        {/* Status */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <p className="text-slate-400 text-sm">
            Available for opportunities
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/shakib-ahmmed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/shakib-ahmmed1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.facebook.com/shakib.uav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-pink-400 transition hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="mailto:shakibahmmed1@gmail.com"
            className="text-slate-400 hover:text-purple-400 transition hover:drop-shadow-[0_0_8px_currentColor]"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition text-slate-300 hover:text-yellow-400"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-sm mt-8">
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
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
