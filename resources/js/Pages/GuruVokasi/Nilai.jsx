// resources/js/Pages/GuruVokasi/Nilai.jsx
import { useState } from "react";
import { Head } from "@inertiajs/react";
import GuruVokasiLayout from "@/Layouts/GuruVokasiLayout";

const initialSiswa = [
    { id: 1, nama: "Andi Pratama", nis: "23001", tugas: 85, kuis: 80, ujian: 78, praktik: 90 },
    { id: 2, nama: "Bela Sari", nis: "23002", tugas: 90, kuis: 88, ujian: 85, praktik: 92 },
    { id: 3, nama: "Candra Wijaya", nis: "23003", tugas: 70, kuis: 72, ujian: 68, praktik: 75 },
    { id: 4, nama: "Dina Marlena", nis: "23004", tugas: 95, kuis: 93, ujian: 91, praktik: 96 },
    { id: 5, nama: "Eko Prasetyo", nis: "23005", tugas: 60, kuis: 65, ujian: 55, praktik: 70 },
    { id: 6, nama: "Fira Aulia", nis: "23006", tugas: 88, kuis: 85, ujian: 82, praktik: 90 },
];

const hitungAkhir = (s) => ((s.tugas * 0.2) + (s.kuis * 0.2) + (s.ujian * 0.3) + (s.praktik * 0.3)).toFixed(1);

const riwayat = [
    { tanggal: "01 Mar 2026", kelas: "XI TKJ A", mapel: "Pemrograman Web", jumlah: 32 },
    { tanggal: "28 Feb 2026", kelas: "X TKJ B", mapel: "Dasar Pemrograman", jumlah: 30 },
];

export default function Nilai() {
    const [siswa, setSiswa] = useState(initialSiswa);

    const update = (id, field, val) => {
        setSiswa(prev => prev.map(s => s.id === id ? { ...s, [field]: Number(val) } : s));
    };

    return (
        <GuruVokasiLayout title="Input & Kelola Nilai" activeMenu="Input Nilai">
            <Head title="Input Nilai" />

            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 24 }}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}> Input & Kelola Nilai</h2>

                <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                    <select style={{ padding: "9px 14px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13, minWidth: 200 }}>
                        <option>Pilih Kelas</option>
                        <option>XI TKJ A</option>
                        <option>XI TKJ B</option>
                        <option>X TKJ A</option>
                        <option>X TKJ B</option>
                    </select>
                    <select style={{ padding: "9px 14px", border: "1px solid #d1d5db", borderRadius: 6, fontSize: 13, minWidth: 240 }}>
                        <option>Pilih Mata Pelajaran</option>
                        <option>Pemrograman Web</option>
                        <option>Dasar Pemrograman</option>
                    </select>
                </div>

                <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 14, margin: "0 0 14px" }}>
                    Bobot Nilai: Tugas 20% · Kuis 20% · Ujian 30% · Praktik 30%
                </p>

                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f1f5f9" }}>
                                {["Nama Siswa", "NIS", "Tugas", "Kuis", "Ujian", "Praktik", "Nilai Akhir"].map(h => (
                                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#475569", fontWeight: 600, borderBottom: "2px solid #e2e8f0" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {siswa.map((s) => {
                                const akhir = Number(hitungAkhir(s));
                                const color = akhir >= 85 ? "#10b981" : akhir >= 70 ? "#f59e0b" : "#ef4444";
                                return (
                                    <tr key={s.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                        <td style={{ padding: "10px 12px", fontWeight: 500, color: "#1e293b" }}>{s.nama}</td>
                                        <td style={{ padding: "10px 12px", color: "#64748b" }}>{s.nis}</td>
                                        {["tugas", "kuis", "ujian", "praktik"].map(field => (
                                            <td key={field} style={{ padding: "8px 12px" }}>
                                                <input
                                                    type="number" min="0" max="100"
                                                    value={s[field]}
                                                    onChange={e => update(s.id, field, e.target.value)}
                                                    style={{ width: 60, padding: "5px 8px", border: "1px solid #d1d5db", borderRadius: 5, fontSize: 13, textAlign: "center" }}
                                                />
                                            </td>
                                        ))}
                                        <td style={{ padding: "10px 12px" }}>
                                            <span style={{ backgroundColor: color + "15", color, padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 700 }}>{akhir}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: 20 }}>
                    <button style={{ backgroundColor: "#3b82f6", color: "white", padding: "10px 24px", border: "none", borderRadius: 6, fontSize: 13, cursor: "pointer", fontWeight: 600 }}> Simpan Nilai</button>
                </div>
            </div>

            <div style={{ backgroundColor: "white", borderRadius: 10, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#1e293b" }}>🗂 Riwayat Nilai</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f1f5f9" }}>
                            {["Tanggal", "Kelas", "Mata Pelajaran", "Jumlah Siswa", "Aksi"].map(h => (
                                <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#475569", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {riwayat.map((r, i) => (
                            <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                <td style={{ padding: "10px 14px" }}>{r.tanggal}</td>
                                <td style={{ padding: "10px 14px", fontWeight: 500 }}>{r.kelas}</td>
                                <td style={{ padding: "10px 14px", color: "#475569" }}>{r.mapel}</td>
                                <td style={{ padding: "10px 14px" }}>{r.jumlah} siswa</td>
                                <td style={{ padding: "10px 14px" }}>
                                    <button style={{ backgroundColor: "#3b82f6", color: "white", padding: "5px 14px", border: "none", borderRadius: 6, fontSize: 12, cursor: "pointer" }}>Detail</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </GuruVokasiLayout>
    );
}