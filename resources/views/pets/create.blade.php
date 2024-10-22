<!-- resources/views/pets/create.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Pet Ad</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1>Add a New Pet Ad</h1>

        <!-- Display validation errors -->
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Form to add a new pet -->
        <form action="/pets" method="POST">
            @csrf
            <div class="form-group">
                <label for="name">Pet Name:</label>
                <input type="text" class="form-control" id="name" name="name" required>
            </div>

            <div class="form-group">
                <label for="breed">Breed:</label>
                <input type="text" class="form-control" id="breed" name="breed" required>
            </div>

            <div class="form-group">
                <label for="species">Species:</label>
                <input type="text" class="form-control" id="species" name="species" required>
            </div>

            <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" id="description" name="description" required></textarea>
            </div>

            <div class="form-group">
                <label for="owner_name">Owner's Name:</label>
                <input type="text" class="form-control" id="owner_name" name="owner_name" required>
            </div>

            <div class="form-group">
                <label for="owner_contact">Owner's Contact:</label>
                <input type="text" class="form-control" id="owner_contact" name="owner_contact" required>
            </div>

            <div class="form-group">
                <label for="district">District:</label>
                <input type="text" class="form-control" id="district" name="district" required>
            </div>

            <div class="form-group">
                <label for="price">Price (Rs):</label>
                <input type="number" step="0.01" class="form-control" id="price" name="price" required>
            </div>

            <button type="submit" class="btn btn-primary">Add Pet</button>
        </form>
    </div>
</body>
</html>
