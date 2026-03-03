import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function RekapNilai({ siswaList = [] }) {
    const [selectedSiswa, setSelectedSiswa] = useState(null);
    const [filterSemester, setFilterSemester] = useState("Ganjil");
    const [filterNama, setFilterNama] = useState("");

    const defaultSiswa = siswaList.length
        ? siswaList
        : [
              {
                  id: 1,
                  nama: "Ayu Hutasoit",
                  nilai: [
                      { mapel: "Matematika",       tugas: 80, uts: 80, uas: 80, rata: 80 },
                      { mapel: "Bahasa Indonesia", tugas: 80, uts: 80, uas: 80, rata: 80 },
                      { mapel: "Produktif",        tugas: 80, uts: 80, uas: 80, rata: 80 },
                  ],
              },
              {
                  id: 2,
                  nama: "Ayu Mentari",
                  nilai: [
                      { mapel: "Matematika",       tugas: 75, uts: 76, uas: 78, rata: 76 },
                      { mapel: "Bahasa Indonesia", tugas: 82, uts: 80, uas: 81, rata: 81 },
                      { mapel: "Produktif",        tugas: 78, uts: 77, uas: 79, rata: 78 },
                  ],
              },
              {
                  id: 3,
                  nama: "Bintang Silalahi",
                  nilai: [
                      { mapel: "Matematika",       tugas: 90, uts: 92, uas: 91, rata: 91 },
                      { mapel: "Bahasa Indonesia", tugas: 88, uts: 89, uas: 90, rata: 89 },
                      { mapel: "Produktif",        tugas: 91, uts: 90, uas: 92, rata: 91 },
                  ],
              },
              {
                  id: 4,
                  nama: "Dina Lumbantoruan",
                  nilai: [
                      { mapel: "Matematika",       tugas: 65, uts: 68, uas: 70, rata: 68 },
                      { mapel: "Bahasa Indonesia", tugas: 72, uts: 71, uas: 73, rata: 72 },
                      { mapel: "Produktif",        tugas: 70, uts: 69, uas: 71, rata: 70 },
                  ],
              },
          ];

    const filtered = defaultSiswa.filter((s) =>
        s.nama.toLowerCase().includes(filterNama.toLowerCase())
    );

    const rataTotal = (nilai) => {
        const sum = nilai.reduce((a, n) => a + n.rata, 0);
        return Math.round(sum / nilai.length);
    };

    const rataColor = (val) => {
        if (val >= 80) return "text-green-600";
        if (val >= 70) return "text-yellow-600";
        return "text-red-500";
    };

    return (
        <WaliKelasLayout>
            <Head title="Rekap Nilai – Wali Kelas" />

            <h2 className="text-2xl font-bold mb-1">Rekap Nilai</h2>
            <p className="text-sm text-gray-500 mb-6">
                Detail nilai akademik siswa per mata pelajaran
            </p>

            {/* Filter */}
            <div className="bg-white rounded-xl shadow p-5 mb-6">
                <div className="flex flex-wrap gap-4 items-end">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">
                            Semester
                        </label>
                        <select
                            className="border rounded px-3 py-2 text-sm"
                            value={filterSemester}
                            onChange={(e) => setFilterSemester(e.target.value)}
                        >
                            <option>Ganjil</option>
                            <option>Genap</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">
                            Nama Siswa
                        </label>
                        <input
                            type="text"
                            className="border rounded px-3 py-2 text-sm w-48"
                            placeholder="Cari nama..."
                            value={filterNama}
                            onChange={(e) => setFilterNama(e.target.value)}
                        />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">
                        Cari
                    </button>
                </div>
            </div>

            {/* Siswa cards */}
            <div className="space-y-3 mb-6">
                {filtered.map((s) => (
                    <div
                        key={s.id}
                        className="bg-white rounded-xl shadow overflow-hidden"
                    >
                        <div
                            className="bg-blue-50 px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-colors"
                            onClick={() =>
                                setSelectedSiswa(
                                    selectedSiswa?.id === s.id ? null : s
                                )
                            }
                        >
                            <div>
                                <p className="font-bold text-gray-800">
                                    {s.nama}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    Klik untuk lihat detail nilai
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span
                                    className={`text-sm font-extrabold ${rataColor(rataTotal(s.nilai))}`}
                                >
                                    Rata-rata: {rataTotal(s.nilai)}
                                </span>
                                <span className="text-gray-400">
                                    {selectedSiswa?.id === s.id ? "▲" : "▼"}
                                </span>
                            </div>
                        </div>

                        {/* Detail nilai */}
                        {selectedSiswa?.id === s.id && (
                            <div className="px-5 pb-5 pt-3">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-3">
                                    Semester: {filterSemester}
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-blue-600 text-white">
                                                <th className="px-4 py-2 text-left text-sm">
                                                    Mapel
                                                </th>
                                                <th className="px-4 py-2 text-center text-sm">
                                                    Tugas
                                                </th>
                                                <th className="px-4 py-2 text-center text-sm">
                                                    UTS
                                                </th>
                                                <th className="px-4 py-2 text-center text-sm">
                                                    UAS
                                                </th>
                                                <th className="px-4 py-2 text-center text-sm">
                                                    Rata-rata
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {s.nilai.map((n, i) => (
                                                <tr
                                                    key={i}
                                                    className="border-b border-gray-100 hover:bg-gray-50"
                                                >
                                                    <td className="px-4 py-3 text-sm font-semibold">
                                                        {n.mapel}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-sm">
                                                        {n.tugas}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-sm">
                                                        {n.uts}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-sm">
                                                        {n.uas}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-sm font-extrabold">
                                                        {n.rata}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </WaliKelasLayout>
    );
}
