import type { UserPasswordValidationsDTO, UserUsernameValidationsDTO } from "@api/api.d";

export interface UserFieldRule {
    required: boolean;
    min: number | null;
    max: number | null;
}

export type UserFieldName = "username" | "password";

const FIELD_LABELS: Record<UserFieldName, { subject: string; required: string }> = {
    username: {
        subject: "El usuario",
        required: "El usuario es obligatorio.",
    },
    password: {
        subject: "La contraseña",
        required: "La contraseña es obligatoria.",
    },
};

export function toUserFieldRule(
    rule: UserUsernameValidationsDTO | UserPasswordValidationsDTO,
): UserFieldRule {
    return {
        required: rule.required,
        min: rule.min,
        max: rule.max,
    };
}

export function describeUserRule(rule: UserFieldRule): string {
    if (rule.min !== null && rule.max !== null) return `Entre ${rule.min} y ${rule.max} caracteres.`;
    if (rule.min !== null) return `Al menos ${rule.min} caracteres.`;
    if (rule.max !== null) return `Hasta ${rule.max} caracteres.`;
    return "";
}

export function validateUserField(
    field: UserFieldName,
    value: string,
    rule: UserFieldRule,
): string | null {
    const { subject, required } = FIELD_LABELS[field];
    const length = field === "username" ? value.trim().length : value.length;

    if (length === 0) return rule.required ? required : null;
    if (rule.min !== null && length < rule.min) {
        return `${subject} debe tener al menos ${rule.min} caracteres.`;
    }
    if (rule.max !== null && length > rule.max) {
        return `${subject} debe tener como máximo ${rule.max} caracteres.`;
    }

    return null;
}

export function validateConfirmPassword(
    value: string,
    password: string,
    required: boolean,
): string | null {
    if (value.length === 0) return required ? "Confirmá la contraseña." : null;
    if (value !== password) return "Las contraseñas no coinciden.";
    return null;
}
