import React from "react";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    // Data dummy untuk ringkasan di dashboard
    const stats = [
        { label: "Total Guru", value: "45", color: "bg-blue-500" },
        { label: "Perangkat Lengkap", value: "38", color: "bg-green-500" },
        { label: "Perangkat Belum Lengkap", value: "7", color: "bg-red-500" },
        { label: "Instruksi Dikirim", value: "12", color: "bg-yellow-500" },
    ];

    return (
        <>
            <Head title="Dashboard - Wakepsek" />

            <div className="flex min-h-screen bg-gray-100 font-sans">
                {/* Sidebar */}
                <aside className="w-64 bg-[#d9d9d9] p-6 flex flex-col items-center border-r border-gray-300">
                    <div className="mb-8 text-center">
                        <div className="w-24 h-32 bg-gray-400 rounded-md mb-2 overflow-hidden border border-gray-500">
                            <img
                                src="/images/profile_ivana.png"
                                alt="Ivana Pasaribu"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-sm font-semibold text-gray-700">
                            Ivana Pasaribu
                        </p>
                    </div>

                    <nav className="w-full space-y-1 text-sm text-gray-700">
                        {/* Menu Aktif */}
                        <a
                            href="#"
                            className="block py-2 px-4 bg-gray-400 font-bold rounded"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-400 rounded transition"
                        >
                            Daftar Guru
                        </a>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-400 rounded transition"
                        >
                            Detail Pembelajaran
                        </a>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-400 rounded transition"
                        >
                            Form Instruksi
                        </a>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-8 flex justify-center items-start">
                    <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        {/* Header Banner Biru */}
                        <div className="bg-[#2b6ca3] p-4 flex items-center text-white">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Logo_Tut_Wuri_Handayani.png"
                                alt="Logo Tut Wuri"
                                className="h-10 w-10 mr-4"
                            />
                            <h1 className="text-xl font-bold uppercase tracking-wider">
                                SMK NEGERI 1 SIGUMPAR
                            </h1>
                        </div>

                        <div className="p-8">
                            <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-4 border-gray-100">
                                Sistem Pengecekan Perangkat Pembelajaran
                            </h2>

                            <div className="mb-8">
                                <h3 className="text-md font-bold text-gray-700 mb-6">
                                    Ringkasan Sistem
                                </h3>

                                {/* Stat Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm"
                                        >
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                {stat.label}
                                            </p>
                                            <div className="flex items-end justify-between mt-2">
                                                <span className="text-3xl font-bold text-gray-800">
                                                    {stat.value}
                                                </span>
                                                <div
                                                    className={`h-2 w-8 rounded-full ${stat.color}`}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Welcome Section */}
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                                <h4 className="text-blue-800 font-bold mb-2">
                                    Selamat Datang, Wakil Kepala Sekolah
                                </h4>
                                <p className="text-sm text-blue-700 leading-relaxed">
                                    Melalui panel ini, Anda dapat memantau
                                    progres kelengkapan perangkat pembelajaran
                                    guru secara real-time. Gunakan menu di
                                    samping untuk melihat daftar guru atau
                                    mengirimkan instruksi perbaikan.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
