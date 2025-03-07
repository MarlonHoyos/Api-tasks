<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TasksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/tasks', [TasksController::class, 'index']);
    Route::post('/tasks', [TasksController::class, 'store']);
    Route::delete('/tasks/{id}', [TasksController::class, 'destroy']);
    Route::put('/tasks/{id}', [TasksController::class, 'update']);
    Route::get('/tasks/{id}', [TasksController::class, 'show']);
});




