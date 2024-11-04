import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from'../SystemAdmin/Components/Header';

const PostAd = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        pet_name: '',
        pet_type: '',
        breed: '',
        age: '',
        gender: '',
        price: '',
        description: '',
        pet_photos: null, // Initialize as null for file handling
        seller_name: '',
        phone_number: '',
        location: '',
    });

    const handleFileChange = (e) => {
        setData('pet_photos', e.target.files[0]); // Update to handle only one image file
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Ad Posted successfully.');

        // Create a FormData object to send files correctly
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        // Submit with post method
        post('/CreateAd', {
            data: formData,
            onSuccess: () => reset(),
            onError: () => console.error("Error submitting form")
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <ToastContainer position="top-right" autoClose={5000} />
            <h1 className="text-2xl font-bold mb-6">Post a New Pet Ad</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Pet Information */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Pet Information</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Pet Name</label>
                        <input
                            type="text"
                            value={data.pet_name}
                            onChange={(e) => setData('pet_name', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.pet_name && <p className="text-red-500">{errors.pet_name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Type of Pet</label>
                        <select
                            value={data.pet_type}
                            onChange={(e) => setData('pet_type', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        >
                            <option value="">Select Pet Type</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Bird">Bird</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.pet_type && <p className="text-red-500">{errors.pet_type}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Breed</label>
                        <input
                            type="text"
                            value={data.breed}
                            onChange={(e) => setData('breed', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.breed && <p className="text-red-500">{errors.breed}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Age (in years)</label>
                        <input
                            type="number"
                            value={data.age}
                            onChange={(e) => setData('age', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.age && <p className="text-red-500">{errors.age}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Gender</label>
                        <div className="mt-1 flex items-center space-x-4">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={data.gender === 'Male'}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    className="mr-1"
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={data.gender === 'Female'}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    className="mr-1"
                                />
                                Female
                            </label>
                        </div>
                        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Price</label>
                        <input
                            type="number"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.price && <p className="text-red-500">{errors.price}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.description && <p className="text-red-500">{errors.description}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Pet Photos</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.pet_photos && <p className="text-red-500">{errors.pet_photos}</p>}
                    </div>
                </div>

                {/* Seller Information */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Owner's Information</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Seller Name</label>
                        <input
                            type="text"
                            value={data.seller_name}
                            onChange={(e) => setData('seller_name', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.seller_name && <p className="text-red-500">{errors.seller_name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Contact Number</label>
                        <input
                            type="text"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.phone_number && <p className="text-red-500">{errors.phone_number}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">City</label>
                        <input
                            type="text"
                            value={data.location}
                            onChange={(e) => setData('location', e.target.value)}
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                        {errors.location && <p className="text-red-500">{errors.location}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit Ad
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostAd;

