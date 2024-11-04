import React, { useEffect, useState } from 'react';
import logo from './Assets/image.png';
import { Link } from '@inertiajs/react';

const Home = () => {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(''); // New state for search term

    const fetchAds = async (breed) => {
        try {
            const response = await fetch(route('SearchPet', { breed })); // Fetch data with breed as parameter
            const data = await response.json();
            setAds(data);
        } catch (error) {
            console.error("Error fetching ads:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAds(''); // Initial fetch with an empty search term
    }, []);

    const handleSearch = () => {
        fetchAds(searchTerm); // Fetch ads based on the search term
    };

    return (
        <>
            <header className="sticky top-0 left-0 w-full flex items-center justify-between py-4 bg-[#0D1B2A]">
                <div className="flex items-center mx-4 w-64">
                    <img src={logo} alt="Company Logo" />
                </div>

                {/* Search bar */}
                <div className="w-full mx-6 flex items-center justify-center">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search for pets..."
                            className="w-80 px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                        />
                        <button
                            className="ml-2 p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none"
                            onClick={handleSearch} // Call handleSearch on click
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <Link href="/selling/postad" className="flex-none px-4 py-2 bg-[#9747FF] text-white rounded-3xl hover:bg-[#7437c5] mx-8">
                        Post Ad
                    </Link>
                </div>
            </header>

            <main>
                <div className="max-w-7xl mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-6">Available Pets for Sale</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {ads.map((ad) => (
                            <div key={ad.adId} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={ad.pet_photos}
                                    alt={ad.breed}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-green-600">Rs: {ad.price}</h2>
                                    <p className="text-gray-600">{ad.breed}</p>
                                    <p className="text-gray-400">{ad.pet_name}</p>
                                    <p className="text-gray-400">{ad.location}</p>
                                    <p className="text-gray-400">{ad.seller_name}</p>
                                    <p className="text-sky-500 font-semibold">Contact: {ad.phone_number}</p> {/* Highlighted contact number */}
                                    <div className="mt-2 flex justify-between items-center text-gray-400 text-sm">
                                        <span>{ad.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="py-16 text-center text-sm text-white bg-[#156862] mt-6">
                <p>©Copyright 2024 PetCare. All right reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-white">Facebook</a>
                    <a href="#" className="text-white">Twitter</a>
                    <a href="#" className="text-white">Instagram</a>
                </div>
            </footer>
        </>
    );
};

export default Home;


