import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { songService } from "@api/songService";
import type { CoverDTO, SongDTO } from "@api/api.d";
import { coverService } from "@api/coverService";
import SongHeader from "@components/song/SongHeader";
import SongLyrics from "@components/song/SongLyrics";
import SongCovers from "@components/song/SongCovers";
import LoadingState from "@components/LoadingState";

export default function SongView() {
    const { id } = useParams<{ id: string }>();

    const [loading, setLoading] = useState<boolean>(true);
    const [song, setSong] = useState<SongDTO>();
    const [covers, setCovers] = useState<CoverDTO[]>([]);

    useEffect(() => {
        if (typeof id !== "string") return;

        setLoading(true);
        Promise.all([songService.getById(id), coverService.getAll()])
            .then(([songResult, coversResult]) => {
                setSong(songResult);
                setCovers(coversResult.filter((cover) => cover.song.id === songResult.id));
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <LoadingState />;
    }

    if (!song) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center">
                <span className="text-sm text-neutral-500">Canción no encontrada.</span>
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