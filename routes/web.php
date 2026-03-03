<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('app/tata-usaha/tata-usaha-page', [
        'tuList' => ['data' => [], 'last_page' => 1],
        'auth' => ['user' => auth()->user()],
        'appName' => config('app.name'),
        'perPage' => 10,
    ]);
})->name('tata-usaha');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('wakepsek')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Wakepsek/Dashboard');
    })->name('wakepsek.dashboard');
    Route::get('/daftar-guru', function () {
        return Inertia::render('Wakepsek/DaftarGuru');
    })->name('wakepsek.daftar-guru');
    Route::get('/detail-pembelajaran', function () {
        return Inertia::render('Wakepsek/DetailPembelajaran');
    })->name('wakepsek.detail-pembelajaran');
    Route::get('/form-instruksi', function () {
        return Inertia::render('Wakepsek/FormInstruksi');
    })->name('wakepsek.form-instruksi');
    Route::post('/form-instruksi/send', function () {
        return redirect('/wakepsek/form-instruksi');
    })->name('wakepsek.form-instruksi.send');
});

Route::prefix('guru-mapel')->name('guru-mapel.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('GurumapelDashboard');
    })->name('dashboard');
    Route::get('/absensi', function () {
        return Inertia::render('GuruMapel/Absensi');
    })->name('absensi');
    Route::get('/perangkat', function () {
        return Inertia::render('GuruMapel/Perangkat');
    })->name('perangkat');
    Route::get('/nilai', function () {
        return Inertia::render('GuruMapel/Nilai');
    })->name('nilai');
    Route::get('/catatan', function () {
        return Inertia::render('GuruMapel/Catatan');
    })->name('catatan');
    Route::get('/laporan', function () {
        return Inertia::render('GuruMapel/Laporan');
    })->name('laporan');
});

Route::prefix('wali-kelas')->name('wali-kelas.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('WaliKelas/Dashboard');
    })->name('dashboard');
    Route::get('/kehadiran', function () {
        return Inertia::render('WaliKelas/RekapKehadiran');
    })->name('kehadiran');
    Route::get('/nilai', function () {
        return Inertia::render('WaliKelas/RekapNilai');
    })->name('nilai');
    Route::get('/parenting', function () {
        return Inertia::render('WaliKelas/Parenting');
    })->name('parenting');
    Route::post('/parenting', function () {
        return redirect()->route('wali-kelas.parenting');
    })->name('parenting.store');
    Route::get('/kebersihan', function () {
        return Inertia::render('WaliKelas/KebersihanKelas');
    })->name('kebersihan');
    Route::post('/kebersihan', function () {
        return redirect()->route('wali-kelas.kebersihan');
    })->name('kebersihan.store');
    Route::get('/refleksi', function () {
        return Inertia::render('WaliKelas/Refleksi');
    })->name('refleksi');
    Route::post('/refleksi', function () {
        return redirect()->route('wali-kelas.refleksi');
    })->name('refleksi.store');
});

Route::prefix('kepala-sekolah')->group(function () {
    Route::get('/absensi-siswa', function () {
        return Inertia::render('app/kepala-sekolah/AbsensiSiswa');
    })->name('kepsek.absensi-siswa');
    Route::get('/absensi-guru', function () {
        return Inertia::render('app/kepala-sekolah/AbsensiGuru');
    })->name('kepsek.absensi-guru');
    Route::get('/perangkat-ajar', function () {
        return Inertia::render('app/kepala-sekolah/PerangkatAjar');
    })->name('kepsek.perangkat-ajar');
    Route::get('/evaluasi-kinerja', function () {
        return Inertia::render('app/kepala-sekolah/EvaluasiKinerjaGuru');
    })->name('kepsek.evaluasi-kinerja');
    Route::get('/pkl', function () {
        return Inertia::render('app/kepala-sekolah/PKL');
    })->name('kepsek.pkl');
});

Route::prefix('tata-usaha')->group(function () {
    Route::get('/arsip-surat', function () {
        return Inertia::render('app/tata-usaha/tata-usaha-arsip-surat');
    })->name('tata-usaha.arsip-surat');
    Route::get('/input-data-guru', function () {
        return Inertia::render('app/tata-usaha/tata-usaha-input-data-guru');
    })->name('tata-usaha.input-data-guru');
    Route::get('/input-data-siswa', function () {
        return Inertia::render('app/tata-usaha/tata-usaha-input-data-siswa');
    })->name('tata-usaha.input-data-siswa');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
