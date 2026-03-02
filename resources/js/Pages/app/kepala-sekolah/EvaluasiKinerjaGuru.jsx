import { useState } from "react";

// Master data awal
const initialData = [
  { id: 1, nama: "Guru A", mataPelajaran: "Matematika", status: "Sudah Dinilai", catatan: "Kinerja sangat baik, pertahankan metode pengajarannya." },
  { id: 2, nama: "Guru B", mataPelajaran: "Pertanian", status: "Belum Dinilai", catatan: "" },
  { id: 3, nama: "Andi Saputra", mataPelajaran: "Matematika", status: "Belum Dinilai", catatan: "" },
];

const mataPelajaranList = ["Mata Pelajaran", "Matematika", "Pertanian", "Bahasa Indonesia", "Fisika"];
const semesterList = ["Semester", "Ganjil 2026", "Genap 2025", "Ganjil 2025"];
const statusList = ["Status", "Sudah Dinilai", "Belum Dinilai"];

export default function EvaluasiKinerjaGuru() {
  // --- STATE ---
  const [evaluasiData, setEvaluasiData] = useState(initialData); // Data utama yang bisa diubah
  const [view, setView] = useState("list"); // Kontrol navigasi list/detail
  const [selectedGuru, setSelectedGuru] = useState(null); // Guru yang sedang dipilih
  const [tempCatatan, setTempCatatan] = useState(""); // State sementara untuk textarea
  
  const [search, setSearch] = useState("");
  const [filterMapel, setFilterMapel] = useState("Mata Pelajaran");
  const [filterSemester, setFilterSemester] = useState("Semester");
  const [filterStatus, setFilterStatus] = useState("Status");
  
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("evaluasi");

  // --- LOGIC: FILTER ---
  const filteredData = evaluasiData.filter(d => {
    const matchSearch = d.nama.toLowerCase().includes(search.toLowerCase());
    const matchMapel = filterMapel === "Mata Pelajaran" || d.mataPelajaran === filterMapel;
    const matchStatus = filterStatus === "Status" || d.status === filterStatus;
    return matchSearch && matchMapel && matchStatus;
  });

  // --- LOGIC: ACTIONS ---
  const handleReset = () => {
    setSearch("");
    setFilterMapel("Mata Pelajaran");
    setFilterSemester("Semester");
    setFilterStatus("Status");
  };

  const handleOpenDetail = (guru) => {
    setSelectedGuru(guru);
    setTempCatatan(guru.catatan); // Isi textarea dengan catatan yang sudah ada (jika ada)
    setView("detail");
  };

  const handleUpdateCatatan = () => {
    const updated = evaluasiData.map(g => {
      if (g.id === selectedGuru.id) {
        return { 
          ...g, 
          catatan: tempCatatan, 
          status: tempCatatan.trim() !== "" ? "Sudah Dinilai" : "Belum Dinilai" 
        };
      }
      return g;
    });
    setEvaluasiData(updated);
    alert("Berhasil memperbarui catatan!");
    setView("list");
  };

  const handleDeleteCatatan = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus catatan evaluasi ini?")) {
      const updated = evaluasiData.map(g => {
        if (g.id === selectedGuru.id) {
          return { ...g, catatan: "", status: "Belum Dinilai" };
        }
        return g;
      });
      setEvaluasiData(updated);
      alert("Catatan berhasil dihapus.");
      setView("list");
    }
  };

  // --- STYLES ---
  const selectStyle = {
    padding: "8px 14px", borderRadius: 8, border: "1px solid #e0e0e0",
    fontSize: 13, color: "#333", background: "#fff", cursor: "pointer",
  };

  const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "absensi", label: "Absensi", children: [{ id: "guru", label: "Absensi Guru" }] },
    { id: "perangkat", label: "Perangkat Ajar" },
    { id: "evaluasi", label: "Evaluasi Kinerja Guru" },
    { id: "pkl", label: "PKL" },
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
            <div key={item.id} style={{ 
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
          {view === "list" ? (
            <>
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <h2 style={{ margin: 0, color: "#333" }}>Evaluasi Kinerja Guru</h2>
                <p style={{ color: "#666", fontSize: 14 }}>Semester: Ganjil 2026</p>
              </div>

              {/* Filter Section */}
              <div style={{ background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                  <select value={filterSemester} onChange={e => setFilterSemester(e.target.value)} style={selectStyle}>
                    {semesterList.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <select value={filterMapel} onChange={e => setFilterMapel(e.target.value)} style={selectStyle}>
                    {mataPelajaranList.map(m => <option key={m}>{m}</option>)}
                  </select>
                  <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={selectStyle}>
                    {statusList.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <input 
                    type="text" placeholder="Cari nama guru..." 
                    style={{ flex: 1, padding: "8px 16px", borderRadius: 8, border: "1px solid #e0e0e0" }}
                    value={search} onChange={e => setSearch(e.target.value)}
                  />
                  <button style={{ padding: "8px 24px", background: "#f8f9fa", border: "1px solid #e0e0e0", borderRadius: 8 }}>Cari</button>
                  <button onClick={handleReset} style={{ padding: "8px 24px", background: "#fff", border: "1px solid #e0e0e0", borderRadius: 8, cursor: "pointer" }}>Reset</button>
                </div>
              </div>

              {/* Table Section */}
              <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 20 }}>
                <h3 style={{ marginTop: 0, marginBottom: 20, fontSize: 16 }}>Daftar Evaluasi Kinerja Guru</h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #eee", textAlign: "left" }}>
                      <th style={{ padding: 12 }}>No</th>
                      <th style={{ padding: 12 }}>Nama Guru</th>
                      <th style={{ padding: 12 }}>Mata Pelajaran</th>
                      <th style={{ padding: 12, textAlign: "center" }}>Status Evaluasi</th>
                      <th style={{ padding: 12, textAlign: "center" }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((guru, index) => (
                      <tr key={guru.id} style={{ borderBottom: "1px solid #f9f9f9" }}>
                        <td style={{ padding: 12 }}>{index + 1}</td>
                        <td style={{ padding: 12 }}>{guru.nama}</td>
                        <td style={{ padding: 12 }}>{guru.mataPelajaran}</td>
                        <td style={{ padding: 12, textAlign: "center" }}>
                          <span style={{ 
                            color: guru.status === "Sudah Dinilai" ? "#27ae60" : "#e74c3c",
                            fontWeight: 600 
                          }}>
                            {guru.status}
                          </span>
                        </td>
                        <td style={{ padding: 12, textAlign: "center" }}>
                          <button 
                            onClick={() => handleOpenDetail(guru)} 
                            style={{ 
                              background: guru.status === "Sudah Dinilai" ? "#82ca9d" : "#d65a5a", 
                              color: "#fff", border: "none", padding: "6px 16px", borderRadius: 8, cursor: "pointer" 
                            }}
                          >
                            {guru.status === "Sudah Dinilai" ? "Detail" : "Nilai"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            /* DETAIL VIEW */
            <div style={{ maxWidth: 850, margin: "0 auto" }}>
              <h2 style={{ marginBottom: 20, fontWeight: 700 }}>Detail Evaluasi Kinerja Guru</h2>
              
              <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", marginBottom: 20 }}>
                <div style={{ display: "grid", gap: 12 }}>
                   <div><span style={{ color: "#888", width: 140, display: "inline-block" }}>Nama Guru</span> : <strong>{selectedGuru.nama}</strong></div>
                   <div><span style={{ color: "#888", width: 140, display: "inline-block" }}>Mata Pelajaran</span> : <strong>{selectedGuru.mataPelajaran}</strong></div>
                   <div><span style={{ color: "#888", width: 140, display: "inline-block" }}>Status</span> : <strong style={{ color: selectedGuru.status === "Sudah Dinilai" ? "#27ae60" : "#e74c3c" }}>{selectedGuru.status}</strong></div>
                </div>
              </div>

              <div style={{ background: "#fff", padding: 32, borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <h3 style={{ marginTop: 0, fontSize: 18, fontWeight: 700 }}>Catatan Evaluasi Kepala Sekolah</h3>
                <textarea 
                  placeholder="Tuliskan catatan pembinaan atau evaluasi..."
                  value={tempCatatan}
                  onChange={(e) => setTempCatatan(e.target.value)}
                  style={{ 
                    width: "100%", minHeight: 180, padding: "20px", borderRadius: 12, 
                    border: "1px solid #e0e0e0", marginTop: 12, fontSize: 15, fontFamily: "inherit",
                    outline: "none" 
                  }}
                />
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  <button 
                    onClick={handleUpdateCatatan}
                    style={{ padding: "14px", background: "#00c49f", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer" }}
                  >
                    Edit Catatan
                  </button>
                  <button 
                    onClick={handleDeleteCatatan}
                    style={{ padding: "14px", background: "#ff4d4f", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer" }}
                  >
                    Hapus Catatan
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                <button 
                  onClick={() => setView("list")}
                  style={{ background: "#bfbfbf", color: "#fff", border: "none", padding: "8px 24px", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}
                >
                  Kembali
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}