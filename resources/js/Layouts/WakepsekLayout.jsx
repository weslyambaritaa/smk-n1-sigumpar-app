import { Link, usePage } from '@inertiajs/react';

const menuItems = [
    { label: 'Dashboard', href: '/wakepsek/dashboard' },
    { label: 'Daftar Guru', href: '/wakepsek/daftar-guru' },
    { label: 'Detail Pembelajaran', href: '/wakepsek/detail-pembelajaran' },
    { label: 'Form Instruksi', href: '/wakepsek/form-instruksi' },
];

export default function WakepsekLayout({ children, title }) {
    const { url } = usePage();

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0f0f0', fontFamily: 'sans-serif' }}>
            <div style={{ width: 220, backgroundColor: '#e8e8e8', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
                <div style={{ width: 80, height: 80, borderRadius: 8, overflow: 'hidden', marginBottom: 8, backgroundColor: '#ccc' }}>
                    <img src="/image/daniel.jpg" alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: 13, marginBottom: 20, color: '#333' }}>Daniel Simamora</span>
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
                                    color: '#333',
                                    fontSize: 14,
                                    backgroundColor: isActive ? '#d0d0d0' : 'transparent',
                                    fontWeight: isActive ? '600' : 'normal',
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: '#2f6fa7', display: 'flex', alignItems: 'center', padding: '12px 20px', gap: 12 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 22 }}>🎓</span>
                    </div>
                    <span style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>SMK NEGERI 1 SIGUMPAR</span>
                </div>
                <div style={{ padding: 24 }}>
                    {title && (
                        <div style={{ backgroundColor: 'white', padding: '14px 20px', borderRadius: 6, marginBottom: 20, fontSize: 16, fontWeight: '600', color: '#333' }}>
                            {title}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}