import { useState, useRef, type MouseEvent } from "react";
import { Link } from "react-router";

interface SongCardProps {
    id: number;
    duration: number;
    name: string;
    imgUrl?: string;
}

const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function SongCard({ id, duration, name, imgUrl }: SongCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xc = x / rect.width - 0.5;
        const yc = y / rect.height - 0.5;

        setRotateX(yc * -15);
        setRotateY(xc * 15);
    };

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovering(false);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            className={`w-full max-w-[200px] rounded-lg p-4 ring-1 ring-amber-900/5 backdrop-blur-sm transition-all duration-200 ease-out group ${
                isHovering ? "bg-white shadow-md" : "bg-white/60 shadow-sm"
            }`}
        >
            <Link
                to={"/song/" + id}
                title={name}
                className="relative block aspect-square w-full overflow-hidden rounded bg-amber-100 shadow-sm"
            >
                <img
                    src={imgUrl || "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-2010s-28.jpg"}
                    alt={name}
                    className={`h-full w-full object-cover transition-transform duration-300 ${isHovering ? "scale-105" : "scale-100"}`}
                />
            </Link>

            <div className="mt-3">
                <h3 className="truncate text-sm font-semibold text-neutral-900" title={name}>
                    {name}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                    {formatDuration(duration)}
                </p>
            </div>
        </div>
    );
}