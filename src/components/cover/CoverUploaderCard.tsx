import { Link } from "react-router";
import type { User } from "@api/types";

interface CoverUploaderCardProps {
    uploader: User;
    publishDate: Date;
}

const formatDate = (date: Date): string =>
    new Date(date).toLocaleDateString("es-AR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

export default function CoverUploaderCard({ uploader, publishDate }: CoverUploaderCardProps) {
    return (
        <Link
            to={`/user/${uploader.id}`}
            className="flex items-center gap-3 rounded-lg bg-white/60 p-4 shadow-sm ring-1 ring-amber-900/5 backdrop-blur-sm transition-colors hover:bg-white"
        >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-200 text-base font-semibold text-amber-900">
                {uploader.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
                <p className="truncate text-sm font-medium text-neutral-900">
                    {uploader.name}
                </p>
                <p className="text-xs text-neutral-500">
                    Publicado el {formatDate(publishDate)}
                </p>
            </div>
        </Link>
    );
}