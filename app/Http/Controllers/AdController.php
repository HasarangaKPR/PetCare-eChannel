<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;

class AdController extends Controller
{
    /**
     * Display a listing of the ads.
     */
    public function index(Request $request)
    {
        $query = Ad::query();
    
        // Check if a pet_type filter is applied
        if ($request->filled('pet_type')) {
            $query->where('pet_type', $request->input('pet_type'));
        }
    
        $ads = $query->get();
    
        return view('ads.index', compact('ads'));
    }
    

    /**
     * Show the form for creating a new ad.
     */
    public function create()
    {
        return view('ads.create');
    }

    /**
     * Store a newly created ad in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'pet_name' => 'required|string|max:255',
            'pet_type' => 'required|string',
            'price' => 'required|numeric',
            'seller_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'location' => 'required|string|max:255',
            'pet_photos.*' => 'image|mimes:jpg,png,jpeg|max:2048',
        ]);

        // Handle file uploads
        $photos = [];
        if ($request->hasFile('pet_photos')) {
            foreach ($request->file('pet_photos') as $file) {
                $path = $file->store('pet_photos', 'public');
                $photos[] = $path;
            }
        }

        // Create the ad with form data and uploaded images
        Ad::create(array_merge($request->except('pet_photos'), [
            'pet_photos' => $photos,
        ]));

        // Redirect to the ads index with success message
        return redirect()->route('ads.index')->with('success', 'Ad posted successfully!');
    }

    /**
     * Display the specified ad.
     */
    public function show(Ad $ad)
    {
        return view('ads.show', compact('ad'));
    }

    /**
     * Show the form for editing the specified ad.
     */
    public function edit(Ad $ad)
    {
        return view('ads.edit', compact('ad'));
    }

    /**
     * Update the specified ad in storage.
     */
    public function update(Request $request, Ad $ad)
    {
        $request->validate([
            'pet_name' => 'required|string|max:255',
            'pet_type' => 'required|string',
            'price' => 'required|numeric',
            'seller_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'location' => 'required|string|max:255',
            'pet_photos.*' => 'image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $photos = $ad->pet_photos ?? [];
        if ($request->hasFile('pet_photos')) {
            foreach ($request->file('pet_photos') as $file) {
                $path = $file->store('pet_photos', 'public');
                $photos[] = $path;
            }
        }

        $ad->update(array_merge($request->except('pet_photos'), [
            'pet_photos' => $photos,
        ]));

        return redirect()->route('ads.index')->with('success', 'Ad updated successfully!');
    }

    /**
     * Remove the specified ad from storage.
     */
    public function destroy(Ad $ad)
    {
        $ad->delete();
        return redirect()->route('ads.index')->with('success', 'Ad deleted successfully!');
    }
}
