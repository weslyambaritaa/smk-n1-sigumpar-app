import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Catatan() {
    const catatanData = [
        {
            id: 1,
            tanggal: "2023-10-26",
            materi: "Matematika Bab 1",
            kendala: "Siswa kurang fokus",
            refleksi: "Perlu metode pengajaran yang interaktif",
        },
        {
            id: 2,
            tanggal: "2023-10-27",
            materi: "Bahasa Indonesia Puisi",
            kendala: "Tidak ada",
            refleksi: "Pembelajaran berjalan lancar",
        },
    ];

    return (
        <GurumapelLayout>
            <Head title="Catatan Mengajar" />

            <div className="max-w-5xl mx-auto py-10 px-6">
                {/* ===================== */}
                {/* FORM CATATAN */}
                {/* ===================== */}
                <div className="bg-gray-100 border border-gray-400 rounded-md p-6">
                    <h2 className="text-base font-semibold mb-6">
                        Form Catatan Mengajar
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm mb-1">
                                Tanggal Pertemuan
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">
                                Materi yang disampaikan
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan Materi"
                                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">
                                Kendala
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan Kendala"
                                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">
                                Refleksi Pembelajaran
                            </label>
                            <textarea
                                placeholder="Masukkan Refleksi"
                                className="w-full border border-gray-400 px-3 py-2 text-sm bg-white h-28 resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                                Simpan Catatan
                            </button>
                        </div>
                    </div>
                </div>

                {/* ===================== */}
                {/* RIWAYAT CATATAN */}
                {/* ===================== */}
                <div className="mt-12">
                    <h3 className="text-base font-semibold mb-3">
                        Riwayat Catatan Mengajar
                    </h3>

                    <div className="border border-gray-500 bg-white overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-500 px-4 py-2 text-left font-medium">
                                        Tanggal Pertemuan
                                    </th>
                                    <th className="border border-gray-500 px-4 py-2 text-left font-medium">
                                        Materi Disampaikan
                                    </th>
                                    <th className="border border-gray-500 px-4 py-2 text-left font-medium">
                                        Kendala
                                    </th>
                                    <th className="border border-gray-500 px-4 py-2 text-left font-medium">
                                        Refleksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {catatanData.map((cat) => (
                                    <tr
                                        key={cat.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="border border-gray-400 px-4 py-2">
                                            {cat.tanggal}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {cat.materi}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {cat.kendala}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {cat.refleksi}
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
