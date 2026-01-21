import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiTool, FiFolder, FiMail } from "react-icons/fi";

const sections = [
  { name: "home", icon: <FiHome size={18} /> },
  { name: "about", icon: <FiUser size={18} /> },
  { name: "skills", icon: <FiTool size={18} /> },
  { name: "projects", icon: <FiFolder size={18} /> },
  { name: "contact", icon: <FiMail size={18} /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Scroll to hash on page load or route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id); // highlight active section
      }
    } else if (location.pathname === "/") {
      setActiveSection("home");
    }
  }, [location]);

  // Highlight active section on homepage scroll
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 90;
      sections.forEach((section) => {
        const el = document.getElementById(section.name);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle link click
  const handleLinkClick = (section) => {
    setOpen(false);
    setActiveSection(section); // highlight immediately

    if (location.pathname === "/") {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-[#0f172a]/80 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => animateScroll.scrollToTop()}
        >
          Shakib Ahmmed
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => handleLinkClick(section.name)}
              className={`flex items-center gap-1 px-3 py-1 rounded hover:bg-[#1e293b]/50 transition-colors cursor-pointer ${activeSection === section.name
                  ? "bg-[#1e293b]/70 text-cyan-400 font-bold shadow-[0_0_10px_cyan]"
                  : "text-slate-300 hover:text-cyan-400"
                }`}
            >
              <span>{section.icon}</span>
              <span>{section.name.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-center bg-[#020617]/95 backdrop-blur py-4 space-y-4 border-t border-slate-800">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => handleLinkClick(section.name)}
              className={`flex items-center gap-2 px-4 py-2 text-slate-300 font-semibold rounded hover:bg-[#1e293b]/50 hover:text-cyan-400 transition cursor-pointer ${activeSection === section.name
                  ? "bg-[#1e293b]/70 text-cyan-400 font-bold shadow-[0_0_10px_cyan]"
                  : ""
                }`}
            >
              {section.icon}
              {section.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
