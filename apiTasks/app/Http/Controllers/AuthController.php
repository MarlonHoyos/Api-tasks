<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseApi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request) 
    {
        try {
            $request->validate([
                'username' => 'required|string',
                'password' => 'required|string',
            ]);

            $user = User::where('name', $request->username)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'username' => ['The provided credentials are incorrect.'],
                ]);
            }

            $token = $user->createToken('auth-token')->plainTextToken;

            return ResponseApi::response_success('user successfully logged in', ['token' => $token]);
        } catch (\Exception $e) {
            return ResponseApi::response_error('Failed to login user', $e->getMessage());
        }
    }
}
