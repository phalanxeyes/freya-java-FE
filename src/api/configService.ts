import { apiClient } from "./api";
import { ApiError, toApiError } from "./apiError";
import type { UserValidationsDTO } from "./api.d";

/**
 * The backend owns the validation rules. This message is only used when the
 * endpoint answers 200 with a body the frontend cannot interpret (there is no
 * backend `message` to surface in that case).
 */
export const VALIDATIONS_READ_ERROR = "No se pudieron leer las validaciones del servidor.";

function isNullableNumber(value: unknown): value is number | null | undefined {
    return value === null || value === undefined || (typeof value === "number" && Number.isFinite(value));
}

function isFieldRule(value: unknown): boolean {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;

    const rule = value as Record<string, unknown>;
    if (typeof rule.required !== "boolean") return false;
    if (!isNullableNumber(rule.min) || !isNullableNumber(rule.max)) return false;

    if (typeof rule.min === "number" && rule.min < 0) return false;
    if (typeof rule.max === "number" && rule.max < 0) return false;
    if (typeof rule.min === "number" && typeof rule.max === "number" && rule.min > rule.max) {
        return false;
    }

    return true;
}

function isUserValidations(value: unknown): value is UserValidationsDTO {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;

    const data = value as Record<string, unknown>;
    return isFieldRule(data.username) && isFieldRule(data.password);
}

export const configService = {
    getUserValidations: async (): Promise<UserValidationsDTO> => {
        try {
            const validations = await apiClient.get("configs/user").json<unknown>();
            if (!isUserValidations(validations)) {
                throw new ApiError(VALIDATIONS_READ_ERROR);
            }
            return validations;
        } catch (error) {
            throw toApiError(error);
        }
    },
};
