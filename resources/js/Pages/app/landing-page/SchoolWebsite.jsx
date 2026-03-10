import { useMemo, useState } from "react";
import { Link } from '@inertiajs/react';

const BLUE = "#20639B";
const YELLOW = "#F4A300";
const BLUE_DARK = "#164d7a";
const BLUE_DEEP = "#0f3a5c";
const BLUE_LIGHT = "#e8f2fb";

export default function SchoolWebsite() {
    const [activeNav, setActiveNav] = useState("Beranda");

    const navItems = useMemo(
        () => ["Beranda", "Profile Sekolah", "Jurusan", "Berita", "Kontak"],
        [],
    );

    const jurusan = [
        {
            name: "Kelistrikan",
            img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
            text: "Jurusan Teknik Kelistrikan mempelajari sistem tenaga listrik, instalasi, serta perawatan dan perbaikan peralatan listrik. Siswa dibekali keterampilan pemasangan instalasi listrik rumah, gedung, dan industri sesuai standar keselamatan kerja sehingga siap terjun ke dunia kerja.",
        },
        {
            name: "Pertanian",
            img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
            text: "Jurusan Pertanian mempelajari teknik budidaya tanaman, pengelolaan lahan, serta penerapan teknologi pertanian modern. Siswa dibekali keterampilan dalam proses penanaman, perawatan, panen, hingga pengolahan hasil pertanian sehingga siap berwirausaha di bidang agribisnis.",
        },
        {
            name: "Sepeda Motor",
            img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            text: "Jurusan Teknik Sepeda Motor mempelajari perawatan, perbaikan, dan sistem kerja mesin sepeda motor, baik konvensional maupun injeksi. Siswa dibekali keterampilan servis, tune up, serta diagnosa kerusakan menggunakan peralatan modern sehingga siap bekerja di bengkel maupun membuka usaha sendiri.",
        },
    ];

    const berita = [
        {
            title: "Siswa SMK Raih Juara di Lomba Kompetensi Nasional",
            date: "10 Feb 2024",
            tag: "Prestasi",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
            text: "Prestasi ini menjadi bukti bahwa siswa SMK Negeri 1 Sigumpar mampu bersaing di tingkat nasional melalui keterampilan, disiplin, dan kerja keras yang terus dibina oleh sekolah.",
        },
        {
            title: "Program Prakerin Industri Semester Genap Dibuka",
            date: "5 Jan 2024",
            tag: "Kegiatan",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
            text: "Program prakerin memberikan kesempatan kepada siswa untuk belajar langsung di dunia industri agar memiliki pengalaman nyata sebelum lulus dan memasuki dunia kerja.",
        },
    ];

    return (
        <div
            style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: "#f2f5f8",
                minHeight: "100vh",
                color: "#1f2d3d",
                scrollBehavior: "smooth",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f2f5f8; }
        a { text-decoration: none; color: inherit; }

        .page {
          width: 100%;
          overflow-x: hidden;
        }

        .navbar {
          background: rgba(22, 77, 122, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          height: 72px;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 300;
          box-shadow: 0 6px 24px rgba(20, 60, 120, 0.18);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-right: 22px;
          border-right: 1px solid rgba(255,255,255,0.16);
          margin-right: 16px;
          min-width: 250px;
        }
        .brand-logo {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: ${BLUE};
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          flex-shrink: 0;
        }
        .brand-name {
          color: white;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.4px;
        }
        .brand-sub {
          color: ${YELLOW};
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          flex: 1;
          gap: 2px;
          justify-content: center;
        }
        .nav-link {
          color: rgba(255,255,255,0.82);
          font-size: 13px;
          font-weight: 600;
          padding: 0 18px;
          height: 72px;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }
        .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
        .nav-link.active { color: white; }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 14px;
          right: 14px;
          height: 3px;
          background: ${YELLOW};
          border-radius: 3px 3px 0 0;
        }
        .btn-login {
          background: ${YELLOW};
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(244,163,0,0.28);
          transition: 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .btn-login:hover {
          background: #d48f00;
          transform: translateY(-1px);
        }

        .section {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 104px 56px 48px;
        }
        .section-inner {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .hero-section {
          min-height: 100vh;
          background:
            linear-gradient(rgba(15,58,92,0.72), rgba(15,58,92,0.72)),
            url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80') center/cover no-repeat;
          color: white;
          display: flex;
          align-items: center;
          padding: 120px 56px 56px;
        }
        .hero-inner {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .hero-title {
          font-size: clamp(34px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: 16px;
          max-width: 760px;
        }
        .hero-title span { color: ${YELLOW}; }
        .hero-text {
          max-width: 660px;
          font-size: 16px;
          line-height: 1.9;
          color: rgba(255,255,255,0.86);
          margin-bottom: 28px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-btn-primary,
        .hero-btn-secondary {
          padding: 13px 22px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .hero-btn-primary {
          background: ${YELLOW};
          color: white;
          box-shadow: 0 12px 24px rgba(244,163,0,0.25);
        }
        .hero-btn-primary:hover { transform: translateY(-2px); }
        .hero-btn-secondary {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 1px solid rgba(255,255,255,0.18);
        }
        .hero-btn-secondary:hover { background: rgba(255,255,255,0.12); }
        .hero-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.16);
        }
        .hero-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .hero-stat {
          background: rgba(255,255,255,0.1);
          border-radius: 18px;
          padding: 18px;
        }
        .hero-stat h4 {
          font-size: 28px;
          font-weight: 800;
          color: ${YELLOW};
          margin-bottom: 6px;
        }
        .hero-stat p {
          font-size: 12px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: ${BLUE_LIGHT};
          color: ${BLUE};
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .sec-title {
          color: ${BLUE};
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .sec-subtitle {
          color: #567086;
          max-width: 760px;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 28px;
        }

        .profil-section {
          background: white;
        }
        .profil-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 32px;
          align-items: stretch;
          min-height: calc(100vh - 152px);
        }
        .profil-img {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(32,99,155,0.16);
          min-height: 100%;
        }
        .profil-img img {
          width: 100%;
          height: 100%;
          min-height: 560px;
          object-fit: cover;
          display: block;
        }
        .profil-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .profil-box {
          background: ${BLUE_LIGHT};
          border-radius: 24px;
          border-left: 6px solid ${BLUE};
          padding: 28px;
          box-shadow: 0 12px 26px rgba(32,99,155,0.08);
        }
        .profil-box p {
          color: #3a5068;
          font-size: 15px;
          line-height: 2;
        }
        .profil-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 18px;
        }
        .profil-highlight {
          background: white;
          border: 1px solid #dfe9f2;
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 10px 20px rgba(32,99,155,0.06);
        }
        .profil-highlight h4 {
          color: ${BLUE};
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 6px;
        }
        .profil-highlight p {
          color: #5d7388;
          font-size: 12.5px;
          line-height: 1.7;
        }

        .vm-section {
          background: linear-gradient(135deg, ${BLUE_DARK} 0%, ${BLUE} 100%);
          position: relative;
          overflow: hidden;
        }
        .vm-section::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
        .vm-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 28px;
          align-items: stretch;
        }
        .vm-left {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 28px;
          padding: 28px 24px;
          text-align: center;
          backdrop-filter: blur(10px);
        }
        .vm-heading {
          color: ${YELLOW};
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 18px;
          text-align: left;
        }
        .kepala-photo {
          width: 180px;
          height: 220px;
          border-radius: 18px;
          overflow: hidden;
          margin: 0 auto 14px;
          border: 3px solid rgba(255,255,255,0.22);
          box-shadow: 0 10px 28px rgba(0,0,0,0.25);
        }
        .kepala-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .kepala-name {
          color: white;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .kepala-role {
          color: rgba(255,255,255,0.72);
          font-size: 12px;
          line-height: 1.7;
          margin-bottom: 5px;
        }
        .kepala-email {
          color: ${YELLOW};
          font-size: 11px;
        }
        .vm-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          align-items: stretch;
        }
        .vm-card {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 28px;
          padding: 28px;
          backdrop-filter: blur(8px);
          min-height: 100%;
        }
        .vm-pill {
          display: inline-block;
          background: ${YELLOW};
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 18px;
          border-radius: 999px;
          margin-bottom: 14px;
          box-shadow: 0 2px 10px rgba(244,163,0,0.45);
        }
        .vm-card p,
        .vm-card li {
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          line-height: 1.95;
        }
        .vm-card ol {
          padding-left: 18px;
        }

        .jurusan-section {
          background: #f2f5f8;
        }
        .jurusan-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .j-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(32,99,155,0.08);
          border: 1px solid #dde8f2;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          min-height: 520px;
        }
        .j-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(32,99,155,0.15);
        }
        .j-img {
          height: 220px;
          overflow: hidden;
        }
        .j-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .j-card-hd {
          background: linear-gradient(90deg, ${BLUE} 0%, #2a7ab8 100%);
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .j-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${YELLOW};
          flex-shrink: 0;
        }
        .j-card-hd span {
          color: white;
          font-size: 15px;
          font-weight: 700;
        }
        .j-text {
          padding: 20px 18px 22px;
          color: #3a5068;
          font-size: 13px;
          line-height: 1.9;
          flex: 1;
        }

        .berita-section {
          background: linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE} 100%);
        }
        .berita-header .eyebrow {
          background: rgba(255,255,255,0.1);
          color: white;
        }
        .berita-header .sec-title,
        .berita-header .sec-subtitle {
          color: white;
        }
        .berita-header .sec-subtitle { color: rgba(255,255,255,0.78); }
        .berita-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .b-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 460px;
        }
        .b-img {
          height: 230px;
        }
        .b-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .b-text {
          padding: 22px;
          flex: 1;
        }
        .b-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .b-badge {
          background: ${YELLOW};
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .b-date {
          color: rgba(255,255,255,0.58);
          font-size: 11px;
        }
        .b-text h4 {
          color: white;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .b-text p {
          color: rgba(255,255,255,0.8);
          font-size: 13px;
          line-height: 1.9;
        }

        .kontak-section {
          background: white;
        }
        .kontak-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 24px;
          align-items: stretch;
        }
        .kontak-panel,
        .kontak-map {
          background: ${BLUE_LIGHT};
          border-radius: 28px;
          padding: 28px;
          border: 1px solid #d7e4ef;
          box-shadow: 0 10px 24px rgba(32,99,155,0.06);
        }
        .kontak-title {
          color: ${BLUE};
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .kontak-desc {
          color: #5b7488;
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 22px;
        }
        .kontak-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 18px;
        }
        .kontak-row:last-child { margin-bottom: 0; }
        .kontak-icon-circle {
          width: 46px;
          height: 46px;
          background: ${YELLOW};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(244,163,0,0.25);
        }
        .kontak-info-label {
          color: ${BLUE};
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 3px;
        }
        .kontak-info-val {
          color: #364b60;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.75;
        }
        .kontak-map {
          background:
            linear-gradient(rgba(32,99,155,0.12), rgba(32,99,155,0.12)),
            url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1200&q=80') center/cover no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: end;
          min-height: 420px;
          color: white;
        }
        .kontak-map-card {
          background: rgba(15,58,92,0.76);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 22px;
          padding: 22px;
          backdrop-filter: blur(6px);
        }
        .kontak-map-card h4 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .kontak-map-card p {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(255,255,255,0.82);
        }

        .footer {
          background: ${YELLOW};
          padding: 18px 20px;
          text-align: center;
        }
        .footer p {
          color: white;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }

        @media (max-width: 1100px) {
          .hero-inner,
          .profil-grid,
          .vm-grid,
          .kontak-grid {
            grid-template-columns: 1fr;
          }
          .vm-right,
          .jurusan-grid,
          .berita-grid,
          .profil-highlights {
            grid-template-columns: 1fr;
          }
          .navbar {
            padding: 0 18px;
            gap: 12px;
            flex-wrap: wrap;
            height: auto;
            min-height: 72px;
          }
          .brand {
            min-width: auto;
            border-right: none;
            padding-right: 0;
            margin-right: 0;
          }
          .nav-links {
            width: 100%;
            justify-content: flex-start;
            overflow-x: auto;
          }
          .nav-link {
            height: 54px;
          }
        }

        @media (max-width: 768px) {
          .section,
          .hero-section {
            min-height: auto;
            padding: 110px 20px 28px;
          }
          .hero-card-grid {
            grid-template-columns: 1fr;
          }
          .sec-title,
          .hero-title {
            word-break: break-word;
          }
          .profil-img img {
            min-height: 320px;
          }
          .j-card,
          .b-card,
          .kontak-map {
            min-height: auto;
          }
        }
      `}</style>

            <div className="page">
                <nav className="navbar">
                    <div className="brand">
                        <div className="brand-logo">S</div>
                        <div>
                            <div className="brand-name">
                                SMK NEGERI 1 SIGUMPAR
                            </div>
                            <div className="brand-sub">Humbang Hasundutan</div>
                        </div>
                    </div>

                    <div className="nav-links">
                        {navItems.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                className={`nav-link ${activeNav === link ? "active" : ""}`}
                                onClick={() => setActiveNav(link)}
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    <Link href={route('login')} className="btn-login">Login</Link>
                </nav>

                <section id="beranda" className="hero-section fade-up">
                    <div className="hero-inner">
                        <div>
                            <div className="hero-badge">
                                ✦ Sekolah Unggul dan Berkarakter
                            </div>
                            <h1 className="hero-title">
                                Membangun Generasi <span>Siap Kerja</span>, Siap
                                Kuliah, dan Siap Wirausaha
                            </h1>
                            <p className="hero-text">
                                SMK Negeri 1 Sigumpar menghadirkan pendidikan
                                vokasi yang relevan dengan dunia industri
                                melalui pembelajaran berbasis praktik,
                                teknologi, dan pembinaan karakter yang kuat.
                            </p>
                            <div className="hero-actions">
                                <a href="#profile-sekolah">
                                    <button className="hero-btn-primary">
                                        Lihat Profil
                                    </button>
                                </a>
                                <a href="#kontak">
                                    <button className="hero-btn-secondary">
                                        Hubungi Kami
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-card-grid">
                                <div className="hero-stat">
                                    <h4>3</h4>
                                    <p>
                                        Program keahlian yang relevan dengan
                                        kebutuhan dunia kerja modern.
                                    </p>
                                </div>
                                <div className="hero-stat">
                                    <h4>100%</h4>
                                    <p>
                                        Komitmen sekolah dalam pembelajaran
                                        praktik dan penguatan karakter siswa.
                                    </p>
                                </div>
                                <div className="hero-stat">
                                    <h4>Aktif</h4>
                                    <p>
                                        Kegiatan pembelajaran, prakerin, dan
                                        pembinaan prestasi berjalan terarah.
                                    </p>
                                </div>
                                <div className="hero-stat">
                                    <h4>Kolaboratif</h4>
                                    <p>
                                        Lingkungan sekolah mendukung tumbuhnya
                                        kompetensi, disiplin, dan kreativitas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="profile-sekolah"
                    className="section profil-section fade-up"
                >
                    <div className="section-inner">
                        <div className="profil-grid">
                            <div className="profil-img">
                                <img
                                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80"
                                    alt="Foto Sekolah"
                                />
                            </div>

                            <div className="profil-content">
                                <div className="eyebrow">✦ Tentang Kami</div>
                                <h2 className="sec-title">Profil Singkat</h2>
                                <p className="sec-subtitle">
                                    Sekolah menengah kejuruan yang berkomitmen
                                    membentuk lulusan kompeten, disiplin, dan
                                    siap menghadapi tantangan masa depan.
                                </p>

                                <div className="profil-box">
                                    <p>
                                        SMK Negeri 1 Sigumpar adalah Sekolah
                                        Menengah Kejuruan yang berkomitmen
                                        mencetak lulusan yang kompeten,
                                        berkarakter, dan siap bersaing di dunia
                                        kerja maupun melanjutkan pendidikan ke
                                        jenjang yang lebih tinggi. Dengan
                                        mengedepankan pembelajaran berbasis
                                        praktik dan teknologi, kami membekali
                                        peserta didik dengan keterampilan sesuai
                                        kebutuhan industri saat ini.
                                    </p>
                                </div>

                                <div className="profil-highlights">
                                    <div className="profil-highlight">
                                        <h4>Praktik</h4>
                                        <p>
                                            Pembelajaran terarah pada
                                            keterampilan nyata dan pengalaman
                                            lapangan.
                                        </p>
                                    </div>
                                    <div className="profil-highlight">
                                        <h4>Karakter</h4>
                                        <p>
                                            Pembinaan sikap disiplin, tanggung
                                            jawab, dan etos kerja unggul.
                                        </p>
                                    </div>
                                    <div className="profil-highlight">
                                        <h4>Teknologi</h4>
                                        <p>
                                            Adaptif terhadap perkembangan alat,
                                            sistem, dan kebutuhan industri.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section vm-section fade-up">
                    <div className="section-inner">
                        <div className="vm-grid">
                            <div className="vm-left">
                                <div className="vm-heading">
                                    Visi &amp; Misi
                                </div>
                                <div className="kepala-photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                                        alt="Kepala Sekolah"
                                    />
                                </div>
                                <div className="kepala-name">
                                    Anny Sipayung, S.Pd, M.Pd
                                </div>
                                <div className="kepala-role">
                                    Kepala Sekolah SMK Negeri 1 Sigumpar
                                </div>
                                <div className="kepala-email">
                                    annysipayung@gmail.com
                                </div>
                            </div>

                            <div className="vm-right">
                                <div className="vm-card">
                                    <div className="vm-pill">Visi</div>
                                    <p>
                                        Menjadi Sekolah Menengah Kejuruan yang
                                        unggul, berkarakter, dan berdaya saing
                                        global dalam menghasilkan lulusan yang
                                        kompeten, profesional, serta siap kerja,
                                        siap melanjutkan pendidikan, dan siap
                                        berwirausaha.
                                    </p>
                                </div>

                                <div className="vm-card">
                                    <div className="vm-pill">Misi</div>
                                    <ol>
                                        <li>
                                            Menyelenggarakan pendidikan dan
                                            pelatihan berbasis kompetensi sesuai
                                            kebutuhan dunia usaha dan dunia
                                            industri.
                                        </li>
                                        <li>
                                            Mengembangkan pembelajaran yang
                                            inovatif, kreatif, dan berbasis
                                            teknologi.
                                        </li>
                                        <li>
                                            Meningkatkan kualitas sumber daya
                                            pendidik dan tenaga kependidikan
                                            yang profesional.
                                        </li>
                                        <li>
                                            Membangun lulusan yang berakhlak,
                                            percaya diri, dan mampu beradaptasi
                                            dengan perkembangan zaman.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="jurusan"
                    className="section jurusan-section fade-up"
                >
                    <div className="section-inner">
                        <div className="eyebrow">✦ Program Keahlian</div>
                        <h2 className="sec-title">Jurusan Unggulan</h2>
                        <p className="sec-subtitle">
                            Setiap program keahlian dirancang untuk memperkuat
                            kompetensi siswa sesuai kebutuhan kerja dan peluang
                            usaha di lapangan.
                        </p>

                        <div className="jurusan-grid">
                            {jurusan.map((j) => (
                                <div key={j.name} className="j-card">
                                    <div className="j-img">
                                        <img src={j.img} alt={j.name} />
                                    </div>
                                    <div className="j-card-hd">
                                        <div className="j-dot" />
                                        <span>{j.name}</span>
                                    </div>
                                    <div className="j-text">{j.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="berita" className="section berita-section fade-up">
                    <div className="section-inner">
                        <div className="berita-header">
                            <div className="eyebrow">✦ Informasi Terkini</div>
                            <h2 className="sec-title">Berita Sekolah</h2>
                            <p className="sec-subtitle">
                                Kegiatan, prestasi, dan informasi penting dari
                                SMK Negeri 1 Sigumpar yang terus bergerak maju.
                            </p>
                        </div>

                        <div className="berita-grid">
                            {berita.map((b, i) => (
                                <div key={i} className="b-card">
                                    <div className="b-img">
                                        <img src={b.img} alt={b.title} />
                                    </div>
                                    <div className="b-text">
                                        <div className="b-meta">
                                            <span className="b-badge">
                                                {b.tag}
                                            </span>
                                            <span className="b-date">
                                                {b.date}
                                            </span>
                                        </div>
                                        <h4>{b.title}</h4>
                                        <p>{b.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="kontak" className="section kontak-section fade-up">
                    <div className="section-inner">
                        <div className="kontak-grid">
                            <div className="kontak-panel">
                                <div className="eyebrow">✦ Hubungi Kami</div>
                                <h2 className="kontak-title">Kontak Sekolah</h2>
                                <p className="kontak-desc">
                                    Informasi alamat dan komunikasi resmi SMK
                                    Negeri 1 Sigumpar.
                                </p>

                                {[
                                    {
                                        icon: "📍",
                                        label: "Alamat",
                                        val: "Jl. Sisingamangaraja No. 1, Sigumpar, Kab. Toba, Sumatera Utara",
                                    },
                                    {
                                        icon: "📞",
                                        label: "Telepon",
                                        val: "(0632) 21234",
                                    },
                                    {
                                        icon: "✉️",
                                        label: "Email",
                                        val: "smkn1sigumpar@gmail.com",
                                    },
                                ].map((c, i) => (
                                    <div key={i} className="kontak-row">
                                        <div className="kontak-icon-circle">
                                            {c.icon}
                                        </div>
                                        <div>
                                            <div className="kontak-info-label">
                                                {c.label}
                                            </div>
                                            <div className="kontak-info-val">
                                                {c.val}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="kontak-map">
                                <div className="kontak-map-card">
                                    <h4>SMK Negeri 1 Sigumpar</h4>
                                    <p>
                                        Sekolah vokasi yang berfokus pada
                                        kualitas, kedisiplinan, dan kesiapan
                                        lulusan dalam menghadapi dunia kerja,
                                        kuliah, maupun wirausaha.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="footer">
                    <p>
                        © Copyright SMK PD 2025 · Design and Development by
                        Humas SMK Pradita Dirgantara
                    </p>
                </div>
            </div>
        </div>
    );
}
