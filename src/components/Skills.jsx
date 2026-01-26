import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaGitAlt,
    FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const skillsData = {
    Frontend: [
        { name: "React", icon: FaReact, level: 90, color: "text-cyan-400", desc: "Component-based UI library" },
        { name: "HTML", icon: FaHtml5, level: 95, color: "text-orange-500", desc: "Semantic & accessible markup" },
        { name: "CSS", icon: FaCss3Alt, level: 90, color: "text-blue-500", desc: "Modern layouts & animations" },
        { name: "JavaScript", icon: FaJs, level: 85, color: "text-yellow-400", desc: "ES6+, async logic" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "text-sky-400", desc: "Utility-first styling" },
    ],
    Backend: [
        { name: "Node.js", icon: FaNodeJs, level: 80, color: "text-green-500", desc: "Server-side JS runtime" },
        { name: "Express.js", icon: SiExpress, level: 75, color: "text-gray-300", desc: "REST API framework" },
        { name: "MongoDB", icon: SiMongodb, level: 78, color: "text-green-400", desc: "NoSQL database" },
    ],
    Tools: [
        { name: "Git", icon: FaGitAlt, level: 85, color: "text-red-500", desc: "Version control" },
        { name: "Figma", icon: FaFigma, level: 70, color: "text-pink-500", desc: "UI/UX design" },
        { name: "Postman", icon: SiPostman, level: 75, color: "text-orange-400", desc: "API testing" },
    ],
};

const Skills = () => {
    const [active, setActive] = useState("Frontend");

    return (
        <section
            id="skills"
            className="relative overflow-hidden py-24 px-4"
        >
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] top-10 left-10 animate-pulse" />
                <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] bottom-10 right-10 animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold text-white">
                        Skills & Tools
                    </h2>
                    <p className="text-slate-400 mt-3">
                        Technologies I use to build modern applications
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {Object.keys(skillsData).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition
                                ${active === cat
                                    ? "bg-cyan-500 text-black"
                                    : "border border-slate-700 text-slate-300 hover:border-cyan-400"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillsData[active].map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                key={skill.name}
                                className="group relative rounded-2xl p-6 bg-[#020617]/90 border border-slate-800 backdrop-blur hover:border-cyan-400 transition"
                            >
                                {/* Cursor glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />

                                {/* Icon + Name */}
                                <div className="flex items-center gap-4 mb-2">
                                    <Icon className={`text-3xl ${skill.color}`} />
                                    <h3 className="text-lg font-semibold text-white">
                                        {skill.name}
                                    </h3>
                                </div>

                                {/* Tooltip */}
                                <p className="text-xs text-slate-400 mb-4">
                                    {skill.desc}
                                </p>

                                {/* Progress */}
                                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 0.8 }}
                                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                                    />
                                </div>

                                <p className="text-right text-xs text-slate-400 mt-1">
                                    {skill.level}%
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
