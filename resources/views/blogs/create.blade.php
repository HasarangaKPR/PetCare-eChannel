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
</body>
</html>

