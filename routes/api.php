<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Add or Display Users
Route::post('/addUser', [UserController::class, 'addUser'])->name('addUser');
Route::get('/allUsers', [UserController::class, 'allUsers'])->name('allUsers');

//Add Chanelling Centers & Search Chanelling Centers
Route::post('/addDoctor', [DoctorController::class, 'addDoctor'])->name('addDoctor');
Route::get('/searchDoctor', [DoctorController::class, 'searchDoctor'])->name('searchDoctor');

//Add Chanelling Centers Appointments
Route::post('/addDoctorAppointment', [DoctorAppointmentController::class, 'addDoctorAppointment'])->name('addDoctorAppointment');
Route::get('/displayToDoctorAppointment', [DoctorAppointmentController::class, 'displayToDoctorAppointment'])->name('displayToDoctorAppointment');
Route::get('/displayToUserDoctorAppointment', [DoctorAppointmentController::class, 'displayToUserDoctorAppointment'])->name('displayToUserDoctorAppointment');
