import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Perangkat() {
    const perangkatData = [
        {
            id: 1,
            nama: "Modul Ajar Bab 1",
            jenis: "Modul Ajar",
            tanggal: "2023-10-26",
        },
        {
            id: 2,
            nama: "RPP Semester Ganjil",
            jenis: "RPP",
            tanggal: "2023-10-26",
        },
    ];

    return (
        <GurumapelLayout>
            <Head title="Perangkat Pembelajaran" />

            <div className="max-w-5xl mx-auto py-8 px-6">
                {/* ===================== */}
                {/* UPLOAD SECTION */}
                {/* ===================== */}
                <div className="bg-gray-100 border border-gray-400 rounded-md p-6">
                    <h2 className="text-base font-semibold mb-4">
                        Upload Dokumen Pembelajaran
                    </h2>

                    <div className="border border-gray-300 bg-gray-200 p-10 text-center">
                        <p className="text-sm mb-3">
                            Drag & drop files here or
                        </p>

                        <button className="bg-gray-700 text-white px-5 py-2 text-sm">
                            Upload Dokumen
                        </button>

                        <p className="text-xs text-gray-600 mt-3">
                            Jenis Dokumen: Modul Ajar, RPP, Silabus, Materi
                            Tambahan
                        </p>
                    </div>
                </div>

                {/* ===================== */}
                {/* DAFTAR DOKUMEN */}
                {/* ===================== */}
                <div className="mt-10">
                    <h3 className="text-base font-semibold mb-3">
                        Daftar Dokumen
                    </h3>

                    <div className="border border-gray-500 bg-white overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th className="border border-gray-500 px-4 py-2 text-left font-medium">
                                        Nama Dokumen
                                    </th>
                                    <th className="border border-gray-500 px-4 py-2 text-left font-medium">
                                        Jenis
                                    </th>
                                    <th className="border border-gray-500 px-4 py-2 text-left font-medium">
                                        Tanggal Upload
                                    </th>
                                    <th className="border border-gray-500 px-4 py-2 text-center font-medium">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {perangkatData.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="border border-gray-400 px-4 py-2">
                                            {item.nama}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {item.jenis}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {item.tanggal}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2 text-center space-x-2">
                                            <button className="bg-blue-600 text-white px-3 py-1 text-xs">
                                                Download
                                            </button>
                                            <button className="bg-red-600 text-white px-3 py-1 text-xs">
                                                Hapus
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
