import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { coverService } from "@api/coverService";
import type { CoverDTO } from "@api/api.d";
import LoadingState from "@components/LoadingState";

export default function ModerateCovers() {
    const [covers, setCovers] = useState<CoverDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [actingId, setActingId] = useState<number | null>(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            setCovers(await coverService.getPending());
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al cargar pendientes");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void load();
    }, [load]);

    const handleAction = async (id: number, action: "approve" | "reject") => {
        setActingId(id);
        setError(null);
        try {
            if (action === "approve") await coverService.approve(String(id));
            else await coverService.reject(String(id));
            setCovers((prev) => prev.filter((c) => c.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error en la moderación");
        } finally {
            setActingId(null);
        }
    };

    if (loading) return <LoadingState />;

    return (
        <div className="rounded-2xl bg-sand-50/60 p-6 ring-1 ring-olive-bark-500/15">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-espresso-900">Moderar covers</h3>
                <span className="rounded-full bg-olive-bark-200/60 px-3 py-1 text-xs font-medium text-espresso-800">
                    {covers.length} pendientes
                </span>
            </div>
            <p className="mt-1 text-sm text-dusty-olive-600">
                Cola de pendientes desde GET covers/pending. Aprobar publica, rechazar oculta.
            </p>

            {error && <p className="mt-3 text-sm text-dark-walnut-700">{error}</p>}

            {covers.length === 0 && !error ? (
                <p className="mt-4 text-sm text-dusty-olive-500">No hay covers pendientes.</p>
            ) : (
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-sm">
                        <thead>
                            <tr className="text-xs uppercase tracking-wide text-dusty-olive-500">
                                <th className="px-3 py-2">ID</th>
                                <th className="px-3 py-2">Canción</th>
                                <th className="px-3 py-2">Duración</th>
                                <th className="px-3 py-2">Creado</th>
                                <th className="px-3 py-2 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {covers.map((cover) => (
                                <tr key={cover.id} className="border-t border-olive-bark-500/15">
                                    <td className="px-3 py-2 text-espresso-900">{cover.id}</td>
                                    <td className="px-3 py-2">
                                        <Link
                                            to={`/song/${cover.song.id}`}
                                            className="font-medium text-espresso-900 hover:underline"
                                        >
                                            {cover.song.name}
                                        </Link>
                                        <span className="block text-xs text-dusty-olive-500">
                                            {cover.song.album.name} · {cover.song.album.artist}
                                        </span>
                                    </td>
                                    <td className="px-3 py-2 text-dusty-olive-700">{cover.duration}s</td>
                                    <td className="px-3 py-2 text-dusty-olive-700">
                                        {new Date(cover.createdAt).toLocaleDateString("es-AR")}
                                    </td>
                                    <td className="px-3 py-2">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                type="button"
                                                disabled={actingId === cover.id}
                                                onClick={() => void handleAction(cover.id, "approve")}
                                                className="rounded-full bg-espresso-800 px-3 py-1 text-xs font-medium text-sand-50 hover:bg-espresso-700 disabled:opacity-50"
                                            >
                                                Aprobar
                                            </button>
                                            <button
                                                type="button"
                                                disabled={actingId === cover.id}
                                                onClick={() => void handleAction(cover.id, "reject")}
                                                className="rounded-full px-3 py-1 text-xs font-medium text-espresso-800 ring-1 ring-espresso-800/30 hover:bg-espresso-800 hover:text-sand-50 disabled:opacity-50"
                                            >
                                                Rechazar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
