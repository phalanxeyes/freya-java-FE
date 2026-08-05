import { type ReactNode, useState } from "react";

interface CarouselProps {
    children: ReactNode[];
    speed?: number;
}

export default function Carousel({ children, speed = 40 }: CarouselProps) {
    const [isPaused, setIsPaused] = useState(false);
    const looped = [...children, ...children];

    return (
        <div className="overflow-hidden">
            <div
                className="flex w-max gap-4 animate-carousel"
                style={{
                    animationDuration: `${speed}s`,
                    animationPlayState: isPaused ? "paused" : "running",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {looped.map((child, i) => (
                    <div key={i} className="shrink-0">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}