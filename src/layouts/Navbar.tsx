import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center gap-2">
                <img src="/icon.png" width={40} height={40} alt="Icono de Freya" />
                <span className="text-xl font-bold text-amber-900">Freya</span>
            </Link>

            <div className="flex items-center gap-4">
                <button className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                    Log in
                </button>
                <button className="text-sm font-medium text-white px-4 py-1.5 rounded-full bg-amber-900 hover:bg-amber-800 transition-colors">
                    Sign up
                </button>
            </div>
        </nav>
    )
}