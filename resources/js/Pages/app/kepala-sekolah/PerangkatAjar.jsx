import { useState } from "react";

const dataPerangkat = [
  { id: 1, nama: "Budi Santoso", mataPelajaran: "Matematika", silabus: "Ada", rpp: "Ada", modulAjar: "Ada", status: "Lengkap" },
  { id: 2, nama: "Sari Dewi", mataPelajaran: "Bahasa Indonesia", silabus: "Ada", rpp: "Ada", modulAjar: "Tidak Ada", status: "Tidak Lengkap" },
  { id: 3, nama: "Hendra Wijaya", mataPelajaran: "Fisika", silabus: "Ada", rpp: "Tidak Ada", modulAjar: "Tidak Ada", status: "Tidak Lengkap" },
  { id: 4, nama: "Rina Lestari", mataPelajaran: "Kimia", silabus: "Ada", rpp: "Ada", modulAjar: "Ada", status: "Lengkap" },
  { id: 5, nama: "Agus Prasetyo", mataPelajaran: "Sejarah", silabus: "Ada", rpp: "Ada", modulAjar: "Ada", status: "Lengkap" },
  { id: 6, nama: "Nurul Hidayah", mataPelajaran: "Biologi", silabus: "Tidak Ada", rpp: "Tidak Ada", modulAjar: "Tidak Ada", status: "Tidak Lengkap" },
  { id: 7, nama: "Dodi Kurniawan", mataPelajaran: "PKn", silabus: "Ada", rpp: "Ada", modulAjar: "Ada", status: "Lengkap" },
  { id: 8, nama: "Maya Sari", mataPelajaran: "Pemrograman Web", silabus: "Ada", rpp: "Ada", modulAjar: "Tidak Ada", status: "Tidak Lengkap" },
];

const mataPelajaranList = ["Mata Pelajaran", "Matematika", "Bahasa Indonesia", "Fisika", "Kimia", "Sejarah", "Biologi", "PKn", "Pemrograman Web"];
const semesterList = ["Semester", "Ganjil 2026", "Genap 2025", "Ganjil 2025"];
const statusList = ["Status", "Lengkap", "Tidak Lengkap"];

const ITEMS_PER_PAGE = 3;

