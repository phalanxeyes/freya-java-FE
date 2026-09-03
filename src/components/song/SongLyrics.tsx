interface SongLyricsProps {
    lyrics: string;
}

export default function SongLyrics({ lyrics }: SongLyricsProps) {
    if (!lyrics.trim()) return null;

    return (
        <div className="mt-10 rounded-2xl bg-sand-50/70 p-6 shadow-sm ring-1 ring-olive-bark-500/15 backdrop-blur-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-espresso-700">
                Letra
            </h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-dusty-olive-800">
                {lyrics}
            </p>
        </div>
    );
}