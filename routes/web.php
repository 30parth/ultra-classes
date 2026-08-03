<?php

use App\Http\Controllers\BatchController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::resource('student', StudentController::class);

    Route::resource('batch', BatchController::class);

});

require __DIR__.'/settings.php';
