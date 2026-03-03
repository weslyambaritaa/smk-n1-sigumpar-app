import { useState } from "react";

const dataPerangkat = [
  {
    id: 1,
    nama: "Budi Santoso",
    mataPelajaran: "Matematika",
    silabus: "Ada",
    rpp: "Ada",
    modulAjar: "Ada",
    status: "Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      RPP: {
        status: "Revisi",
        uploadDate: "10 Mei 2025",
        catatan: "Kompetensi dasar perlu diperjelas.",
      },
      "Modul Ajar": {
        status: "Approve",
        uploadDate: "10 Mei 2025",
        catatan: "Sangat baik.",
      },
    },
  },
  {
    id: 2,
    nama: "Sari Dewi",
    mataPelajaran: "Bahasa Indonesia",
    silabus: "Ada",
    rpp: "Ada",
    modulAjar: "Tidak Ada",
    status: "Tidak Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: {
        status: "Sudah Direvisi",
        uploadDate: "12 Mei 2025",
        catatan: "",
      },
      RPP: {
        status: "Belum Dicek",
        uploadDate: "12 Mei 2025",
        catatan: "",
      },
      "Modul Ajar": {
        status: "Belum Dicek",
        uploadDate: "-",
        catatan: "",
      },
    },
  },
  {
    id: 3,
    nama: "Hendra Wijaya",
    mataPelajaran: "Fisika",
    silabus: "Ada",
    rpp: "Tidak Ada",
    modulAjar: "Tidak Ada",
    status: "Tidak Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      RPP: { status: "Belum Dicek", uploadDate: "-", catatan: "" },
      "Modul Ajar": {
        status: "Belum Dicek",
        uploadDate: "-",
        catatan: "",
      },
    },
  },
  {
    id: 4,
    nama: "Rina Lestari",
    mataPelajaran: "Kimia",
    silabus: "Ada",
    rpp: "Ada",
    modulAjar: "Ada",
    status: "Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      RPP: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      "Modul Ajar": {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
    },
  },
  {
    id: 5,
    nama: "Agus Prasetyo",
    mataPelajaran: "Sejarah",
    silabus: "Ada",
    rpp: "Ada",
    modulAjar: "Ada",
    status: "Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      RPP: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      "Modul Ajar": {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
    },
  },
  {
    id: 6,
    nama: "Nurul Hidayah",
    mataPelajaran: "Biologi",
    silabus: "Tidak Ada",
    rpp: "Tidak Ada",
    modulAjar: "Tidak Ada",
    status: "Tidak Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: { status: "Belum Dicek", uploadDate: "-", catatan: "" },
      RPP: { status: "Belum Dicek", uploadDate: "-", catatan: "" },
      "Modul Ajar": {
        status: "Belum Dicek",
        uploadDate: "-",
        catatan: "",
      },
    },
  },
  {
    id: 7,
    nama: "Dodi Kurniawan",
    mataPelajaran: "PKn",
    silabus: "Ada",
    rpp: "Ada",
    modulAjar: "Ada",
    status: "Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      RPP: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      "Modul Ajar": {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
    },
  },
  {
    id: 8,
    nama: "Maya Sari",
    mataPelajaran: "Pemrograman Web",
    silabus: "Ada",
    rpp: "Ada",
    modulAjar: "Tidak Ada",
    status: "Tidak Lengkap",
    semester: "Ganjil 2026",
    docs: {
      Silabus: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      RPP: {
        status: "Belum Dicek",
        uploadDate: "10 Mei 2025",
        catatan: "",
      },
      "Modul Ajar": {
        status: "Belum Dicek",
        uploadDate: "-",
        catatan: "",
      },
    },
  },
];

const mataPelajaranList = [
  "Mata Pelajaran",
  "Matematika",
  "Bahasa Indonesia",
  "Fisika",
  "Kimia",
  "Sejarah",
  "Biologi",
  "PKn",
  "Pemrograman Web",
];
const semesterList = ["Semester", "Ganjil 2026", "Genap 2025", "Ganjil 2025"];
const statusList = ["Status", "Lengkap", "Tidak Lengkap"];

const ITEMS_PER_PAGE = 3;

