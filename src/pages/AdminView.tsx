import { useState, type ComponentType } from "react";
import AdminSidebar from "@components/admin/AdminSidebar";
import ModerateCovers from "@components/admin/ModerateCovers";
import ModerateSongs from "@components/admin/ModerateSongs";
import type { AdminMenuItem, AdminSection } from "@components/admin/admin.types";

const menuItems: AdminMenuItem[] = [
    { id: "songs", label: "Moderar canciones", description: "" },
    { id: "covers", label: "Moderar covers", description: "" },
];

const adminContent: Record<AdminSection, ComponentType> = {
    songs: ModerateSongs,
    covers: ModerateCovers,
};

function AdminContent({ section }: { section: AdminSection }) {
    const SectionComponent = adminContent[section];

    return <SectionComponent />;
}

export default function AdminView() {
    const [activeSection, setActiveSection] = useState<AdminSection>("songs");
    const activeItem = menuItems.find((item) => item.id === activeSection) ?? menuItems[0];

    return (
        <div className="mx-auto max-w-7xl">
            <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-espresso-700">Administración</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-espresso-900 sm:text-4xl">Panel de admin</h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
                <AdminSidebar
                    items={menuItems}
                    activeSection={activeSection}
                    onSelect={setActiveSection}
                />

                <section className="min-w-0">
                    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dusty-olive-600">Vista actual</p>
                            <h2 className="mt-1 text-2xl font-bold text-espresso-900">{activeItem.label}</h2>
                        </div>
                        <span className="rounded-full bg-olive-bark-200/60 px-3 py-1 text-xs font-medium text-espresso-800">
                            Administración
                        </span>
                    </div>
                    <AdminContent section={activeSection} />
                </section>
            </div>
        </div>
    );
}
