import { type Song } from '@api/types';

interface SongCardProps {
    name: string;
}
export default function SongCard(props: SongCardProps) {
    return (<div>{props.name}</div>);
}