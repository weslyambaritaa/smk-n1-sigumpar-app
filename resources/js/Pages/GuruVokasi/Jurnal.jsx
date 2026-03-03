// resources/js/Pages/GuruVokasi/Jurnal.jsx
import { useState } from "react";
import { Head } from "@inertiajs/react";
import GuruVokasiLayout from "@/Layouts/GuruVokasiLayout";

const jurnalData = [
    { id: 1, tanggal: "2026-03-01", kelas: "XI TKJ A", materi: "HTML & CSS Dasar", kendala: "Siswa kurang aktif", refleksi: "Perlu variasi metode" },
    { id: 2, tanggal: "2026-02-28", kelas: "X TKJ B", materi: "Algoritma dan Flowchart", kendala: "Tidak ada", refleksi: "Pembelajaran berjalan lancar" },
    { id: 3, tanggal: "2026-02-27", kelas: "XI TKJ B", materi: "JavaScript DOM", kendala: "Lab komputer 2 error", refleksi: "Perlu maintenance lab" },
];

export default function Jurnal() {
    const [form, setForm] = useState({ tanggal: "", kelas: "", materi: "", kendala: "", refleksi: "" });

    return (
        <GuruVokasiLayout title="Jurnal Mengajar" activeMenu="Jurnal Mengajar">
            <Head title="Jurnal Mengajar" />

            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 24 }}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}> Form Jurnal Mengajar</h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Tanggal Pertemuan</label>
                        <input type="date" value={form.tanggal} onChange={e => setForm({ ...form, tanggal: e.target.value })}
                            style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13, boxSizing: "border-box" }} />
                    </div>
                    <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Kelas</label>
                        <select value={form.kelas} onChange={e => setForm({ ...form, kelas: e.target.value })}
                            style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13 }}>
                            <option value="">Pilih Kelas</option>
                            <option>XI TKJ A</option>
                            <option>XI TKJ B</option>
                            <option>X TKJ A</option>
                            <option>X TKJ B</option>
                        </select>
                    </div>
                </div>

                <div style={{ marginTop: 16 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Materi yang Disampaikan</label>
                    <input type="text" placeholder="Masukkan materi pembelajaran" value={form.materi} onChange={e => setForm({ ...form, materi: e.target.value })}
                        style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13, boxSizing: "border-box" }} />
                </div>

                <div style={{ marginTop: 16 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Kendala</label>
                    <input type="text" placeholder="Masukkan kendala (isi 'Tidak ada' jika tidak ada kendala)" value={form.kendala} onChange={e => setForm({ ...form, kendala: e.target.value })}
                        style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13, boxSizing: "border-box" }} />
                </div>

                <div style={{ marginTop: 16 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Refleksi Pembelajaran</label>
                    <textarea placeholder="Tuliskan refleksi dan catatan untuk pertemuan berikutnya..." value={form.refleksi} onChange={e => setForm({ ...form, refleksi: e.target.value })}
                        rows={4} style={{ width: "100%", padding: "9px 12px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13, boxSizing: "border-box", resize: "vertical" }} />
                </div>

                <div style={{ marginTop: 20 }}>
                    <button style={{ backgroundColor: "#3b82f6", color: "white", padding: "10px 24px", border: "none", borderRadius: 6, fontSize: 13, cursor: "pointer", fontWeight: 600 }}> Simpan Jurnal</button>
                </div>
            </div>

            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#1e293b" }}>🗂 Riwayat Jurnal Mengajar</h3>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f1f5f9" }}>
                                {["Tanggal", "Kelas", "Materi", "Kendala", "Refleksi"].map(h => (
                                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#475569", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {jurnalData.map(j => (
                                <tr key={j.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                    <td style={{ padding: "10px 14px", whiteSpace: "nowrap" }}>{j.tanggal}</td>
                                    <td style={{ padding: "10px 14px", fontWeight: 500 }}>{j.kelas}</td>
                                    <td style={{ padding: "10px 14px", color: "#475569" }}>{j.materi}</td>
                                    <td style={{ padding: "10px 14px", color: j.kendala === "Tidak ada" ? "#10b981" : "#ef4444" }}>{j.kendala}</td>
                                    <td style={{ padding: "10px 14px", color: "#64748b", maxWidth: 200 }}>{j.refleksi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </GuruVokasiLayout>
    );
}