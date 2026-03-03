// resources/js/Pages/GuruVokasi/Absensi.jsx
import { useState } from "react";
import { Head } from "@inertiajs/react";
import GuruVokasiLayout from "@/Layouts/GuruVokasiLayout";

const siswaData = [
    { id: 1, nama: "Andi Pratama", nis: "23001", status: "Hadir" },
    { id: 2, nama: "Bela Sari", nis: "23002", status: "Hadir" },
    { id: 3, nama: "Candra Wijaya", nis: "23003", status: "Sakit" },
    { id: 4, nama: "Dina Marlena", nis: "23004", status: "Hadir" },
    { id: 5, nama: "Eko Prasetyo", nis: "23005", status: "Izin" },
    { id: 6, nama: "Fira Aulia", nis: "23006", status: "Hadir" },
    { id: 7, nama: "Gilang Ramadhan", nis: "23007", status: "Alpa" },
    { id: 8, nama: "Hani Putri", nis: "23008", status: "Hadir" },
];

const riwayat = [
    { tanggal: "01 Mar 2026", kelas: "XI TKJ A", mapel: "Pemrograman Web", hadir: 30 },
    { tanggal: "28 Feb 2026", kelas: "X TKJ B", mapel: "Dasar Pemrograman", hadir: 28 },
    { tanggal: "27 Feb 2026", kelas: "XI TKJ B", mapel: "Pemrograman Web", hadir: 31 },
];

const statusColor = {
    Hadir: "#166534",
    Sakit: "#92400e",
    Izin: "#1e40af",
    Alpa: "#991b1b",
};

export default function Absensi() {
    const [absensi, setAbsensi] = useState(
        Object.fromEntries(siswaData.map(s => [s.id, s.status]))
    );

    return (
        <GuruVokasiLayout title="Absensi Siswa">
            <Head title="Absensi Siswa" />

            {/* FILTER & INPUT */}
            <div style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: 6,
                padding: 20,
                marginBottom: 24
            }}>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>
                    Input Absensi
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                    marginBottom: 16
                }}>
                    {[
                        { label: "Kelas", type: "select", options: ["XI TKJ A", "XI TKJ B", "X TKJ A", "X TKJ B"] },
                        { label: "Mata Pelajaran", type: "select", options: ["Pemrograman Web", "Dasar Pemrograman"] },
                        { label: "Tanggal", type: "date" },
                    ].map((f, i) => (
                        <div key={i}>
                            <label style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>
                                {f.label}
                            </label>
                            {f.type === "select" ? (
                                <select style={{ width: "100%", padding: 8, fontSize: 13 }}>
                                    {f.options.map(o => <option key={o}>{o}</option>)}
                                </select>
                            ) : (
                                <input type="date" defaultValue="2026-03-03" style={{ width: "100%", padding: 8, fontSize: 13 }} />
                            )}
                        </div>
                    ))}
                </div>

                <button style={{
                    backgroundColor: "#2f6fa7",
                    color: "white",
                    padding: "8px 18px",
                    border: "none",
                    borderRadius: 4,
                    fontSize: 13,
                    cursor: "pointer"
                }}>
                    Tampilkan Data
                </button>
            </div>

            {/* TABEL ABSENSI */}
            <div style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: 6,
                padding: 20,
                marginBottom: 24
            }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f5f5f5" }}>
                            {["No", "Nama Siswa", "NIS", "Kehadiran"].map(h => (
                                <th key={h} style={{ padding: 10, textAlign: "left", borderBottom: "1px solid #ddd" }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {siswaData.map((s, i) => (
                            <tr key={s.id} style={{ borderBottom: "1px solid #eee" }}>
                                <td style={{ padding: 10 }}>{i + 1}</td>
                                <td style={{ padding: 10 }}>{s.nama}</td>
                                <td style={{ padding: 10 }}>{s.nis}</td>
                                <td style={{ padding: 10 }}>
                                    <select
                                        value={absensi[s.id]}
                                        onChange={e =>
                                            setAbsensi(p => ({ ...p, [s.id]: e.target.value }))
                                        }
                                        style={{
                                            padding: 6,
                                            fontSize: 12,
                                            border: "1px solid #ccc",
                                            color: statusColor[absensi[s.id]]
                                        }}
                                    >
                                        {["Hadir", "Sakit", "Izin", "Alpa"].map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ textAlign: "right", marginTop: 16 }}>
                    <button style={{
                        backgroundColor: "#166534",
                        color: "white",
                        padding: "8px 20px",
                        border: "none",
                        borderRadius: 4,
                        fontSize: 13
                    }}>
                        Simpan Absensi
                    </button>
                </div>
            </div>

            {/* RIWAYAT */}
            <div style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: 6,
                padding: 20
            }}>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
                    Riwayat Absensi
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f5f5f5" }}>
                            {["Tanggal", "Kelas", "Mata Pelajaran", "Hadir"].map(h => (
                                <th key={h} style={{ padding: 10, textAlign: "left", borderBottom: "1px solid #ddd" }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {riwayat.map((r, i) => (
                            <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                                <td style={{ padding: 10 }}>{r.tanggal}</td>
                                <td style={{ padding: 10 }}>{r.kelas}</td>
                                <td style={{ padding: 10 }}>{r.mapel}</td>
                                <td style={{ padding: 10 }}>{r.hadir} siswa</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </GuruVokasiLayout>
    );
} 