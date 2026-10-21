import { apiClient } from "./api";
import { toApiError } from "./apiError";
import type { AuthUserDTO, UserSignInDTO, UserSignUpDTO } from "./api.d";

export type LoginPayload = UserSignInDTO;

export type RegisterPayload = UserSignUpDTO;

/**
 * Backend contract (AuthController, see src/api/api.d.ts generated from the BE):
 *   POST /api/auth/signin  body UserSignInDTO { username, password } -> AuthUserDTO { user, accessToken }
 *   POST /api/auth/signup  body UserSignUpDTO { username, password } -> AuthUserDTO { user, accessToken }
 *
 * Both endpoints return the authenticated user and its JWT, so signup keeps the
 * session without a second signin round-trip.
 *
 * Error messages are surfaced verbatim from the backend `message` field.
 * If the backend omits it, the shared API error helper falls back to
 * `Unknown error (<status>)`. The frontend does not invent or map messages.
 */
function toCredentials(payload: LoginPayload | RegisterPayload): UserSignUpDTO {
    return { username: payload.username.trim(), password: payload.password };
}

async function authenticate(
    path: "auth/signin" | "auth/signup",
    payload: LoginPayload | RegisterPayload,
): Promise<AuthUserDTO> {
    try {
        return await apiClient.post(path, { json: toCredentials(payload) }).json<AuthUserDTO>();
    } catch (error) {
        throw toApiError(error);
    }
}

/** True when the JWT `exp` claim is in the past. Undecodable tokens are treated as expired. */
export function isTokenExpired(token: string): boolean {
    try {
        const payloadPart = token.split(".")[1];
        if (!payloadPart) return true;
        const base64 = payloadPart
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .padEnd(Math.ceil(payloadPart.length / 4) * 4, "=");
        const payload = JSON.parse(atob(base64)) as { exp?: number };
        if (typeof payload.exp !== "number") return false;
        return payload.exp * 1000 <= Date.now();
    } catch {
        return true;
    }
}

export const authService = {
    /** Sign in and resolve with the user plus its access token. */
    login: (payload: LoginPayload): Promise<AuthUserDTO> =>
        authenticate("auth/signin", payload),

    /** Register a new user and resolve with the created session (user + access token). */
    register: (payload: RegisterPayload): Promise<AuthUserDTO> =>
        authenticate("auth/signup", payload),
};
