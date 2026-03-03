import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function RekapKehadiran({ siswaList = [] }) {
    const [filterBulan, setFilterBulan] = useState("");
    const [filterMapel, setFilterMapel] = useState("");
    const [filterNama, setFilterNama] = useState("");

    const defaultSiswa = siswaList.length
        ? siswaList
        : [
              { id: 1, nama: "Ayu Hutasoit",      hadir: 20, izin: 1, sakit: 0, alpa: 0 },
              { id: 2, nama: "Ayu Mentari",        hadir: 18, izin: 0, sakit: 2, alpa: 1 },
              { id: 3, nama: "Bintang Silalahi",   hadir: 21, izin: 0, sakit: 0, alpa: 0 },
              { id: 4, nama: "Dina Lumbantoruan",  hadir: 17, izin: 2, sakit: 1, alpa: 1 },
              { id: 5, nama: "Erika Pangaribuan",  hadir: 19, izin: 1, sakit: 1, alpa: 0 },
          ];

    const filtered = defaultSiswa.filter((s) =>
        s.nama.toLowerCase().includes(filterNama.toLowerCase())
    );

    const persen = (hadir, izin, sakit, alpa) => {
        const total = hadir + izin + sakit + alpa;
        return total > 0 ? Math.round((hadir / total) * 100) : 0;
    };

    const badgeColor = (type) => {
        if (type === "hadir") return "bg-green-100 text-green-700";
        if (type === "izin")  return "bg-yellow-100 text-yellow-700";
        if (type === "sakit") return "bg-blue-100 text-blue-700";
        return "bg-red-100 text-red-700";
    };

    return (
        <WaliKelasLayout>
            <Head title="Rekap Kehadiran – Wali Kelas" />

            <h2 className="text-2xl font-bold mb-1">Rekap Kehadiran</h2>
            <p className="text-sm text-gray-500 mb-6">
                Pantau kehadiran siswa kelas XI AKL 1
            </p>

            {/* Filter */}
            <div className="bg-white rounded-xl shadow p-5 mb-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                    🔍 Filter
                </p>
                <div className="flex flex-wrap gap-4 items-end">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">
                            Bulan
                        </label>
                        <select
                            className="border rounded px-3 py-2 text-sm"
                            value={filterBulan}
                            onChange={(e) => setFilterBulan(e.target.value)}
                        >
                            <option value="">Pilih</option>
                            <option>Januari</option>
                            <option>Februari</option>
                            <option>Maret</option>
                            <option>April</option>
                            <option>Mei</option>
                            <option>Juni</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">
                            Mapel
                        </label>
                        <select
                            className="border rounded px-3 py-2 text-sm"
                            value={filterMapel}
                            onChange={(e) => setFilterMapel(e.target.value)}
                        >
                            <option value="">Pilih</option>
                            <option>Matematika</option>
                            <option>Bahasa Indonesia</option>
                            <option>Produktif</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">
                            Nama Siswa
                        </label>
                        <input
                            type="text"
                            className="border rounded px-3 py-2 text-sm w-48"
                            placeholder="Masukkan Nama"
                            value={filterNama}
                            onChange={(e) => setFilterNama(e.target.value)}
                        />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">
                        Cari
                    </button>
                    <button
                        className="border border-gray-300 text-gray-600 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-50"
                        onClick={() => {
                            setFilterBulan("");
                            setFilterMapel("");
                            setFilterNama("");
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Tabel */}
            <div className="bg-white rounded-xl shadow p-5">
                <h3 className="text-base font-bold mb-4">Tabel Rekapan</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="px-4 py-3 text-left text-sm font-bold">No</th>
                                <th className="px-4 py-3 text-left text-sm font-bold">Nama</th>
                                <th className="px-4 py-3 text-center text-sm font-bold">Hadir</th>
                                <th className="px-4 py-3 text-center text-sm font-bold">Izin</th>
                                <th className="px-4 py-3 text-center text-sm font-bold">Sakit</th>
                                <th className="px-4 py-3 text-center text-sm font-bold">Alpa</th>
                                <th className="px-4 py-3 text-center text-sm font-bold">% Hadir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((s, i) => (
                                <tr
                                    key={s.id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3 text-sm">{i + 1}</td>
                                    <td className="px-4 py-3 text-sm font-semibold">
                                        {s.nama}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${badgeColor("hadir")}`}
                                        >
                                            {s.hadir}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${badgeColor("izin")}`}
                                        >
                                            {s.izin}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${badgeColor("sakit")}`}
                                        >
                                            {s.sakit}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${badgeColor("alpa")}`}
                                        >
                                            {s.alpa}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center text-sm font-semibold">
                                        {persen(s.hadir, s.izin, s.sakit, s.alpa)}%
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="text-center py-8 text-gray-400 text-sm"
                                    >
                                        Tidak ada data yang ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </WaliKelasLayout>
    );
}
