@extends('layouts.app')

@section('title', 'Create a New Ad')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-gradient-to-r from-pink-50 to-blue-50 shadow-lg rounded-lg">
        <h1 class="text-3xl font-extrabold mb-6 text-center text-indigo-600">Post a New Pet Ad</h1>
        
        <form method="POST" action="{{ route('ads.store') }}" enctype="multipart/form-data">
            @csrf
            
            <!-- Pet Name -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Pet Name</label>
                <input type="text" name="pet_name" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" value="{{ old('pet_name') }}" required>
                @error('pet_name')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Pet Type -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Type of Pet</label>
                <select name="pet_type" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg bg-indigo-50 text-indigo-700 focus:ring focus:ring-indigo-200" required>
                    <option value="">Select Pet Type</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Fish">Fish</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Other">Other</option>
                </select>
                @error('pet_type')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Breed -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Breed</label>
                <input type="text" name="breed" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" value="{{ old('breed') }}">
                @error('breed')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Age -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Age (in years)</label>
                <input type="number" name="age" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" value="{{ old('age') }}">
                @error('age')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Gender -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Gender</label>
                <div class="mt-2 flex items-center space-x-4">
                    <label class="text-indigo-700">
                        <input type="radio" name="gender" value="Male" class="mr-1" {{ old('gender') == 'Male' ? 'checked' : '' }}> Male
                    </label>
                    <label class="text-indigo-700">
                        <input type="radio" name="gender" value="Female" class="mr-1" {{ old('gender') == 'Female' ? 'checked' : '' }}> Female
                    </label>
                </div>
                @error('gender')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Price -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Price (in LKR)</label>
                <input type="number" name="price" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" value="{{ old('price') }}" required>
                @error('price')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Description -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Description</label>
                <textarea name="description" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" rows="4">{{ old('description') }}</textarea>
                @error('description')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Pet Photos -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Add Pet Photo</label>
                <input type="file" name="pet_photos[]" multiple class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg bg-indigo-50">
                @error('pet_photos')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Seller Name -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Owner's Name</label>
                <input type="text" name="seller_name" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" value="{{ old('seller_name') }}" required>
                @error('seller_name')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Phone Number -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Phone Number</label>
                <input type="text" name="phone_number" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" value="{{ old('phone_number') }}" required>
                @error('phone_number')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Location -->
            <div class="mb-4">
                <label class="block text-lg font-semibold text-indigo-600">Location</label>
                <input type="text" name="location" class="mt-1 block w-full p-3 border border-indigo-300 rounded-lg focus:ring focus:ring-indigo-200" value="{{ old('location') }}" required>
                @error('location')
                    <p class="text-red-500">{{ $message }}</p>
                @enderror
            </div>
            
            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md">
                    Post Your Ad
                </button>
            </div>
        </form>
    </div>
@endsection

