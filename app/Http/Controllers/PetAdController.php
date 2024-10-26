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
        'pet_name' => 'required|string|max:255',
        'pet_type' => 'required|string|max:255',
        'breed' => 'required|string|max:255',
        'age'=>'required|integer',
        'gender'=>'required|string',
        'price' => 'required|numeric',
        'description' => 'nullable|string|max:255',
        //'pet_photos'=>'image|max:2048',
        'seller_name'=>'required|string|max:255',
        'phone_number'=>'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
        'location'=>'required|string|max:255',
        
    ]);
    /*$photos = [];
    if ($request->hasFile('pet_photos')) {
        foreach ($request->file('pet_photos') as $file) {
            $path = $file->store('pet_photos', 'public');
            $photos[] = $path;
        }
    }

    // Create the ad with form data and uploaded images
    PetAd::create(array_merge($request->except('pet_photos'), [
        'pet_photos' => $photos,
    ]));*/

    PetAd::create([
        
        'pet_name' => $validated['pet_name'],
        'pet_type' => $validated['pet_type'],
        'breed' => $validated['breed'],
        'age' => $validated['age'],
        'gender'=>$validated['gender'],
        'price' => $validated['price'],
        'description'=>$validated['description'],
        //'pet_photos'=>$validated['pet_photos'],
        'seller_name'=>$validated['seller_name'],
        'phone_number'=>$validated['phone_number'],
        'location'=>$validated['location'],
        

    ]);
    
    return response()->json(['success'=>true,'message' => 'Ad posted successfully']);
    }
    public function updateAd(Request $request,PetAd $adId){
        //$petAd = PetAd::find($adId);
        /*$adId = $request->input('adId');
        $petAd = PetAd::where('adId',$adId)->get();*/
        if(!$adId){
            return response()->json(['message' => 'Ad not found'],404);
        }
       $validated = $request->validate([
            'pet_name' => 'required|string|max:255',
            'pet_type' => 'required|string|max:255',
            'breed' => 'required|string|max:255',
            'age'=>'required|integer',
            'gender'=>'required|string',
            'price' => 'required|numeric',
            'description' => 'nullable|string|max:255',
            //'pet_photos'=>'image|max:2048',
            'seller_name'=>'required|string|max:255',
            'phone_number'=>'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
            'location'=>'required|string|max:255',
        ]);
       
        //$adId->update($validated);

    
        $adId->update([
            
        'pet_name' => $validated['pet_name'],
        'pet_type' => $validated['pet_type'],
        'breed' => $validated['breed'],
        'age' => $validated['age'],
        'gender'=>$validated['gender'],
        'price' => $validated['price'],
        'description'=>$validated['description'],
        //'pet_photos'=>$validated['pet_photos'],
        'seller_name'=>$validated['seller_name'],
        'phone_number'=>$validated['phone_number'],
        'location'=>$validated['location'],
    
        ]);

       return response()->json(['success'=>true,'message' => 'Ad updated successfully']);
       

    }
    public function showAd(Request $request) {
        $adId = $request->input('adId');
    
        // Use first() to get a single instance instead of a collection
        $petAd = PetAd::where('adId', $adId)->first(); // Ensure 'id' is the correct column name
    
        // Check if the pet ad exists
        if (!$petAd) {
            return response()->json(['message' => 'Ad not found'], 404);
        }
    
        return response()->json(['petAd' => $petAd]); // Return the found pet ad as JSON
    }
    
    public function destroy(Request $request, $adId)
    {
        // Find the PetAd by its ID
        $petAd = PetAd::find($adId);
        
        // Check if the ad exists
        if (!$petAd) {
            return response()->json(['message' => 'Ad not found'], 404);
        }
    
        // Delete the pet ad
        $petAd->delete();
        
        // Return a success response
        return response()->json(['success' => true, 'message' => 'Ad deleted successfully', 'adId' => $adId]);
    }
    
    public function index(){
        // Retrieve all the ads from the database
        $petAd = PetAd::all();
         return response()->json($petAd);
    }
    public function searchPet(Request $request) {
        $petTypeInput = $request->input('pet_type'); // Changed the variable name to avoid conflict
        $query = PetAd::query();
    
        if ($petTypeInput) {
            $query->where('pet_type', $petTypeInput);
        }
    
        $pets = $query->get(); // Fetch the results
    
        return response()->json($pets); // Return the results as JSON
    }
    
}