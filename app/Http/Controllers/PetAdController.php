<?php

namespace App\Http\Controllers;

use App\Models\PetAd;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;

class PetAdController extends Controller
{
    // final code
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
        'pet_photos'=>'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        'seller_name'=>'required|string|max:255',
        'phone_number'=>'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
        'location'=>'required|string|max:255',
        
    ]);
    $imagename = null;
    if ($request->hasFile('pet_photos')) {
        $image = $request->file('pet_photos');
        $imagename = time() . '.' . $image->getClientOriginalExtension();
        
        // Store the image in the 'public/photos' directory
        $image->move(public_path('pet_photos'), $imagename);
        //$image->storeAs('public/pet_photos', $imagename); // Store in 'storage/app/public/pet_photos'
    } else {
        return response()->json(['success' => false, 'message' => 'Image upload failed.']);
    }

        // Add the image name to validated data
        $validated['pet_photos'] = '/pet_photos/' . $imagename;
 

    PetAd::create([
        
        'pet_name' => $validated['pet_name'],
        'pet_type' => $validated['pet_type'],
        'breed' => $validated['breed'],
        'age' => $validated['age'],
        'gender'=>$validated['gender'],
        'price' => $validated['price'],
        'description'=>$validated['description'],
        'pet_photos'=>$validated['pet_photos'],
        'seller_name'=>$validated['seller_name'],
        'phone_number'=>$validated['phone_number'],
        'location'=>$validated['location'],
        

    ]);
    
    return response()->json(['success'=>true,'message' => 'Ad posted successfully']);
    }
    //final code but want to add images
    public function updateAd(Request $request,PetAd $adId){
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
    //final code
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
    //final code
    public function destroy($adId)
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
    //final code
    public function index()
    {
        // Retrieve all the ads from the database
        $petAd = PetAd::all();
         return response()->json($petAd);
    }
    public function searchPet(Request $request) {
        $petTypeInput = $request->input('breed'); // Changed the variable name to avoid conflict
        $query = PetAd::query();
    
        if ($petTypeInput) {
            $query->where('breed', $petTypeInput);
        }
    
        $pets = $query->get(); // Fetch the results
    
        return response()->json($pets); // Return the results as JSON
    }
    
}