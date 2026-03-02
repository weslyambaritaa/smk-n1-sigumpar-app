import React from "react";
import { Head } from "@inertiajs/react";

export default function FormInstruksi() {
    return (
        <>
            <Head title="Form Instruksi - Wakepsek" />

            <div className="flex min-h-screen bg-gray-100 font-sans">
                {/* Sidebar */}
                <aside className="w-64 bg-[#d9d9d9] p-6 flex flex-col items-center border-r border-gray-300">
                    <div className="mb-8 text-center">
                        <div className="w-24 h-32 bg-gray-400 rounded-md mb-2 overflow-hidden border border-gray-500">
                            {/* Menggunakan path yang sama dengan DaftarGuru */}
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
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-400 rounded transition"
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
                        {/* Menu Aktif sesuai desain */}
                        <a
                            href="#"
                            className="block py-2 px-4 bg-gray-400 font-bold rounded"
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
                                <h3 className="text-md font-bold text-gray-700 mb-4">
                                    Form Notifikasi/Instruksi
                                </h3>

                                {/* Form Container */}
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-6">
                                    {/* Nama Guru */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Nama Guru
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Masukan nama guru"
                                            className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
                                        />
                                    </div>

                                    {/* Jenis Notifikasi */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Jenis Notifikasi/Instruksi
                                        </label>
                                        <select className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 transition shadow-sm appearance-none cursor-pointer">
                                            <option>Notifikasi</option>
                                            <option>Instruksi Perbaikan</option>
                                            <option>Peringatan</option>
                                        </select>
                                    </div>

                                    {/* Pesan */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            Pesan
                                        </label>
                                        <textarea
                                            rows="6"
                                            placeholder="Tulis pesan disini"
                                            className="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 transition shadow-sm resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Tombol Kirim */}
                                    <div className="pt-2">
                                        <button className="bg-[#5c85ff] hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition shadow-md active:scale-95">
                                            Kirim Notifikasi/instruksi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
