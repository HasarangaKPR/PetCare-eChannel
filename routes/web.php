<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\DoctorAppointmentController;
use App\Http\Controllers\DayCareCenterController;
use App\Http\Controllers\DayCareCenterBookingController;


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//SystemAdmin dashboard routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/systemadmin/dashboard', function () {
        return Inertia::render('SystemAdmin/SAdashboard');
    })->name('systemadmin.dashboard');

    Route::get('/systemadmin/profile', function () {
        return Inertia::render('SystemAdmin/SAProfile');
    })->name('systemadmin.profile');

    Route::get('/systemadmin/doctors', function () {
        return Inertia::render('SystemAdmin/SADoctors');
    })->name('systemadmin.doctors');

    Route::get('/systemadmin/daycare-admin', function () {
        return Inertia::render('SystemAdmin/SADaycareAdmin');
    })->name('systemadmin.daycareadmin');

    Route::get('/systemadmin/users', function () {
        return Inertia::render('SystemAdmin/SAUsers');
    })->name('systemadmin.users');
});

//Doctor dashboard routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/doctor/dashboard', function () {
        return Inertia::render('Doctors/Ddashboard');
    })->name('doctor.dashboard');

    Route::get('/doctor/profile', function () {
        return Inertia::render('Doctors/DProfile');
    })->name('doctor.profile');

    Route::get('/doctor/appointments', function () {
        return Inertia::render('Doctors/DAppointments');
    })->name('doctor.Appointments');
});

//Daycare dashboard routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/daycare/dashboard', function () {
        return Inertia::render('Daycare/CDashboard');
    })->name('daycare.dashboard');

    Route::get('/daycare/profile', function () {
        return Inertia::render('Daycare/CProfile');
    })->name('daycare.profile');

    Route::get('/daycare/bookings', function () {
        return Inertia::render('Daycare/CBookings');
    })->name('daycare.Bookings');
});

require __DIR__.'/auth.php';


//Add or Display Users
Route::post('/addUser', [UserController::class, 'addUser'])->name('addUser');
Route::get('/allUsers', [UserController::class, 'allUsers'])->name('allUsers');

//Add Doctors & Search Doctors
Route::put('/updateDoctor', [DoctorController::class, 'updateDoctor'])->name('updateDoctor');
Route::get('/searchDoctor', [DoctorController::class, 'searchDoctor'])->name('searchDoctor');
Route::get('/viewDoctors', [DoctorController::class, 'viewDoctors'])->name('viewDoctors');
Route::delete('/deleteDoctor/{userId}', [DoctorController::class, 'deleteDoctor'])->name('deleteDoctor/{userId}');

//Add Doctors Appointments
Route::post('/addDoctorAppointment', [DoctorAppointmentController::class, 'addDoctorAppointment'])->name('addDoctorAppointment');
Route::get('/displayToDoctorAppointment', [DoctorAppointmentController::class, 'displayToDoctorAppointment'])->name('displayToDoctorAppointment');
Route::get('/displayToUserDoctorAppointment', [DoctorAppointmentController::class, 'displayToUserDoctorAppointment'])->name('displayToUserDoctorAppointment');

//Add DayCareCenter & Search DayCareCenter
Route::put('/updateDayCareCenter', [DayCareCenterController::class, 'updateDayCareCenter'])->name('updateDayCareCenter');
Route::get('/searchDayCareCenter', [DayCareCenterController::class, 'searchDayCareCenter'])->name('searchDayCareCenter');
Route::post('/bookroom', [DayCareCenterBookingController::class, 'bookRoom'])->name('bookroom');
Route::get('/viewDayCare', [DayCareCenterController::class, 'viewDayCare'])->name('viewDayCare');


//Add DayCareCenter Appointments
Route::post('/addDayCareCenterBooking', [DayCareCenterBookingController::class, 'addDayCareCenterBooking'])->name('addDayCareCenterBooking');
//Route::get('/displayToDayCareCenterAppointment', [DayCareCenterAppointmentController::class, 'displayToDayCareCenterAppointment'])->name('displayToDayCareCenterAppointment');
//Route::get('/displayToUserDayCareCenterAppointment', [DayCareCenterAppointmentController::class, 'displayToUserDayCareCenterAppointment'])->name('displayToUserDayCareCenterAppointment');



//Home roughts
Route::get('/', function () {
    return Inertia::render('User/Home1', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('user.home1');

Route::get('/home2', function () {
    return Inertia::render('User/Home2', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('user.home2');

Route::get('/home3', function () {
    return Inertia::render('User/Home3', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('user.home3');


Route::get('/user/searchresults', function () {
    return Inertia::render('User/SearchResultsDoctor');
})->name('user.searchresults');