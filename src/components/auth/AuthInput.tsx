import { type InputHTMLAttributes, type ReactNode } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | null;
    hint?: ReactNode;
}

export default function AuthInput({ label, id, error, hint, className, ...props }: AuthInputProps) {
    const hintId = hint && id ? `${id}-hint` : undefined;
    const errorId = error && id ? `${id}-error` : undefined;
    const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-dusty-olive-800">
                {label}
            </label>
            <input
                id={id}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy}
                className={[
                    "mt-1 w-full rounded-xl bg-sand-50/80 px-3 py-2 text-sm text-espresso-900 shadow-sm backdrop-blur-sm placeholder:text-dusty-olive-400 focus:outline-none focus:ring-2",
                    error
                        ? "ring-2 ring-dark-walnut-500/60 focus:ring-dark-walnut-500"
                        : "ring-1 ring-olive-bark-500/20 focus:ring-espresso-400",
                    className ?? "",
                ].join(" ")}
                {...props}
            />
            {hint && (
                <div id={hintId} className="mt-1 text-xs text-dusty-olive-500">
                    {hint}
                </div>
            )}
            {error && (
                <p id={errorId} role="alert" className="mt-1 text-xs font-medium text-dark-walnut-700">
                    {error}
                </p>
            )}
        </div>
    );
}
