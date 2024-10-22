<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;

class PetController extends Controller
{
    // Method to show all pet ads
    public function index()
    {
        $pets = Pet::all(); // Retrieve all pets from the database
        return view('pets.index', compact('pets')); // Pass the pets to the view
    }
    

    // Method to show the form for creating a new pet ad
    public function create()
    {
        return view('pets.create'); // Show the form to create a pet
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
        'picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validating picture
    ]);

    $pet = new Pet();
    $pet->name = $request->name;
    $pet->breed = $request->breed;
    $pet->species = $request->species;
    $pet->description = $request->description;
    $pet->owner_name = $request->owner_name;
    $pet->owner_contact = $request->owner_contact;
    $pet->district = $request->district;
    $pet->price = $request->price;

    if ($request->hasFile('picture')) {
        $file = $request->file('picture');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->move(public_path('images/pets'), $filename);
        $pet->picture = $filename;
    }

    $pet->save();

    return redirect()->route('pets.index')->with('success', 'Pet added successfully!');
}

}
    