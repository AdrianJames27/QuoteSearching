<?php

use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\Route;


Route::get('/', [QuoteController::class, 'index']);
Route::get('/quotes/all', [QuoteController::class, 'getAllQuotes']);
Route::post('/quotes/search_result', [QuoteController::class, 'getQuotes']);

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
