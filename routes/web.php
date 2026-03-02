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

require __DIR__.'/auth.php';