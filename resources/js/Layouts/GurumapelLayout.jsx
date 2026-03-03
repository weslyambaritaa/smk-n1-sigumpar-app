import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function GurumapelLayout({ children }) {
    const pageProps = usePage().props;
    const user = pageProps.auth?.user || {
        name: "Ivana Pasaribu",
        email: "demo@example.com",
    };

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { url } = usePage();

    const menuItems = [
        { name: "Beranda", href: "/guru-mapel/dashboard" },
        { name: "Absensi Siswa", href: "/guru-mapel/absensi" },
        { name: "Perangkat Pembelajaran", href: "/guru-mapel/perangkat" },
        { name: "Input & Kelola Nilai", href: "/guru-mapel/nilai" },
        { name: "Catatan Mengajar", href: "/guru-mapel/catatan" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-gray-200 transition-all duration-300 ease-in-out flex flex-col`}>
                <div className="p-4 border-b border-gray-300 flex justify-between items-center">
                    <span className="text-sm font-semibold">MENU</span>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-800">☰</button>
                </div>

                <div className="p-4 border-b border-gray-300">
                    <div className="flex flex-col items-center">
                        <img src="/image/foto cis.jpg" alt="Foto" className="w-16 h-16 rounded-full mb-3" />
                        {sidebarOpen && (
                            <p className="text-sm font-semibold text-gray-800 text-center">{user.name}</p>
                        )}
                    </div>
                </div>

                <nav className="flex-1 px-2 py-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors ${url === item.href ? "bg-gray-400 font-semibold" : ""}`}
                        >
                            {sidebarOpen && <span className="text-sm">{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-300">
                    <button onClick={() => (window.location.href = "/")} className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-lg transition-colors">
                        <span className="text-xl min-w-6">🚪</span>
                        {sidebarOpen && <span className="ml-3 text-sm">Keluar</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-blue-500 text-white p-4 flex items-center">
                    <div className="flex items-center space-x-4">
                        <img src="/image/tutwuri.png" alt="Tutwuri" className="w-12 h-12 rounded-full" />
                        <h1 className="text-xl font-bold">SMK NEGERI 1 SIGUMPAR</h1>
                    </div>
                </header>
                <main className="flex-1 overflow-auto bg-gray-100">
                    <div className="p-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
