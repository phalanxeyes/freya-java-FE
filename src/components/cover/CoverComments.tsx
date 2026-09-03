import { useState } from "react";
import type { FormEvent } from "react";

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
            <h2 className="text-sm font-semibold uppercase tracking-wide text-espresso-700">
                Comentarios
            </h2>

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
                <input
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Escribí un comentario..."
                    className="flex-1 rounded-full bg-sand-50/80 px-4 py-2 text-sm text-espresso-900 shadow-sm ring-1 ring-olive-bark-500/20 backdrop-blur-sm placeholder:text-dusty-olive-400 focus:outline-none focus:ring-2 focus:ring-espresso-400"
                />
                <button
                    type="submit"
                    className="rounded-full bg-espresso-800 px-4 py-2 text-sm font-medium text-sand-50 hover:bg-espresso-700 transition-colors"
                >
                    Enviar
                </button>
            </form>

            <div className="mt-4 space-y-3">
                {comments.length === 0 ? (
                    <p className="text-sm text-dusty-olive-500">Todavía no hay comentarios.</p>
                ) : (
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="rounded-xl bg-sand-50/70 p-3 text-sm shadow-sm ring-1 ring-olive-bark-500/15"
                        >
                            <span className="font-medium text-espresso-900">{comment.author}</span>
                            <p className="mt-0.5 text-dusty-olive-800">{comment.content}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}