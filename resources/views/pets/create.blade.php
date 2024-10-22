<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Pet</title>
    <!-- Link to Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .container {
            margin-top: 50px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        h1 {
            margin-bottom: 30px;
            color: #007bff;
        }
        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #004085;
        }
    </style>
</head>
<body>

<div class="container">
    <h1 class="text-center">Add New Pet</h1>
    
    <form action="{{ route('pets.store') }}" method="POST" enctype="multipart/form-data">
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
            <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
        </div>

        <div class="form-group">
            <label for="owner_name">Owner Name:</label>
            <input type="text" class="form-control" id="owner_name" name="owner_name" required>
        </div>

        <div class="form-group">
            <label for="owner_contact">Owner Contact:</label>
            <input type="text" class="form-control" id="owner_contact" name="owner_contact" required>
        </div>

        <div class="form-group">
            <label for="district">District:</label>
            <input type="text" class="form-control" id="district" name="district" required>
        </div>

        <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" class="form-control" id="price" name="price" required>
        </div>

        <div class="form-group">
            <label for="picture">Pet Picture:</label>
            <input type="file" class="form-control-file" id="picture" name="picture" accept="image/*" required>
        </div>

        <button type="submit" class="btn btn-primary btn-block">Add Pet</button>
    </form>
</div>

<!-- Link to Bootstrap JS and dependencies -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>


