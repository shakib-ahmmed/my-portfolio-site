import React, { useState } from "react";
import { Link } from "react-scroll";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-[#0f172a]/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r cursor-pointer from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Shakib Ahmmed
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-70}
              className="relative cursor-pointer text-slate-300 hover:text-cyan-400 transition"
            >
              {section.toUpperCase()}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition ${open && "rotate-45 translate-y-2"
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition ${open && "opacity-0"
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition ${open && "-rotate-45 -translate-y-2"
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-center bg-[#020617]/95 backdrop-blur py-4 space-y-4 border-t border-slate-800">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="text-slate-300 font-semibold hover:text-cyan-400 transition"
            >
              {section.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
