<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PetAdController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//add pet ad edit ad delete ad update ad
Route::get('/ViewallAd', [PetAdController::class, 'index'])->name('ViewallAd'); 
Route::post('/CreateAd',[PetAdController::class, 'store'])->name('CreateAd');
Route::get('/showAd/{adId}',[PetAdController::class, 'showAd'])->name('showAd');
Route::put('/updateAd/{adId}',[PetAdController::class, 'updateAd'])->name('updateAd');
Route::delete('/deleteAd/{adId}',[PetAdController::class, 'destroy'])->name('deleteAd');
