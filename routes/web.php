<?php

use App\Http\Controllers\ProfileController;
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

use App\Models\Pet;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/pets', function () {
    $pets = Pet::all();
    return view('pets.index', ['pets' => $pets]);
});

Route::get('/pets/{id}', function ($id) {
    $pet = Pet::find($id);
    return view('pets.show', ['pet' => $pet]);
});

Route::post('/pets', function (Request $request) {
    $pet = new Pet();
    $pet->name = $request->name;
    $pet->species = $request->species;
    $pet->breed = $request->breed;
    $pet->age = $request->age;
    $pet->price = $request->price;
    $pet->save();

    return redirect('/pets');
});

