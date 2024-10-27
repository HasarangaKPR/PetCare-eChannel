<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function addUser(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'userType' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'userType' => $validatedData['userType'],
            'email' => $validatedData['email'],
            'password' => Hash::make($request->password),
            
        ]);

        //return redirect()->route('dashboard')->with('success', 'Added successfully.');
        return response()->json(['success' => true]);

    }
    public function allUsers()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }
}
