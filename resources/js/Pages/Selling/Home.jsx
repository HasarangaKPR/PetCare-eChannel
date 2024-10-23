import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const Home = () => {
    const [ads, setAds] = useState([]);

    // Fetch the ads from backend (Laravel Inertia)
    useEffect(() => {
        // This can be replaced with actual Inertia call
        axios.get('/ads').then(response => {
            setAds(response.data);
        });
    }, []);

    return (
        <div className="home-container">
            <h1>Pet Selling Ads</h1>
            <div className="ads-grid">
                {ads.map((ad) => (
                    <div key={ad.id} className="ad-card">
                        <img src={ad.image_url} alt={ad.title} />
                        <h3>{ad.title}</h3>
                        <p>{ad.description.slice(0, 100)}...</p>
                        <Link href={`/ads/${ad.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
