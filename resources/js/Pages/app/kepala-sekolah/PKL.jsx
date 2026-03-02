import { useState, useMemo } from "react";

// 1. Data Master (Simulasi Database)
const initialDataPKL = [
  { id: 1, nama: "Budi Setiawan", tempat: "PT. Telkom Indonesia", pembimbing: "Hendra Wijaya, S.T.", status: "Selesai", nilai: "A", jurusan: "Teknik Komputer & Jaringan", tahun: "2025/2026" },
  { id: 2, nama: "Siti Aminah", tempat: "Dinas Kominfo", pembimbing: "Sari Dewi, M.Kom.", status: "Sedang PKL", nilai: "-", jurusan: "Rekayasa Perangkat Lunak", tahun: "2025/2026" },
  { id: 3, nama: "Andi Pratama", tempat: "Bank Sumut", pembimbing: "Budi Santoso, S.Pd.", status: "Selesai", nilai: "B+", jurusan: "Multi Media", tahun: "2024/2025" },
  { id: 4, nama: "Rina Lestari", tempat: "PT. PLN (Persero)", pembimbing: "Nurul Hidayah, M.Pd.", status: "Sedang PKL", nilai: "-", jurusan: "Teknik Komputer & Jaringan", tahun: "2024/2025" },
  { id: 5, nama: "Agus Saputra", tempat: "PT. Astra", pembimbing: "Hendra Wijaya, S.T.", status: "Selesai", nilai: "A-", jurusan: "Rekayasa Perangkat Lunak", tahun: "2025/2026" },
  { id: 6, nama: "Dewi Sartika", tempat: "Startup Lab", pembimbing: "Sari Dewi, M.Kom.", status: "Selesai", nilai: "A", jurusan: "Multi Media", tahun: "2025/2026" },
  { id: 7, nama: "Fajar Ramadhan", tempat: "Telkomsel", pembimbing: "Budi Santoso, S.Pd.", status: "Sedang PKL", nilai: "-", jurusan: "Teknik Komputer & Jaringan", tahun: "2023/2024" },
];

const jurusanList = ["Jurusan", "Teknik Komputer & Jaringan", "Rekayasa Perangkat Lunak", "Multi Media"];
const tahunAjarList = ["Tahun Ajar", "2025/2026", "2024/2025", "2023/2024"];
const ITEMS_PER_PAGE = 3; // Mengatur jumlah data per halaman

