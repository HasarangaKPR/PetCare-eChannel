<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PetController;

// Home route (optional)
Route::get('/', function () {
    return view('welcome'); // Change to your desired welcome view
});

// Route to show all pet ads
Route::get('/pets', [PetController::class, 'index'])->name('pets.index');

// Route to handle form submission for posting a new pet ad
Route::post('/pets', [PetController::class, 'store'])->name('pets.store');

