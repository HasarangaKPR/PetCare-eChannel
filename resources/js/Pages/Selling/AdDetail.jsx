// In resources/js/Pages/Selling/AdDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AdDetail = () => {
    const { adId } = useParams();
    const [petAd, setPetAd] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdDetails = async () => {
            try {
                const response = await axios.get(`/showAd?adId=${adId}`);
                setPetAd(response.data.petAd);
            } catch (error) {
                console.error('Error fetching ad details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAdDetails();
    }, [adId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!petAd) {
        return <div>Ad not found</div>;
    }

    return (
        <div className="ad-detail">
            <h1>{petAd.pet_name}</h1>
            <img src={petAd.pet_photos} alt={petAd.pet_name} />
            <p>Type: {petAd.pet_type}</p>
            <p>Breed: {petAd.breed}</p>
            <p>Age: {petAd.age}</p>
            <p>Gender: {petAd.gender}</p>
            <p>Price: Rs. {petAd.price}</p>
            <p>Description: {petAd.description}</p>
            <p>Seller: {petAd.seller_name}</p>
            <p>Contact: {petAd.phone_number}</p>
            <p>Location: {petAd.location}</p>
        </div>
    );
};

export default AdDetail;
