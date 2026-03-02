import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Catatan() {
    const catatanData = [
        {
            id: 1,
            pertemuan: 1,
            tanggal: "01 Maret 2026",
            materi: "Pengenalan Algoritma",
            keterangan:
                "Pembahasan konsep dasar algoritma, siswa aktif merespons",
            hadir: 28,
            absen: 2,
        },
        {
            id: 2,
            pertemuan: 2,
            tanggal: "02 Maret 2026",
            materi: "Flowchart Dasar",
            keterangan:
                "Praktek membuat flowchart sederhana, 3 siswa memerlukan bimbingan ekstra",
            hadir: 27,
            absen: 3,
        },
        {
            id: 3,
            pertemuan: 3,
            tanggal: "03 Maret 2026",
            materi: "Pseudocode",
            keterangan:
                "Penjelasan pembuatan pseudocode, akan dilanjutkan minggu depan",
            hadir: 29,
            absen: 1,
        },
        {
            id: 4,
            pertemuan: 4,
            tanggal: "04 Maret 2026",
            materi: "Struktur Kontrol",
            keterangan:
                "Diskusi tentang if-else dan looping, siswa mencatat dengan baik",
            hadir: 28,
            absen: 2,
        },
    ];

    return (
        <GurumapelLayout>
            <Head title="Catatan Mengajar" />

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-4">
                    Form Catatan Mengajar
                </h2>
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Tanggal Pertemuan
                            </label>
                            <input
                                type="date"
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Kendala
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan Kendala"
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Materi yang disampaikan
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan Materi"
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Refleksi Pembelajaran
                            </label>
                            <textarea
                                placeholder="Masukkan Refleksi"
                                className="w-full border px-3 py-2 rounded h-24"
                            ></textarea>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Simpan Catatan
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-3">
                        Riwayat Catatan Mengajar
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border">
                                    Tanggal Pertemuan
                                </th>
                                <th className="px-4 py-2 border">
                                    Materi Disampaikan
                                </th>
                                <th className="px-4 py-2 border">Kendala</th>
                                <th className="px-4 py-2 border">Refleksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {catatanData.map((cat) => (
                                <tr key={cat.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        {cat.tanggal}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {cat.materi}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {cat.keterangan}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        Refleksi ...
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </GurumapelLayout>
    );
}