export default function PerangkatAjar() {
  const [search, setSearch] = useState("");
  const [filterMapel, setFilterMapel] = useState("Mata Pelajaran");
  const [filterSemester, setFilterSemester] = useState("Semester");
  const [filterStatus, setFilterStatus] = useState("Status");
  const [page, setPage] = useState(1);
  const [activeMenu, setActiveMenu] = useState("perangkat");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [absensiOpen, setAbsensiOpen] = useState(false);

  const filtered = dataPerangkat.filter(d => {
    const matchSearch = d.nama.toLowerCase().includes(search.toLowerCase());
    const matchMapel = filterMapel === "Mata Pelajaran" || d.mataPelajaran === filterMapel;
    const matchStatus = filterStatus === "Status" || d.status === filterStatus;
    return matchSearch && matchMapel && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleReset = () => {
    setSearch("");
    setFilterMapel("Mata Pelajaran");
    setFilterSemester("Semester");
    setFilterStatus("Status");
    setPage(1);
  };

  const menuItems = [
    { id: "beranda", label: "Beranda" },
    {
      id: "absensi", label: "Absensi", children: [
        { id: "absensi-guru", label: "Absensi Guru" },
        { id: "absensi-siswa", label: "Absensi Siswa" },
      ]
    },
    { id: "perangkat", label: "Perangkat Ajar" },
    { id: "evaluasi", label: "Evaluasi Kinerja Guru" },
    { id: "pkl", label: "PKL" },
  ];

  const selectStyle = {
    padding: "8px 14px", borderRadius: 8, border: "1px solid #e0e0e0",
    fontSize: 13, color: "#333", background: "#fff", cursor: "pointer",
  };

  const docBadge = (val) => {
    const isAda = val === "Ada";
    return (
      <span style={{
        display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
        background: isAda ? "#e6f4ea" : "#fce8e8",
        color: isAda ? "#1e7e34" : "#c0392b",
        border: `1px solid ${isAda ? "#a8d5b0" : "#f5a5a5"}`
      }}>{val}</span>
    );
  };

  const statusBadge = (val) => {
    const isLengkap = val === "Lengkap";
    return (
      <span style={{
        display: "inline-block", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
        background: isLengkap ? "#e6f4ea" : "#fff8e1",
        color: isLengkap ? "#1e7e34" : "#b38600",
        border: `1px solid ${isLengkap ? "#a8d5b0" : "#ffe082"}`
      }}>{val}</span>
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', sans-serif", background: "#f0f2f5", overflow: "hidden" }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? 240 : 0, minWidth: sidebarOpen ? 240 : 0,
        background: "#fff", borderRight: "1px solid #e0e0e0",
        display: "flex", flexDirection: "column",
        transition: "width 0.3s", overflow: "hidden",
        boxShadow: "2px 0 8px rgba(0,0,0,0.05)"
      }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: "1px solid #f0f0f0", textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#20639B", letterSpacing: 0.3 }}>SMKN 1 Sigumpar</div>
        </div>

        <div style={{ padding: "20px 16px", borderBottom: "1px solid #f0f0f0", textAlign: "center" }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%", margin: "0 auto 8px",
            background: "#20639B", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 22, color: "#fff", fontWeight: 700
          }}>IP</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>Ivana Pasaribu</div>
          <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Kepala Sekolah</div>
        </div>

        <nav style={{ flex: 1, padding: "12px 0", overflowY: "auto" }}>
          {menuItems.map(item => (
            <div key={item.id}>
              <div
                onClick={() => {
                  if (item.children) { setAbsensiOpen(v => !v); setActiveMenu(item.id); }
                  else setActiveMenu(item.id);
                }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 20px", cursor: "pointer", fontSize: 13,
                  color: activeMenu === item.id ? "#20639B" : "#555",
                  background: activeMenu === item.id && !item.children ? "#e8f2f9" : "transparent",
                  fontWeight: activeMenu === item.id ? 600 : 400,
                  borderLeft: activeMenu === item.id && !item.children ? "3px solid #20639B" : "3px solid transparent",
                  transition: "all 0.2s", whiteSpace: "nowrap"
                }}
              >
                <span>{item.label}</span>
                {item.children && <span style={{ fontSize: 10, color: "#aaa" }}>{absensiOpen ? "▲" : "▼"}</span>}
              </div>
              {item.children && absensiOpen && (
                <div>
                  {item.children.map(child => (
                    <div key={child.id} onClick={() => setActiveMenu(child.id)} style={{
                      padding: "8px 20px 8px 32px", cursor: "pointer", fontSize: 12,
                      color: activeMenu === child.id ? "#20639B" : "#666",
                      background: activeMenu === child.id ? "#e8f2f9" : "transparent",
                      fontWeight: activeMenu === child.id ? 600 : 400,
                      borderLeft: activeMenu === child.id ? "3px solid #20639B" : "3px solid transparent",
                      transition: "all 0.2s", whiteSpace: "nowrap"
                    }}>{child.label}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <header style={{
          background: "#20639B", color: "#fff", padding: "0 24px",
          display: "flex", alignItems: "center", gap: 16,
          height: 64, boxShadow: "0 2px 8px rgba(32,99,155,0.25)", flexShrink: 0
        }}>
          <button onClick={() => setSidebarOpen(v => !v)} style={{
            background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
            fontSize: 18, cursor: "pointer", borderRadius: 6, width: 36, height: 36
          }}>☰</button>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 20 }}>🎓</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: 0.5 }}>SMK NEGERI 1 SIGUMPAR</div>
          </div>
        </header>

        <main style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#333" }}>Pemeriksaan Perangkat Ajar</h2>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "#666" }}>
              Semester: {filterSemester === "Semester" ? "Ganjil 2026" : filterSemester}
            </p>
          </div>

          {/* Filter Card */}
          <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {/* Row 1 */}
            <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
              <select value={filterMapel} onChange={e => { setFilterMapel(e.target.value); setPage(1); }} style={{ ...selectStyle, minWidth: 200 }}>
                {mataPelajaranList.map(m => <option key={m}>{m}</option>)}
              </select>
              <select value={filterSemester} onChange={e => setFilterSemester(e.target.value)} style={{ ...selectStyle, minWidth: 140 }}>
                {semesterList.map(s => <option key={s}>{s}</option>)}
              </select>
              <select value={filterStatus} onChange={e => { setFilterStatus(e.target.value); setPage(1); }} style={{ ...selectStyle, minWidth: 160 }}>
                {statusList.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            {/* Row 2 */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Cari nama guru..."
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                style={{
                  flex: 1, minWidth: 200, padding: "9px 16px", borderRadius: 8,
                  border: "1px solid #e0e0e0", fontSize: 13, outline: "none"
                }}
              />
              <button style={{
                padding: "9px 24px", background: "#20639B", color: "#fff",
                border: "none", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600
              }}>Cari</button>
              <button onClick={handleReset} style={{
                padding: "9px 20px", background: "#fff", color: "#555",
                border: "1px solid #e0e0e0", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 500
              }}>Reset</button>
            </div>
          </div>

          {/* Table */}
          <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #f0f0f0" }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#333" }}>Daftar Perangkat Ajar</h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f5f5f5" }}>
                    {["No", "Mata Pelajaran", "Silabus", "RPP", "Modul Ajar", "Status Umum", "Aksi"].map(h => (
                      <th key={h} style={{
                        padding: "12px 16px", textAlign: "left", fontSize: 13,
                        fontWeight: 600, color: "#333", whiteSpace: "nowrap",
                        borderBottom: "1px solid #e0e0e0"
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginated.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ textAlign: "center", padding: 32, color: "#aaa", fontSize: 13 }}>
                        Tidak ada data ditemukan
                      </td>
                    </tr>
                  ) : paginated.map((d, i) => (
                    <tr key={d.id}
                      style={{ borderBottom: "1px solid #f5f5f5", transition: "background 0.15s" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#f9fbfd"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <td style={{ padding: "12px 16px", fontSize: 13, color: "#999", width: 48 }}>
                        {(page - 1) * ITEMS_PER_PAGE + i + 1}
                      </td>
                      <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600, color: "#222" }}>{d.mataPelajaran}</td>
                      <td style={{ padding: "12px 16px" }}>{docBadge(d.silabus)}</td>
                      <td style={{ padding: "12px 16px" }}>{docBadge(d.rpp)}</td>
                      <td style={{ padding: "12px 16px" }}>{docBadge(d.modulAjar)}</td>
                      <td style={{ padding: "12px 16px" }}>{statusBadge(d.status)}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <button style={{
                          padding: "5px 14px", background: "#20639B", color: "#fff",
                          border: "none", borderRadius: 6, fontSize: 12, cursor: "pointer", fontWeight: 600
                        }}>Detail</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "16px 20px", borderTop: "1px solid #f0f0f0" }}>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  padding: "7px 18px", borderRadius: 8, border: "1px solid #e0e0e0",
                  background: page === 1 ? "#f5f5f5" : "#20639B", color: page === 1 ? "#bbb" : "#fff",
                  fontSize: 12, cursor: page === 1 ? "not-allowed" : "pointer", fontWeight: 600
                }}
              >Sebelumnya</button>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button key={i} onClick={() => setPage(i + 1)} style={{
                    width: 32, height: 32, borderRadius: 8,
                    border: page === i + 1 ? "none" : "1px solid #e0e0e0",
                    background: page === i + 1 ? "#20639B" : "#fff",
                    color: page === i + 1 ? "#fff" : "#555",
                    fontSize: 12, cursor: "pointer", fontWeight: page === i + 1 ? 700 : 400
                  }}>{i + 1}</button>
                ))}
              </div>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{
                  padding: "7px 18px", borderRadius: 8, border: "1px solid #e0e0e0",
                  background: page === totalPages ? "#f5f5f5" : "#20639B",
                  color: page === totalPages ? "#bbb" : "#fff",
                  fontSize: 12, cursor: page === totalPages ? "not-allowed" : "pointer", fontWeight: 600
                }}
              >Selanjutnya</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
