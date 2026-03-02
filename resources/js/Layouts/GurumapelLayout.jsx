import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function GurumapelLayout({ children }) {
    const pageProps = usePage().props;
    const user = pageProps.auth?.user || {
        name: "Ivana Pasaribu",
        email: "demo@example.com",
    };
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        { name: "Beranda", route: "guru-mapel.dashboard" },
        { name: "Absensi Siswa", route: "absensi" },
        { name: "Perangkat Pembelajaran", route: "perangkat" },
        { name: "Input & Kelola Nilai", route: "nilai" },
        { name: "Catatan Mengajar", route: "catatan" },
        { name: "Laporan", route: "laporan" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${
                    sidebarOpen ? "w-64" : "w-20"
                } bg-gray-200 transition-all duration-300 ease-in-out flex flex-col`}
            >
                {/* Header Sidebar */}
                <div className="p-4 border-b border-gray-300 flex justify-between items-center">
                    {/* placeholder title/logo */}
                    <span className="text-sm font-semibold">MENU</span>
                    {/* hamburger toggle to collapse sidebar */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        ☰
                    </button>
                </div>

                {/* User Profile Section */}
                <div className="p-4 border-b border-gray-300">
                    <div className="flex flex-col items-center">
                        {/* sidebar photo cis, place file cis.png in public/images */}
                        <img
                            src="/image/foto cis.jpg"
                            alt="Foto CIS"
                            className="w-16 h-16 rounded-full mb-3"
                        />
                        {sidebarOpen && (
                            <p className="text-sm font-semibold text-gray-800 text-center">
                                {user.name}
                            </p>
                        )}
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-2 py-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.route}
                            href={
                                item.route === "guru-mapel.dashboard"
                                    ? route("guru-mapel.dashboard")
                                    : route(item.route)
                            }
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors ${
                                route().current(item.route) ||
                                (item.route === "guru-mapel.dashboard" &&
                                    route().current("guru-mapel.dashboard"))
                                    ? "bg-gray-400 font-semibold"
                                    : ""
                            }`}
                        >
                            {sidebarOpen && (
                                <span className="text-sm">{item.name}</span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-300">
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                        <span className="text-xl min-w-6">🚪</span>
                        {sidebarOpen && (
                            <span className="ml-3 text-sm">Keluar</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {/* header image fiti tutwuri — put fiti-tutwuri.png in public/images */}
                        <img
                            src="/image/tutwuri.png"
                            alt="Tutwuri"
                            className="w-12 h-12 rounded-full"
                        />
                        <h1 className="text-xl font-bold">
                            SMK NEGERI 1 SIGUMPAR
                        </h1>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto bg-gray-100">
                    <div className="p-8">{children}</div>
                </main>
            </div>
        </div>
    );
}

