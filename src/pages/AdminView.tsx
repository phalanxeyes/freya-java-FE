import { useState } from "react";
import AdminSidebar from "@components/admin/AdminSidebar";
import type { AdminMenuItem, AdminSection } from "@components/admin/admin.types";

const menuItems: AdminMenuItem[] = [
    { id: "overview", label: "Resumen", description: "Vista general de la plataforma" },
    { id: "songs", label: "Canciones", description: "Administrá el catálogo musical" },
    { id: "covers", label: "Covers", description: "Revisá las versiones publicadas" },
    { id: "users", label: "Usuarios", description: "Gestioná las cuentas registradas" },
];

const sectionTitles: Record<AdminSection, string> = {
    overview: "Resumen",
    songs: "Canciones",
    covers: "Covers",
    users: "Usuarios",
};

function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
    return (
        <div className="rounded-2xl bg-sand-50/75 p-5 shadow-sm ring-1 ring-olive-bark-500/15">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dusty-olive-600">{label}</p>
            <p className="mt-3 text-3xl font-bold text-espresso-900">{value}</p>
            <p className="mt-1 text-xs text-dusty-olive-600">{detail}</p>
        </div>
    );
}

function EmptySection({ title, description, action }: { title: string; description: string; action: string }) {
    return (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-sand-50/60 p-8 text-center ring-1 ring-olive-bark-500/15">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-bark-200/60 text-xl text-espresso-700">
                +
            </div>
            <h3 className="mt-4 text-lg font-semibold text-espresso-900">{title}</h3>
            <p className="mt-2 max-w-md text-sm text-dusty-olive-600">{description}</p>
            <button
                type="button"
                className="mt-5 rounded-full bg-espresso-800 px-4 py-2 text-sm font-medium text-sand-50 transition-colors hover:bg-espresso-700"
            >
                {action}
            </button>
        </div>
    );
}

function AdminContent({ section }: { section: AdminSection }) {
    if (section === "overview") {
        return (
            <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard label="Canciones" value="—" detail="Sin datos cargados" />
                    <StatCard label="Covers" value="—" detail="Sin datos cargados" />
                    <StatCard label="Usuarios" value="—" detail="Sin datos cargados" />
                    <StatCard label="Actividad" value="—" detail="Próximamente" />
                </div>
                <div className="rounded-2xl bg-sand-50/60 p-6 ring-1 ring-olive-bark-500/15">
                    <h3 className="text-lg font-semibold text-espresso-900">Actividad reciente</h3>
                    <p className="mt-2 text-sm text-dusty-olive-600">
                        Cuando conectemos los servicios de administración, acá vas a ver los últimos movimientos.
                    </p>
                </div>
            </div>
        );
    }

    const content: Record<Exclude<AdminSection, "overview">, { description: string; action: string }> = {
        songs: {
            description: "El listado de canciones y sus acciones de administración aparecerá en esta sección.",
            action: "Agregar canción",
        },
        covers: {
            description: "El listado de covers publicados y sus acciones de moderación aparecerá en esta sección.",
            action: "Revisar covers",
        },
        users: {
            description: "El listado de usuarios y sus acciones de gestión aparecerá en esta sección.",
            action: "Gestionar usuarios",
        },
    };

    return (
        <EmptySection
            title={`Administrar ${sectionTitles[section].toLowerCase()}`}
            description={content[section].description}
            action={content[section].action}
        />
    );
}

export default function AdminView() {
    const [activeSection, setActiveSection] = useState<AdminSection>("overview");
    const activeItem = menuItems.find((item) => item.id === activeSection) ?? menuItems[0];

    return (
        <div className="mx-auto max-w-7xl">
            <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-espresso-700">Administración</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-espresso-900 sm:text-4xl">Panel de admin</h1>
                <p className="mt-2 text-sm text-dusty-olive-700">
                    Gestioná el contenido y la comunidad de Freya desde un solo lugar.
                </p>
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
