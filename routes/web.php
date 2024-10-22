<?php

use App\Http\Controllers\PetController;

Route::get('/pets', [PetController::class, 'index']);  // Route to show the list of all pets
Route::get('/pets/create', function () {
    return view('pets.create');  // Route to display the pet ad creation form
});
Route::post('/pets', [PetController::class, 'store']);  // Route to handle form submission and save the new pet



