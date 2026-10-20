import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { coverService } from "@api/coverService";
import { getApiErrorMessage } from "@api/apiError";
import type { CoverDTO } from "@api/api.d";
import LoadingState from "@components/LoadingState";
import ErrorState from "@components/ErrorState";
import CoverPlayer from "@components/cover/CoverPlayer";
import CoverUploaderCard from "@components/cover/CoverUploaderCard";
import CoverComments from "@components/cover/CoverComments";

export default function CoverView() {
    const { id } = useParams<{ id: string }>();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [cover, setCover] = useState<CoverDTO>();

    useEffect(() => {
        if (typeof id !== "string") return;

        let cancelled = false;
        setLoading(true);
        setError(null);
        setCover(undefined);

        coverService.getById(id)
            .then((result) => {
                if (!cancelled) setCover(result);
            })
            .catch((err) => {
                if (!cancelled) setError(getApiErrorMessage(err));
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [id]);

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return <ErrorState message={error} />;
    }

    if (!cover) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center">
                <span className="text-sm text-dusty-olive-600">Cover no encontrado.</span>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-5xl">
            <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start">
                {/* Columna izquierda: info */}
                <div className="flex-1 min-w-0">
                    {cover.song && (
                        <p className="text-sm text-dusty-olive-700">
                            Cover de{" "}
                            <Link to={`/song/${cover.song.id}`} className="font-medium text-espresso-900 hover:text-espresso-700 hover:underline">
                                {cover.song.name}
                            </Link>
                        </p>
                    )}

                    <div className="mt-4">
                        <CoverUploaderCard createdAt={cover.createdAt} playCount={cover.playCount} />
                    </div>
                </div>

                {/* Columna derecha: reproductor */}
                <div className="w-full shrink-0 md:w-80">
                    <CoverPlayer videoId={null} />
                </div>
            </div>

            <CoverComments />
        </div>
    );
}
