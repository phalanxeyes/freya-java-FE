import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { TOKEN_KEY, USER_KEY } from "@api/api";
import { authService, isTokenExpired, parseUsernameFromToken, type LoginPayload, type RegisterPayload } from "@api/authService";

/** Minimal session user. The backend only returns a JWT (sub = username), no user object. */
export interface AuthUser {
    username: string;
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

function readStoredSession(): { token: string | null; user: AuthUser | null } {
    try {
        const token = localStorage.getItem(TOKEN_KEY);
        const rawUser = localStorage.getItem(USER_KEY);
        if (!token || isTokenExpired(token)) return { token: null, user: null };
        if (rawUser) {
            const parsed = JSON.parse(rawUser) as { username?: string; userName?: string };
            // Compat with sessions stored before the username casing fix.
            const username = parsed.username ?? parsed.userName;
            return { token, user: username ? { username } : null };
        }
        // Backwards compat: derive the username from the JWT subject.
        const username = parseUsernameFromToken(token);
        return { token, user: username ? { username } : null };
    } catch {
        return { token: null, user: null };
    }
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // Restaurar sesión al cargar la app (descarta tokens expirados)
    useEffect(() => {
        const stored = readStoredSession();
        if (!stored.token) {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
            return;
        }
        setToken(stored.token);
        setUser(stored.user);
    }, []);

    const persistSession = (newToken: string, newUser: AuthUser) => {
        localStorage.setItem(TOKEN_KEY, newToken);
        localStorage.setItem(USER_KEY, JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
    };

    const login = async (payload: LoginPayload) => {
        const newToken = await authService.login(payload);
        const username = parseUsernameFromToken(newToken) ?? payload.username.trim();
        persistSession(newToken, { username });
    };

    const register = async (payload: RegisterPayload) => {
        await authService.register(payload);
        // /signup devuelve UserDTO sin token: encadenar signin para dejar la sesión iniciada.
        await login(payload);
    };

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
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
