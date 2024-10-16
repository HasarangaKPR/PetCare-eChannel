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

Route::get('/systemadmin/dashboard', function () {
    return Inertia::render('SystemAdmin/SAdashboard');
})->name('systemadmin.dashboard');

Route::get('/systemadmin/profile', function () {
    return Inertia::render('SystemAdmin/SAProfile');
})->name('systemadmin.profile');

Route::get('/systemadmin/doctors', function () {
    return Inertia::render('SystemAdmin/SADoctors');
})->name('systemadmin.doctors');

Route::get('/systemadmin/daycare-admin', function () {
    return Inertia::render('SystemAdmin/SADaycareAdmin');
})->name('systemadmin.daycareadmin');

Route::get('/systemadmin/users', function () {
    return Inertia::render('SystemAdmin/SAUsers');
})->name('systemadmin.users');

require __DIR__.'/auth.php';
