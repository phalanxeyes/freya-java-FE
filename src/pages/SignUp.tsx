import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@context/AuthContext";
import AuthInput from "@components/auth/AuthInput";

export default function SignUp() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await register({ userName: name, email, password });
            navigate("/");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al registrarse");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center">
            <h1 className="text-2xl font-bold text-espresso-900">Crear cuenta</h1>
            <p className="mt-1 text-sm text-dusty-olive-700">
                Registrate con tu mail para empezar.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <AuthInput
                    id="name"
                    label="Nombre"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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