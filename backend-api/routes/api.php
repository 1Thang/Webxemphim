<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('user', [UsersController::class, 'index']);
Route::post('user', [UsersController::class, 'store']);
Route::get('user/{id}', [UsersController::class, 'show']);
Route::post('user/{id}/update', [UsersController::class, 'update']);
Route::delete('user/{id}/delete', [UsersController::class, 'destroy']);

