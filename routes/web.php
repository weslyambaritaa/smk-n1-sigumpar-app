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

Route::prefix('wakepsek')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Wakepsek/Dashboard');
    });
    Route::get('/daftar-guru', function () {
        return Inertia::render('Wakepsek/DaftarGuru');
    });
    Route::get('/detail-pembelajaran', function () {
        return Inertia::render('Wakepsek/DetailPembelajaran');
    });
    Route::get('/form-instruksi', function () {
        return Inertia::render('Wakepsek/FormInstruksi');
    });
    Route::post('/form-instruksi/send', function () {
        return redirect('/wakepsek/form-instruksi');
    });
});

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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/absensi-siswa', function () {
    return Inertia::render('AbsensiSiswa');
})->name('absensi.siswa');

Route::get('/absensi-guru', function () {
    return Inertia::render('AbsensiGuru');
})->name('absensi.guru');

require __DIR__.'/auth.php';