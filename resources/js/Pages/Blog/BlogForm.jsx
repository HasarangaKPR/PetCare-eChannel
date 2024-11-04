import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('description', description);
        if (image) formData.append('image', image);

        await axios.post('/blogs', formData)
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required></textarea>
            <input type="file" onChange={e => setImage(e.target.files[0])} />
            <button type="submit">Post Blog</button>
        </form>
    );
};

export default BlogForm;
