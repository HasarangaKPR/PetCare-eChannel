<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog List</title>
    <style>
        /* General styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #ecf1f0;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        /* Header styling */
        header {
            background-color: #22AAA1;
            color: white;
            padding: 20px;
            text-align: center;
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
        footer {
            border-top: 4px solid #22AAA1;
            padding: 20px;
            text-align: center;
            background-color: #156862;
            color: white;
            margin-top: 6px;
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>Welcome to PetCare Blog</h1>
        <p>Your one-stop destination for pet care tips, stories, and resources!</p>
    </header>

    
    <div class="blog-container">
        <div class="blog-grid">
            @foreach ($blogs as $blog)
                <div class="blog-post">
                    @if ($blog->image)
                        <img src="{{ asset('storage/' . $blog->image) }}" alt="Blog Image">
                    @endif
                    <div class="blog-content">
                        <h2 class="blog-title">{{ $blog->title }}</h2>
                        <p class="blog-description"><strong></strong> {{ $blog->description }}</p>
                        <p class="blog-date"><strong></strong> {{ $blog->date }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

    <footer>
        <p>&copy; Copyright 2024 PetCare. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
            <a href="#" style="color: white; margin: 0 10px;">Facebook</a>
            <a href="#" style="color: white; margin: 0 10px;">Twitter</a>
            <a href="#" style="color: white; margin: 0 10px;">Instagram</a>
        </div>
    </footer>
</body>
</html>


