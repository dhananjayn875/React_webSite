// Header/Hero Section - Introduction and CTA
// This component serves as the main entry point for the portfolio
// It includes the main headline, subtitle, and call-to-action button
export default function Header() {
    return (
        <header className="min-h-screen bg-black text-green-400 flex items-center justify-center pt-20 overflow-hidden relative">
            {/* Background grid pattern (terminal aesthetic) */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-6 sm:px-12 text-center max-w-4xl">
                {/* Terminal Prompt */}
                <div className="text-lg sm:text-xl font-mono text-green-500 mb-6 animate-pulse">
                    {"$ "}
                    <span className="text-green-400">portfolio --open</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl sm:text-7xl font-bold font-mono mb-6 text-green-400 drop-shadow-lg">
                    Dhananjay N
                </h1>

                {/* Subtitle/Description */}
                <p className="text-lg sm:text-2xl text-green-300 mb-8 font-mono max-w-2xl mx-auto leading-relaxed">
                    Full Stack Developer | UI/UX Designer | Creative Problem Solver
                </p>

                {/* Description */}
                <p className="text-green-200 text-base sm:text-lg mb-12 font-mono max-w-xl mx-auto">
                    Crafting beautiful, performant web experiences with modern technologies and clean code.
                </p>

                {/* CTA Button */}
                <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded border-2 border-green-400 transition-all duration-300 font-mono text-lg uppercase tracking-widest">
                    {"$ explore --projects"}
                </button>

                {/* Scroll Indicator */}
                <div className="mt-16 flex justify-center">
                    <div className="animate-bounce text-green-400 font-mono">
                        ↓ Scroll Down ↓
                    </div>
                </div>
            </div>
        </header>
    );
}