import { HTTPError } from "ky";
import { apiClient } from "./api";
import type { UserDTO, UserSignUpDTO } from "./api.d";

export type LoginPayload = UserSignUpDTO;

export type RegisterPayload = UserSignUpDTO;

/**
 * Backend contract (AuthController, see src/api/api.d.ts generated from the BE):
 *   POST /api/auth/signin  body UserSignUpDTO { username, password } -> raw JWT string (text/plain)
 *   POST /api/auth/signup  body UserSignUpDTO { username, password } -> UserDTO { id, username, createdAt }
 *
 * Error messages are surfaced verbatim from the backend.
 * The frontend does not invent or map them.
 */
function toAuthBody(payload: LoginPayload | RegisterPayload): UserSignUpDTO {
    return { username: payload.username.trim(), password: payload.password };
}

function isJwtShape(token: string): boolean {
    return token.split(".").length === 3;
}

/**
 * Extract the backend error message verbatim from ky's pre-parsed `error.data`.
 * ky consumes the response body when building HTTPError, so `error.response.text()`
 * is unusable here. Spring ProblemDetail bodies expose `message`;
 * Spring default error bodies expose `error`.
 */
function backendMessage(error: unknown): string {
    if (error instanceof HTTPError) {
        const data = error.data as unknown;
        if (typeof data === "string" && data.trim() && !/^</.test(data.trim())) {
            return data.trim();
        }
        if (data && typeof data === "object") {
            const body = data as Record<string, unknown>;
            for (const key of ["message", "error", "title"]) {
                const value = body[key];
                if (typeof value === "string" && value.trim()) return value.trim();
            }
            try {
                return JSON.stringify(data);
            } catch {
                // fall through to status line
            }
        }
        return `${error.response.status} ${error.response.statusText}`.trim();
    }
    if (error instanceof Error) return error.message;
    return String(error);
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
            // with `*/*` it returns its JSON error body (`error`/`message`).
            // Success (JWT as text/plain) is unaffected: it matches `*/*`.
            const token = (await apiClient
                .post("auth/signin", {
                    json: toAuthBody(payload),
                    headers: { accept: "*/*" },
                })
                .text()).trim();
            if (!token || !isJwtShape(token)) {
                // Non-JWT 200 body is itself a backend message: surface it verbatim.
                throw new Error(token);
            }
            return token;
        } catch (error) {
            throw new Error(backendMessage(error));
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
            const user = await apiClient
                .post("auth/signup", { json: toAuthBody(payload) })
                .json<UserDTO>();
            if (typeof user?.username !== "string") {
                // Contract drift (e.g. backend mapper leaving username null):
                // don't block the signup -> signin chain; signin is authoritative.
                console.warn("Unexpected /signup response shape:", user);
            }
            return user;
        } catch (error) {
            throw new Error(backendMessage(error));
        }
    },
};
