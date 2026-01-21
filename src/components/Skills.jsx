import React from "react";

const skills = {
    Frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "MongoDB"],
    Tools: ["Git", "VSCode", "Figma", "Postman"],
};

const Skills = () => {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {Object.keys(skills).map((category) => (
                    <div
                        key={category}
                        className="bg-[#020617] border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">
                            {category}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {skills[category].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
