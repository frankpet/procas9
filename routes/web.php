<?php

use App\Http\Controllers\TestController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('tests', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('tests');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


//Test
Route::get('/',[ TestController::class, 'index'])->name('home');
Route::get('/welcome',[ TestController::class, 'welcome'])->name('welcome');
Route::get('/about',[ TestController::class, 'about'])->name('about');
Route::get('/contact',[ TestController::class, 'contact'])->name('contact');
Route::get('/home',[ TestController::class, 'home'])->name('home2');
