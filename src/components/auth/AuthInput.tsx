import { type InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function AuthInput({ label, id, ...props }: AuthInputProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-neutral-700">
                {label}
            </label>
            <input
                id={id}
                className="mt-1 w-full rounded-lg bg-white/70 px-3 py-2 text-sm text-neutral-900 shadow-sm ring-1 ring-amber-900/10 backdrop-blur-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                {...props}
            />
        </div>
    );
}