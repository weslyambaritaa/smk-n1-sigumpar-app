import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Pengumuman() {
    const [judul, setJudul] = useState("");
    const [isi, setIsi] = useState("");
    const [dokumen, setDokumen] = useState("");
    const [daftar, setDaftar] = useState([]);

    const handleTambah = (e) => {
        e.preventDefault();
        if (!judul) return;
        setDaftar((prev) => [
            ...prev,
            { id: prev.length + 1, judul, isi, dokumen },
        ]);
        setJudul("");
        setIsi("");
        setDokumen("");
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pengumuman
                </h2>
            }
        >
            <Head title="Pengumuman" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={handleTambah} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Judul
                                </label>
                                <input
                                    type="text"
                                    value={judul}
                                    onChange={(e) => setJudul(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Isi
                                </label>
                                <textarea
                                    value={isi}
                                    onChange={(e) => setIsi(e.target.value)}
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Tambahkan dokumen jika ada
                                </label>
                                <textarea
                                    value={dokumen}
                                    onChange={(e) => setDokumen(e.target.value)}
                                    rows={3}
                                    placeholder="Dokumen"
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

                    {/* tampilan daftar */}
                    <div className="mt-8 bg-white shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Daftar Pengumuman
                        </h3>
                        {daftar.length === 0 ? (
                            <p className="text-gray-500">
                                Belum ada pengumuman
                            </p>
                        ) : (
                            <ul className="space-y-4">
                                {daftar.map((item) => (
                                    <li
                                        key={item.id}
                                        className="border p-4 rounded-md"
                                    >
                                        <h4 className="font-semibold">
                                            {item.judul}
                                        </h4>
                                        <p className="text-sm text-gray-700 mt-1">
                                            {item.isi}
                                        </p>
                                        {item.dokumen && (
                                            <p className="mt-2 text-xs text-gray-500">
                                                {item.dokumen}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
