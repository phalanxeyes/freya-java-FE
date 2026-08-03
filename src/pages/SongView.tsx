import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { songService } from "@api/songService";
import type { Song } from "@api/types";
import SongHeader from "@components/song/SongHeader";
import SongLyrics from "@components/song/SongLyrics";
import SongCovers from "@components/song/SongCovers";
import LoadingState from "@components/LoadingState";

export default function SongView() {
    const { id } = useParams<{ id: string }>();

    const [loading, setLoading] = useState<boolean>(true);
    const [song, setSong] = useState<Song>();

    useEffect(() => {
        if (typeof id !== "string") return;

        setLoading(true);
        songService.getById(id).then((s) => {
            setSong(s);
            setLoading(false);
        });
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
            <SongCovers covers={song.covers ?? []} />
        </div>
    );
}