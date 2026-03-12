// Footer Section - Contact information and links
// This component serves as the final section with contact details, social links, and copyright
// Includes call-to-action, social media links, and additional navigation

export default function Footer() {
    // Social media links
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/dhananjayn875" },
        { name: "LinkedIn", url: "https://linkedin.com/dhananjayn875" },
        { name: "Instagram", url: "https://instagram.com/dhananjay3nvs" },
        { name: "Portfolio", url: "#" },
    ];

    // Quick links
    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#work" },
        { name: "Services", href: "#services" },
    ];

    return (
        <footer id="contact" className="bg-black text-green-400 border-t-2 border-green-500/50">
            <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About Footer */}
                    <div>
                        <h3 className="text-xl font-bold font-mono mb-4 text-green-400">
                            $ about
                        </h3>
                        <p className="text-green-300 text-sm font-mono leading-relaxed">
                            Full-stack developer and designer passionate about creating beautiful,
                            performant web experiences. Always learning and exploring new technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold font-mono mb-4 text-green-400">
                            $ links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-green-300 hover:text-green-400 transition-colors font-mono text-sm"
                                    >
                                        &gt; {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold font-mono mb-4 text-green-400">
                            $ contact
                        </h3>
                        <div className="space-y-3 text-sm font-mono">
                            <div>
                                <p className="text-green-500">Email:</p>
                                <a
                                    href="mailto:john@example.com"
                                    className="text-green-300 hover:text-green-400 transition-colors"
                                >
                                    john@example.com
                                </a>
                            </div>
                            <div>
                                <p className="text-green-500">Phone:</p>
                                <a
                                    href="tel:+1234567890"
                                    className="text-green-300 hover:text-green-400 transition-colors"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-0.5 bg-green-500/30 mb-12" />

                {/* Social Links and CTA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Social Links */}
                    <div>
                        <h4 className="text-green-400 font-mono font-bold mb-4">
                            $ follow --social
                        </h4>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded font-mono text-sm hover:bg-green-500 hover:text-black transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-left md:text-right">
                        <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded font-mono text-sm tracking-widest uppercase transition-all duration-300">
                            $ hire me
                        </button>
                    </div>
                </div>

                {/* Status Indicator */}
                <div className="text-center mb-8 font-mono text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Currently available for new projects
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center border-t border-green-500/30 pt-8 text-green-500 font-mono text-xs">
                    <p>
                        $ echo "© 2024 John Doe. All rights reserved. | Built with React + Tailwind CSS"
                    </p>
                </div>
            </div>
        </footer>
    );
}