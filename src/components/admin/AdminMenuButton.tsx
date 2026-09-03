import type { AdminMenuItem } from "./admin.types";

interface AdminMenuButtonProps {
    item: AdminMenuItem;
    isActive: boolean;
    onSelect: (section: AdminMenuItem["id"]) => void;
}

export default function AdminMenuButton({ item, isActive, onSelect }: AdminMenuButtonProps) {
    return (
        <button
            type="button"
            onClick={() => onSelect(item.id)}
            aria-current={isActive ? "page" : undefined}
            className={`w-full rounded-xl px-3 py-3 text-left transition-colors ${
                isActive
                    ? "bg-olive-bark-500 text-espresso-950 shadow-sm"
                    : "text-sand-100 hover:bg-espresso-800 hover:text-sand-50"
            }`}
        >
            <span className="block text-sm font-semibold">{item.label}</span>
            <span className={`mt-0.5 block text-[11px] ${isActive ? "text-espresso-800" : "text-olive-bark-200"}`}>
                {item.description}
            </span>
        </button>
    );
}
