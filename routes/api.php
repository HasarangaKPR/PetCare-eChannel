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