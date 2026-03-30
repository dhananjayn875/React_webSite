// Header/Hero Section - Introduction and CTA
// This component serves as the main entry point for the portfolio
// It includes the main headline, subtitle, and call-to-action button
import { useTypewriter } from "../hooks/useTypewriter";

// Blinking cursor shown at the end of a currently-typing line
function Cursor({ visible }) {
    return visible ? (
        <span className="inline-block w-0.5 h-[1em] bg-green-400 align-middle ml-0.5 animate-pulse" />
    ) : null;
}

export default function Header() {
    // Sequential typewriter: each piece starts after the previous finishes
    const prompt = useTypewriter("portfolio --open", 60, true, 300);
    const headline = useTypewriter("Dhananjay N", 80, prompt.done, 200);
    const subtitle = useTypewriter(
        "Full Stack Developer | UI/UX Designer | Creative Problem Solver",
        40,
        headline.done,
        150
    );
    const description = useTypewriter(
        "Crafting beautiful, performant web experiences with modern technologies and clean code.",
        30,
        subtitle.done,
        100
    );

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
                {/* Terminal Prompt – types first */}
                <div className="text-lg sm:text-xl font-mono text-green-500 mb-6 min-h-[1.75rem]">
                    {"$ "}
                    <span className="text-green-400">{prompt.displayText}</span>
                    <Cursor visible={!prompt.done} />
                </div>

                {/* Main Headline – types after prompt finishes */}
                <h1 className="text-5xl sm:text-7xl font-bold font-mono mb-6 text-green-400 drop-shadow-lg min-h-[1.2em]">
                    {headline.displayText}
                    <Cursor visible={prompt.done && !headline.done} />
                </h1>

                {/* Subtitle – types after headline finishes */}
                <p className="text-lg sm:text-2xl text-green-300 mb-8 font-mono max-w-2xl mx-auto leading-relaxed min-h-[2rem]">
                    {subtitle.displayText}
                    <Cursor visible={headline.done && !subtitle.done} />
                </p>

                {/* Description – types after subtitle finishes */}
                <p className="text-green-200 text-base sm:text-lg mb-12 font-mono max-w-xl mx-auto min-h-[1.5rem]">
                    {description.displayText}
                    <Cursor visible={subtitle.done && !description.done} />
                </p>

                {/* CTA Button – fades in after all text is typed */}
                <button
                    className={`bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded border-2 border-green-400 transition-all duration-500 font-mono text-lg uppercase tracking-widest ${
                        description.done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionProperty: "opacity, transform" }}
                >
                    {"$ explore --projects"}
                </button>

                {/* Scroll Indicator – appears after CTA */}
                <div
                    className={`mt-16 flex justify-center transition-opacity duration-700 ${
                        description.done ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="animate-bounce text-green-400 font-mono">
                        ↓ Scroll Down ↓
                    </div>
                </div>
            </div>
        </header>
    );
}