import { useState, useEffect, useRef } from "react";

/**
 * Returns a ref to attach to an element and a boolean indicating
 * whether the element has entered the viewport.
 * Once visible, it stays visible (one-shot trigger).
 * @param {number} threshold - 0–1, how much of the element must be visible
 */
export function useScrollVisible(threshold = 0.3) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}
