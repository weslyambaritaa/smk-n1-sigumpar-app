import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function RekapNilai({ siswaList = [] }) {
    const [selectedId, setSelectedId] = useState(null);
    const [filterNama, setFilterNama] = useState("");

    const defaultSiswa = siswaList.length ? siswaList : [
        { id: 1, nama: "Ayu Hutasoit",
          nilai: [
            { mapel: "Matematika",       tugas: 80, uts: 80, uas: 80, rata: 80 },
            { mapel: "Bahasa Indonesia", tugas: 80, uts: 80, uas: 80, rata: 80 },
            { mapel: "Produktif",        tugas: 80, uts: 80, uas: 80, rata: 80 },
          ]},
        { id: 2, nama: "Ayu Mentari",
          nilai: [
            { mapel: "Matematika",       tugas: 75, uts: 76, uas: 78, rata: 76 },
            { mapel: "Bahasa Indonesia", tugas: 82, uts: 80, uas: 81, rata: 81 },
            { mapel: "Produktif",        tugas: 78, uts: 77, uas: 79, rata: 78 },
          ]},
        { id: 3, nama: "Bintang Silalahi",
          nilai: [
            { mapel: "Matematika",       tugas: 90, uts: 92, uas: 91, rata: 91 },
            { mapel: "Bahasa Indonesia", tugas: 88, uts: 89, uas: 90, rata: 89 },
            { mapel: "Produktif",        tugas: 91, uts: 90, uas: 92, rata: 91 },
          ]},
    ];

    const filtered = defaultSiswa.filter((s) =>
        s.nama.toLowerCase().includes(filterNama.toLowerCase())
    );

    const rataTotal = (nilai) => Math.round(nilai.reduce((a, n) => a + n.rata, 0) / nilai.length);

    return (
        <WaliKelasLayout>
            <Head title="Rekap Nilai - Wali Kelas" />

            <h2 className="text-2xl font-bold mb-6">Rekap Nilai</h2>

            <div className="bg-white rounded-xl shadow p-5 mb-6">
                <div className="flex flex-wrap gap-4 items-end">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Nama Siswa</label>
                        <input type="text" className="border rounded px-3 py-2 text-sm w-48" placeholder="Cari nama..." value={filterNama} onChange={(e) => setFilterNama(e.target.value)} />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">Cari</button>
                </div>
            </div>

            <div className="space-y-3">
                {filtered.map((s) => (
                    <div key={s.id} className="bg-white rounded-xl shadow overflow-hidden">
                        <div
                            className="bg-blue-50 px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-blue-100"
                            onClick={() => setSelectedId(selectedId === s.id ? null : s.id)}
                        >
                            <div>
                                <p className="font-bold text-gray-800">{s.nama}</p>
                                <p className="text-xs text-gray-400 mt-0.5">Klik untuk lihat detail nilai</p>
                            </div>
                            <span className="text-sm font-extrabold text-green-600">
                                Rata-rata: {rataTotal(s.nilai)}
                            </span>
                        </div>

                        {selectedId === s.id && (
                            <div className="px-5 pb-5 pt-3">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-3">Semester: Ganjil</p>
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2 bg-blue-600 text-white text-sm text-left">Mapel</th>
                                            <th className="border px-4 py-2 bg-blue-600 text-white text-sm text-center">Tugas</th>
                                            <th className="border px-4 py-2 bg-blue-600 text-white text-sm text-center">UAS</th>
                                            <th className="border px-4 py-2 bg-blue-600 text-white text-sm text-center">UTS</th>
                                            <th className="border px-4 py-2 bg-blue-600 text-white text-sm text-center">Rata - rata</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {s.nilai.map((n, i) => (
                                            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="border px-4 py-3 text-sm font-semibold text-center">{n.mapel}</td>
                                                <td className="border px-4 py-3 text-sm text-center font-bold">{n.tugas}</td>
                                                <td className="border px-4 py-3 text-sm text-center font-bold">{n.uas}</td>
                                                <td className="border px-4 py-3 text-sm text-center font-bold">{n.uts}</td>
                                                <td className="border px-4 py-3 text-sm text-center font-extrabold">{n.rata}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </WaliKelasLayout>
    );
}
