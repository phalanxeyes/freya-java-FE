import { HTTPError } from "ky";

/**
 * Every API error is owned by the backend.
 *
 * The frontend never invents, translates or maps an error message: it only
 * reads the `message` field from the backend body. If that field is missing,
 * it falls back to the HTTP status (`Unknown error (<status>)`).
 */
export const UNKNOWN_ERROR = "Unknown error";

export function formatUnknownError(status?: number): string {
    return status === undefined ? UNKNOWN_ERROR : `${UNKNOWN_ERROR} (${status})`;
}

export class ApiError extends Error {
    readonly status: number | null;

    constructor(message: string, status: number | null = null) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}

/** Only the backend `message` field is considered a valid user-facing error. */
function backendMessage(data: unknown): string | null {
    if (!data || typeof data !== "object" || Array.isArray(data)) return null;

    const message = (data as Record<string, unknown>).message;
    return typeof message === "string" && message.trim() ? message.trim() : null;
}

export function getApiErrorMessage(error: unknown): string {
    if (error instanceof ApiError) return error.message;

    if (error instanceof HTTPError) {
        return backendMessage(error.data) ?? formatUnknownError(error.response.status);
    }

    return formatUnknownError();
}

/** Normalizes any thrown value into an ApiError that pages can display. */
export function toApiError(error: unknown): ApiError {
    if (error instanceof ApiError) return error;

    if (error instanceof HTTPError) {
        return new ApiError(getApiErrorMessage(error), error.response.status);
    }

    return new ApiError(formatUnknownError());
}

export async function withApiError<T>(request: Promise<T>): Promise<T> {
    try {
        return await request;
    } catch (error) {
        throw toApiError(error);
    }
}
