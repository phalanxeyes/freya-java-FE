import Navbar from '@layouts/Navbar'
import VinylDiscs from "@components/VinylDiscs.tsx";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
            <VinylDiscs />
            <Navbar />
            <main className="px-6 py-8 max-w-7xl mx-auto">{children}</main>
        </div>
    )
}