<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\DoctorAppointmentController;
use App\Http\Controllers\DayCareCenterController;
use App\Http\Controllers\DayCareCenterBookingController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Add or Display Users
Route::post('/addUser', [UserController::class, 'addUser'])->name('addUser');
Route::get('/allUsers', [UserController::class, 'allUsers'])->name('allUsers');

//Add Doctors & Search Doctors
Route::put('/updateDoctor', [DoctorController::class, 'updateDoctor'])->name('updateDoctor');
Route::get('/searchDoctor', [DoctorController::class, 'searchDoctor'])->name('searchDoctor');
Route::get('/cityDoctors', [DoctorController::class, 'cityDoctors'])->name('cityDoctors');
Route::get('/viewDoctors', [DoctorController::class, 'viewDoctors'])->name('viewDoctors');
Route::delete('/deleteDoctor/{userId}', [DoctorController::class, 'deleteDoctor'])->name('deleteDoctor/{userId}');

//Add Doctors Appointments
Route::post('/addDoctorAppointment', [DoctorAppointmentController::class, 'addDoctorAppointment'])->name('addDoctorAppointment');
Route::get('/displayToDoctorAppointment', [DoctorAppointmentController::class, 'displayToDoctorAppointment'])->name('displayToDoctorAppointment');
Route::get('/displayToUserDoctorAppointment', [DoctorAppointmentController::class, 'displayToUserDoctorAppointment'])->name('displayToUserDoctorAppointment');

//Add DayCareCenter & Search DayCareCenter
Route::put('/updateDayCareCenter', [DayCareCenterController::class, 'updateDayCareCenter'])->name('updateDayCareCenter');
Route::get('/searchDayCareCenter', [DayCareCenterController::class, 'searchDayCareCenter'])->name('searchDayCareCenter');
Route::get('/cityDaycare', [DayCareCenterController::class, 'cityDaycare'])->name('cityDaycare');
Route::post('/bookroom', [DayCareCenterBookingController::class, 'bookRoom'])->name('bookroom');
Route::get('/viewDayCare', [DayCareCenterController::class, 'viewDayCare'])->name('viewDayCare');

//Add DayCareCenter Appointments
Route::post('/addDayCareCenterBooking', [DayCareCenterBookingController::class, 'addDayCareCenterBooking'])->name('addDayCareCenterBooking');
Route::get('/displayToDayCareCenterAppointment', [DayCareCenterBookingController::class, 'displayToDayCareCenterAppointment'])->name('displayToDayCareCenterAppointment');
Route::get('/displayToUserDayCareCenterAppointment', [DayCareCenterBookingController::class, 'displayToUserDayCareCenterAppointment'])->name('displayToUserDayCareCenterAppointment');


//summary
Route::get('/adminSummary', [UserController::class, 'adminSummary'])->name('adminSummary');
Route::get('/doctorSummary', [DoctorAppointmentController::class, 'doctorSummary'])->name('doctorSummary');
Route::get('/dayCareSummary', [DayCareCenterBookingController::class, 'dayCareSummary'])->name('dayCareSummary');
