<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Blog</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f4f8;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #22AAA1;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        form {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            color: #22AAA1;
        }
        input[type="text"],
        input[type="date"],
        textarea,
        input[type="file"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            transition: border-color 0.3s, box-shadow 0.3s;
            font-size: 16px;
        }
        input[type="text"]:focus,
        input[type="date"]:focus,
        textarea:focus {
            border-color: #22AAA1;
            box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
            outline: none;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #22AAA1;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
        }
        button:hover {
            background-color: #357ABD;
            transform: translateY(-2px);
        }
        @media (max-width: 600px) {
            form {
                padding: 20px;
            }
            h1 {
                font-size: 2em;
            }
        }
    </style>
</head>
<body>
    <h1>Create a New Blog</h1>
    <form action="/blogs" method="POST" enctype="multipart/form-data">
        @csrf
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>

        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>

        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required>

        <label for="image">Image:</label>
        <input type="file" id="image" name="image">

        <button type="submit">Post Blog</button>
    </form>

    <footer style="border-top: 4px solid #22AAA1; padding: 20px; text-align: center; background-color: #156862; color: white; margin-top: 6px;">
        <p>&copy; Copyright 2024 PetCare. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
            <a href="#" style="color: white; margin: 0 10px;">Facebook</a>
            <a href="#" style="color: white; margin: 0 10px;">Twitter</a>
            <a href="#" style="color: white; margin: 0 10px;">Instagram</a>
        </div>
    </footer>
    
</body>
</html>

