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

// ── Guru Mapel Routes ──
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

// ── Wali Kelas Routes ──
Route::prefix('/wali-kelas')->name('wali-kelas.')->group(function () {

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
        // TODO: simpan data parenting ke database
        return redirect()->route('wali-kelas.parenting');
    })->name('parenting.store');

    Route::get('/kebersihan', function () {
        return Inertia::render('WaliKelas/KebersihanKelas');
    })->name('kebersihan');

    Route::post('/kebersihan', function () {
        // TODO: simpan data kebersihan ke database
        return redirect()->route('wali-kelas.kebersihan');
    })->name('kebersihan.store');

    Route::get('/refleksi', function () {
        return Inertia::render('WaliKelas/Refleksi');
    })->name('refleksi');

    Route::post('/refleksi', function () {
        // TODO: simpan data refleksi ke database
        return redirect()->route('wali-kelas.refleksi');
    })->name('refleksi.store');

});

// ── Kepala Sekolah Routes ──
Route::get('/absensi-siswa', function () {
    return Inertia::render('app/kepala-sekolah/AbsensiSiswa');
})->name('absensi.siswa');

Route::get('/absensi-guru', function () {
    return Inertia::render('app/kepala-sekolah/AbsensiGuru');
})->name('absensi.guru');

// ── Authenticated Routes ──
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
