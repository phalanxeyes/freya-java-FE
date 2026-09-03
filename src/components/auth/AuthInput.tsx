import { type InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function AuthInput({ label, id, ...props }: AuthInputProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-dusty-olive-800">
                {label}
            </label>
            <input
                id={id}
                className="mt-1 w-full rounded-xl bg-sand-50/80 px-3 py-2 text-sm text-espresso-900 shadow-sm ring-1 ring-olive-bark-500/20 backdrop-blur-sm placeholder:text-dusty-olive-400 focus:outline-none focus:ring-2 focus:ring-espresso-400"
                {...props}
            />
        </div>
    );
}