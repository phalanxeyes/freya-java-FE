export type AdminSection = "songs" | "covers";

export interface AdminMenuItem {
    id: AdminSection;
    label: string;
    description: string;
}
