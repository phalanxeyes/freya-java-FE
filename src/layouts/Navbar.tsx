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
                <span className="text-xl font-bold font-poppins text-espresso-800">Freya</span>
            </Link>

            <div className="flex items-center gap-4">
                {isAuthenticated ? (
                    <>
                        <span className="text-sm text-dusty-olive-700">Hola, {user?.userName}</span>
                        <button
                            onClick={handleLogout}
                            className="text-sm text-dusty-olive-700 hover:text-espresso-800 transition-colors"
                        >
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-sm text-dusty-olive-700 hover:text-espresso-800 transition-colors">
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-sm font-medium text-sand-50 px-4 py-1.5 rounded-full bg-espresso-800 hover:bg-espresso-700 transition-colors shadow-sm shadow-espresso-900/20"
                        >
                            Sign up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}