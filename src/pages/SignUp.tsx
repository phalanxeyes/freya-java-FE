import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@context/AuthContext";
import AuthInput from "@components/auth/AuthInput";

export default function SignUp() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        setLoading(true);
        try {
            await register({ username, password });
            navigate("/");
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center">
            <h1 className="text-2xl font-bold text-espresso-900">Crear cuenta</h1>
            <p className="mt-1 text-sm text-dusty-olive-700">
                Registrate con tu usuario para empezar.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <AuthInput
                    id="username"
                    label="Usuario"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <AuthInput
                    id="password"
                    label="Contraseña"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                />
                <AuthInput
                    id="confirmPassword"
                    label="Confirmar contraseña"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                />

                {error && <p className="text-sm text-dark-walnut-700">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-espresso-800 px-4 py-2 text-sm font-medium text-sand-50 transition-colors hover:bg-espresso-700 disabled:opacity-50"
                >
                    {loading ? "Creando cuenta..." : "Registrarme"}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-dusty-olive-700">
                ¿Ya tenés cuenta?{" "}
                <Link to="/login" className="font-medium text-espresso-700 hover:underline">
                    Iniciá sesión
                </Link>
            </p>
        </div>
    );
}
