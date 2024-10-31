import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

function BlogList() {
    const { blogs } = usePage().props;

    return (
        <div>
            <h2>Blogs</h2>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h3>{blog.author}</h3>
                    <p>{blog.description}</p>
                    <p>{new Date(blog.date).toLocaleDateString()}</p> {/* Format date here */}
                    {blog.image && <img src={`/storage/${blog.image}`} alt="Blog" />}
                </div>
            ))}
        </div>
    );
}

export default BlogList;


