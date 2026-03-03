import { Link, usePage } from "@inertiajs/react";
import * as React from "react";

export default function DashboardLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100">

            {/* ================= HEADER ================= */}
            <header className="bg-blue-800 text-white px-6 py-4 flex items-center gap-4 shadow-md">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-800 font-bold text-sm">LOGO</span>
                </div>
                <h1 className="text-xl font-bold tracking-wide">
                    SMK NEGERI 1 SIGUMPAR
                </h1>
            </header>

            <div className="flex">

                {/* ================= SIDEBAR ================= */}
                <aside className="w-64 bg-gray-200 min-h-screen p-6 hidden md:block">

                    {/* Profile */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-400 rounded-md mb-2"></div>
                        <p className="text-sm font-semibold">
                            {auth.user.name}
                        </p>
                    </div>

                    {/* Menu */}
                    <nav className="mt-6 space-y-2 text-sm">
                        <Link href="/dashboard"
                            className="block bg-gray-300 px-3 py-2 rounded">
                            Beranda
                        </Link>

                        <Link href="/siswa"
                            className="block px-3 py-2 hover:bg-gray-300 rounded">
                            Input Data Siswa
                        </Link>

                        <Link href="/guru"
                            className="block px-3 py-2 hover:bg-gray-300 rounded">
                            Input Data Guru
                        </Link>

                        <Link href="/arsip"
                            className="block px-3 py-2 hover:bg-gray-300 rounded">
                            Arsip Surat
                        </Link>

                        <Link href="/jadwal-guru"
                            className="block px-3 py-2 hover:bg-gray-300 rounded">
                            Jadwal Guru
                        </Link>

                        <Link href="/jadwal-upacara"
                            className="block px-3 py-2 hover:bg-gray-300 rounded">
                            Jadwal Upacara
                        </Link>

                        <Link href="/jadwal-piket"
                            className="block px-3 py-2 hover:bg-gray-300 rounded">
                            Jadwal Piket
                        </Link>
                    </nav>
                </aside>

                {/* ================= MAIN CONTENT ================= */}
                <main className="flex-1 p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}