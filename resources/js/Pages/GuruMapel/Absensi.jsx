import GurumapelLayout from '@/Layouts/GurumapelLayout';
import GurumapelLayout from '@/Layouts/GurumapelLayout';
import { Head } from "@inertiajs/react";
export default function Absensi() {
    const siswaData = [
        { id: 1, nama: "Andi Wijaya", nis: "12345", status: "Hadir" },
        { id: 2, nama: "Budi Santoso", nis: "12346", status: "Hadir" },
        { id: 3, nama: "Citra Dewi", nis: "12347", status: "Sakit" },
        { id: 4, nama: "Dedi Hermawan", nis: "12348", status: "Hadir" },
        { id: 5, nama: "Eka Putri", nis: "12349", status: "Sakit" },
        { id: 6, nama: "Fandi Irawan", nis: "12350", status: "Izin" },
    ];

    return (
        <GurumapelLayout>
            <Head title="Absensi Siswa" />

            <div className="max-w-5xl mx-auto py-8 px-6">
                {/* CARD UTAMA (SESUIA FIGMA) */}
                <div className="bg-gray-100 border border-gray-400 rounded-md p-6">
                    <h2 className="text-lg font-semibold mb-6">
                        Absensi Siswa
                    </h2>

                    {/* FILTER */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Kelas
                            </label>
                            <select className="w-full border border-gray-400 px-3 py-2 text-sm">
                                <option>X TKJ A</option>
                                <option>X TKJ B</option>
                                <option>XI TKJ</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Mata Pelajaran
                            </label>
                            <select className="w-full border border-gray-400 px-3 py-2 text-sm">
                                <option>Algoritma</option>
                                <option>Basis Data</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Tanggal
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-400 px-3 py-2 text-sm"
                            />
                        </div>
                    </div>

                    <div className="text-right mb-6">
                        <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                            Cari
                        </button>
                    </div>

                    {/* TABEL ABSENSI */}
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-300 text-center">
                                    <th className="border border-gray-400 px-3 py-2 w-12">
                                        No
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Nama Siswa
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        NIS
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Status Kehadiran
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {siswaData.map((siswa, index) => (
                                    <tr key={siswa.id}>
                                        <td className="border border-gray-400 px-3 py-2 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-400 px-3 py-2">
                                            {siswa.nama}
                                        </td>
                                        <td className="border border-gray-400 px-3 py-2 text-center">
                                            {siswa.nis}
                                        </td>
                                        <td className="border border-gray-400 px-3 py-2">
                                            <select
                                                className="w-full border border-gray-400 px-2 py-1 text-sm"
                                                defaultValue={siswa.status}
                                            >
                                                <option>Hadir</option>
                                                <option>Sakit</option>
                                                <option>Izin</option>
                                                <option>Alpa</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TOMBOL SIMPAN */}
                    <div className="text-right mt-6">
                        <button className="bg-green-600 text-white px-4 py-2 text-sm">
                            Simpan Absensi
                        </button>
                    </div>
                </div>

                {/* ========================= */}
                {/* RIWAYAT ABSENSI (TETAP ADA) */}
                {/* ========================= */}

                <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-4">
                        Riwayat Absensi
                    </h3>

                    <div className="border border-gray-400 bg-white overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-200 text-center">
                                    <th className="border border-gray-400 px-3 py-2">
                                        Tanggal
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Kelas
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Mapel
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Jumlah Hadir
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-3 py-2 text-center">
                                        01 Mar 2026
                                    </td>
                                    <td className="border border-gray-400 px-3 py-2 text-center">
                                        X TKJ A
                                    </td>
                                    <td className="border border-gray-400 px-3 py-2 text-center">
                                        Algoritma
                                    </td>
                                    <td className="border border-gray-400 px-3 py-2 text-center">
                                        24
                                    </td>
                                    <td className="border border-gray-400 px-3 py-2 text-center">
                                        <button className="text-blue-600 text-sm">
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </GurumapelLayout>
    );
}


