import React from "react";
import GalaxyBG from "./GalaxyBG";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center px-6"
    >
      {/* Galaxy Background */}
      <GalaxyBG />

      {/* Full-screen Transparent Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10 flex flex-col md:flex-row items-center justify-center gap-12 p-8">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Shakib
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 mb-4 font-medium">
            Frontend Developer
          </h2>
          <p className="text-slate-300 mb-6 text-lg md:text-xl">
            I build modern, responsive, and scalable web applications with clean UI and smooth UX.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <span className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-sm shadow-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-800/50 text-green-400 rounded-full text-sm shadow-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-gray-800/50 text-pink-400 rounded-full text-sm shadow-sm">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-gray-800/50 text-yellow-400 rounded-full text-sm shadow-sm">
              HTML & CSS
            </span>
            <span className="px-3 py-1 bg-gray-800/50 text-purple-400 rounded-full text-sm shadow-sm">
              Git & GitHub
            </span>
          </div>

          {/* Resume Button */}
          <a
            href="/Shakib_Ahmmed_MERN_Resume.pdf"
            download
            className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-lg"
          >
            Download Resume
          </a>


          {/* Social Links */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/shakib-ahmmed"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shakib-ahmmed1/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0`">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/50 animate-ping-slow"></div>
          <img
            src="/profile.png"
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover shadow-2xl z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
