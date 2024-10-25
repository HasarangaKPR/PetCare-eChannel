@extends('layouts.app')

@section('title', $ad->pet_name)

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold mb-4">{{ $ad->pet_name }}</h1>
        <p class="mb-2"><strong>Description:</strong> {{ $ad->description }}</p>
        <p class="mb-2"><strong>Price:</strong> ${{ number_format($ad->price, 2) }}</p>
        <p class="mb-2"><strong>Seller:</strong> {{ $ad->seller_name }}</p>
        <p class="mb-4"><strong>Contact:</strong> {{ $ad->phone_number }}</p>
        <p class="mb-1"><strong>Location:</strong> {{ $ad->location }}</p>

        @if ($ad->pet_photos)
            <h2 class="text-xl font-semibold mb-2"></h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                @foreach ($ad->pet_photos as $photo)
                    <div class="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                        <img src="{{ Storage::url($photo) }}" alt="Pet Photo" class="object-cover w-full h-full">
                    </div>
                @endforeach
            </div>
        @endif

        <div class="mt-6">
            <a href="{{ route('ads.index') }}" class="text-blue-500 hover:underline">Show Me All Ads</a>
        </div>
    </div>
@endsection

