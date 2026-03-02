import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Laporan() {
    const laporanData = [
        {
            id: 1,
            nama: "Laporan Nilai Akhir X TKJ A",
            tanggal: "01 Maret 2026",
            jenis: "Nilai",
            status: "Selesai",
        },
        {
            id: 2,
            nama: "Rekapitulasi Absensi Semester Ganjil",
            tanggal: "28 Februari 2026",
            jenis: "Absensi",
            status: "Selesai",
        },
        {
            id: 3,
            nama: "Laporan Ketercapaian KBM",
            tanggal: "25 Februari 2026",
            jenis: "KBM",
            status: "Selesai",
        },
        {
            id: 4,
            nama: "Analisis Hasil Pembelajaran",
            tanggal: "20 Februari 2026",
            jenis: "Analisis",
            status: "Draft",
        },
    ];

    const statistik = [
        { label: "Total Pertemuan", value: 28, color: "blue" },
        { label: "Total Jam Mengajar", value: "56 Jam", color: "green" },
        { label: "Rata-rata Kehadiran", value: "96%", color: "purple" },
        { label: "Laporan Terselesaikan", value: "4", color: "orange" },
    ];

    return (
        <GurumapelLayout>
            <Head title="Laporan" />

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Laporan
                    </h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        📊 Buat Laporan Baru
                    </button>
                </div>

                {/* Statistik */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    {statistik.map((stat, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow p-6 border-l-4 border-${stat.color}-500`}
                        >
                            <p className="text-gray-600 text-sm mb-2">
                                {stat.label}
                            </p>
                            <p
                                className={`text-3xl font-bold text-${stat.color}-600`}
                            >
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Filter & Aksi */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Jenis Laporan
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                <option>Semua</option>
                                <option>Nilai</option>
                                <option>Absensi</option>
                                <option>KBM</option>
                                <option>Analisis</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Periode
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                <option>2026</option>
                                <option>2025</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Status
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                <option>Semua</option>
                                <option>Selesai</option>
                                <option>Draft</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                                Cari
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabel Laporan */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    No
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Nama Laporan
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Jenis
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Tanggal Dibuat
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {laporanData.map((laporan, index) => (
                                <tr
                                    key={laporan.id}
                                    className="border-b border-gray-200 hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {laporan.nama}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold">
                                            {laporan.jenis}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {laporan.tanggal}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                laporan.status === "Selesai"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                            }`}
                                        >
                                            {laporan.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <button className="text-blue-500 hover:text-blue-700 font-semibold text-sm">
                                            👁️ Lihat
                                        </button>
                                        <button className="text-green-500 hover:text-green-700 font-semibold text-sm">
                                            📥 Unduh
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Info */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                        📌 <strong>Tips:</strong> Buat laporan secara berkala
                        untuk memantau perkembangan pembelajaran Anda. Semua
                        laporan dapat diunduh dalam format PDF.
                    </p>
                </div>
            </div>
        </GurumapelLayout>
    );
}
