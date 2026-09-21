const NONFOUND_QUOTES = [
    "Wake me up, when the Not Found ends",
    "Never mind, I'll find... a Not Found like you",
    "I tried so hard, and got Not Found, but in the end, it doesn't even matter",
    "Is this the real site? Is this just fantasy? Caught in a Not Found, no escape from reality",
    "Mama... Just got Not Found",

]

function BrokenVinyl() {
    return (
        <svg
            aria-label="Vinilo roto"
            className="h-48 w-48 sm:h-56 sm:w-56"
            role="img"
            viewBox="0 0 200 200"
        >
            <circle cx="100" cy="100" r="98" fill="#1b0d09" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="100" cy="100" r="65" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#4c241a" strokeWidth="1" />
            <circle cx="100" cy="100" r="35" fill="#b1894e" />
            <path
                d="M 100,100 m -25,0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
                fill="none"
                id="broken-vinyl-label"
            />
            <text fontSize="11" fontWeight="700" letterSpacing="2" fill="#1b0d09">
                <textPath href="#broken-vinyl-label" startOffset="0%">
                    FREYA
                </textPath>
            </text>
            <circle cx="100" cy="100" r="6" fill="#1b0d09" />

            <path
                d="M78 4 L91 19 L84 36 L96 51 L88 68 L101 83 L92 99 L106 116 L98 132 L111 148 L104 165 L119 181 L111 198 L82 198 L91 180 L78 164 L87 147 L73 131 L82 114 L68 98 L78 82 L65 66 L75 50 L63 34 L72 18 L65 6Z"
                fill="#f2f3f1"
            />

            <g fill="#1b0d09" stroke="#4c241a" strokeWidth="1.5">
                <path d="M157 12 A18 18 0 0 1 184 29 L174 38 L162 31 L151 22Z" transform="rotate(18 168 25)" />
                <path d="M14 151 A17 17 0 0 0 39 174 L49 164 L39 151 L27 145Z" transform="rotate(-24 30 160)" />
                <path d="M145 163 A15 15 0 0 1 168 178 L157 187 L143 179 L136 169Z" transform="rotate(12 152 174)" />
            </g>
        </svg>
    );
}

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
            <BrokenVinyl />
            <div className="space-y-2">
                <p className="text-6xl font-bold tracking-tight text-espresso-800">404</p>
                <h1 className="text-xl font-semibold text-dusty-olive-800 sm:text-2xl">
                    {NONFOUND_QUOTES[Math.floor(Math.random() * NONFOUND_QUOTES.length)]}
                </h1>
            </div>
        </section>
    );
}