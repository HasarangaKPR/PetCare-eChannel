<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;

class PetController extends Controller
{
    // Method to show all pet ads
    public function index()
    {
        $pets = Pet::all();
        return view('pets.index', compact('pets'));
    }

    // Method to store a new pet ad
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'breed' => 'required',
            'species' => 'required',
            'description' => 'required',
            'owner_name' => 'required',
            'owner_contact' => 'required',
            'district' => 'required',
            'price' => 'required|numeric',
        ]);

        Pet::create($request->all());
        return redirect('/pets')->with('success', 'Pet ad has been posted successfully!');
    }
}
