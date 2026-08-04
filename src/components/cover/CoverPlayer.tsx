interface CoverPlayerProps {
    videoId: string | null;
}

export default function CoverPlayer({ videoId }: CoverPlayerProps) {
    return (
        <div className="mx-auto aspect-video w-full max-w-md overflow-hidden rounded-lg bg-neutral-900 shadow-md">
            {videoId ? (
                <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Cover video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                    Sin video disponible
                </div>
            )}
        </div>
    );
}