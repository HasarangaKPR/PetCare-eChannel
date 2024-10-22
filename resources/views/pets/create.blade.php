<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Pet</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>
<body>
    <div class="container">
        <h1>Add New Pet</h1>

        <!-- Form Submission -->
        <form action="{{ route('pets.store') }}" method="POST" enctype="multipart/form-data">
            @csrf <!-- CSRF Token -->

            <div>
                <label>Pet Name:</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label>Breed:</label>
                <input type="text" name="breed" required />
            </div>
            <div>
                <label>Species:</label>
                <input type="text" name="species" required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" required></textarea>
            </div>
            <div>
                <label>Owner Name:</label>
                <input type="text" name="owner_name" required />
            </div>
            <div>
                <label>Owner Contact:</label>
                <input type="text" name="owner_contact" required />
            </div>
            <div>
                <label>District:</label>
                <input type="text" name="district" required />
            </div>
            <div>
                <label>Price (LKR):</label>
                <input type="number" name="price" step="0.01" required />
            </div>
            <div>
                <label>Pet Picture:</label>
                <input type="file" name="picture" accept="image/*" required />
            </div>
            <button type="submit"> Post Ad </button>
        </form>
    </div>
</body>
</html>

