<?php

namespace App\Http\Controllers;

use App\Models\PetAd;
use Illuminate\Http\Request;

class PetAdController extends Controller
{
    public function createAd(Request $request)
    {
       // $petAd= new PetAd();
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'address' => 'required|string|max:255',
        'breed' => 'required',
        'description' => 'required|string|max:255',
        'contactnumber'=>'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
        'price' => 'required|decimal:2',
        //'image' => 'image|max:2048', // Validate image
    ]);

    PetAd::create([
        'name' => $validated['name'],
        'address' => $validated['address'],
        'breed' => $validated['breed'],
        'description' => $validated['description'],
        'contactnumber'=>$validated['contactnumber'],
        'price' => $validated['price'],

    ]);
    //$petAd->save();
    return response()->json(['success'=>true,'message' => 'Ad posted successfully']);    
    }
    public function updateAd(Request $request){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'breed' => 'required',
            'description' => 'required|string|max:255',
            'contactnumber'=>'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
            'price' => 'required|decimal:2',
            //'image' => 'image|max:2048', // Validate image
        ]);
    
        PetAd::updateAd([
            'name' => $validated['name'],
            'address' => $validated['address'],
            'breed' => $validated['breed'],
            'description' => $validated['description'],
            'contactnumber'=>$validated['contactnumber'],
            'price' => $validated['price'],
    
        ]);
        return response()->json(['success'=>true,'message' => 'Ad updated successfully']);

    }
    public function editAd(){

    }
    public function showAd($id){
        $petAd = PetAd::findOrFail($id);
        return response()->json($petAd);

    }
    public function destroyAd(PetAd $petAd){
        $petAd->delete();
        return response()->json(['success'=>true,'message' => 'Ad delete successfully']);
    }
    public function index(){
         // Retrieve all the ads from the database
         PetAd::all();
    }
}