import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchResultsDaycare = ({ dayCareCenterCity, dayCareCenterName, start_date, end_date }) => {
    const [daycares, setDaycares] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shouldBook, setShouldBook] = useState(false);
    const [formData, setFormData] = useState({
        dayCareCenterId: '',
        start_date: start_date,
        end_date: end_date,
    });

    useEffect(() => {
        fetchDaycares();
    }, [dayCareCenterCity, dayCareCenterName, start_date, end_date]); // Fetch when criteria change

    useEffect(() => {
        if (shouldBook) {
            bookRoom();
        }
    }, [shouldBook]);

    const fetchDaycares = async () => {
        try {
            const response = await fetch(route('searchDayCareCenter', { dayCareCenterCity, dayCareCenterName,  start_date, end_date}));
            const result = await response.json();
            setDaycares(result.dayCareCenters);
        } catch (error) {
            console.error('Error fetching daycares:', error);
        } finally {
            setLoading(false);
        }
    };

    const bookRoom = async () => {
        try {
            const response = await axios.post(route('bookroom'), formData);
            if (response.status === 201) {
                toast.success('The booking has been successfully added.');
            } else {
                toast.error('Space is not available.');
            }
        } catch (error) {
            console.error('Error booking room:', error);
            toast.error('Space is not available.');
        } finally {
            setShouldBook(false); // Reset shouldBook after the post request is complete
        }
    };

    const handleBookAppointment = (dayCareCenterId) => {
        setFormData((prevData) => ({ ...prevData, dayCareCenterId })); // Set the dayCareCenterId in formData
        setShouldBook(true); // Trigger the booking process
    };

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <ToastContainer position="top-right" autoClose={5000} />
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
                                        disabled={shouldBook}
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
