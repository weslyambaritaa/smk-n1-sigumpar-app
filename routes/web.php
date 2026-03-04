<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Guru Mapel Routes - Demo Mode (No Auth Required)
Route::prefix('/guru-mapel')->name('guru-mapel.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('GurumapelDashboard');
    })->name('dashboard');
});

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

// Authenticated Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ... kode rute lainnya di atas ...

Route::get('/absensi-siswa', function () {

    return Inertia::render('app/kepala-sekolah/AbsensiSiswa');
})->name('absensi.siswa');

Route::get('/absensi-guru', function () {

    return Inertia::render('app/kepala-sekolah/AbsensiGuru');
})->name('absensi.guru');


Route::get('/perangkat-ajar', function () {
    return Inertia::render('app/kepala-sekolah/PerangkatAjar');
})->name('perangkat.ajar');

Route::get('/evaluasi-kinerja', function () {
    return Inertia::render('app/kepala-sekolah/EvaluasiKinerjaGuru');
})->name('evaluasi.kinerja');


Route::get('/pkl', function () {
    return Inertia::render('app/kepala-sekolah/PKL');
})->name('pkl');

// Temporary preview routes for Tata Usaha pages (no auth)
Route::get('/tata-usaha/jadwal-guru', function () {
    return Inertia::render('app/tata-usaha/tata-usaha-jadwal-guru');
});

Route::get('/tata-usaha/jadwal-piket', function () {
    return Inertia::render('app/tata-usaha/tata-usaha-jadwal-piket');
});

Route::get('/tata-usaha/pengumuman', function () {
    return Inertia::render('app/tata-usaha/tata-usaha-pengumuman');
});

Route::get('/tata-usaha/jadwal-upacara', function () {
    return Inertia::render('app/tata-usaha/tata-usaha-jadwal-upacara');
});

require __DIR__.'/auth.php';