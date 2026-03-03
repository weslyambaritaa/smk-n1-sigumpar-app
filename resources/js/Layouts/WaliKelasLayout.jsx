import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function WaliKelasLayout({ children }) {
    const pageProps = usePage().props;
    const user = pageProps.auth?.user || {
        name: "Ivana Pasaribu",
        email: "demo@example.com",
    };
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        { name: "Beranda",          route: "wali-kelas.dashboard",  icon: "🏠" },
        { name: "Rekap Kehadiran",  route: "wali-kelas.kehadiran",  icon: "📋" },
        { name: "Rekap Nilai",      route: "wali-kelas.nilai",      icon: "📊" },
        { name: "Parenting",        route: "wali-kelas.parenting",  icon: "👨‍👩‍👧" },
        { name: "Kebersihan Kelas", route: "wali-kelas.kebersihan", icon: "🧹" },
        { name: "Refleksi",         route: "wali-kelas.refleksi",   icon: "📝" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* ── Sidebar ── */}
            <div
                className={`${
                    sidebarOpen ? "w-56" : "w-16"
                } bg-gray-200 transition-all duration-300 ease-in-out flex flex-col`}
            >
                {/* Sidebar header */}
                <div className="p-4 border-b border-gray-300 flex justify-between items-center">
                    {sidebarOpen && (
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                            SMKN 1 Sigumpar
                        </span>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-600 hover:text-gray-800 text-lg"
                    >
                        ☰
                    </button>
                </div>

                {/* User profile */}
                <div className="p-4 border-b border-gray-300">
                    <div className="flex flex-col items-center">
                        <img
                            src="/image/foto-walikelas.jpg"
                            alt="Foto Wali Kelas"
                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                            }}
                        />
                        <div
                            className="w-16 h-16 rounded-full bg-blue-200 items-center justify-center text-2xl hidden"
                            style={{ display: "none" }}
                        >
                            👤
                        </div>
                        {sidebarOpen && (
                            <p className="text-sm font-semibold text-gray-800 text-center mt-2">
                                {user.name}
                            </p>
                        )}
                    </div>
                </div>

                {/* Nav items */}
                <nav className="flex-1 px-2 py-4 space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.route}
                            href={route(item.route)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors ${
                                route().current(item.route)
                                    ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-500"
                                    : ""
                            }`}
                        >
                            <span className="text-base min-w-[20px] text-center">
                                {item.icon}
                            </span>
                            {sidebarOpen && (
                                <span className="text-sm">{item.name}</span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-300">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                        <span className="text-base min-w-[20px] text-center">🚪</span>
                        {sidebarOpen && <span className="text-sm">Keluar</span>}
                    </Link>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top header */}
                <header className="bg-blue-600 text-white px-6 py-3 flex items-center gap-4 shadow">
                    <img
                        src="/image/tutwuri.png"
                        alt="Logo"
                        className="w-12 h-12 rounded-full"
                        onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <h1 className="text-xl font-bold tracking-wide">
                        SMK NEGERI 1 SIGUMPAR
                    </h1>
                    <span className="ml-auto text-xs bg-white/20 px-3 py-1 rounded-full font-semibold">
                        Wali Kelas
                    </span>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-auto bg-gray-100">
                    <div className="p-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
