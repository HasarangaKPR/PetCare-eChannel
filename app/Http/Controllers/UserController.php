<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Doctor;
use App\Models\DayCareCenter;
use Illuminate\Support\Facades\DB;
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

    
        DB::transaction(function () use ($validatedData) {
            // Create the user
            $user = User::create([
                'name' => $validatedData['name'],
                'userType' => $validatedData['userType'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);
            // Create the doctor record linked to the user
            if ($validatedData['userType'] == 'doctor') {
                Doctor::create([
                    'userId' => $user->id,
                ]);
            }
            if ($validatedData['userType'] == 'daycare') {
                DayCareCenter::create([
                    'userId' => $user->id,
                ]);
            }
            
        });











        //return redirect()->route('dashboard')->with('success', 'Added successfully.');
        return response()->json(['success' => true]);

    }
    public function allUsers()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }
}
