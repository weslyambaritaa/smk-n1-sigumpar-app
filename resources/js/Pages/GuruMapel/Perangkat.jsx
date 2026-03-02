import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Perangkat() {
    const perangkatData = [
        {
            id: 1,
            bulan: "Januari 2026",
            file: "Program Tahunan.pdf",
            tipe: "Prota",
            status: "Terverifikasi",
        },
        {
            id: 2,
            bulan: "Januari 2026",
            file: "Program Semester.pdf",
            tipe: "Promes",
            status: "Terverifikasi",
        },
        {
            id: 3,
            bulan: "Februari 2026",
            file: "Silabus Algoritma.pdf",
            tipe: "Silabus",
            status: "Terverifikasi",
        },
        {
            id: 4,
            bulan: "Februari 2026",
            file: "RPP Bab 1.pdf",
            tipe: "RPP",
            status: "Draft",
        },
        {
            id: 5,
            bulan: "Februari 2026",
            file: "RPP Bab 2.pdf",
            tipe: "RPP",
            status: "Terverifikasi",
        },
    ];

    return (
        <GurumapelLayout>
            <Head title="Perangkat Pembelajaran" />

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-4">
                    Upload Dokumen Pembelajaran
                </h2>

                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="mb-4">Drag & drop files here or</p>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded">
                        Upload Dokumen
                    </button>
                    <p className="text-xs text-gray-500 mt-2">
                        Jenis Dokumen: Modul Ajar, RPP, Silabus, Materi Tambahan
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-4 mt-8 overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-3">
                        Daftar Dokumen
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border">
                                    Nama Dokumen
                                </th>
                                <th className="px-4 py-2 border">Jenis</th>
                                <th className="px-4 py-2 border">
                                    Tanggal Upload
                                </th>
                                <th className="px-4 py-2 border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {perangkatData.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        {item.file}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {item.tipe}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        2023-10-26
                                    </td>
                                    <td className="px-4 py-2 border space-x-2">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                            Download
                                        </button>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded">
                                            Hapus
                                        </button>
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
