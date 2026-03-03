import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ pengumuman = [], kelas = "XI AKL 1" }) {
    const defaultPengumuman = pengumuman.length
        ? pengumuman
        : [
              {
                  id: 1,
                  judul: "Pengumuman Kenaikan Pangkat Guru Maret 2026",
                  tanggal: "02 Mar 2026",
              },
              {
                  id: 2,
                  judul: "Pembaruan Data Kepegawaian Semester Genap",
                  tanggal: "28 Feb 2026",
              },
              {
                  id: 3,
                  judul: "Imbauan Ketertiban dan Disiplin Sekolah",
                  tanggal: "25 Feb 2026",
              },
          ];

    const stats = [
        { label: "Total Siswa",    value: 32, icon: "👨‍🎓", color: "bg-blue-100 text-blue-700" },
        { label: "Hadir Hari Ini", value: 29, icon: "✅",   color: "bg-green-100 text-green-700" },
        { label: "Izin / Sakit",   value: 2,  icon: "⚠️",   color: "bg-yellow-100 text-yellow-700" },
        { label: "Alpa",           value: 1,  icon: "❌",   color: "bg-red-100 text-red-700" },
    ];

    return (
        <WaliKelasLayout>
            <Head title="Beranda – Wali Kelas" />

            {/* Welcome banner */}
            <div className="bg-blue-600 text-white rounded-xl p-6 mb-6 flex items-center gap-4 shadow">
                <span className="text-5xl">👋</span>
                <div>
                    <h2 className="text-xl font-bold">
                        Selamat Datang, Wali Kelas!
                    </h2>
                    <p className="text-sm text-blue-100 mt-1">
                        Semester Genap 2025/2026 &nbsp;|&nbsp; Kelas {kelas}
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="bg-white rounded-xl shadow p-4 flex items-center gap-3"
                    >
                        <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${s.color}`}
                        >
                            {s.icon}
                        </div>
                        <div>
                            <div className="text-2xl font-extrabold">{s.value}</div>
                            <div className="text-xs text-gray-500 font-semibold">
                                {s.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pengumuman */}
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-base font-bold text-gray-500 uppercase tracking-wider mb-4">
                    📢 Pengumuman
                </h3>
                <ul className="divide-y divide-gray-100">
                    {defaultPengumuman.map((item) => (
                        <li
                            key={item.id}
                            className="py-3 flex items-start gap-3 hover:bg-gray-50 rounded px-2 cursor-pointer"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    {item.judul}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {item.tanggal}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </WaliKelasLayout>
    );
}
