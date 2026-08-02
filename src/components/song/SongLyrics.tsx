interface SongLyricsProps {
    lyrics: string;
}

export default function SongLyrics({ lyrics }: SongLyricsProps) {
    if (!lyrics.trim()) return null;

    return (
        <div className="mt-10 rounded-lg bg-white/60 p-6 shadow-sm ring-1 ring-amber-900/5 backdrop-blur-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                Letra
            </h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-neutral-700">
                {lyrics}
            </p>
        </div>
    );
}