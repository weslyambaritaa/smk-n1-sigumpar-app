import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ pengumuman = [], kelas = "XI AKL 1" }) {
    const defaultPengumuman = pengumuman.length
        ? pengumuman
        : [
              { id: 1, judul: "Pengumuman Kenaikan Pangkat Guru Maret 2026", tanggal: "02 Mar 2026" },
              { id: 2, judul: "Pembaruan Data Kepegawaian Semester Genap",   tanggal: "28 Feb 2026" },
              { id: 3, judul: "Imbauan Ketertiban dan Disiplin Sekolah",     tanggal: "25 Feb 2026" },
          ];

    const stats = [
        { label: "Total Siswa",    value: 32 },
        { label: "Hadir Hari Ini", value: 29 },
        { label: "Izin / Sakit",   value: 2  },
        { label: "Alpa",           value: 1  },
    ];

    return (
        <WaliKelasLayout>
            <Head title="Beranda - Wali Kelas" />

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-6 shadow">
                <h2 className="text-xl font-bold">Selamat Datang, Ivana Pasaribu!</h2>
                <p className="text-sm text-blue-100 mt-1">
                    Semester Genap 2025/2026 | Kelas {kelas}
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((s) => (
                    <div key={s.label} className="bg-white rounded-xl shadow p-4">
                        <div className="text-2xl font-extrabold">{s.value}</div>
                        <div className="text-xs text-gray-500 font-semibold mt-1">{s.label}</div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-base font-bold text-gray-600 mb-4">Pengumuman</h3>
                <ul className="divide-y divide-gray-100">
                    {defaultPengumuman.map((item) => (
                        <li key={item.id} className="py-3 px-2">
                            <p className="text-sm font-medium text-gray-800">{item.judul}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{item.tanggal}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </WaliKelasLayout>
    );
}
