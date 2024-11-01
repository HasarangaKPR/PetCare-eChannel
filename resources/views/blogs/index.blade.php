<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e9eef2;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #184375;
            margin-bottom: 20px;
        }
        .blog-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: rgb(36, 211, 100);
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .blog-post {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #75ece0;
            border-radius: 5px;
            background-color: #80e3ea;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .blog-post:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        h2 {
            color: #333;
            margin-top: 0;
        }
        p {
            margin: 5px 0;
        }
        img {
            border-radius: 5px;
            margin-top: 10px;
            display: block;
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Blog List</h1>
    <div class="blog-container">
        @foreach ($blogs as $blog)
            <div class="blog-post">
                <h2>{{ $blog->title }}</h2>
                <p><strong>Description:</strong> {{ $blog->description }}</p>
                <p> </p>
                <p><strong>Date:</strong> {{ $blog->date }}</p>
                @if ($blog->image)
                    <img src="{{ asset('storage/' . $blog->image) }}" alt="Blog Image">
                @endif
            </div>
        @endforeach
    </div>
</body>
</html>

