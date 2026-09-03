interface CoverUploaderCardProps {
    createdAt: Date;
    playCount: number;
}

const formatDate = (date: Date): string =>
    new Date(date).toLocaleDateString("es-AR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

export default function CoverUploaderCard({ createdAt, playCount }: CoverUploaderCardProps) {
    return (
        <div className="rounded-xl bg-sand-50/70 p-4 shadow-sm ring-1 ring-olive-bark-500/15 backdrop-blur-sm">
            <div className="min-w-0">
                <p className="text-xs text-dusty-olive-600">
                    Publicado el {formatDate(createdAt)}
                </p>
                <p className="mt-1 text-xs text-dusty-olive-600">Reproducciones: {playCount}</p>
            </div>
        </div>
    );
}