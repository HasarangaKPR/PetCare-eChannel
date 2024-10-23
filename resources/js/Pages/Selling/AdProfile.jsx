import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

const AdProfile = ({ id }) => {
    const [ad, setAd] = useState(null);

    // Fetch the single ad data
    useEffect(() => {
        // This can be replaced with actual Inertia call
        axios.get(`/ads/${id}`).then(response => {
            setAd(response.data);
        });
    }, [id]);

    if (!ad) return <div>Loading...</div>;

    return (
        <div className="ad-profile-container">
            <img src={ad.image_url} alt={ad.title} />
            <h1>{ad.title}</h1>
            <p>{ad.description}</p>
        </div>
    );
};

export default AdProfile;
