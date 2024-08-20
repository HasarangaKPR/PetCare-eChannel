<?php

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        return Pet::all();
    }

    public function show($id)
    {
        return Pet::find($id);
    }

    public function store(Request $request)
    {
        $pet = Pet::create($request->all());
        return response()->json($pet, 201);
    }
}