import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Nilai() {
    const siswaData = [
        {
            id: 1,
            nama: "Siswa A",
            tugas: 80,
            kuis: 80,
            ujian: 80,
            praktik: 80,
            akhir: 82.5,
        },
        {
            id: 2,
            nama: "Siswa B",
            tugas: 80,
            kuis: 80,
            ujian: 80,
            praktik: 80,
            akhir: 72.6,
        },
    ];

    return (
        <GurumapelLayout>
            <Head title="Input & Kelola Nilai" />

            <div className="max-w-5xl mx-auto py-8 px-6">
                {/* ===================== */}
                {/* CARD UTAMA */}
                {/* ===================== */}
                <div className="bg-gray-100 border border-gray-400 rounded-md p-6">
                    <h2 className="text-lg font-semibold mb-6">
                        Input & Kelola Nilai
                    </h2>

                    {/* FILTER DROPDOWN */}
                    <div className="flex gap-6 mb-6">
                        <select className="w-[260px] border border-gray-400 px-3 py-2 text-sm bg-white">
                            <option>Pilih Kelas</option>
                            <option>X TKJ A</option>
                            <option>X TKJ B</option>
                        </select>

                        <select className="w-[300px] border border-gray-400 px-3 py-2 text-sm bg-white">
                            <option>Pilih Mata Pelajaran</option>
                            <option>Algoritma</option>
                            <option>Basis Data</option>
                        </select>
                    </div>

                    {/* ===================== */}
                    {/* TABEL NILAI */}
                    {/* ===================== */}
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-300 text-center">
                                    <th className="border border-gray-400 px-3 py-2">
                                        Nama Siswa
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Tugas
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Kuis
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Ujian
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Praktik
                                    </th>
                                    <th className="border border-gray-400 px-3 py-2">
                                        Nilai Akhir
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {siswaData.map((siswa) => (
                                    <tr key={siswa.id}>
                                        <td className="border border-gray-400 px-3 py-2">
                                            {siswa.nama}
                                        </td>

                                        <td className="border border-gray-400 px-3 py-2">
                                            <input
                                                type="number"
                                                defaultValue={siswa.tugas}
                                                className="w-full border border-gray-400 px-2 py-1 text-sm"
                                            />
                                        </td>

                                        <td className="border border-gray-400 px-3 py-2">
                                            <input
                                                type="number"
                                                defaultValue={siswa.kuis}
                                                className="w-full border border-gray-400 px-2 py-1 text-sm"
                                            />
                                        </td>

                                        <td className="border border-gray-400 px-3 py-2">
                                            <input
                                                type="number"
                                                defaultValue={siswa.ujian}
                                                className="w-full border border-gray-400 px-2 py-1 text-sm"
                                            />
                                        </td>

                                        <td className="border border-gray-400 px-3 py-2">
                                            <input
                                                type="number"
                                                defaultValue={siswa.praktik}
                                                className="w-full border border-gray-400 px-2 py-1 text-sm"
                                            />
                                        </td>

                                        <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                                            {siswa.akhir}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* BUTTON SIMPAN */}
                    <div className="mt-6">
                        <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                            Simpan Nilai
                        </button>
                    </div>
                </div>

                {/* ===================== */}
                {/* RIWAYAT NILAI */}
                {/* ===================== */}
                <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-4">
                        Riwayat Nilai
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
                                        Jumlah Siswa
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
                                        2
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
