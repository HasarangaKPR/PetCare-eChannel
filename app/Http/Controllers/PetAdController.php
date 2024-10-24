<?php

namespace App\Http\Controllers;

use App\Models\PetAd;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;

class PetAdController extends Controller
{
    public function store(Request $request)
    {
       $validated=$request->validate([
        'name' => 'required|string|max:255',
        'address' => 'required|string|max:255',
        'breed' => 'required|string|max:255',
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
    
    return response()->json(['success'=>true,'message' => 'Ad posted successfully']);
    }
    public function updateAd(Request $request, $adId){
        //$petAd = PetAd::find($adId);
        $adId = $request->input('adId');
        $petAd = PetAd::where('adId',$adId)->get();
        if(!$petAd){
            return response()->json(['message' => 'Ad not found'],404);
        }
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
    public function showAd(Request $request,$adId){
        //$petAd = PetAd::find($adId);
        $adId = $request->input('adId');
        $petAd = PetAd::where('adId',$adId)->get();
        return response()->json(['petAd'=> $petAd]);
    }
    public function destroy(Request $request,$adId){
       //$petAd = PetAd::find($adId);
        $adId = $request->input('adId');
        $petAd = PetAd::where('adId',$adId)->get();
        if (!$petAd){
            return response()->json(['message' => 'Ad not found'],404);
        }
        $petAd->destroy();
        return response()->json(['success'=>true,'message' => 'Ad delete successfully']);
    }
    public function index(){
        // Retrieve all the ads from the database
        $petAd = PetAd::all();
         return response()->json($petAd);
    }
}