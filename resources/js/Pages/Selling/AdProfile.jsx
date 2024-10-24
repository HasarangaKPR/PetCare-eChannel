import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdProfile = ({ id }) => {
    const [ad, setAd] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the single ad data
    useEffect(() => {
        axios
            .get(`/ads/${id}`)
            .then((response) => {
                setAd(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load ad. Please try again.');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-10">Loading...</div>;

    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <img
                src={ad.image_url}
                alt={ad.title}
                className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <div className="p-4">
                <h1 className="text-3xl font-bold text-teal-600 mb-4">{ad.title}</h1>
                <p className="text-gray-700 mb-6">{ad.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-lg">
                        <span className="font-semibold">Price:</span> {ad.price}
                    </div>
                    <div className="text-lg">
                        <span className="font-semibold">Breed:</span> {ad.breed}
                    </div>
                    <div className="text-lg">
                        <span className="font-semibold">Location:</span> {ad.location}
                    </div>
                    <div className="text-lg">
                        <span className="font-semibold">Age:</span> {ad.age} years
                    </div>
                    <div className="text-lg">
                        <span className="font-semibold">Gender:</span> {ad.gender}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contact Seller</h2>
                    <div className="text-lg">
                        <span className="font-semibold">Seller Name:</span> {ad.seller_name}
                    </div>
                    <div className="text-lg">
                        <span className="font-semibold">Phone:</span> {ad.phone}
                    </div>
                    <div className="text-lg">
                        <span className="font-semibold">Location:</span> {ad.location}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdProfile;
