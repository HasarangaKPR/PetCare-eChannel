<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PetAdController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//add pet ad edit ad delete ad update ad
Route::get('/CreateAd', [PetAdController::class, 'index'])->name('CreateAd'); 
Route::post('/CreateAd',[PetAdController::class, 'store'])->name('CreateAd');
Route::get('/showAd/{id}',[PetAdController::class, 'showAd'])->name('showAd');
Route::put('/updateAd/{id}',[PetAdController::class, 'updateAd'])->name('updateAd');
Route::delete('/deleteAd/{id}',[PetAdController::class, 'destroy'])->name('deleteAd');
