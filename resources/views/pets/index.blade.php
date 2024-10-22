<!-- resources/views/pets/index.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Ads</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1>All Pet Ads</h1>

        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <a href="/pets/create" class="btn btn-primary mb-3">Add New Pet Ad</a>

        @if ($pets->count())
            <div class="row">
                @foreach ($pets as $pet)
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">{{ $pet->name }} ({{ $pet->species }})</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ $pet->breed }}</h6>
                                <p class="card-text">{{ $pet->description }}</p>
                                <p><strong>Owner:</strong> {{ $pet->owner_name }}</p>
                                <p><strong>Contact:</strong> {{ $pet->owner_contact }}</p>
                                <p><strong>District:</strong> {{ $pet->district }}</p>
                                <p><strong>Price:</strong> Rs. {{ $pet->price }}</p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @else
            <p>No pet ads found.</p>
        @endif
    </div>
</body>
</html>
