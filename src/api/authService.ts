import { apiClient } from "./api";
import { ApiError, formatUnknownError, toApiError } from "./apiError";
import type { UserDTO, UserSignUpDTO } from "./api.d";

export type LoginPayload = UserSignUpDTO;

export type RegisterPayload = UserSignUpDTO;

/**
 * Backend contract (AuthController, see src/api/api.d.ts generated from the BE):
 *   POST /api/auth/signin  body UserSignUpDTO { username, password } -> raw JWT string (text/plain)
 *   POST /api/auth/signup  body UserSignUpDTO { username, password } -> UserDTO { id, username, createdAt }
 *
 * Error messages are surfaced verbatim from the backend `message` field.
 * If the backend omits it, the shared API error helper falls back to
 * `Unknown error (<status>)`. The frontend does not invent or map messages.
 */
function toAuthBody(payload: LoginPayload | RegisterPayload): UserSignUpDTO {
    return { username: payload.username.trim(), password: payload.password };
}

function isJwtShape(token: string): boolean {
    return token.split(".").length === 3;
}

/** Decode the JWT payload and return the `sub` (username). Null if not decodable. */
export function parseUsernameFromToken(token: string): string | null {
    try {
        const payloadPart = token.split(".")[1];
        if (!payloadPart) return null;
        const base64 = payloadPart.replace(/-/g, "+").replace(/_/g, "/");
        const json = atob(base64);
        const payload = JSON.parse(json) as { sub?: string };
        return payload.sub ?? null;
    } catch {
        return null;
    }
}

/** True when the JWT `exp` claim is in the past. Undecodable tokens are treated as expired. */
export function isTokenExpired(token: string): boolean {
    try {
        const payloadPart = token.split(".")[1];
        if (!payloadPart) return true;
        const base64 = payloadPart.replace(/-/g, "+").replace(/_/g, "/");
        const payload = JSON.parse(atob(base64)) as { exp?: number };
        if (typeof payload.exp !== "number") return false;
        return payload.exp * 1000 <= Date.now();
    } catch {
        return true;
    }
}

export const authService = {
    /** Sign in and resolve with the raw JWT token string. */
    login: async (payload: LoginPayload): Promise<string> => {
        try {
            // `Accept: */*`, NOT ky's `.text()` default (`text/plain`):
            // with `text/plain` Spring answers 401 with an EMPTY body,
            // with `*/*` it returns its JSON error body (`message`).
            // Success (JWT as text/plain) is unaffected: it matches `*/*`.
            const response = await apiClient.post("auth/signin", {
                json: toAuthBody(payload),
                headers: { accept: "*/*" },
            });
            const token = (await response.text()).trim();
            if (!token || !isJwtShape(token)) {
                // A non-JWT 200 body is a backend message; an empty body is a
                // contract break, so use the status fallback.
                throw new ApiError(
                    token || formatUnknownError(response.status),
                    response.status,
                );
            }
            return token;
        } catch (error) {
            throw toApiError(error);
        }
    },

    /**
     * Register a new user. Resolves with the created UserDTO.
     * Does NOT return a token: call `login` afterwards to get one.
     */
    register: async (payload: RegisterPayload): Promise<UserDTO> => {
        try {
            // .json() sends `Accept: application/json`, matching what /signup produces.
            // (.text() sends `Accept: text/plain` and Spring answers 406.)
            return await apiClient
                .post("auth/signup", { json: toAuthBody(payload) })
                .json<UserDTO>();
        } catch (error) {
            throw toApiError(error);
        }
    },
};