export default function PerangkatAjar() {
  const [teachersData, setTeachersData] = useState(dataPerangkat);
  const [view, setView] = useState("list");
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedDocName, setSelectedDocName] = useState("");
  const [tempCatatan, setTempCatatan] = useState("");

  const [search, setSearch] = useState("");
  const [filterMapel, setFilterMapel] = useState("Mata Pelajaran");
  const [filterSemester, setFilterSemester] = useState("Semester");
  const [filterStatus, setFilterStatus] = useState("Status");
  const [page, setPage] = useState(1);
  const [activeMenu, setActiveMenu] = useState("perangkat");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [absensiOpen, setAbsensiOpen] = useState(false);

  const filtered = teachersData.filter((d) => {
    const matchSearch = d.nama.toLowerCase().includes(search.toLowerCase());
    const matchMapel =
      filterMapel === "Mata Pelajaran" || d.mataPelajaran === filterMapel;
    const matchStatus =
      filterStatus === "Status" || d.status === filterStatus;
    return matchSearch && matchMapel && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

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
      id: "absensi",
      label: "Absensi",
      children: [
        { id: "absensi-guru", label: "Absensi Guru" },
        { id: "absensi-siswa", label: "Absensi Siswa" },
      ],
    },
    { id: "perangkat", label: "Perangkat Ajar" },
    { id: "evaluasi", label: "Evaluasi Kinerja Guru" },
    { id: "pkl", label: "PKL" },
  ];

  const selectStyle = {
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid #e0e0e0",
    fontSize: 13,
    color: "#333",
    background: "#fff",
    cursor: "pointer",
  };

  const docBadge = (val) => {
    const isAda = val === "Ada";
    return (
      <span
        style={{
          display: "inline-block",
          padding: "3px 10px",
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 600,
          background: isAda ? "#e6f4ea" : "#fce8e8",
          color: isAda ? "#1e7e34" : "#c0392b",
          border: `1px solid ${isAda ? "#a8d5b0" : "#f5a5a5"}`,
        }}
      >
        {val}
      </span>
    );
  };

  const statusBadge = (val) => {
    const isLengkap = val === "Lengkap";
    return (
      <span
        style={{
          display: "inline-block",
          padding: "4px 12px",
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 600,
          background: isLengkap ? "#e6f4ea" : "#fff8e1",
          color: isLengkap ? "#1e7e34" : "#b38600",
          border: `1px solid ${isLengkap ? "#a8d5b0" : "#ffe082"}`,
        }}
      >
        {val}
      </span>
    );
  };

  const handleOpenDetail = (teacher) => {
    setSelectedTeacher(teacher);
    setView("detail");
  };

  const handleOpenReview = (docName, catatanLama) => {
    setSelectedDocName(docName);
    setTempCatatan(catatanLama);
    setView("review");
  };

  const handleFinalAction = (actionType) => {
    const newStatus = actionType === "APPROVE" ? "Approve" : "Revisi";
    const updatedData = teachersData.map((t) => {
      if (t.id === selectedTeacher.id) {
        return {
          ...t,
          docs: {
            ...t.docs,
            [selectedDocName]: {
              ...t.docs[selectedDocName],
              status: newStatus,
              catatan: tempCatatan,
            },
          },
        };
      }
      return t;
    });
    setTeachersData(updatedData);

    const updatedSelectedTeacher = updatedData.find(
      (t) => t.id === selectedTeacher.id
    );
    setSelectedTeacher(updatedSelectedTeacher);

    alert(`Dokumen ${selectedDocName} berhasil di-${actionType}`);
    setView("detail");
  };

  const renderDocButton = (docName, docData) => {
    if (docData.status === "Approve") {
      return (
        <button
          onClick={() => handleOpenReview(docName, docData.catatan)}
          style={{
            width: "100%", padding: "10px", background: "#fff", color: "#20639B",
            border: "1px solid #20639B", borderRadius: "8px", cursor: "pointer", fontWeight: 600,
          }}
        >
          Detail
        </button>
      );
    }
    if (docData.status === "Revisi") {
      return (
        <button
          disabled
          style={{
            width: "100%", padding: "10px", background: "#f5f5f5", color: "#aaa",
            border: "1px solid #ddd", borderRadius: "8px", cursor: "not-allowed", fontWeight: 600,
          }}
        >
          Menunggu Revisi...
        </button>
      );
    }
    if (docData.status === "Sudah Direvisi") {
      return (
        <button
          onClick={() => handleOpenReview(docName, docData.catatan)}
          style={{
            width: "100%", padding: "10px", background: "#f39c12", color: "#fff",
            border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600,
          }}
        >
          Review Lagi
        </button>
      );
    }
    return (
      <button
        onClick={() => handleOpenReview(docName, docData.catatan)}
        style={{
          width: "100%", padding: "10px", background: "#20639B", color: "#fff",
          border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600,
        }}
      >
        Lihat & Review
      </button>
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', sans-serif", background: "#f0f2f5", overflow: "hidden" }}>
      {/* Sidebar (SAMA PERSIS) */}
      <aside style={{ width: sidebarOpen ? 240 : 0, minWidth: sidebarOpen ? 240 : 0, background: "#fff", borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", transition: "width 0.3s", overflow: "hidden", boxShadow: "2px 0 8px rgba(0,0,0,0.05)" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: "1px solid #f0f0f0", textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#20639B", letterSpacing: 0.3 }}>SMKN 1 Sigumpar</div>
        </div>

        <div style={{ padding: "20px 16px", borderBottom: "1px solid #f0f0f0", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", margin: "0 auto 8px", background: "#20639B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff", fontWeight: 700 }}>IP</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>Ivana Pasaribu</div>
          <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Kepala Sekolah</div>
        </div>

        <nav style={{ flex: 1, padding: "12px 0", overflowY: "auto" }}>
          {menuItems.map((item) => (
            <div key={item.id}>
              <div
                onClick={() => {
                  if (item.children) {
                    setAbsensiOpen((v) => !v);
                    setActiveMenu(item.id);
                  } else setActiveMenu(item.id);
                }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", cursor: "pointer", fontSize: 13,
                  color: activeMenu === item.id ? "#20639B" : "#555",
                  background: activeMenu === item.id && !item.children ? "#e8f2f9" : "transparent",
                  fontWeight: activeMenu === item.id ? 600 : 400,
                  borderLeft: activeMenu === item.id && !item.children ? "3px solid #20639B" : "3px solid transparent",
                  transition: "all 0.2s", whiteSpace: "nowrap",
                }}
              >
                <span>{item.label}</span>
                {item.children && (
                  <span style={{ fontSize: 10, color: "#aaa" }}>{absensiOpen ? "▲" : "▼"}</span>
                )}
              </div>
              {item.children && absensiOpen && (
                <div>
                  {item.children.map((child) => (
                    <div
                      key={child.id}
                      onClick={() => setActiveMenu(child.id)}
                      style={{
                        padding: "8px 20px 8px 32px", cursor: "pointer", fontSize: 12,
                        color: activeMenu === child.id ? "#20639B" : "#666",
                        background: activeMenu === child.id ? "#e8f2f9" : "transparent",
                        fontWeight: activeMenu === child.id ? 600 : 400,
                        borderLeft: activeMenu === child.id ? "3px solid #20639B" : "3px solid transparent",
                        transition: "all 0.2s", whiteSpace: "nowrap",
                      }}
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header (SAMA PERSIS) */}
        <header style={{ background: "#20639B", color: "#fff", padding: "0 24px", display: "flex", alignItems: "center", gap: 16, height: 64, boxShadow: "0 2px 8px rgba(32,99,155,0.25)", flexShrink: 0 }}>
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 18, cursor: "pointer", borderRadius: 6, width: 36, height: 36 }}
          >
            ☰
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 20 }}>🎓</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: 0.5 }}>
              SMK NEGERI 1 SIGUMPAR
            </div>
          </div>
        </header>

        <main style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          
          {/* VIEW 1: DAFTAR GURU (SAMA PERSIS) */}
          {view === "list" && (
            <>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#333" }}>Pemeriksaan Perangkat Ajar</h2>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: "#666" }}>
                  Semester: {filterSemester === "Semester" ? "Ganjil 2026" : filterSemester}
                </p>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  <select value={filterMapel} onChange={(e) => { setFilterMapel(e.target.value); setPage(1); }} style={{ ...selectStyle, minWidth: 200 }}>
                    {mataPelajaranList.map((m) => (<option key={m}>{m}</option>))}
                  </select>
                  <select value={filterSemester} onChange={(e) => setFilterSemester(e.target.value)} style={{ ...selectStyle, minWidth: 140 }}>
                    {semesterList.map((s) => (<option key={s}>{s}</option>))}
                  </select>
                  <select value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }} style={{ ...selectStyle, minWidth: 160 }}>
                    {statusList.map((s) => (<option key={s}>{s}</option>))}
                  </select>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <input
                    type="text" placeholder="Cari nama guru..." value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    style={{ flex: 1, minWidth: 200, padding: "9px 16px", borderRadius: 8, border: "1px solid #e0e0e0", fontSize: 13, outline: "none" }}
                  />
                  <button style={{ padding: "9px 24px", background: "#20639B", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 600 }}>Cari</button>
                  <button onClick={handleReset} style={{ padding: "9px 20px", background: "#fff", color: "#555", border: "1px solid #e0e0e0", borderRadius: 8, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>Reset</button>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #f0f0f0" }}>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#333" }}>Daftar Perangkat Ajar</h3>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#f5f5f5" }}>
                        {["No", "Mata Pelajaran", "Silabus", "RPP", "Modul Ajar", "Status Umum", "Aksi"].map((h) => (
                          <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 13, fontWeight: 600, color: "#333", whiteSpace: "nowrap", borderBottom: "1px solid #e0e0e0" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {paginated.length === 0 ? (
                        <tr>
                          <td colSpan={7} style={{ textAlign: "center", padding: 32, color: "#aaa", fontSize: 13 }}>Tidak ada data ditemukan</td>
                        </tr>
                      ) : (
                        paginated.map((d, i) => (
                          <tr key={d.id} style={{ borderBottom: "1px solid #f5f5f5", transition: "background 0.15s" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fbfd")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                            <td style={{ padding: "12px 16px", fontSize: 13, color: "#999", width: 48 }}>{(page - 1) * ITEMS_PER_PAGE + i + 1}</td>
                            <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600, color: "#222" }}>{d.mataPelajaran}</td>
                            <td style={{ padding: "12px 16px" }}>{docBadge(d.silabus)}</td>
                            <td style={{ padding: "12px 16px" }}>{docBadge(d.rpp)}</td>
                            <td style={{ padding: "12px 16px" }}>{docBadge(d.modulAjar)}</td>
                            <td style={{ padding: "12px 16px" }}>{statusBadge(d.status)}</td>
                            <td style={{ padding: "12px 16px" }}>
                              <button
                                onClick={() => handleOpenDetail(d)}
                                style={{ padding: "5px 14px", background: "#20639B", color: "#fff", border: "none", borderRadius: 6, fontSize: 12, cursor: "pointer", fontWeight: 600 }}
                              >
                                Detail
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "16px 20px", borderTop: "1px solid #f0f0f0" }}>
                  <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} style={{ padding: "7px 18px", borderRadius: 8, border: "1px solid #e0e0e0", background: page === 1 ? "#f5f5f5" : "#20639B", color: page === 1 ? "#bbb" : "#fff", fontSize: 12, cursor: page === 1 ? "not-allowed" : "pointer", fontWeight: 600 }}>Sebelumnya</button>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button key={i} onClick={() => setPage(i + 1)} style={{ width: 32, height: 32, borderRadius: 8, border: page === i + 1 ? "none" : "1px solid #e0e0e0", background: page === i + 1 ? "#20639B" : "#fff", color: page === i + 1 ? "#fff" : "#555", fontSize: 12, cursor: "pointer", fontWeight: page === i + 1 ? 700 : 400 }}>{i + 1}</button>
                    ))}
                  </div>
                  <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ padding: "7px 18px", borderRadius: 8, border: "1px solid #e0e0e0", background: page === totalPages ? "#f5f5f5" : "#20639B", color: page === totalPages ? "#bbb" : "#fff", fontSize: 12, cursor: page === totalPages ? "not-allowed" : "pointer", fontWeight: 600 }}>Selanjutnya</button>
                </div>
              </div>
            </>
          )}

          {/* VIEW 2: DETAIL 3 KARTU (SAMA PERSIS) */}
          {view === "detail" && (
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", marginBottom: 24, fontSize: 22, fontWeight: 700, color: "#333" }}>Detail Perangkat Mengajar</h2>

              <div style={{ background: "#fff", padding: "20px 24px", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 24 }}>
                <div style={{ display: "grid", gap: "8px", fontSize: 14 }}>
                  <div><span style={{ color: "#888", width: 120, display: "inline-block" }}>Nama Guru</span> : <strong>{selectedTeacher.nama}</strong></div>
                  <div><span style={{ color: "#888", width: 120, display: "inline-block" }}>Mata Pelajaran</span> : <strong>{selectedTeacher.mataPelajaran}</strong></div>
                  <div><span style={{ color: "#888", width: 120, display: "inline-block" }}>Semester</span> : <strong>{selectedTeacher.semester}</strong></div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {Object.keys(selectedTeacher.docs).map((docName) => {
                  const doc = selectedTeacher.docs[docName];
                  const isApprove = doc.status === "Approve";
                  const isRevisi = doc.status === "Revisi";

                  return (
                    <div key={docName} style={{ background: "#fff", padding: "24px 20px", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
                      <h3 style={{ fontSize: 18, marginTop: 0, marginBottom: 12, color: "#333" }}>{docName}</h3>
                      <p style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>
                        Status:{" "}
                        <span style={{ fontWeight: 700, color: isApprove ? "#1e7e34" : isRevisi ? "#c0392b" : "#20639B" }}>
                          {doc.status}
                        </span>
                      </p>
                      <p style={{ fontSize: 12, color: "#999", marginBottom: 20 }}>Upload: {doc.uploadDate}</p>

                      {renderDocButton(docName, doc)}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
                <button
                  onClick={() => setView("list")}
                  style={{ padding: "9px 24px", background: "#f5f5f5", color: "#555", border: "1px solid #e0e0e0", borderRadius: 8, cursor: "pointer", fontWeight: 600 }}
                >
                  Kembali ke Daftar
                </button>
              </div>
            </div>
          )}

          {/* VIEW 3: REVIEW DOKUMEN & CATATAN (DIPERBARUI SUSUNANNYA SESUAI IMAGE) */}
          {view === "review" && (
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <h2 style={{ marginBottom: 24, fontSize: 22, fontWeight: 700, color: "#333" }}>
                Review Dokumen - {selectedDocName}
              </h2>

              {/* Box 1: Info Guru */}
              <div style={{ background: "#fff", padding: "24px", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 20 }}>
                <div style={{ display: "grid", gap: "10px", fontSize: 14, color: "#333" }}>
                  <div style={{ display: "flex" }}>
                      <span style={{ width: 140, color: "#888" }}>Nama Guru</span>
                      <strong>{selectedTeacher.nama}</strong>
                  </div>
                  <div style={{ display: "flex" }}>
                      <span style={{ width: 140, color: "#888" }}>Mata Pelajaran</span>
                      <strong>{selectedTeacher.mataPelajaran}</strong>
                  </div>
                  <div style={{ display: "flex" }}>
                      <span style={{ width: 140, color: "#888" }}>Semester</span>
                      <strong>{selectedTeacher.semester}</strong>
                  </div>
                </div>
              </div>

              {/* Box 2: PDF Preview & Download Button */}
              <div style={{ background: "#fff", padding: "24px", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Area Kotak PDF */}
                <div style={{ width: "100%", height: 400, border: "1px solid #e0e0e0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f9f9", marginBottom: 20 }}>
                  <strong style={{ fontSize: 24, color: "#888" }}>PDF</strong>
                </div>
                
                {/* Tombol Download */}
                <button
                  onClick={() => alert(`Mengunduh file: ${selectedDocName}_${selectedTeacher.nama}.pdf`)}
                  style={{
                    padding: "10px 24px",
                    background: "#20639B",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14
                  }}
                >
                  <span style={{ fontSize: 16 }}>⬇️</span> Download Dokumen
                </button>
              </div>

              {/* Box 3: Catatan Textarea */}
              <div style={{ background: "#fff", padding: "24px", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 24 }}>
                <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 16, color: "#333", fontWeight: 700 }}>Catatan</h3>
                <textarea
                  value={tempCatatan}
                  onChange={(e) => setTempCatatan(e.target.value)}
                  placeholder="Ketik catatan revisi atau masukan di sini..."
                  style={{
                    width: "100%",
                    minHeight: 120,
                    padding: "12px",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    fontSize: 14,
                    color: "#333",
                    fontFamily: "inherit",
                    background: "#fdfdfd"
                  }}
                />
              </div>

              {/* Action Buttons di Kanan Bawah */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginBottom: 40 }}>
                <button
                  onClick={() => setView("detail")}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "1px solid #e0e0e0", background: "#fff", color: "#555", cursor: "pointer", fontWeight: 600 }}
                >
                  Batal
                </button>
                {selectedTeacher.docs[selectedDocName].status !== "Approve" && (
                  <>
                    <button
                      onClick={() => handleFinalAction("REVISI")}
                      style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: "#4ea8de", color: "#fff", fontWeight: 600, cursor: "pointer" }}
                    >
                      Revisi
                    </button>
                    <button
                      onClick={() => handleFinalAction("APPROVE")}
                      style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: "#20639B", color: "#fff", fontWeight: 600, cursor: "pointer" }}
                    >
                      Approve
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}