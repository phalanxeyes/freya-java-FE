export type AdminSection = "overview" | "songs" | "covers" | "users";

export interface AdminMenuItem {
    id: AdminSection;
    label: string;
    description: string;
}
