function VinylArtwork({ id }: { id: string }) {
    return (
        <svg
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 128 128"
        >
            <circle cx="64" cy="64" r="62" fill="#1b0d09" />
            <circle cx="64" cy="64" r="50" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="64" cy="64" r="39" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="64" cy="64" r="28" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="64" cy="64" r="22" fill="#b1894e" />
            <path
                id={id}
                d="M 64,64 m -16,0 a 16,16 0 1,1 32,0 a 16,16 0 1,1 -32,0"
                fill="none"
            />
            <text fontSize="7" fontWeight="700" letterSpacing="1.2" fill="#1b0d09">
                <textPath href={`#${id}`} startOffset="0%">
                    FREYA
                </textPath>
            </text>
            <circle cx="64" cy="64" r="4" fill="#1b0d09" />
        </svg>
    );
}

export default function LoadingState() {
    return (
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
            <div
                className="loading-vinyl"
                role="status"
                aria-label="Cargando"
            >
                <div className="loading-vinyl__piece loading-vinyl__piece--top-left">
                    <VinylArtwork id="loading-vinyl-label-top-left" />
                </div>
                <div className="loading-vinyl__piece loading-vinyl__piece--top-right">
                    <VinylArtwork id="loading-vinyl-label-top-right" />
                </div>
                <div className="loading-vinyl__piece loading-vinyl__piece--bottom-left">
                    <VinylArtwork id="loading-vinyl-label-bottom-left" />
                </div>
                <div className="loading-vinyl__piece loading-vinyl__piece--bottom-right">
                    <VinylArtwork id="loading-vinyl-label-bottom-right" />
                </div>
            </div>
            <span className="text-xs font-medium text-dusty-olive-500"></span>
        </div>
    );
}
