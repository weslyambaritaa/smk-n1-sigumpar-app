import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function JadwalGuru() {
    // form state
    const [guru, setGuru] = useState("");
    const [mataPelajaran, setMataPelajaran] = useState("");
    const [periodeMulai, setPeriodeMulai] = useState("");
    const [periodeSelesai, setPeriodeSelesai] = useState("");
    const [hari, setHari] = useState("");
    const [jamMulai, setJamMulai] = useState("");
    const [jamSelesai, setJamSelesai] = useState("");
    const [kelas, setKelas] = useState("");

    // daftar jadwal yang dibuat secara lokal (simulasi)
    const [daftar, setDaftar] = useState([]);
    const [filterHari, setFilterHari] = useState("Semua Hari");
    const [filterKelas, setFilterKelas] = useState("");
    const [searchGuru, setSearchGuru] = useState("");

    const handleTambah = (e) => {
        e.preventDefault();
        if (!guru) return;
        setDaftar((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                guru,
                mataPelajaran,
                hari,
                tanggal:
                    periodeMulai +
                    (periodeSelesai ? ` - ${periodeSelesai}` : ""),
                waktu: jamMulai + (jamSelesai ? ` - ${jamSelesai}` : ""),
                kelas,
            },
        ]);
        // bersihkan form
        setGuru("");
        setMataPelajaran("");
        setPeriodeMulai("");
        setPeriodeSelesai("");
        setHari("");
        setJamMulai("");
        setJamSelesai("");
        setKelas("");
    };

    // filter data
    const filtered = daftar.filter((item) => {
        const matchHari =
            filterHari === "Semua Hari" || item.hari === filterHari;
        const matchKelas =
            filterKelas === "" ||
            item.kelas.toLowerCase().includes(filterKelas.toLowerCase());
        const matchGuru =
            searchGuru === "" ||
            item.guru.toLowerCase().includes(searchGuru.toLowerCase());
        return matchHari && matchKelas && matchGuru;
    });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Jadwal Guru
                </h2>
            }
        >
            <Head title="Jadwal Guru" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Form tambah jadwal */}
                    <div className="bg-white shadow-sm sm:rounded-lg p-6 mb-8">
                        <form onSubmit={handleTambah} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Guru
                                    </label>
                                    <input
                                        type="text"
                                        value={guru}
                                        onChange={(e) =>
                                            setGuru(e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Mata Pelajaran
                                    </label>
                                    <input
                                        type="text"
                                        value={mataPelajaran}
                                        onChange={(e) =>
                                            setMataPelajaran(e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Hari
                                    </label>
                                    <input
                                        type="text"
                                        value={hari}
                                        onChange={(e) =>
                                            setHari(e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Periode Mulai
                                    </label>
                                    <input
                                        type="date"
                                        value={periodeMulai}
                                        onChange={(e) =>
                                            setPeriodeMulai(e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Periode Selesai
                                    </label>
                                    <input
                                        type="date"
                                        value={periodeSelesai}
                                        onChange={(e) =>
                                            setPeriodeSelesai(e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Jam Mulai
                                    </label>
                                    <input
                                        type="time"
                                        value={jamMulai}
                                        onChange={(e) =>
                                            setJamMulai(e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Jam Selesai
                                    </label>
                                    <input
                                        type="time"
                                        value={jamSelesai}
                                        onChange={(e) =>
                                            setJamSelesai(e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Kelas
                                    </label>
                                    <input
                                        type="text"
                                        value={kelas}
                                        onChange={(e) =>
                                            setKelas(e.target.value)
                                        }
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
                            </div>
                        </form>
                    </div>

                    {/* filter & tabel */}
                    <div className="bg-white shadow-sm sm:rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-2">
                                <select
                                    value={filterHari}
                                    onChange={(e) =>
                                        setFilterHari(e.target.value)
                                    }
                                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                >
                                    <option>Semua Hari</option>
                                    <option>Senin</option>
                                    <option>Selasa</option>
                                    <option>Rabu</option>
                                    <option>Kamis</option>
                                    <option>Jumat</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Kelas"
                                    value={filterKelas}
                                    onChange={(e) =>
                                        setFilterKelas(e.target.value)
                                    }
                                    className="ml-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Cari nama guru"
                                    value={searchGuru}
                                    onChange={(e) =>
                                        setSearchGuru(e.target.value)
                                    }
                                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                <button
                                    onClick={() => {}}
                                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm"
                                >
                                    Cari
                                </button>
                            </div>
                        </div>

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
                                            Mata Pelajaran
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Hari
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Waktu
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Kelas
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filtered.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={7}
                                                className="px-4 py-6 text-center text-gray-500"
                                            >
                                                Belum ada data
                                            </td>
                                        </tr>
                                    ) : (
                                        filtered.map((row, idx) => (
                                            <tr key={row.id}>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {idx + 1}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.guru}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.mataPelajaran}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.hari}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.tanggal}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.waktu}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {row.kelas}
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
