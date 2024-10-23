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

//routes for selling page
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/selling/home', function () {
        return Inertia::render('Selling/Home');
    })->name('selling.home');

    Route::get('/selling/postad', function () {
        return Inertia::render('Selling/PostAd');
    })->name('selling.postad');

    Route::get('/selling/adprofile', function () {
        return Inertia::render('Selling/AdProfile');
    })->name('selling.adprofile');

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
