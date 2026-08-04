import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@context/AuthContext";
import AuthInput from "@components/auth/AuthInput";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await login({ email, password });
            navigate("/");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center">
            <h1 className="text-2xl font-bold text-neutral-900">Iniciar sesión</h1>
            <p className="mt-1 text-sm text-neutral-600">
                Entrá con tu mail y contraseña.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <AuthInput
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <AuthInput
                    id="password"
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-amber-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-800 disabled:opacity-50"
                >
                    {loading ? "Ingresando..." : "Ingresar"}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-neutral-600">
                ¿No tenés cuenta?{" "}
                <Link to="/signup" className="font-medium text-amber-800 hover:underline">
                    Registrate
                </Link>
            </p>
        </div>
    );
}