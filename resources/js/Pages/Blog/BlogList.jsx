import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/blogs')
            .then(response => {
                setBlogs(response.data);
            });
    }, []);

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div key={blog.id} className="blog-card">
                    <img src={blog.image} alt={blog.title} />
                    <h2>{blog.title}</h2>
                    <p>{new Date(blog.date).toLocaleDateString()}</p>
                    <p>{blog.description.slice(0, 100)}...</p>
                    <Link href={`/blogs/${blog.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
