import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function JadwalPiket() {
    const [guru, setGuru] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [waktu, setWaktu] = useState("");
    const [daftar, setDaftar] = useState([]);

    const handleTambah = (e) => {
        e.preventDefault();
        if (!guru || !tanggal) return;
        setDaftar((prev) => [
            ...prev,
            { id: prev.length + 1, guru, tanggal, waktu },
        ]);
        setGuru("");
        setTanggal("");
        setWaktu("");
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Jadwal Piket
                </h2>
            }
        >
            <Head title="Jadwal Piket" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* form */}
                    <div className="bg-white shadow-sm sm:rounded-lg p-6 mb-8">
                        <form onSubmit={handleTambah} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Guru
                                </label>
                                <input
                                    type="text"
                                    value={guru}
                                    onChange={(e) => setGuru(e.target.value)}
                                    placeholder="Masukkan Nama Guru"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Tanggal
                                </label>
                                <input
                                    type="date"
                                    value={tanggal}
                                    onChange={(e) => setTanggal(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Waktu
                                </label>
                                <input
                                    type="text"
                                    value={waktu}
                                    onChange={(e) => setWaktu(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                                >
                                    Tambah
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* tabel */}
                    <div className="bg-white shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Daftar Jadwal Piket
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            No
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nama Guru
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Waktu
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {daftar.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="px-4 py-6 text-center text-gray-500"
                                            >
                                                Belum ada data
                                            </td>
                                        </tr>
                                    ) : (
                                        daftar.map((row, idx) => (
                                            <tr key={row.id}>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {idx + 1}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.guru}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.tanggal}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.waktu}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