export default function PKL() {
  // --- STATE ---
  const [search, setSearch] = useState("");
  const [filterJurusan, setFilterJurusan] = useState("Jurusan");
  const [filterTahun, setFilterTahun] = useState("Tahun Ajar");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("pkl");

  // --- LOGIC: FILTERING ---
  // Kita menggunakan useMemo agar filter hanya berjalan saat state filter berubah
  const filteredData = useMemo(() => {
    return initialDataPKL.filter(item => {
      const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase());
      const matchJurusan = filterJurusan === "Jurusan" || item.jurusan === filterJurusan;
      const matchTahun = filterTahun === "Tahun Ajar" || item.tahun === filterTahun;
      return matchSearch && matchJurusan && matchTahun;
    });
  }, [search, filterJurusan, filterTahun]);

  // --- LOGIC: PAGINATION ---
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // --- HANDLERS ---
  const handleReset = () => {
    setSearch("");
    setFilterJurusan("Jurusan");
    setFilterTahun("Tahun Ajar");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // --- STYLES ---
  const selectStyle = {
    padding: "8px 14px", borderRadius: 8, border: "1px solid #e0e0e0",
    fontSize: 13, color: "#333", background: "#fff", cursor: "pointer", minWidth: 160
  };

  const menuItems = [
    { id: "beranda", label: "Beranda", url: "/dashboard" },
    { id: "absensi", label: "Absensi", url: "/absensi-guru" },
    { id: "perangkat", label: "Perangkat Ajar", url: "/perangkat-ajar" },
    { id: "evaluasi", label: "Evaluasi Kinerja Guru", url: "/evaluasi-kinerja" },
    { id: "pkl", label: "PKL", url: "/pkl-laporan" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', sans-serif", background: "#f0f2f5", overflow: "hidden" }}>
      
      {/* SIDEBAR */}
      <aside style={{ width: sidebarOpen ? 240 : 0, background: "#fff", borderRight: "1px solid #e0e0e0", transition: "0.3s", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 16px", borderBottom: "1px solid #f0f0f0", textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#20639B" }}>SMKN 1 Sigumpar</div>
        </div>
        <div style={{ padding: "20px 16px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#20639B", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>IP</div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>Ivana Pasaribu</div>
          <div style={{ fontSize: 11, color: "#888" }}>Kepala Sekolah</div>
        </div>
        <nav style={{ flex: 1, padding: "12px 0" }}>
          {menuItems.map(item => (
            <div 
              key={item.id} 
              onClick={() => window.location.href = item.url}
              style={{ 
                padding: "10px 20px", fontSize: 13, cursor: "pointer",
                background: activeMenu === item.id ? "#e8f2f9" : "transparent",
                color: activeMenu === item.id ? "#20639B" : "#555",
                fontWeight: activeMenu === item.id ? 600 : 400,
                borderLeft: activeMenu === item.id ? "3px solid #20639B" : "3px solid transparent"
            }}>
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <header style={{ background: "#20639B", color: "#fff", height: 64, display: "flex", alignItems: "center", padding: "0 24px", gap: 16 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", cursor: "pointer", padding: "4px 8px", borderRadius: 4 }}>☰</button>
          <div style={{ fontWeight: 800, fontSize: 18 }}>SMK NEGERI 1 SIGUMPAR</div>
        </header>

        <main style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ margin: 0, color: "#333", fontSize: 22, fontWeight: 700 }}>Akses Laporan PKL & Vokasi</h2>
          </div>

          {/* Filter Section */}
          <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", marginBottom: 24 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <select value={filterJurusan} onChange={e => {setFilterJurusan(e.target.value); setCurrentPage(1);}} style={selectStyle}>
                {jurusanList.map(j => <option key={j}>{j}</option>)}
              </select>
              <select value={filterTahun} onChange={e => {setFilterTahun(e.target.value); setCurrentPage(1);}} style={selectStyle}>
                {tahunAjarList.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <input 
                type="text" placeholder="Cari Nama Siswa" 
                style={{ flex: 1, padding: "10px 16px", borderRadius: 8, border: "1px solid #e0e0e0", fontSize: 14, outline: 'none' }}
                value={search} onChange={e => {setSearch(e.target.value); setCurrentPage(1);}}
              />
              <button style={{ padding: "10px 24px", background: "#f8f9fa", border: "1px solid #e0e0e0", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>Cari</button>
              <button onClick={handleReset} style={{ padding: "10px 24px", background: "#fff", border: "1px solid #e0e0e0", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>Reset</button>
            </div>
          </div>

          {/* Table Section */}
          <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8f9fa", textAlign: "left", borderBottom: "1px solid #eee" }}>
                  <th style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#666", width: 60 }}>No</th>
                  <th style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#666" }}>Nama Siswa</th>
                  <th style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#666" }}>Tempat PKL</th>
                  <th style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#666" }}>Pembimbing</th>
                  <th style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#666" }}>Status</th>
                  <th style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#666", textAlign: "center" }}>Nilai</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? paginatedData.map((item, index) => (
                  <tr key={item.id} style={{ borderBottom: "1px solid #f9f9f9" }}>
                    <td style={{ padding: "16px", fontSize: 14, color: "#333" }}>{startIndex + index + 1}</td>
                    <td style={{ padding: "16px", fontSize: 14, fontWeight: 600, color: "#333" }}>{item.nama}</td>
                    <td style={{ padding: "16px", fontSize: 14, color: "#555" }}>{item.tempat}</td>
                    <td style={{ padding: "16px", fontSize: 14, color: "#555" }}>{item.pembimbing}</td>
                    <td style={{ padding: "16px", fontSize: 14 }}>
                        <span style={{ 
                            padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                            background: item.status === "Selesai" ? "#e6f4ea" : "#fff8e1",
                            color: item.status === "Selesai" ? "#1e7e34" : "#b38600"
                        }}>{item.status}</span>
                    </td>
                    <td style={{ padding: "16px", fontSize: 14, fontWeight: 700, textAlign: "center", color: "#20639B" }}>{item.nilai}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="6" style={{ padding: "32px", textAlign: "center", color: "#999" }}>Data tidak ditemukan</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eee" }}>
              <div style={{ fontSize: 13, color: "#666" }}>
                Menampilkan {paginatedData.length} dari {filteredData.length} data
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{ 
                    padding: "8px 16px", 
                    background: currentPage === 1 ? "#ccc" : "#4dabf7", 
                    color: "#fff", border: "none", borderRadius: 6, 
                    cursor: currentPage === 1 ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 600 
                  }}
                >
                  Sebelumnya
                </button>
                <div style={{ display: "flex", alignItems: "center", fontSize: 14, fontWeight: 600, color: "#333" }}>
                  Halaman {currentPage} dari {totalPages || 1}
                </div>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                  style={{ 
                    padding: "8px 16px", 
                    background: (currentPage === totalPages || totalPages === 0) ? "#ccc" : "#4dabf7", 
                    color: "#fff", border: "none", borderRadius: 6, 
                    cursor: (currentPage === totalPages || totalPages === 0) ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 600 
                  }}
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}