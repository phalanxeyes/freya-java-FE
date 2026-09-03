import AdminMenuButton from "./AdminMenuButton";
import type { AdminMenuItem, AdminSection } from "./admin.types";

interface AdminSidebarProps {
    items: AdminMenuItem[];
    activeSection: AdminSection;
    onSelect: (section: AdminSection) => void;
}

export default function AdminSidebar({ items, activeSection, onSelect }: AdminSidebarProps) {
    return (
        <aside className="h-fit rounded-2xl bg-espresso-900 p-3 shadow-lg shadow-espresso-900/15">
            <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-olive-bark-300">
                Secciones
            </p>
            <nav aria-label="Secciones de administración" className="space-y-1">
                {items.map((item) => (
                    <AdminMenuButton
                        key={item.id}
                        item={item}
                        isActive={item.id === activeSection}
                        onSelect={onSelect}
                    />
                ))}
            </nav>
        </aside>
    );
}
