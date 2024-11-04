<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #184375;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        .blog-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }
        .blog-post {
            background: linear-gradient(145deg, #e0e7ff, #ffecd1);
            border-radius: 10px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            border: 2px solid #ffb6b9;
        }
        .blog-post:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .blog-content {
            padding: 20px;
        }
        .blog-title {
            font-size: 1.5em;
            color: #2d3748;
            margin-top: 0;
        }
        .blog-description {
            font-size: 1em;
            color: #4a5568;
            margin-bottom: 10px;
        }
        .blog-date {
            font-size: 0.85em;
            color: #718096;
            margin-top: 8px;
        }
        img {
            width: 100%;
            height: auto;
            border-bottom: 4px solid #f6ad55;
        }
    </style>
</head>
<body>
    <h1>Blogs</h1>
    <div class="blog-container">
        <div class="blog-grid">
            @foreach ($blogs as $blog)
                <div class="blog-post">
                    @if ($blog->image)
                        <img src="{{ asset('storage/' . $blog->image) }}" alt="Blog Image">
                    @endif
                    <div class="blog-content">
                        <h2 class="blog-title">{{ $blog->title }}</h2>
                        <p class="blog-description"><strong>Description:</strong> {{ $blog->description }}</p>
                        <p class="blog-date"><strong>Date:</strong> {{ $blog->date }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</body>
</html>

