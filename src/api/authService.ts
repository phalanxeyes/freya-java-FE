import { apiClient } from "./api";
import type { CreateUserDTO, UserDTO } from "./api.d";

interface AuthResponse {
    token: string;
    user: UserDTO;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export type RegisterPayload = CreateUserDTO;

export const authService = {
    login: (payload: LoginPayload): Promise<AuthResponse> =>
        apiClient.post("auth/login", { json: payload }).json<AuthResponse>(),

    register: (payload: RegisterPayload): Promise<AuthResponse> =>
        apiClient.post("auth/register", { json: payload }).json<AuthResponse>(),
};