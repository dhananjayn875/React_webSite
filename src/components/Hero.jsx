// About/Hero Section - Personal introduction
// This component provides an overview of the developer's background and experience
// Includes a brief bio and key highlights that define the developer's unique value

export default function Hero() {
    // Key statistics/highlights
    const highlights = [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "30+" },
        { label: "Happy Clients", value: "25+" },
        { label: "Tech Stack", value: "10+" },
    ];

    return (
        <section id="about" className="bg-black text-green-400 py-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-green-400">
                    $ whoami
                </h2>
                <div className="h-1 w-20 bg-green-500 mb-8" />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* About Text */}
                    <div className="space-y-6 font-mono">
                        <p className="text-green-300 leading-relaxed">
                            I'm a passionate full-stack developer with a deep love for creating beautiful,
                            efficient, and user-friendly web applications. With over 5 years of experience
                            in web development, I've worked on diverse projects ranging from startups to
                            enterprise solutions.
                        </p>

                        <p className="text-green-300 leading-relaxed">
                            I specialize in modern JavaScript frameworks like React and Node.js, with a
                            strong focus on clean code practices, performance optimization, and scalable
                            architecture. I believe in continuous learning and staying updated with the
                            latest technologies and best practices.
                        </p>

                        <p className="text-green-300 leading-relaxed">
                            When I'm not coding, you can find me contributing to open-source projects,
                            writing technical blog posts, or exploring new technologies that push the
                            boundaries of web development.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-2 rounded font-mono hover:bg-green-500 hover:text-black transition-all duration-300">
                                $ view resume
                            </button>
                            <button className="bg-transparent border-2 border-green-500 text-green-400 px-6 py-2 rounded font-mono hover:bg-green-500/20 transition-all duration-300">
                                $ contact me
                            </button>
                        </div>
                    </div>

                    {/* Highlights Card */}
                    <div className="bg-gray-900 border-2 border-green-500/50 p-8">
                        <h3 className="text-xl font-bold font-mono text-green-400 mb-6">
                            &gt; Highlights
                        </h3>


                        {/* Status Indicator */}
                        <div className="mt-8 pt-6 border-t border-green-500/30">
                            <div className="flex items-center gap-2 text-sm font-mono text-green-400">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Available for new projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}