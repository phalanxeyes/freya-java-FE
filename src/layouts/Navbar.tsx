import { Link, useNavigate } from "react-router";
import { useAuth } from "@context/AuthContext";

export default function Navbar() {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center gap-2">
                <img src="/icon.png" width={40} height={40} alt="Icono de Freya" />
                <span className="text-xl font-bold font-poppins text-amber-900">Freya</span>
            </Link>

            <div className="flex items-center gap-4">
                {isAuthenticated ? (
                    <>
                        <span className="text-sm text-neutral-700">Hola, {user?.userName}</span>
                        <button
                            onClick={handleLogout}
                            className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                        >
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-sm font-medium text-white px-4 py-1.5 rounded-full bg-amber-900 hover:bg-amber-800 transition-colors"
                        >
                            Sign up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}