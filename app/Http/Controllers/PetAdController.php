<?php

namespace App\Http\Controllers;

use App\Models\PetAd;
use Illuminate\Http\Request;

class PetAdController extends Controller
{
    public function createAd(Request $request)
    {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'address' => 'required|string|max:255',
        'breed' => 'required',
        'description' => 'required|string|max:255',
        'contactnumber'=>'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
        'price' => 'required|decimal',
        //'image' => 'image|max:2048', // Validate image
    ]);

    $pets=PetAd::create([
        'name' => $validated['name'],
        'address' => $validated['address'],
        'breed' => $validated['breed'],
        'description' => $validated['description'],
        'contactnumber'=>$validated['contactnumber'],
        'price' => $validated['price'],

    ]);
    return response()->json(['success'=>true]);    
    }
}