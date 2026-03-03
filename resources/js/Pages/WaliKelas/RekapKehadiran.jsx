import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function RekapKehadiran({ siswaList = [] }) {
    const [filterBulan, setFilterBulan] = useState("");
    const [filterMapel, setFilterMapel] = useState("");
    const [filterNama,  setFilterNama]  = useState("");

    const defaultSiswa = siswaList.length ? siswaList : [
        { id: 1, nama: "Ayu Hutasoit",      hadir: 20, izin: 1, sakit: 0, alpa: 0 },
        { id: 2, nama: "Ayu Mentari",        hadir: 18, izin: 0, sakit: 2, alpa: 1 },
        { id: 3, nama: "Bintang Silalahi",   hadir: 21, izin: 0, sakit: 0, alpa: 0 },
        { id: 4, nama: "Dina Lumbantoruan",  hadir: 17, izin: 2, sakit: 1, alpa: 1 },
        { id: 5, nama: "Erika Pangaribuan",  hadir: 19, izin: 1, sakit: 1, alpa: 0 },
    ];

    const filtered = defaultSiswa.filter((s) =>
        s.nama.toLowerCase().includes(filterNama.toLowerCase())
    );

    return (
        <WaliKelasLayout>
            <Head title="Rekap Kehadiran - Wali Kelas" />

            <h2 className="text-2xl font-bold mb-6">Rekap Kehadiran</h2>

            <div className="bg-white rounded-xl shadow p-5 mb-6">
                <p className="text-sm font-bold text-gray-600 mb-3">Filter</p>
                <div className="flex flex-wrap gap-4 items-end">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Bulan</label>
                        <select className="border rounded px-3 py-2 text-sm" value={filterBulan} onChange={(e) => setFilterBulan(e.target.value)}>
                            <option value="">Pilih</option>
                            <option>Januari</option><option>Februari</option><option>Maret</option>
                            <option>April</option><option>Mei</option><option>Juni</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Mapel</label>
                        <select className="border rounded px-3 py-2 text-sm" value={filterMapel} onChange={(e) => setFilterMapel(e.target.value)}>
                            <option value="">Pilih</option>
                            <option>Matematika</option>
                            <option>Bahasa Indonesia</option>
                            <option>Produktif</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Nama Siswa</label>
                        <input type="text" className="border rounded px-3 py-2 text-sm w-48" placeholder="Masukkan Nama" value={filterNama} onChange={(e) => setFilterNama(e.target.value)} />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">Cari</button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-50" onClick={() => { setFilterBulan(""); setFilterMapel(""); setFilterNama(""); }}>Reset</button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
                <h3 className="text-base font-bold mb-4">Tabel Rekapan</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center font-bold">Nama</th>
                                <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center font-bold">Hadir</th>
                                <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center font-bold">Izin</th>
                                <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center font-bold">Sakit</th>
                                <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center font-bold">Alpa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((s) => (
                                <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="border px-4 py-3 text-sm font-semibold text-center">{s.nama}</td>
                                    <td className="border px-4 py-3 text-sm text-center font-bold">{s.hadir}</td>
                                    <td className="border px-4 py-3 text-sm text-center font-bold">{s.izin}</td>
                                    <td className="border px-4 py-3 text-sm text-center font-bold">{s.sakit}</td>
                                    <td className="border px-4 py-3 text-sm text-center font-bold">{s.alpa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </WaliKelasLayout>
    );
}
