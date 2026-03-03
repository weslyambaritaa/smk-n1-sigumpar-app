// resources/js/Pages/GuruVokasi/Laporan.jsx
import { Head } from "@inertiajs/react";
import GuruVokasiLayout from "@/Layouts/GuruVokasiLayout";

const laporanList = [
    { id: 1, judul: "Rekap Absensi Semester Genap 2025/2026", periode: "Jan - Jun 2026", kelas: "Semua Kelas", dibuat: "01 Mar 2026", status: "Selesai" },
    { id: 2, judul: "Nilai Akhir XI TKJ A - Pemrograman Web", periode: "Semester Genap", kelas: "XI TKJ A", dibuat: "28 Feb 2026", status: "Selesai" },
    { id: 3, judul: "Laporan PKL Batch 2026", periode: "Jan - Apr 2026", kelas: "XI TKJ", dibuat: "15 Jan 2026", status: "Proses" },
    { id: 4, judul: "Rekap Nilai Akhir X TKJ - Dasar Pemrograman", periode: "Semester Ganjil", kelas: "X TKJ A & B", dibuat: "20 Des 2025", status: "Selesai" },
];

const statusColor = { "Selesai": "#10b981", "Proses": "#f59e0b" };

export default function Laporan() {
    return (
        <GuruVokasiLayout title="Laporan" activeMenu="Laporan">
            <Head title="Laporan" />

            {/* Kartu Generate Laporan */}
            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 24 }}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}> Generate Laporan</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 14, alignItems: "end" }}>
                    <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Jenis Laporan</label>
                        <select style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13 }}>
                            <option>Rekap Absensi</option>
                            <option>Rekap Nilai</option>
                            <option>Laporan PKL</option>
                            <option>Laporan Jurnal</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Kelas</label>
                        <select style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13 }}>
                            <option>Semua Kelas</option>
                            <option>XI TKJ A</option>
                            <option>XI TKJ B</option>
                            <option>X TKJ A</option>
                            <option>X TKJ B</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Periode</label>
                        <select style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13 }}>
                            <option>Semester Genap 2025/2026</option>
                            <option>Semester Ganjil 2025/2026</option>
                        </select>
                    </div>
                    <button style={{ backgroundColor: "#1a3a5c", color: "white", padding: "10px 20px", border: "none", borderRadius: 6, fontSize: 13, cursor: "pointer", fontWeight: 600, whiteSpace: "nowrap" }}>
                         Generate
                    </button>
                </div>
            </div>

            {/* Daftar Laporan */}
            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#1e293b" }}> Daftar Laporan</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f1f5f9" }}>
                            {["Judul Laporan", "Periode", "Kelas", "Dibuat", "Status", "Aksi"].map(h => (
                                <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#475569", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {laporanList.map(l => (
                            <tr key={l.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                <td style={{ padding: "10px 14px", fontWeight: 500, color: "#1e293b" }}> {l.judul}</td>
                                <td style={{ padding: "10px 14px", color: "#475569" }}>{l.periode}</td>
                                <td style={{ padding: "10px 14px", color: "#475569" }}>{l.kelas}</td>
                                <td style={{ padding: "10px 14px", color: "#64748b" }}>{l.dibuat}</td>
                                <td style={{ padding: "10px 14px" }}>
                                    <span style={{ backgroundColor: (statusColor[l.status] || "#64748b") + "15", color: statusColor[l.status] || "#64748b", padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600 }}>{l.status}</span>
                                </td>
                                <td style={{ padding: "10px 14px" }}>
                                    <div style={{ display: "flex", gap: 6 }}>
                                        <button style={{ backgroundColor: "#3b82f6", color: "white", padding: "5px 12px", border: "none", borderRadius: 5, fontSize: 12, cursor: "pointer" }}>⬇ Unduh</button>
                                        <button style={{ backgroundColor: "#f1f5f9", color: "#475569", padding: "5px 12px", border: "1px solid #e2e8f0", borderRadius: 5, fontSize: 12, cursor: "pointer" }}>👁 Lihat</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </GuruVokasiLayout>
    );
}