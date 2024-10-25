@extends('layouts.app')

@section('title', 'Create a New Ad')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold mb-6">Post a New Pet Ad</h1>
        
        <form method="POST" action="{{ route('ads.store') }}" enctype="multipart/form-data">
            @csrf
            
            <!-- Pet Name -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Pet Name</label>
                <input type="text" name="pet_name" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('pet_name') }}" required>
                @error('pet_name')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Pet Type -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Type of Pet</label>
                <select name="pet_type" class="mt-1 block w-full p-2 border rounded-md" required>
                    <option value="">Select Pet Type</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Other">Other</option>
                </select>
                @error('pet_type')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Breed -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Breed</label>
                <input type="text" name="breed" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('breed') }}">
                @error('breed')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Age -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Age (in years)</label>
                <input type="number" name="age" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('age') }}">
                @error('age')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Gender -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Gender</label>
                <div class="mt-1 flex items-center space-x-4">
                    <label>
                        <input type="radio" name="gender" value="Male" class="mr-1" {{ old('gender') == 'Male' ? 'checked' : '' }}> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" class="mr-1" {{ old('gender') == 'Female' ? 'checked' : '' }}> Female
                    </label>
                </div>
                @error('gender')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Price -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Price (in LKR)</label>
                <input type="number" name="price" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('price') }}" required>
                @error('price')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Description -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Description</label>
                <textarea name="description" class="mt-1 block w-full p-2 border rounded-md">{{ old('description') }}</textarea>
                @error('description')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Pet Photos -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Add Pet Photo</label>
                <input type="file" name="pet_photos[]" multiple class="mt-1 block w-full p-2 border rounded-md">
                @error('pet_photos')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Seller Name -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Owners Name</label>
                <input type="text" name="seller_name" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('seller_name') }}" required>
                @error('seller_name')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Phone Number -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Phone Number</label>
                <input type="text" name="phone_number" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('phone_number') }}" required>
                @error('phone_number')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Location -->
            <div class="mb-4">
                <label class="block text-sm font-medium">Location</label>
                <input type="text" name="location" class="mt-1 block w-full p-2 border rounded-md" value="{{ old('location') }}" required>
                @error('location')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Submit Ad
                </button>
            </div>
        </form>
    </div>
@endsection
