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

// --- ROUTE PUBLIC (Bisa diakses tanpa login untuk cek desain) ---

Route::get('/evaluasi-kinerja', function () {
    return Inertia::render('app/kepala-sekolah/EvaluasiKinerjaGuru');
})->name('evaluasi.guru');

Route::get('/absensi-siswa', function () {
    return Inertia::render('AbsensiSiswa');
})->name('absensi.siswa');

Route::get('/absensi-guru', function () {
    return Inertia::render('AbsensiGuru');
})->name('absensi.guru');

Route::get('/pkl-laporan', function () {
    return Inertia::render('app/kepala-sekolah/PKL');
})->name('pkl.laporan');


// --- ROUTE PRIVATE (Harus Login) ---

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
}); // <--- Ini penutup yang tadi hilang!

require __DIR__.'/auth.php';