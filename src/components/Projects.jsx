// Projects Section - Showcase of completed work
// This component displays featured projects with descriptions, tech stack, and links
// Each project card includes an image placeholder and relevant project details

export default function Projects() {
    // Sample project data - replace with your actual projects
    const projects = [
        {
            id: 0,
            title: "Portfolio",
            description: "Portfolio website built with React and Tailwind CSS, showcasing projects and skills",
            tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
            link: "#",
            status: "Completed",
        },
        {
            id: 1,
            title: "Stock Market Dashboard",
            description: "Full-stack e-commerce solution with real-time inventory management",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
            link: "instagram.com",
            status: "Completed",
        },
    ];

    return (
        <section id="projects" className="bg-black text-green-400 py-20 px-6 sm:px-12">
            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-green-400">
                    $ projects --show
                </h2>
                <div className="h-1 w-20 bg-green-500" />
                <p className="text-green-300 mt-4 font-mono">
                    Selected works and featured projects
                </p>
            </div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-gray-900 border-2 border-green-500/50 overflow-hidden hover:border-green-400 transition-all duration-300"
                    >
                        {/* Project Image Placeholder */}
                        <div className="w-full h-48 bg-gray-800 border-b-2 border-green-500/50 flex items-center justify-center overflow-hidden relative">
                            <div className="text-center text-green-500 font-mono opacity-50">
                                [{project.title}]
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            {/* Status Badge */}
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold font-mono text-green-400">
                                    {project.title}
                                </h3>
                                <span
                                    className={`text-xs font-mono px-3 py-1 border rounded ${project.status === "Completed"
                                        ? "border-green-500 text-green-400 bg-green-500/10"
                                        : "border-yellow-500 text-yellow-400 bg-yellow-500/10"
                                        }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-green-300 text-sm mb-4 font-mono">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-800 border border-green-500/30 text-green-400 px-3 py-1 rounded text-xs font-mono hover:bg-green-500/20 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project Link */}
                            <a
                                href={project.link}
                                className="inline-block bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded font-mono text-sm hover:bg-green-500 hover:text-black transition-all duration-300"
                            >
                                $ view project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <div className="max-w-6xl mx-auto mt-12 text-center text-green-500 font-mono text-sm">
                $ more projects available on GitHub
            </div>
        </section>
    );
}