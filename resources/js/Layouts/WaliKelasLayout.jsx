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
        { name: "Beranda",          route: "wali-kelas.dashboard"  },
        { name: "Rekap Kehadiran",  route: "wali-kelas.kehadiran"  },
        { name: "Rekap Nilai",      route: "wali-kelas.nilai"      },
        { name: "Parenting",        route: "wali-kelas.parenting"  },
        { name: "Kebersihan Kelas", route: "wali-kelas.kebersihan" },
        { name: "Refleksi",         route: "wali-kelas.refleksi"   },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${
                    sidebarOpen ? "w-56" : "w-0 overflow-hidden"
                } bg-gray-200 transition-all duration-300 ease-in-out flex flex-col`}
            >
                {/* Sidebar header */}
                <div className="p-4 border-b border-gray-300">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        SMKN 1 Sigumpar
                    </span>
                </div>

                {/* User profile - foto tetap ada */}
                <div className="p-4 border-b border-gray-300">
                    <div className="flex flex-col items-center">
                        <img
                            src="/image/foto-walikelas.jpg"
                            alt="Foto Wali Kelas"
                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "block";
                            }}
                        />
                        {/* Fallback kalau foto tidak ada */}
                        <div
                            className="w-16 h-16 rounded-full bg-gray-300 border-2 border-blue-500"
                            style={{ display: "none" }}
                        />
                        <p className="text-sm font-semibold text-gray-800 text-center mt-2">
                            {user.name}
                        </p>
                    </div>
                </div>

                {/* Nav items */}
                <nav className="flex-1 px-2 py-4 space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.route}
                            href={route(item.route)}
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors ${
                                route().current(item.route)
                                    ? "bg-gray-400 font-semibold"
                                    : ""
                            }`}
                        >
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-300">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                        <span className="text-sm">Keluar</span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top header */}
                <header className="bg-blue-500 text-white px-6 py-4 flex items-center gap-4 shadow">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-white hover:text-gray-200 text-lg font-bold"
                    >
                        ☰
                    </button>
                    <img
                        src="/image/tutwuri.png"
                        alt="Logo"
                        className="w-12 h-12 rounded-full"
                        onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <h1 className="text-xl font-bold">
                        SMK NEGERI 1 SIGUMPAR
                    </h1>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-auto bg-gray-100">
                    <div className="p-8">{children}</div>
                </main>
            </div>
        </div>
    );
}
