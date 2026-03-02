import React from "react";
import { Head } from "@inertiajs/react";

export default function DetailPembelajaran() {
    // Data dummy sesuai dengan desain gambar
    const daftarPerangkat = [
        { nama: "RPP Semester Ganjil", status: "Lengkap", isLengkap: true },
        { nama: "Silabus Kelas X", status: "Belum Lengkap", isLengkap: false },
        {
            nama: "Budi Materi Pembelalajaran",
            status: "Lengkap",
            isLengkap: true,
        },
    ];

    return (
        <>
            <Head title="Detail Pembelajaran - Wakepsek" />

            <div className="flex min-h-screen bg-gray-100 font-sans">
                {/* Sidebar */}
                <aside className="w-64 bg-[#d9d9d9] p-6 flex flex-col items-center border-r border-gray-300">
                    <div className="mb-8 text-center">
                        <div className="w-24 h-32 bg-gray-400 rounded-md mb-2 overflow-hidden border border-gray-500 shadow-sm">
                            <img
                                src="/images/profile_ivana.png"
                                alt="Ivana Pasaribu"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[12px] font-semibold text-gray-700">
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
                        {/* Menu Aktif dengan Indikator Panah */}
                        <a
                            href="#"
                            className="block py-2 px-4 bg-gray-400 font-bold rounded justify-between items-center"
                        >
                            Detail Pembelajaran{" "}
                            <span className="text-[10px]">&lt;</span>
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
                        {/* Blue Header Banner */}
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

                            {/* Info Guru Section */}
                            <div className="mb-8">
                                <h3 className="text-md font-bold text-gray-700 mb-4">
                                    Detail Perangkat Pembelajaran Guru
                                </h3>
                                <div className="flex items-center space-x-4 ml-2">
                                    <div className="text-3xl text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="ID card icon..."
                                            />
                                            {/* Representasi icon pada desain */}
                                            <rect
                                                x="3"
                                                y="4"
                                                width="18"
                                                height="16"
                                                rx="2"
                                            />
                                            <path d="M7 8h10M7 12h10M7 16h5" />
                                        </svg>
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-gray-700">
                                            Nama Guru:{" "}
                                            <span className="font-semibold">
                                                Mark Lee, S.Pd
                                            </span>
                                        </p>
                                        <p className="text-gray-600">
                                            NIP: 11S23047
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tabel Perangkat */}
                            <div>
                                <h3 className="text-md font-bold text-gray-700 mb-4">
                                    Daftar Perangkat Pembelajaran
                                </h3>
                                <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-[#e9f2fb]">
                                                <th className="p-4 text-sm font-bold text-gray-700">
                                                    Nama Guru
                                                </th>
                                                <th className="p-4 text-sm font-bold text-gray-700">
                                                    Status
                                                </th>
                                                <th className="p-4 text-sm font-bold text-gray-700 text-center">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {daftarPerangkat.map(
                                                (item, index) => (
                                                    <tr
                                                        key={index}
                                                        className="hover:bg-gray-50 transition"
                                                    >
                                                        <td className="p-4 text-sm text-gray-800">
                                                            {item.nama}
                                                        </td>
                                                        <td
                                                            className={`p-4 text-sm font-bold ${item.isLengkap ? "text-green-600" : "text-red-600"}`}
                                                        >
                                                            {item.status}
                                                        </td>
                                                        <td className="p-4 text-center flex justify-center space-x-2">
                                                            <button className="bg-[#5c85ff] hover:bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition">
                                                                Lihat
                                                            </button>
                                                            <button className="bg-[#cc0000] hover:bg-red-800 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition">
                                                                Hapus
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
