<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('front/about', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/order', function () {
    return Inertia::render('front/order', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('order');

Route::get('/products', function () {
    return Inertia::render('front/products', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('products');

Route::get('/testimonials', function () {
    return Inertia::render('front/testimonials', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('testimonials');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('back/dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
