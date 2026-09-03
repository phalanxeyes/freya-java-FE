function Vinyl({ size, className, id }: { size: number; className?: string; id: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
            <circle cx="100" cy="100" r="98" fill="#1b0d09" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="100" cy="100" r="65" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#4c241a" strokeWidth="1" />

            <circle cx="100" cy="100" r="35" fill="#b1894e" />

            <path id={id} d="M 100,100 m -25,0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" fill="none" />
            <text fontSize="11" fontWeight="700" letterSpacing="2" fill="#1b0d09">
                <textPath href={`#${id}`} startOffset="0%">
                    FREYA
                </textPath>
            </text>

            <circle cx="100" cy="100" r="6" fill="#1b0d09" />
        </svg>
    )
}

export default function VinylDiscs() {
    return (
        <div className="pointer-events-none fixed bottom-0 right-0 z-0 overflow-hidden">
            <div className="relative h-80 w-80">
                <Vinyl
                    id="vinyl-label-1"
                    size={260}
                    className="absolute -bottom-16 -right-16 opacity-20 animate-spin-slow"
                />

                {/* Wrapper para el float, SVG interno para el spin */}
                <div className="absolute bottom-10 right-32 animate-float">
                    <Vinyl
                        id="vinyl-label-2"
                        size={160}
                        className="opacity-15 animate-spin-slower"
                    />
                </div>
            </div>
        </div>
    )
}