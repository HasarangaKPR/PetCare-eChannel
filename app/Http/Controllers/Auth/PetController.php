<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;

class PetController extends Controller
{
    // Method to show all pet ads
    public function index()
    {
        $pets = Pet::all();  // Fetch all pets from the database
        return view('pets.index', compact('pets'));  // Pass pets to the view
    }

    // Method to store a new pet ad
    public function store(Request $request)
    {
        // Validation rules
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

        // Save the new pet ad in the database
        Pet::create($request->all());

        // Redirect back to the pet ads list
        return redirect('/pets')->with('success', 'Pet ad has been posted successfully!');
    }
}
