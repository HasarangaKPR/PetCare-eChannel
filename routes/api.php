<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PetAdController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//add pet ad
Route::post('/createAd',[PetAdController::class, 'createAd'])->name('createAd');
//Route::post('/createAd','PetAdController@createAd');

//Route::resource('Ads', PetAdController::class);
//add pet ad edit ad delete ad update ad 
Route::post('/Ads',[PetAdController::class, 'store'])->name('Ads');
//Route::get('/showAd/{id}',[PetAdController::class, 'showAd'])->name('showAd');
//Route::put('/updateAd/{id}',[PetAdController::class, 'updateAd'])->name('updateAd');
//Route::get('/editAd',[PetAdController::class, 'editAd'])->name('editAd');
//Route::delete('/deleteAd/{id}',[PetAdController::class, 'deleteAd'])->name('deleteAd');
Route::get('/Ads', [PetAdController::class, 'index']);
Route::get('/Ads/create', function () {
    return view('Ads.create');
});