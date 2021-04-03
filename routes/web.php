<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashBoardController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});


Route::prefix('admin')->group(function (){
    Route::get('dashboard', [DashBoardController::class, "index"])->name('dashboard');
});

