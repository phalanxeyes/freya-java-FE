import { type ReactNode, useRef, useEffect } from "react";

interface CarouselProps {
    children: ReactNode[];
    speed?: number;
}

export default function Carousel({ children, speed = 40 }: CarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef(0);
    const pausedRef = useRef(false);
    const frameRef = useRef<number | null>(null);
    const looped = [...children, ...children];

    useEffect(() => {
        const pxPerSecond = 800 / speed;
        let last = performance.now();

        const animate = (now: number) => {
            const dt = (now - last) / 1000;
            last = now;

            if (trackRef.current) {
                if (!pausedRef.current) {
                    positionRef.current += pxPerSecond * dt;
                }
                const halfWidth = trackRef.current.scrollWidth / 2;
                if (halfWidth > 0) {
                    positionRef.current = ((positionRef.current % halfWidth) + halfWidth) % halfWidth;
                }
                trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
            }
            frameRef.current = requestAnimationFrame(animate);
        };
        frameRef.current = requestAnimationFrame(animate);
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [speed]);

    const nudge = (dir: 1 | -1) => {
        if (!trackRef.current) return;
        const halfWidth = trackRef.current.scrollWidth / 2;
        positionRef.current += dir * 200;
        if (halfWidth > 0) {
            positionRef.current = ((positionRef.current % halfWidth) + halfWidth) % halfWidth;
        }
        trackRef.current.style.transition = "transform 0.3s ease";
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        window.setTimeout(() => {
            if (trackRef.current) trackRef.current.style.transition = "";
        }, 300);
    };

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
        >
            <div ref={trackRef} className="flex w-max gap-4">
                {looped.map((child, i) => (
                    <div key={i} className="shrink-0">
                        {child}
                    </div>
                ))}
            </div>

            <button
                onClick={() => nudge(-1)}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-espresso-900/70 p-2 text-sand-50 shadow-md transition hover:bg-espresso-800 cursor-pointer"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={() => nudge(1)}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-espresso-900/70 p-2 text-sand-50 shadow-md transition hover:bg-espresso-800 cursor-pointer"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}