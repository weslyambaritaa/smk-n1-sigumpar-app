// resources/js/Pages/GuruVokasi/PKL.jsx
import { Head } from "@inertiajs/react";
import GuruVokasiLayout from "@/Layouts/GuruVokasiLayout";

const pklData = [
    { id: 1, nama: "Andi Pratama", nis: "23001", perusahaan: "PT. Teknologi Nusantara", pembimbing: "Bpk. Hendra", mulai: "2026-01-06", selesai: "2026-04-05", status: "Aktif", nilai: "-" },
    { id: 2, nama: "Bela Sari", nis: "23002", perusahaan: "CV. Digital Solusi", pembimbing: "Ibu Rini", mulai: "2026-01-06", selesai: "2026-04-05", status: "Aktif", nilai: "-" },
    { id: 3, nama: "Candra Wijaya", nis: "23003", perusahaan: "PT. Maju Bersama IT", pembimbing: "Bpk. Surya", mulai: "2026-01-06", selesai: "2026-04-05", status: "Aktif", nilai: "-" },
    { id: 4, nama: "Dina Marlena", nis: "23004", perusahaan: "PT. Sistem Informatika", pembimbing: "Ibu Dewi", mulai: "2025-10-01", selesai: "2026-01-05", status: "Selesai", nilai: "92" },
    { id: 5, nama: "Eko Prasetyo", nis: "23005", perusahaan: "-", pembimbing: "-", mulai: "-", selesai: "-", status: "Belum", nilai: "-" },
];

const statusColor = { "Aktif": "#10b981", "Selesai": "#3b82f6", "Belum": "#f59e0b" };

export default function PKL() {
    return (
        <GuruVokasiLayout title="PKL Siswa" activeMenu="PKL Siswa">
            <Head title="PKL Siswa" />

            {/* Summary */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
                {[
                    { label: "Sedang PKL", value: "3", color: "#10b981", icon: "🏭" },
                    { label: "Selesai PKL", value: "1", color: "#3b82f6", icon: "✅" },
                    { label: "Belum PKL", value: "1", color: "#f59e0b", icon: "⏳" },
                ].map((s, i) => (
                    <div key={i} style={{ backgroundColor: "white", borderRadius: 10, padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${s.color}`, display: "flex", alignItems: "center", gap: 14 }}>
                        <span style={{ fontSize: 28 }}>{s.icon}</span>
                        <div>
                            <div style={{ fontSize: 12, color: "#64748b" }}>{s.label}</div>
                            <div style={{ fontSize: 28, fontWeight: 700, color: "#1e293b" }}>{s.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}> Data PKL Siswa</h2>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f1f5f9" }}>
                                {["Nama Siswa", "NIS", "Perusahaan", "Pembimbing", "Mulai", "Selesai", "Status", "Nilai", "Aksi"].map(h => (
                                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#475569", fontWeight: 600, borderBottom: "1px solid #e2e8f0", whiteSpace: "nowrap" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {pklData.map(s => (
                                <tr key={s.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                    <td style={{ padding: "10px 12px", fontWeight: 500, color: "#1e293b" }}>{s.nama}</td>
                                    <td style={{ padding: "10px 12px", color: "#64748b" }}>{s.nis}</td>
                                    <td style={{ padding: "10px 12px", color: "#475569" }}>{s.perusahaan}</td>
                                    <td style={{ padding: "10px 12px", color: "#475569" }}>{s.pembimbing}</td>
                                    <td style={{ padding: "10px 12px", color: "#64748b", whiteSpace: "nowrap" }}>{s.mulai}</td>
                                    <td style={{ padding: "10px 12px", color: "#64748b", whiteSpace: "nowrap" }}>{s.selesai}</td>
                                    <td style={{ padding: "10px 12px" }}>
                                        <span style={{ backgroundColor: (statusColor[s.status] || "#64748b") + "15", color: statusColor[s.status] || "#64748b", padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600 }}>{s.status}</span>
                                    </td>
                                    <td style={{ padding: "10px 12px", fontWeight: s.nilai !== "-" ? 700 : 400, color: s.nilai !== "-" ? "#10b981" : "#94a3b8" }}>{s.nilai}</td>
                                    <td style={{ padding: "10px 12px" }}>
                                        <button style={{ backgroundColor: "#3b82f6", color: "white", padding: "5px 12px", border: "none", borderRadius: 5, fontSize: 12, cursor: "pointer" }}>Detail</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </GuruVokasiLayout>
    );
}