import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaFigma,
    FaPlane, FaMapMarkedAlt, FaBatteryFull, FaWifi
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiArduino, SiRaspberrypi, SiEspressif } from "react-icons/si";

// --- Custom SVG logos for FPV/IoT ---
const INAVLogo = () => (
    <svg viewBox="0 0 512 512" className="w-7 h-7">
        <circle cx="256" cy="256" r="256" fill="#1E90FF" />
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="150" fontWeight="bold">iN</text>
    </svg>
);

const BetaflightLogo = () => (
    <svg viewBox="0 0 512 512" className="w-7 h-7">
        <circle cx="256" cy="256" r="256" fill="#8A2BE2" />
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="120" fontWeight="bold">BF</text>
    </svg>
);

const LoRaLogo = () => (
    <svg viewBox="0 0 512 512" className="w-7 h-7">
        <circle cx="256" cy="256" r="256" fill="#800080" />
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="120" fontWeight="bold">LoRa</text>
    </svg>
);

const skillsData = {
    Frontend: [
        { name: "React", icon: FaReact, color: "text-cyan-400", label: "Advanced", level: 4, desc: "Component-based UI development" },
        { name: "HTML", icon: FaHtml5, color: "text-orange-500", label: "Advanced", level: 5, desc: "Semantic & accessible markup" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", label: "Advanced", level: 4, desc: "Responsive layouts & animations" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400", label: "Intermediate", level: 4, desc: "ES6+, async programming" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", label: "Advanced", level: 5, desc: "Utility-first styling system" },
    ],
    Backend: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500", label: "Intermediate", level: 3, desc: "Backend runtime & APIs" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-300", label: "Intermediate", level: 3, desc: "REST API development" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400", label: "Intermediate", level: 3, desc: "NoSQL database design" },
    ],
    Tools: [
        { name: "Git", icon: FaGitAlt, color: "text-red-500", label: "Advanced", level: 4, desc: "Version control & collaboration" },
        { name: "Figma", icon: FaFigma, color: "text-pink-500", label: "Familiar", level: 2, desc: "UI/UX design & prototyping" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400", label: "Intermediate", level: 3, desc: "API testing & debugging" },
    ],
    IoT: [
        { name: "ESP32", icon: SiEspressif, color: "text-red-400", label: "Advanced", level: 4, desc: "WiFi & Bluetooth microcontroller" },
        { name: "Arduino", icon: SiArduino, color: "text-teal-400", label: "Advanced", level: 4, desc: "Embedded systems prototyping" },
        { name: "LoRa", icon: LoRaLogo, color: "text-purple-400", label: "Intermediate", level: 3, desc: "Long-range low-power communication" },
        { name: "Raspberry Pi", icon: SiRaspberrypi, color: "text-pink-500", label: "Intermediate", level: 3, desc: "Linux SBC & automation" },
    ],
    "FPV / RC": [
        { name: "FPV Wings & Drones", icon: FaPlane, color: "text-cyan-400", label: "Advanced", level: 4, desc: "Fixed-wing & multirotor FPV builds" },
        { name: "INAV", icon: INAVLogo, color: "text-indigo-400", label: "Intermediate", level: 3, desc: "GPS-assisted fixed-wing firmware" },
        { name: "Betaflight", icon: BetaflightLogo, color: "text-purple-400", label: "Intermediate", level: 3, desc: "Acro & multirotor firmware" },
        { name: "GPS & Navigation", icon: FaMapMarkedAlt, color: "text-green-400", label: "Intermediate", level: 3, desc: "GPS setup, RTH, navigation tuning" },
        { name: "Telemetry & RC Links", icon: FaWifi, color: "text-yellow-400", label: "Advanced", level: 4, desc: "ELRS, Crossfire, telemetry systems" },
        { name: "Li-ion / LiPo Power", icon: FaBatteryFull, color: "text-emerald-400", label: "Intermediate", level: 3, desc: "Battery packs, safety & efficiency" },
    ],
};

const Skills = () => {
    const [active, setActive] = useState("Frontend");
    const [hovered, setHovered] = useState(null);

    return (
        <section id="skills" className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] top-10 left-10" />
                <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] bottom-10 right-10" />
            </div>

            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-white">Skills & Experience</h2>
                    <p className="text-slate-400 mt-3">Web, IoT & FPV systems I actively work with</p>
                </motion.div>

                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {Object.keys(skillsData).map((cat) => (
                        <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full text-sm transition ${active === cat ? "bg-cyan-500 text-black" : "border border-slate-700 text-slate-300 hover:border-cyan-400"}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div key={active} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData[active].map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div key={skill.name} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)} whileHover={{ scale: 1.05 }} className="relative rounded-2xl p-6 bg-[#020617]/90 border border-slate-800 backdrop-blur hover:border-cyan-400 transition cursor-pointer">
                                <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">{skill.label}</span>
                                <div className="flex items-center gap-4 mb-2">
                                    <Icon className={`text-3xl ${skill.color} animate-pulse`} />
                                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                </div>
                                <div className="mt-2 w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level * 20}%` }} transition={{ duration: 0.8 }} className="h-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                                </div>
                                {hovered === index && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-[#111827] text-white text-xs p-2 rounded shadow-lg w-52 z-10">
                                        {skill.desc}
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
