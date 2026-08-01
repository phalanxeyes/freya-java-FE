import Navbar from '@layouts/Navbar'

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <main className="px-6 py-8">{children}</main>
    </div>
  )
}