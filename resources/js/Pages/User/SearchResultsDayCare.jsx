import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react'; // Adjust import based on your setup

const SearchResultsDaycare = ({ dayCareCenterCity, dayCareCenterName, date }) => {
    console.log(dayCareCenterCity, dayCareCenterName, date);
    const [daycares, setDaycares] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shouldBook, setShouldBook] = useState(false);
    
    const { data, setData, post, processing } = useForm({
        daycareId: '',
        date: date,
    });

    useEffect(() => {
        fetchDaycares();
    }, [dayCareCenterCity, dayCareCenterName, date]); // Fetch when the criteria change

    useEffect(() => {
        if (shouldBook) {
            post(route('addDaycareBooking')) // Replace with your booking route
                .then(() => setShouldBook(false)); // Reset shouldBook after the post request is complete
        }
    }, [shouldBook]);

    const fetchDaycares = async () => {
        try {
            const response = await fetch(route('searchDayCareCenter', { dayCareCenterCity, dayCareCenterName, date })); // Adjust endpoint as needed
            const result = await response.json();
            setDaycares(result.dayCareCenters);
        } catch (error) {
            console.error('Error fetching daycares:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBookAppointment = (daycareId) => {
        setData('daycareId', daycareId); // Set the daycareId
        setShouldBook(true); // Trigger the booking process
    };

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-[#156862]">Search Results</h2>
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : daycares.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {daycares.map((daycare) => (
                            <div key={daycare.dayCareCenterId} className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-center text-[#156862] mb-2">{daycare.dayCareCenterName}</h3>
                                <div className="text-center mt-4">
                                    <button
                                        onClick={() => handleBookAppointment(daycare.dayCareCenterId)}
                                        className="bg-[#22AAA1] text-white px-4 py-2 rounded-lg hover:bg-[#156862]"
                                        disabled={processing}
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No daycare centers found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsDaycare;
