<?php
namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        $pets = Pet::all();
        return view('pets.index', compact('pets'));
    }

    public function show($id)
    {
        $pet = Pet::findOrFail($id);
        return view('pets.show', compact('pet'));
    }

    public function store(Request $request)
    {
        $pet = new Pet();
        $pet->name = $request->name;
        $pet->species = $request->species;
        $pet->breed = $request->breed;
        $pet->age = $request->age;
        $pet->price = $request->price;
        $pet->save();

        return redirect('/pets');
    }
}
