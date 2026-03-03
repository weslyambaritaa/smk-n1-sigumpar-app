// resources/js/Pages/GuruVokasi/Perangkat.jsx
import { Head } from "@inertiajs/react";
import GuruVokasiLayout from "@/Layouts/GuruVokasiLayout";

const perangkatData = [
    { id: 1, nama: "Modul Ajar Pemrograman Web Bab 1", jenis: "Modul Ajar", mapel: "Pemrograman Web", tanggal: "2026-02-20", ukuran: "2.4 MB" },
    { id: 2, nama: "RPP Semester Genap 2025/2026", jenis: "RPP", mapel: "Pemrograman Web", tanggal: "2026-02-15", ukuran: "1.1 MB" },
    { id: 3, nama: "Silabus Dasar Pemrograman", jenis: "Silabus", mapel: "Dasar Pemrograman", tanggal: "2026-01-10", ukuran: "890 KB" },
    { id: 4, nama: "Materi Tambahan JavaScript", jenis: "Materi Tambahan", mapel: "Pemrograman Web", tanggal: "2026-03-01", ukuran: "3.2 MB" },
];

const jenisColor = { "Modul Ajar": "#3b82f6", "RPP": "#10b981", "Silabus": "#f59e0b", "Materi Tambahan": "#8b5cf6" };

export default function Perangkat() {
    return (
        <GuruVokasiLayout title="Perangkat Ajar" activeMenu="Perangkat Ajar">
            <Head title="Perangkat Ajar" />

            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 24 }}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}>📁 Upload Dokumen Pembelajaran</h2>

                <div style={{ border: "2px dashed #cbd5e1", borderRadius: 10, padding: "40px 20px", textAlign: "center", backgroundColor: "#f8fafc" }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>📤</div>
                    <p style={{ margin: "0 0 4px", fontSize: 14, color: "#475569", fontWeight: 500 }}>Drag & drop file di sini, atau</p>
                    <p style={{ margin: "0 0 16px", fontSize: 12, color: "#94a3b8" }}>Format: PDF, DOC, DOCX, PPT, PPTX (Maks. 10 MB)</p>
                    <button style={{ backgroundColor: "#1a3a5c", color: "white", padding: "10px 24px", border: "none", borderRadius: 6, fontSize: 13, cursor: "pointer", fontWeight: 600 }}>📂 Pilih File</button>
                    <p style={{ margin: "12px 0 0", fontSize: 11, color: "#94a3b8" }}>Jenis Dokumen: Modul Ajar, RPP, Silabus, Materi Tambahan</p>
                </div>
            </div>

            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#1e293b" }}>📋 Daftar Dokumen</h3>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f1f5f9" }}>
                                {["Nama Dokumen", "Jenis", "Mata Pelajaran", "Tanggal Upload", "Ukuran", "Aksi"].map(h => (
                                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#475569", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {perangkatData.map(item => (
                                <tr key={item.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                    <td style={{ padding: "10px 14px", fontWeight: 500, color: "#1e293b" }}>📄 {item.nama}</td>
                                    <td style={{ padding: "10px 14px" }}>
                                        <span style={{ backgroundColor: (jenisColor[item.jenis] || "#64748b") + "15", color: jenisColor[item.jenis] || "#64748b", padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600 }}>{item.jenis}</span>
                                    </td>
                                    <td style={{ padding: "10px 14px", color: "#475569" }}>{item.mapel}</td>
                                    <td style={{ padding: "10px 14px", color: "#64748b" }}>{item.tanggal}</td>
                                    <td style={{ padding: "10px 14px", color: "#64748b" }}>{item.ukuran}</td>
                                    <td style={{ padding: "10px 14px" }}>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            <button style={{ backgroundColor: "#3b82f6", color: "white", padding: "5px 12px", border: "none", borderRadius: 5, fontSize: 12, cursor: "pointer" }}>⬇ Download</button>
                                            <button style={{ backgroundColor: "#ef4444", color: "white", padding: "5px 12px", border: "none", borderRadius: 5, fontSize: 12, cursor: "pointer" }}>🗑 Hapus</button>
                                        </div>
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