@extends('layouts.app')

@section('title', 'All Ads')

@section('content')
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold mb-6">All Ads</h1>
        
        @if ($ads->isEmpty())
            <p>No ads available at the moment.</p>
        @else
            @foreach ($ads as $ad)
                <div class="mb-4 p-4 border rounded-lg">
                    <h2 class="text-2xl font-semibold">{{ $ad->pet_name }}</h2>
                    <p class="text-gray-700">{{ $ad->description }}</p>
                    <p class="text-gray-500">Price: ${{ number_format($ad->price, 2) }}</p>
                    <a href="{{ route('ads.show', $ad->id) }}" class="text-blue-500 hover:underline">More Details</a>
                </div>
            @endforeach
        @endif
    </div>
@endsection

