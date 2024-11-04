<?php

use App\Http\Controllers\PetAdController;
use App\Http\Controllers\ProfileController;
use App\Models\PetAd;
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

//add post delete update view route 
Route::get('/ViewallAd', [PetAdController::class, 'index'])->name('ViewallAd'); 
Route::post('/CreateAd',[PetAdController::class, 'store'])->name('CreateAd');
Route::get('/showAd',[PetAdController::class, 'showAd'])->name('showAd');
Route::put('/updateAd/{adId}',[PetAdController::class, 'updateAd'])->name('updateAd');
Route::delete('/deleteAd/{adId}',[PetAdController::class, 'destroy'])->name('deleteAd');

// view details page
 //Route::get('/showAd/{adId}', [PetAdController::class, 'showAd'])->name('showAd');

 //use App\Http\Controllers\BlogController;

