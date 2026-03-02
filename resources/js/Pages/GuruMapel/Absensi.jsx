import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function Absensi() {
    const siswaData = [
        { id: 1, nama: "Andi Wijaya", status: "Hadir", jam: "07:30" },
        { id: 2, nama: "Budi Santoso", status: "Hadir", jam: "07:25" },
        { id: 3, nama: "Citra Dewi", status: "Sakit", jam: "-" },
        { id: 4, nama: "Dedi Hermawan", status: "Hadir", jam: "07:35" },
        { id: 5, nama: "Eka Putri", status: "Sakit", jam: "-" },
        { id: 6, nama: "Fandi Irawan", status: "Izin", jam: "-" },
    ];

    return (
        <GurumapelLayout>
            <Head title="Absensi Siswa" />

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-4">Absensi Siswa</h2>

                {/* filter section */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Kelas
                            </label>
                            <select className="w-full border px-3 py-2 rounded">
                                <option>X TKJ A</option>
                                <option>X TKJ B</option>
                                <option>XI TKJ</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Mata Pelajaran
                            </label>
                            <select className="w-full border px-3 py-2 rounded">
                                <option>Algoritma</option>
                                <option>Basis Data</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Tanggal
                            </label>
                            <input
                                type="date"
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                    </div>
                    <div className="mt-4 text-right">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Cari
                        </button>
                    </div>
                </div>

                {/* attendance table */}
                <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border">No</th>
                                <th className="px-4 py-2 border">Nama Siswa</th>
                                <th className="px-4 py-2 border">NIS</th>
                                <th className="px-4 py-2 border">Hadir</th>
                                <th className="px-4 py-2 border">Sakit</th>
                                <th className="px-4 py-2 border">Izin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {siswaData.map((siswa, index) => (
                                <tr key={siswa.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {siswa.nama}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {siswa.nis || "12345"}
                                    </td>
                                    <td className="px-4 py-2 border text-center">
                                        <input
                                            type="radio"
                                            name={`status-${siswa.id}`}
                                            defaultChecked={
                                                siswa.status === "Hadir"
                                            }
                                        />
                                    </td>
                                    <td className="px-4 py-2 border text-center">
                                        <input
                                            type="radio"
                                            name={`status-${siswa.id}`}
                                            defaultChecked={
                                                siswa.status === "Sakit"
                                            }
                                        />
                                    </td>
                                    <td className="px-4 py-2 border text-center">
                                        <input
                                            type="radio"
                                            name={`status-${siswa.id}`}
                                            defaultChecked={
                                                siswa.status === "Izin"
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-right">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Simpan Absensi
                    </button>
                </div>

                {/* saved attendance history */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                        Riwayat Absensi
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
                                        Jumlah Hadir
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
                                            <button className="text-blue-500 hover:text-blue-700 text-sm flex items-center space-x-1">
                                                <span>🔍</span>
                                                <span>Detail</span>
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
