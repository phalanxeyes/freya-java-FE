interface CoverPlayerProps {
    videoId: string | null;
}

export default function CoverPlayer({ videoId }: CoverPlayerProps) {
    return (
        <div className="mx-auto aspect-video w-full max-w-md overflow-hidden rounded-2xl bg-espresso-950 shadow-lg shadow-espresso-900/20 ring-1 ring-espresso-800/20">
            {videoId ? (
                <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Cover video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-olive-bark-300">
                    Sin video disponible
                </div>
            )}
        </div>
    );
}