import { Link, usePage } from '@inertiajs/react';

const menuItems = [
    { label: 'Dashboard', href: '/guru-vokasi/dashboard' },
    { label: 'Absensi Siswa', href: '/guru-vokasi/absensi' },
    { label: 'Input Nilai', href: '/guru-vokasi/nilai' },
    { label: 'Jurnal Mengajar', href: '/guru-vokasi/jurnal' },
    { label: 'Perangkat Ajar', href: '/guru-vokasi/perangkat' },
    { label: 'PKL Siswa', href: '/guru-vokasi/pkl' },
    { label: 'Laporan', href: '/guru-vokasi/laporan' },
];

export default function GuruVokasiLayout({ children, title }) {
    const { url } = usePage();

    return (
        <div
            style={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: '#f0f0f0',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* SIDEBAR */}
            <aside
                style={{
                    width: 220,
                    backgroundColor: '#e8e8e8',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 20,
                    borderRight: '1px solid #d0d0d0',
                }}
            >
                {/* AVATAR */}
                <div
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 8,
                        overflow: 'hidden',
                        marginBottom: 8,
                        backgroundColor: '#ccc',
                    }}
                >
                    <img
                        src="/image/guru.jpg"
                        alt="avatar"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <span
                    style={{
                        fontSize: 13,
                        marginBottom: 20,
                        color: '#333',
                        fontWeight: 600,
                    }}
                >
                    Guru Vokasi
                </span>

                {/* MENU */}
                <div style={{ width: '100%' }}>
                    {menuItems.map((item) => {
                        const isActive = url === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    display: 'block',
                                    padding: '10px 20px',
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    color: '#333',
                                    backgroundColor: isActive
                                        ? '#d0d0d0'
                                        : 'transparent',
                                    fontWeight: isActive ? 600 : 'normal',
                                    borderLeft: isActive
                                        ? '4px solid #2f6fa7'
                                        : '4px solid transparent',
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </aside>

            {/* CONTENT */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* HEADER */}
                <header
                    style={{
                        backgroundColor: '#2f6fa7',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 20px',
                        gap: 12,
                    }}
                >
                    <div
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 22,
                        }}
                    >
                        🎓
                    </div>

                    <span
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                    >
                        SMK NEGERI 1 SIGUMPAR
                    </span>
                </header>

                {/* MAIN */}
                <main style={{ padding: 24 }}>
                    {title && (
                        <div
                            style={{
                                backgroundColor: 'white',
                                padding: '14px 20px',
                                borderRadius: 6,
                                marginBottom: 20,
                                fontSize: 16,
                                fontWeight: 600,
                                color: '#333',
                                border: '1px solid #ddd',
                            }}
                        >
                            {title}
                        </div>
                    )}

                    {children}
                </main>
            </div>
        </div>
    );
}