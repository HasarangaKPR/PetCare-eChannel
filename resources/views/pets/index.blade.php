<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Pet Ads</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container">
        <h1>All Pet Ads</h1>

        @if(session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        @foreach($pets as $pet)
        <div class="pet-ad">
            <h2>{{ $pet->name }}</h2>
            <p>Breed: {{ $pet->breed }}</p>
            <p>Species: {{ $pet->species }}</p>
            <p>Description: {{ $pet->description }}</p>
            <p>Owner: {{ $pet->owner_name }}</p>
            <p>Contact: {{ $pet->owner_contact }}</p>
            <p>District: {{ $pet->district }}</p>
            <p>Price: {{ $pet->price }}</p>
    
            @if($pet->picture)
                <img src="{{ asset('images/pets/' . $pet->picture) }}" alt="{{ $pet->name }}" style="width:200px; height:200px;">
            @else
                <p>No Picture Available</p>
            @endif
        </div>
    @endforeach
    
    
    </div>
</body>
</html>


