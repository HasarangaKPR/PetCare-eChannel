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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

//Route::resource('Ads', PetAdController::class);
//add pet ad edit ad delete ad update ad 
Route::post('/Ads/create',[PetAdController::class, 'store'])->name('store');
//Route::get('/showAd/{id}',[PetAdController::class, 'showAd'])->name('showAd');
//Route::put('/updateAd/{id}',[PetAdController::class, 'updateAd'])->name('updateAd');
//Route::get('/editAd',[PetAdController::class, 'editAd'])->name('editAd');
//Route::delete('/deleteAd/{id}',[PetAdController::class, 'deleteAd'])->name('deleteAd');
Route::get('/Ads', [PetAdController::class, 'index']);
Route::get('/Ads/create', function () {
    return view('Ads.create');
});