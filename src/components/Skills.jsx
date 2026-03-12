// Skills Section - Display technical proficiencies
// This component showcases the developer's technical skills organized by category
// Each skill card includes the skill name and a visual proficiency indicator

export default function Skills() {
    // Skill categories with proficiency levels (0-100)
    const skillCategories = [
        {
            name: "Frontend",
            skills: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Tailwind CSS", level: 92 },
                { name: "Next.js", level: 88 },
            ],
        },
        {
            name: "Backend",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "PostgreSQL", level: 85 },
                { name: "MongoDB", level: 88 },
                { name: "Express", level: 92 },
            ],
        },
        {
            name: "Tools & Platform",
            skills: [
                { name: "Git", level: 95 },
                { name: "Docker", level: 80 },
                { name: "AWS", level: 78 },
                { name: "Linux", level: 88 },
            ],
        },
    ];

    return (
        <section id="skills" className="bg-black text-green-400 py-20 px-6 sm:px-12">
            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-green-400">
                    $ skills --list
                </h2>
                <div className="h-1 w-20 bg-green-500" />
                <p className="text-green-300 mt-4 font-mono">
                    Technical proficiencies and areas of expertise
                </p>
            </div>

            {/* Skills Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-900 border-2 border-green-500/50 p-6 hover:border-green-400 transition-all duration-300"
                    >
                        {/* Category Title */}
                        <h3 className="text-xl font-bold font-mono text-green-400 mb-6">
                            &gt; {category.name}
                        </h3>

                        {/* Skills List */}
                        <div className="space-y-4">
                            {category.skills.map((skill, skillIdx) => (
                                <div key={skillIdx}>
                                    {/* Skill Name and Percentage */}
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-green-300 font-mono text-sm">
                                            {skill.name}
                                        </span>
                                        <span className="text-green-500 font-mono text-xs">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    {/* Proficiency Bar */}
                                    <div className="bg-gray-800 border border-green-500/30 h-2 rounded overflow-hidden">
                                        <div
                                            className="bg-green-500 h-full transition-all duration-500"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <div className="max-w-6xl mx-auto mt-12 text-center text-green-500 font-mono text-sm">
                $ echo "Always learning & improving..."
            </div>
        </section>
    );
}