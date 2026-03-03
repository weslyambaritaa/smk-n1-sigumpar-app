import GuruVokasiLayout from '@/Layouts/GuruVokasiLayout';

export default function Dashboard() {
    return (
        <GuruVokasiLayout title="Dashboard Guru Vokasi">
            {/* RINGKASAN */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: 16,
                    marginBottom: 24,
                }}
            >
                {[
                    { label: 'Jumlah Kelas', value: 4 },
                    { label: 'Siswa Binaan', value: 128 },
                    { label: 'Jurnal Mengajar', value: 12 },
                    { label: 'Laporan PKL', value: 3 },
                ].map((item, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: 6,
                            padding: 16,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 13,
                                color: '#555',
                                marginBottom: 6,
                            }}
                        >
                            {item.label}
                        </div>
                        <div
                            style={{
                                fontSize: 22,
                                fontWeight: 600,
                                color: '#333',
                            }}
                        >
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* PENGUMUMAN */}
            <div
                style={{
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    padding: 20,
                    marginBottom: 24,
                }}
            >
                <div
                    style={{
                        fontSize: 16,
                        fontWeight: 600,
                        marginBottom: 12,
                        color: '#333',
                    }}
                >
                    Pengumuman Sekolah
                </div>

                <ul
                    style={{
                        paddingLeft: 18,
                        margin: 0,
                        fontSize: 14,
                        color: '#444',
                    }}
                >
                    <li style={{ marginBottom: 8 }}>
                        Pengumpulan nilai tengah semester paling lambat
                        <b> 20 September 2025</b>.
                    </li>
                    <li style={{ marginBottom: 8 }}>
                        Rapat guru vokasi dilaksanakan pada
                        <b> Senin, 16 September 2025</b>.
                    </li>
                    <li>
                        Monitoring PKL siswa dimulai minggu ketiga bulan ini.
                    </li>
                </ul>
            </div>

            {/* AKTIVITAS TERBARU */}
            <div
                style={{
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    padding: 20,
                }}
            >
                <div
                    style={{
                        fontSize: 16,
                        fontWeight: 600,
                        marginBottom: 12,
                        color: '#333',
                    }}
                >
                    Aktivitas Terbaru
                </div>

                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: 14,
                    }}
                >
                    <thead>
                        <tr>
                            <th
                                style={{
                                    textAlign: 'left',
                                    paddingBottom: 8,
                                    borderBottom: '1px solid #ddd',
                                }}
                            >
                                Tanggal
                            </th>
                            <th
                                style={{
                                    textAlign: 'left',
                                    paddingBottom: 8,
                                    borderBottom: '1px solid #ddd',
                                }}
                            >
                                Aktivitas
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '8px 0' }}>12/09/2025</td>
                            <td style={{ padding: '8px 0' }}>
                                Mengisi jurnal mengajar kelas XI TKJ
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px 0' }}>11/09/2025</td>
                            <td style={{ padding: '8px 0' }}>
                                Input nilai tugas harian
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px 0' }}>10/09/2025</td>
                            <td style={{ padding: '8px 0' }}>
                                Verifikasi laporan PKL siswa
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </GuruVokasiLayout>
    );
}