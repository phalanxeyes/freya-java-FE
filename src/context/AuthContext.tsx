import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { TOKEN_KEY, USER_KEY } from "@api/api";
import { authService, isTokenExpired, type LoginPayload, type RegisterPayload } from "@api/authService";
import type { AuthUserDTO, UserDTO } from "@api/api.d";

/** Session user. `createdAt` is kept as the ISO string the API actually sends. */
export interface AuthUser {
    id: number;
    username: string;
    createdAt: string;
}

interface AuthContextValue {
    user: AuthUser | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (payload: LoginPayload) => Promise<void>;
    register: (payload: RegisterPayload) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function toAuthUser(user: UserDTO): AuthUser {
    const createdAt =
        user.createdAt instanceof Date ? user.createdAt.toISOString() : String(user.createdAt);
    return { id: user.id, username: user.username, createdAt };
}

function isAuthUser(value: unknown): value is AuthUser {
    if (!value || typeof value !== "object") return false;
    const candidate = value as Partial<AuthUser>;
    return typeof candidate.id === "number" && typeof candidate.username === "string";
}

/** Reads the persisted session, discarding expired tokens or malformed users. */
function readStoredSession(): { token: string; user: AuthUser } | null {
    try {
        const token = localStorage.getItem(TOKEN_KEY);
        const rawUser = localStorage.getItem(USER_KEY);
        if (!token || isTokenExpired(token) || !rawUser) return null;

        const parsed: unknown = JSON.parse(rawUser);
        return isAuthUser(parsed) ? { token, user: parsed } : null;
    } catch {
        return null;
    }
}

function clearStoredSession() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // Restaurar sesión al cargar la app (descarta tokens expirados)
    useEffect(() => {
        const stored = readStoredSession();
        if (!stored) {
            clearStoredSession();
            return;
        }
        setToken(stored.token);
        setUser(stored.user);
    }, []);

    const persistSession = ({ user: sessionUser, accessToken }: AuthUserDTO) => {
        const nextUser = toAuthUser(sessionUser);
        localStorage.setItem(TOKEN_KEY, accessToken);
        localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
        setToken(accessToken);
        setUser(nextUser);
    };

    const login = async (payload: LoginPayload) => {
        persistSession(await authService.login(payload));
    };

    const register = async (payload: RegisterPayload) => {
        // /signup devuelve el token: la cuenta queda logueada sin un signin extra.
        persistSession(await authService.register(payload));
    };

    const logout = () => {
        clearStoredSession();
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, token, isAuthenticated: !!token, login, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
    return ctx;
}
