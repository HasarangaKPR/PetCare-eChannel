<?php

use App\Http\Controllers\PetController;

Route::get('/pets', [PetController::class, 'index'])->name('pets.index'); // Display all pets
Route::get('/pets/create', [PetController::class, 'create'])->name('pets.create'); // Show form to create a new pet
Route::post('/pets', [PetController::class, 'store'])->name('pets.store'); // Handle form submission and save new pet



