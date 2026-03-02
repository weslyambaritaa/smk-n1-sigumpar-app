import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Nilai() {
    const siswaData = [
        {
            id: 1,
            nama: "Andi Wijaya",
            uts: 85,
            uas: 88,
            tugas: 90,
            praktik: 87,
            akhir: 87.5,
        },
        {
            id: 2,
            nama: "Budi Santoso",
            uts: 78,
            uas: 81,
            tugas: 85,
            praktik: 80,
            akhir: 81,
        },
        {
            id: 3,
            nama: "Citra Dewi",
            uts: 92,
            uas: 95,
            tugas: 93,
            praktik: 94,
            akhir: 93.5,
        },
        {
            id: 4,
            nama: "Dedi Hermawan",
            uts: 82,
            uas: 84,
            tugas: 86,
            praktik: 85,
            akhir: 84.25,
        },
        {
            id: 5,
            nama: "Eka Putri",
            uts: 88,
            uas: 90,
            tugas: 91,
            praktik: 89,
            akhir: 89.5,
        },
        {
            id: 6,
            nama: "Fandi Irawan",
            uts: 75,
            uas: 77,
            tugas: 79,
            praktik: 76,
            akhir: 76.75,
        },
    ];

    return (
        <GurumapelLayout>
            <Head title="Input & Ketua Nilai" />

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-4">
                    Input & Kelola Nilai
                </h2>

                <div className="flex space-x-4 mb-4">
                    <select className="border rounded px-3 py-2">
                        <option>Pilih Kelas</option>
                        <option>X TKJ</option>
                        <option>XI TKJ</option>
                    </select>
                    <select className="border rounded px-3 py-2">
                        <option>Pilih Mata Pelajaran</option>
                        <option>Algoritma</option>
                        <option>Basis Data</option>
                    </select>
                </div>

                <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border">Nama Siswa</th>
                                <th className="px-4 py-2 border">Tugas</th>
                                <th className="px-4 py-2 border">Kuis</th>
                                <th className="px-4 py-2 border">Ujian</th>
                                <th className="px-4 py-2 border">Praktik</th>
                                <th className="px-4 py-2 border">
                                    Nilai Akhir
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {siswaData.slice(0, 2).map((siswa, index) => (
                                <tr key={siswa.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        {siswa.nama}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <input
                                            type="number"
                                            defaultValue={siswa.tugas}
                                            className="w-full border px-2 py-1"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <input
                                            type="number"
                                            defaultValue={siswa.uts}
                                            className="w-full border px-2 py-1"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <input
                                            type="number"
                                            defaultValue={siswa.uas}
                                            className="w-full border px-2 py-1"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <input
                                            type="number"
                                            defaultValue={siswa.praktik}
                                            className="w-full border px-2 py-1"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border text-center font-semibold">
                                        {siswa.akhir}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Simpan Nilai
                </button>
                {/* history of saved grades */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                        Riwayat Nilai
                    </h3>
                    <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border">
                                        Tanggal
                                    </th>
                                    <th className="px-4 py-2 border">Kelas</th>
                                    <th className="px-4 py-2 border">Mapel</th>
                                    <th className="px-4 py-2 border">
                                        Jumlah Siswa
                                    </th>
                                    <th className="px-4 py-2 border">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {siswaData.slice(0, 2).map((s, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border">
                                            01 Mar 2026
                                        </td>
                                        <td className="px-4 py-2 border">
                                            X TKJ A
                                        </td>
                                        <td className="px-4 py-2 border">
                                            Algoritma
                                        </td>
                                        <td className="px-4 py-2 border">2</td>
                                        <td className="px-4 py-2 border">
                                            <button className="text-blue-500 hover:text-blue-700 text-sm">
                                                Lihat
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </GurumapelLayout>
    );
}
