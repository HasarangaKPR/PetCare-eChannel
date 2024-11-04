import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

function BlogForm() {
    const [form, setForm] = useState({ author: '', description: '', date: '', image: null });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({ ...form, [name]: files ? files[0] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object to handle file uploads
        const formData = new FormData();
        formData.append('author', form.author);
        formData.append('description', form.description);
        formData.append('date', form.date);
        if (form.image) {
            formData.append('image', form.image);
        }

        Inertia.post('/blogs', formData); // Sends FormData to Laravel route
    };

    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>Author:</label>
                <input type="text" name="author" onChange={handleChange} required />

                <label>Description:</label>
                <textarea name="description" onChange={handleChange} required />

                <label>Date:</label>
                <input type="date" name="date" onChange={handleChange} required />

                <label>Image:</label>
                <input type="file" name="image" onChange={handleChange} />

                <button type="submit">Submit Blog</button>
            </form>
        </div>
    );
}

export default BlogForm;

