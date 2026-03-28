import { useState, useEffect } from "react";

/**
 * Animates text being typed one character at a time.
 * @param {string} text - The full text to type out
 * @param {number} speed - Milliseconds between each character
 * @param {boolean} start - Whether to start typing (default true)
 * @param {number} delay - Initial delay in ms before typing begins
 * @returns {{ displayText: string, done: boolean }}
 */
export function useTypewriter(text, speed = 50, start = true, delay = 0) {
    const [displayText, setDisplayText] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!start) return;
        setDisplayText("");
        setDone(false);

        let timeout;
        let interval;

        timeout = setTimeout(() => {
            let i = 0;
            interval = setInterval(() => {
                i++;
                setDisplayText(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setDone(true);
                }
            }, speed);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, start, delay]);

    return { displayText, done };
}
