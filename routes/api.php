<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PetController;

// API route to get all pets (GET request)
Route::get('/pets', [PetController::class, 'index'])->name('api.pets.index');

// API route to post a new pet ad (POST request)
Route::post('/pets', [PetController::class, 'store'])->name('api.pets.store');

// Example protected route that requires authentication (optional)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

