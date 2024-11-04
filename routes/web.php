<?php

use App\Http\Controllers\PetAdController;
use App\Http\Controllers\ProfileController;
use App\Models\PetAd;
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

//routes for selling page
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/selling/home', function () {
        return Inertia::render('Selling/Home');
    })->name('selling.home');

    Route::get('/selling/postad', function () {
        return Inertia::render('Selling/PostAd');
    })->name('selling.postad');

    Route::get('/selling/adprofile', function () {
        return Inertia::render('Selling/AdProfile');
    })->name('selling.adprofile');



});



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

//User dashboard routes
Route::middleware(['auth', 'verified'])->group(function () {
  

      Route::get('/user/profile', function () {
        return Inertia::render('UserDashboard/UProfile');
    })->name('user.profile');

    Route::get('/user/appointments', function () {
        return Inertia::render('UserDashboard/UAppointments');
    })->name('user.appointments');

    Route::get('/user/bookings', function () {
        return Inertia::render('UserDashboard/UBookings');
    })->name('user.Bookings');

    Route::get('/user/services', function () {
        return Inertia::render('UserDashboard/UServices');
    })->name('user.services');
});

require __DIR__.'/auth.php';


//add post delete update view route 
Route::get('/ViewallAd', [PetAdController::class, 'index'])->name('ViewallAd'); 
Route::post('/CreateAd',[PetAdController::class, 'store'])->name('CreateAd');
Route::get('/showAd',[PetAdController::class, 'showAd'])->name('showAd');
Route::put('/updateAd/{adId}',[PetAdController::class, 'updateAd'])->name('updateAd');
Route::delete('/deleteAd/{adId}',[PetAdController::class, 'destroy'])->name('deleteAd');

// view details page
// In routes/web.php
Route::get('/ads/{adId}', [PetAdController::class, 'showAd'])->name('ads.show');

//search pet
//Route::get('/SearchPet', [PetAdController::class, 'searchPet'])->name('SearchPet'); 





//Add or Display Users
Route::post('/addUser', [UserController::class, 'addUser'])->name('addUser');
Route::get('/allUsers', [UserController::class, 'allUsers'])->name('allUsers');
Route::delete('/deleteUser/{userId}', [UserController::class, 'deleteUser'])->name('deleteUser/{userId}');

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
Route::delete('/deleteDayCare/{userId}', [DayCareCenterController::class, 'deleteDayCare'])->name('deleteDayCare/{userId}');

//Add DayCareCenter Appointments
Route::post('/addDayCareCenterBooking', [DayCareCenterBookingController::class, 'addDayCareCenterBooking'])->name('addDayCareCenterBooking');
Route::get('/displayToDayCareCenterAppointment', [DayCareCenterBookingController::class, 'displayToDayCareCenterAppointment'])->name('displayToDayCareCenterAppointment');
Route::get('/displayToUserDayCareCenterAppointment', [DayCareCenterBookingController::class, 'displayToUserDayCareCenterAppointment'])->name('displayToUserDayCareCenterAppointment');


//summary
Route::get('/adminSummary', [UserController::class, 'adminSummary'])->name('adminSummary');
Route::get('/doctorSummary', [DoctorAppointmentController::class, 'doctorSummary'])->name('doctorSummary');
Route::get('/dayCareSummary', [DayCareCenterBookingController::class, 'dayCareSummary'])->name('dayCareSummary');




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

Route::get('/adshome', function () {
    return Inertia::render('Selling/Home');
})->name('adshome');