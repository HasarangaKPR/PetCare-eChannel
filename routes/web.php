<?php

use App\Http\Controllers\PetAdController;
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

require __DIR__.'/auth.php';
//add pet ad edit ad delete ad update ad 
Route::post('/createAd',[PetAdController::class, 'createAd'])->name('createAd');
Route::get('/showAd',[PetAdController::class, 'showAd'])->name('showAd');
Route::put('/updateAd',[PetAdController::class, 'updateAd'])->name('updateAd');
Route::get('/editAd',[PetAdController::class, 'editAd'])->name('editAd');
Route::delete('/deleteAd',[PetAdController::class, 'deleteAd'])->name('deleteAd');
Route::get('/viewAds', [PetAdController::class, 'index'])->name('viewAds'); 