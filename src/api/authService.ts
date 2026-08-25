import type { AuthResponse, User } from "./types";
import { mockUsers } from "./dummyData";

const FAKE_DELAY = 500;
const delay = <T>(value: T): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(value), FAKE_DELAY));

function fakeToken(user: User): string {
    return `fake-jwt.${btoa(JSON.stringify({ sub: user.id, email: user.email }))}.signature`;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export const authService = {
    login: async ({ email, password }: LoginPayload): Promise<AuthResponse> => {
        // TODO: reemplazar por POST /auth/login { email, password } -> { token, user }
        const user = mockUsers.find((u) => u.email === email);
        if (!user || password.length === 0) {
            throw new Error("Credenciales inválidas");
        }
        return delay({ token: fakeToken(user), user });
    },

    register: async ({ name, email, password }: RegisterPayload): Promise<AuthResponse> => {
        // TODO: reemplazar por POST /auth/register { name, email, password } -> { token, user }
        if (password.length < 6) {
            throw new Error("La contraseña debe tener al menos 6 caracteres");
        }
        const newUser: User = {
            id: crypto.randomUUID(),
            name,
            email,
            creationDate: new Date(),
        };
        return delay({ token: fakeToken(newUser), user: newUser });
    },
};