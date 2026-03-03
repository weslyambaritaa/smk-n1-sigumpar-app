<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Halaman pertama langsung ke Dashboard Guru Vokasi
Route::get('/', function () {
    return Inertia::render('GuruVokasi/Dashboard');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// GURU VOKASI
Route::prefix('guru-vokasi')->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('GuruVokasi/Dashboard'))->name('guru-vokasi.dashboard');
    Route::get('/absensi', fn() => Inertia::render('GuruVokasi/Absensi'))->name('guru-vokasi.absensi');
    Route::get('/nilai', fn() => Inertia::render('GuruVokasi/Nilai'))->name('guru-vokasi.nilai');
    Route::get('/jurnal', fn() => Inertia::render('GuruVokasi/Jurnal'))->name('guru-vokasi.jurnal');
    Route::get('/perangkat', fn() => Inertia::render('GuruVokasi/Perangkat'))->name('guru-vokasi.perangkat');
    Route::get('/pkl', fn() => Inertia::render('GuruVokasi/PKL'))->name('guru-vokasi.pkl');
    Route::get('/laporan', fn() => Inertia::render('GuruVokasi/Laporan'))->name('guru-vokasi.laporan');
});

// WAKEPSEK
Route::prefix('wakepsek')->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Wakepsek/Dashboard'))->name('wakepsek.dashboard');
    Route::get('/daftar-guru', fn() => Inertia::render('Wakepsek/DaftarGuru'))->name('wakepsek.daftar-guru');
    Route::get('/detail-pembelajaran', fn() => Inertia::render('Wakepsek/DetailPembelajaran'))->name('wakepsek.detail-pembelajaran');
    Route::get('/form-instruksi', fn() => Inertia::render('Wakepsek/FormInstruksi'))->name('wakepsek.form-instruksi');
    Route::post('/form-instruksi/send', fn() => redirect('/wakepsek/form-instruksi'))->name('wakepsek.form-instruksi.send');
});

// WALI KELAS
Route::prefix('wali-kelas')->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('WaliKelas/Dashboard'))->name('walikelas.dashboard');
    Route::get('/kebersihan-kelas', fn() => Inertia::render('WaliKelas/KebersihanKelas'))->name('walikelas.kebersihan-kelas');
    Route::get('/parenting', fn() => Inertia::render('WaliKelas/Parenting'))->name('walikelas.parenting');
    Route::get('/refleksi', fn() => Inertia::render('WaliKelas/Refleksi'))->name('walikelas.refleksi');
    Route::get('/rekap-kehadiran', fn() => Inertia::render('WaliKelas/RekapKehadiran'))->name('walikelas.rekap-kehadiran');
    Route::get('/rekap-nilai', fn() => Inertia::render('WaliKelas/RekapNilai'))->name('walikelas.rekap-nilai');
});

// KEPALA SEKOLAH
Route::prefix('kepala-sekolah')->group(function () {
    Route::get('/absensi-siswa', fn() => Inertia::render('app/kepala-sekolah/AbsensiSiswa'))->name('kepsek.absensi-siswa');
    Route::get('/absensi-guru', fn() => Inertia::render('app/kepala-sekolah/AbsensiGuru'))->name('kepsek.absensi-guru');
    Route::get('/perangkat-ajar', fn() => Inertia::render('app/kepala-sekolah/PerangkatAjar'))->name('kepsek.perangkat-ajar');
    Route::get('/evaluasi-kinerja', fn() => Inertia::render('app/kepala-sekolah/EvaluasiKinerjaGuru'))->name('kepsek.evaluasi-kinerja');
    Route::get('/pkl', fn() => Inertia::render('app/kepala-sekolah/PKL'))->name('kepsek.pkl');
});

// GURU MAPEL
Route::prefix('guru-mapel')->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('GurumapelDashboard'))->name('guru-mapel.dashboard');
    Route::get('/absensi', fn() => Inertia::render('GuruMapel/Absensi'))->name('guru-mapel.absensi');
    Route::get('/perangkat', fn() => Inertia::render('GuruMapel/Perangkat'))->name('guru-mapel.perangkat');
    Route::get('/nilai', fn() => Inertia::render('GuruMapel/Nilai'))->name('guru-mapel.nilai');
    Route::get('/catatan', fn() => Inertia::render('GuruMapel/Catatan'))->name('guru-mapel.catatan');
    Route::get('/laporan', fn() => Inertia::render('GuruMapel/Laporan'))->name('guru-mapel.laporan');
});

// TATA USAHA
Route::prefix('tata-usaha')->group(function () {
    Route::get('/arsip-surat', fn() => Inertia::render('app/tata-usaha/tata-usaha-arsip-surat'))->name('tata-usaha.arsip-surat');
    Route::get('/input-data-guru', fn() => Inertia::render('app/tata-usaha/tata-usaha-input-data-guru'))->name('tata-usaha.input-data-guru');
    Route::get('/input-data-siswa', fn() => Inertia::render('app/tata-usaha/tata-usaha-input-data-siswa'))->name('tata-usaha.input-data-siswa');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';