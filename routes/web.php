<?php

use App\Http\Controllers\BakedGoodController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [BakedGoodController::class, 'home'])->name('home');
Route::get('/products', [BakedGoodController::class, 'index'])->name('index');

require __DIR__.'/settings.php';
