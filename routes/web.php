<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\DoctorAppointmentController;

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

//Add or Display Users
Route::post('/addUser', [UserController::class, 'addUser'])->name('addUser');
Route::get('/allUsers', [UserController::class, 'allUsers'])->name('allUsers');

//Add Doctors & Search Doctors
Route::post('/addDoctor', [DoctorController::class, 'addDoctor'])->name('addDoctor');
Route::get('/searchDoctor', [DoctorController::class, 'searchDoctor'])->name('searchDoctor');

//Add Doctors Appointments
Route::post('/addDoctorAppointment', [DoctorAppointmentController::class, 'addDoctorAppointment'])->name('addDoctorAppointment');
Route::get('/displayToDoctorAppointment', [DoctorAppointmentController::class, 'displayToDoctorAppointment'])->name('displayToDoctorAppointment');
Route::get('/displayToUserDoctorAppointment', [DoctorAppointmentController::class, 'displayToUserDoctorAppointment'])->name('displayToUserDoctorAppointment');
