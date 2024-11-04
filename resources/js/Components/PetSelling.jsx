import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetSelling = () => {
    const [form, setForm] = useState({
        name: '', breed: '', species: '', description: '',
        owner_name: '', owner_contact: '', district: '', price: ''
    });
    const [pets, setPets] = useState([]);

    useEffect(() => {
        // Fetch the existing pets to display
        axios.get('/pets').then(response => {
            setPets(response.data);
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to the backend
        axios.post('/pets', form)
            .then(response => {
                setPets([...pets, response.data]);  // Update ads after submission
                setForm({  // Clear form
                    name: '', breed: '', species: '', description: '',
                    owner_name: '', owner_contact: '', district: '', price: ''
                });
            });
    };

    return (
        <div>
            <h1>Post a Pet Ad</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Pet Name" value={form.name} onChange={handleInputChange} required />
                <input name="breed" placeholder="Breed" value={form.breed} onChange={handleInputChange} required />
                <input name="species" placeholder="Species" value={form.species} onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleInputChange} required />
                <input name="owner_name" placeholder="Owner Name" value={form.owner_name} onChange={handleInputChange} required />
                <input name="owner_contact" placeholder="Owner Contact" value={form.owner_contact} onChange={handleInputChange} required />
                <input name="district" placeholder="District" value={form.district} onChange={handleInputChange} required />
                <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleInputChange} required />
                <button type="submit">Post Ad</button>
            </form>

            <h2>Pet Ads</h2>
            <div>
                {pets.map(pet => (
                    <div key={pet.id}>
                        <h3>{pet.name} - {pet.breed}</h3>
                        <p>Species: {pet.species}</p>
                        <p>Description: {pet.description}</p>
                        <p>Owner: {pet.owner_name}, Contact: {pet.owner_contact}</p>
                        <p>District: {pet.district}</p>
                        <p>Price: Rs. {pet.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetSelling;

