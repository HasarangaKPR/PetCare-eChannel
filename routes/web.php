<?php

use App\Http\Controllers\AdController;



//pets ads

Route::get('/ads/create', [AdController::class, 'create'])->name('ads.create');
Route::post('/ads', [AdController::class, 'store'])->name('ads.store');
Route::get('/ads', [AdController::class, 'index'])->name('ads.index'); // To list all ads
Route::resource('ads', AdController::class); // post ad 

//Blogs

use App\Http\Controllers\BlogController;

Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/create', [BlogController::class, 'create']);
Route::post('/blogs', [BlogController::class, 'store']);


