@extends('layouts.app')

@section('title', 'All Ads')

@section('content')
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold mb-6"> <i>Welcome to the Pets Worlds</i></h1>

        <!-- Search form for pet type -->
        <form action="{{ route('ads.index') }}" method="GET" class="mb-4">
            <div class="flex items-center">
                <select name="pet_type" class="border rounded-md p-2 mr-2">
                    <option value="">All Types</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <!-- Add more pet types as needed -->
                </select>
                <button type="submit" class="bg-blue-500 text-white rounded-md px-4 py-2">Search</button>
            </div>
        </form>

        @if ($ads->isEmpty())
            <p>No ads available at the moment.</p>
        @else
            @foreach ($ads as $ad)
                <div class="mb-4 p-4 border rounded-lg">
                    <h2 class="text-2xl font-semibold">{{ $ad->pet_name }}</h2>

                    {{-- Display the first photo if available --}}
                    @if ($ad->pet_photos)
                        @php
                            $photos = is_array($ad->pet_photos) ? $ad->pet_photos : json_decode($ad->pet_photos, true);
                        @endphp

                        {{-- Show image if it exists --}}
                        @if (!empty($photos[0]))
                            <img src="{{ asset('storage/' . $photos[0]) }}" alt="{{ $ad->pet_name }}"
                                class="w-64 h-64 mb-2 rounded-md object-cover">
                        @endif
                    @endif

                    <p class="text-gray-700">{{ $ad->description }}</p>
                    <p class="text-gray-500">Price: ${{ number_format($ad->price, 2) }}</p>
                    <a href="{{ route('ads.show', $ad->id) }}" class="text-blue-500 hover:underline">More Details</a>
                </div>
            @endforeach
        @endif
    </div>
@endsection








