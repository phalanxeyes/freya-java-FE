import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { coverService } from "@api/coverService";
import type { Cover } from "@api/types";
import LoadingState from "@components/LoadingState";
import CoverPlayer from "@components/cover/CoverPlayer";
import CoverUploaderCard from "@components/cover/CoverUploaderCard";
import CoverComments from "@components/cover/CoverComments";

function getYoutubeId(url: string): string | null {
    const match = url.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}

export default function CoverView() {
    const { id } = useParams<{ id: string }>();

    const [loading, setLoading] = useState<boolean>(true);
    const [cover, setCover] = useState<Cover>();

    useEffect(() => {
        if (typeof id !== "string") return;

        setLoading(true);
        coverService.getById(id).then((c) => {
            setCover(c);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <LoadingState />;
    }

    if (!cover) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center">
                <span className="text-sm text-neutral-500">Cover no encontrado.</span>
            </div>
        );
    }

    const videoId = cover.youtubeUrl ? getYoutubeId(cover.youtubeUrl) : null;

    return (
        <div className="mx-auto max-w-5xl">
            <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start">
                {/* Columna izquierda: info */}
                <div className="flex-1 min-w-0">
                    {cover.song && (
                        <p className="text-sm text-neutral-600">
                            Cover de{" "}
                            <Link to={`/song/${cover.song.id}`} className="font-medium text-neutral-900 hover:underline">
                                {cover.song.name}
                            </Link>
                        </p>
                    )}

                    <div className="mt-4">
                        <CoverUploaderCard uploader={cover.uploader} publishDate={cover.publishDate} />
                    </div>
                </div>

                {/* Columna derecha: reproductor */}
                <div className="w-full shrink-0 md:w-80">
                    <CoverPlayer videoId={videoId} />
                </div>
            </div>

            <CoverComments />
        </div>
    );
}