import { useState } from "react";
import type { FormEvent } from "react";

// TODO: mover a @api/types cuando exista Comment en el modelo real
interface LocalComment {
    id: string;
    author: string;
    content: string;
}

export default function CoverComments() {
    const [comments, setComments] = useState<LocalComment[]>([]);
    const [draft, setDraft] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!draft.trim()) return;

        // TODO: reemplazar por commentService.create(...) cuando exista backend
        setComments((prev) => [
            ...prev,
            { id: crypto.randomUUID(), author: "Vos", content: draft.trim() },
        ]);
        setDraft("");
    };

    return (
        <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                Comentarios
            </h2>

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
                <input
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Escribí un comentario..."
                    className="flex-1 rounded-full bg-white/60 px-4 py-2 text-sm text-neutral-900 shadow-sm ring-1 ring-amber-900/10 backdrop-blur-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                    type="submit"
                    className="rounded-full bg-amber-900 px-4 py-2 text-sm font-medium text-white hover:bg-amber-800 transition-colors"
                >
                    Enviar
                </button>
            </form>

            <div className="mt-4 space-y-3">
                {comments.length === 0 ? (
                    <p className="text-sm text-neutral-400">Todavía no hay comentarios.</p>
                ) : (
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="rounded-lg bg-white/60 p-3 text-sm shadow-sm ring-1 ring-amber-900/5"
                        >
                            <span className="font-medium text-neutral-900">{comment.author}</span>
                            <p className="mt-0.5 text-neutral-700">{comment.content}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}