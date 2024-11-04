@extends('layouts.app')

@section('title', 'All Ads')

@section('content')
    <div class="max-w-5xl mx-auto p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-lg rounded-lg">
        <h1 class="text-4xl font-bold mb-6 text-center text-yellow-600"><i>Welcome to the Pets World</i></h1>

        <!-- Search form for pet type -->
        <form action="{{ route('ads.index') }}" method="GET" class="mb-6">
            <div class="flex items-center justify-center">
                <select name="pet_type" class="border border-yellow-500 bg-yellow-50 rounded-md p-2 mr-2 text-gray-700 focus:ring-yellow-500">
                    <option value="">All Types</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                   
                    <!-- Add more pet types as needed -->
                </select>
                <button type="submit" class="bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-600">
                    Search
                </button>
            </div>
        </form>

        @if ($ads->isEmpty())
            <p class="text-center text-gray-600 font-semibold">No ads available at the moment.</p>
        @else
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                @foreach ($ads as $ad)
                    <div class="p-4 border border-yellow-400 rounded-lg bg-white shadow-md">
                        <h2 class="text-xl font-semibold text-yellow-700">{{ $ad->pet_name }}</h2>

                        {{-- Display the first photo if available --}}
                        @if ($ad->pet_photos)
                            @php
                                $photos = is_array($ad->pet_photos) ? $ad->pet_photos : json_decode($ad->pet_photos, true);
                            @endphp

                            {{-- Show image if it exists --}}
                            @if (!empty($photos[0]))
                                <img src="{{ asset('storage/' . $photos[0]) }}" alt="{{ $ad->pet_name }}"
                                    class="w-full h-48 mb-2 rounded-md object-cover mx-auto shadow-lg">
                            @endif
                        @endif

                        <p class="text-gray-700 mt-2">{{ $ad->description }}</p>
                        <p class="text-gray-500 mt-1">Price: <span class="text-yellow-600 font-bold">${{ number_format($ad->price, 2) }}</span></p>
                        <a href="{{ route('ads.show', $ad->id) }}" class="text-blue-500 hover:text-blue-600 hover:underline">
                            More Details
                        </a>
                    </div>
                @endforeach
            </div>
        @endif
    </div>
@endsection

