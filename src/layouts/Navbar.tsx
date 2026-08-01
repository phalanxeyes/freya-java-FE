export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
                <img src="/icon.png" width={64} height={64} alt="Icono de Freya" />
                <span className="text-xl font-bold text-neutral-100">Freya</span>
            </div>
            <div className="flex gap-3">
                <button className="text-sm text-neutral-300 hover:text-white">
                    Log in
                </button>
                <button className="text-sm bg-neutral-100 text-neutral-900 px-4 py-1.5 rounded-full hover:bg-white">
                    Sign up
                </button>
            </div>
        </nav>
    )
}