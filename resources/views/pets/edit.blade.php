@extends('layouts.app')

@section('title', 'Edit Ad')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold mb-6">Edit Ad</h1>
        
        <form action="{{ route('ads.update', $ad->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            
            <!-- Pet Name -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Pet Name</label>
                <input type="text" name="pet_name" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('pet_name', $ad->pet_name) }}" required>
            </div>
            
            <!-- Pet Type -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Type of Pet</label>
                <select name="pet_type" class="mt-1 block w-full p-2 border rounded-md" required>
                    <option value="">Select Pet Type</option>
                    <option value="Dog" {{ $ad->pet_type == 'Dog' ? 'selected' : '' }}>Dog</option>
                    <option value="Cat" {{ $ad->pet_type == 'Cat' ? 'selected' : '' }}>Cat</option>
                    <option value="Bird" {{ $ad->pet_type == 'Bird' ? 'selected' : '' }}>Bird</option>
                    <option value="Other" {{ $ad->pet_type == 'Other' ? 'selected' : '' }}>Other</option>
                </select>
            </div>
            
            <!-- Breed -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Breed</label>
                <input type="text" name="breed" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('breed', $ad->breed) }}">
            </div>
            
            <!-- Age -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Age (in years)</label>
                <input type="number" name="age" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('age', $ad->age) }}">
            </div>
            
            <!-- Gender -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Gender</label>
                <div class="mt-1 flex items-center space-x-4">
                    <label>
                        <input type="radio" name="gender" value="Male" class="mr-1" {{ $ad->gender == 'Male' ? 'checked' : '' }}> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" class="mr-1" {{ $ad->gender == 'Female' ? 'checked' : '' }}> Female
                    </label>
                </div>
            </div>
            
            <!-- Price -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Price (in USD)</label>
                <input type="number" name="price" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('price', $ad->price) }}" required>
            </div>
            
            <!-- Description -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Description</label>
                <textarea name="description" class="mt-1 block w-full p-2 border rounded-md">{{ old('description', $ad->description) }}</textarea>
            </div>
            
            <!-- Pet Photos -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Pet Photos</label>
                <input type="file" name="pet_photos[]" multiple class="mt-1 block w-full p-2 border rounded-md">
                <p class="text-gray-600 text-sm">You can upload new photos to replace existing ones.</p>
            </div>
            
            <!-- Seller Name -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Seller Name</label>
                <input type="text" name="seller_name" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('seller_name', $ad->seller_name) }}" required>
            </div>
            
            <!-- Phone Number -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Phone Number</label>
                <input type="text" name="phone_number" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('phone_number', $ad->phone_number) }}" required>
            </div>
            
            <!-- Location -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Location</label>
                <input type="text" name="location" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('location', $ad->location) }}" required>
            </div>
            
            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Update Ad
                </button>
            </div>
        </form>
    </div>
@endsection
