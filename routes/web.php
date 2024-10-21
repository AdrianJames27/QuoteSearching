<?php

use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\Route;


Route::get('/', [QuoteController::class, 'index']);
Route::get('/quotes/all', [QuoteController::class, 'getAllQuotes']);
Route::post('/quotes/search_result', [QuoteController::class, 'getQuotes']);