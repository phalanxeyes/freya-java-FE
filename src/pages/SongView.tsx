import { useParams } from "react-router";
import {songService} from "@api/songService.ts";
import {useEffect, useState} from "react";
import type {Song} from "@api/types.ts";

export default function SongView(){
    const { id } = useParams<{ id: string }>();

    const [loading, setLoading] = useState<boolean>(true);
    const [song, setSong] = useState<Song>();

    useEffect(() => {
        if(!(typeof id === "string")){
            return;
        }
        setLoading(true)
        songService.getById(id).then((s) => {
            setSong(s);
            setLoading(false)
        })
    }, [id]);

    if(loading){
        return (
            <div>Cargando...</div>
        )
    }
    return (
        <div>
            <h1>{song?.name}</h1>
        </div>
    )

}