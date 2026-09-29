import { useCallback, useEffect, useState, type FormEvent } from "react";
import { songService } from "@api/songService";
import type { CreateSongDTO, SongDTO } from "@api/api.d";
import LoadingState from "@components/LoadingState";
import AuthInput from "@components/auth/AuthInput";

const emptyForm: CreateSongDTO = { name: "", lyrics: "", duration: 0 };

export default function ModerateSongs() {
    const [songs, setSongs] = useState<SongDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState<SongDTO | null>(null);
    const [form, setForm] = useState<CreateSongDTO>(emptyForm);
    const [saving, setSaving] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            setSongs(await songService.getAll());
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al cargar canciones");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void load();
    }, [load]);

    const openCreate = () => {
        setEditing(null);
        setForm(emptyForm);
        setModalOpen(true);
    };

    const openEdit = (song: SongDTO) => {
        setEditing(song);
        setForm({ name: song.name, lyrics: song.lyrics, duration: song.duration });
        setModalOpen(true);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        try {
            if (editing) {
                const updated = await songService.update(String(editing.id), form);
                setSongs((prev) => prev.map((s) => (s.id === editing.id ? updated : s)));
            } else {
                const created = await songService.create(form);
                setSongs((prev) => [...prev, created]);
            }
            setModalOpen(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al guardar");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (song: SongDTO) => {
        if (!window.confirm(`Eliminar "${song.name}"?`)) return;
        setError(null);
        try {
            await songService.delete(String(song.id));
            setSongs((prev) => prev.filter((s) => s.id !== song.id));
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al eliminar");
        }
    };

    if (loading) return <LoadingState />;

    return (
        <div className="rounded-2xl bg-sand-50/60 p-6 ring-1 ring-olive-bark-500/15">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-espresso-900">Moderar canciones</h3>
                <button
                    type="button"
                    onClick={openCreate}
                    className="rounded-full bg-espresso-800 px-4 py-1.5 text-sm font-medium text-sand-50 hover:bg-espresso-700"
                >
                    Nueva canción
                </button>
            </div>
            <p className="mt-1 text-sm text-dusty-olive-600">
                ABMC con CreateSongDTO (name, lyrics, duration). El álbum se muestra solo lectura:
                CreateSongDTO no trae álbum en api-docs/api.d.ts.
            </p>

            {error && <p className="mt-3 text-sm text-dark-walnut-700">{error}</p>}

            <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                    <thead>
                        <tr className="text-xs uppercase tracking-wide text-dusty-olive-500">
                            <th className="px-3 py-2">ID</th>
                            <th className="px-3 py-2">Nombre</th>
                            <th className="px-3 py-2">Álbum</th>
                            <th className="px-3 py-2">Duración</th>
                            <th className="px-3 py-2 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => (
                            <tr key={song.id} className="border-t border-olive-bark-500/15">
                                <td className="px-3 py-2 text-espresso-900">{song.id}</td>
                                <td className="px-3 py-2 font-medium text-espresso-900">{song.name}</td>
                                <td className="px-3 py-2 text-dusty-olive-700">
                                    {song.album.name} · {song.album.artist}
                                </td>
                                <td className="px-3 py-2 text-dusty-olive-700">{song.duration}s</td>
                                <td className="px-3 py-2">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            type="button"
                                            onClick={() => openEdit(song)}
                                            className="rounded-full px-3 py-1 text-xs font-medium text-espresso-800 ring-1 ring-espresso-800/30 hover:bg-espresso-800 hover:text-sand-50"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => void handleDelete(song)}
                                            className="rounded-full bg-dark-walnut-700 px-3 py-1 text-xs font-medium text-sand-50 hover:opacity-90"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/50 p-4">
                    <form
                        onSubmit={(e) => void handleSubmit(e)}
                        className="w-full max-w-md rounded-2xl bg-sand-50 p-6 shadow-xl"
                    >
                        <h4 className="text-lg font-semibold text-espresso-900">
                            {editing ? "Editar canción" : "Nueva canción"}
                        </h4>
                        <div className="mt-4 space-y-4">
                            <AuthInput
                                id="song-name"
                                label="Nombre"
                                value={form.name}
                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                required
                            />
                            <AuthInput
                                id="song-duration"
                                label="Duración (segundos)"
                                type="number"
                                min={0}
                                value={String(form.duration)}
                                onChange={(e) =>
                                    setForm((f) => ({ ...f, duration: Number(e.target.value) }))
                                }
                                required
                            />
                            <div>
                                <label
                                    htmlFor="song-lyrics"
                                    className="block text-sm font-medium text-dusty-olive-800"
                                >
                                    Letra
                                </label>
                                <textarea
                                    id="song-lyrics"
                                    value={form.lyrics}
                                    onChange={(e) => setForm((f) => ({ ...f, lyrics: e.target.value }))}
                                    required
                                    rows={5}
                                    className="mt-1 w-full rounded-xl bg-sand-50/80 px-3 py-2 text-sm text-espresso-900 shadow-sm ring-1 ring-olive-bark-500/20 focus:outline-none focus:ring-2 focus:ring-espresso-400"
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                className="rounded-full px-4 py-2 text-sm text-dusty-olive-700 hover:text-espresso-800"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                className="rounded-full bg-espresso-800 px-4 py-2 text-sm font-medium text-sand-50 hover:bg-espresso-700 disabled:opacity-50"
                            >
                                {saving ? "Guardando..." : "Guardar"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
