import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { songService } from "@api/songService";
import type { CoverDTO, SongDTO } from "@api/api.d";
import { coverService } from "@api/coverService";
import { getApiErrorMessage } from "@api/apiError";
import SongHeader from "@components/song/SongHeader";
import SongLyrics from "@components/song/SongLyrics";
import SongCovers from "@components/song/SongCovers";
import LoadingState from "@components/LoadingState";
import ErrorState from "@components/ErrorState";

export default function SongView() {
    const { id } = useParams<{ id: string }>();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [song, setSong] = useState<SongDTO>();
    const [covers, setCovers] = useState<CoverDTO[]>([]);

    useEffect(() => {
        if (typeof id !== "string") return;

        let cancelled = false;
        setLoading(true);
        setError(null);
        setSong(undefined);
        setCovers([]);

        Promise.all([songService.getById(id), coverService.getAll()])
            .then(([songResult, coversResult]) => {
                if (cancelled) return;
                setSong(songResult);
                setCovers(coversResult.filter((cover) => cover.song.id === songResult.id));
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

    if (!song) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center">
                <span className="text-sm text-dusty-olive-600">Canción no encontrada.</span>
            </div>
        );
    }

    return (
        <div>
            <SongHeader song={song} />
            <SongLyrics lyrics={song.lyrics} />
            <SongCovers covers={covers} />
        </div>
    );
}
