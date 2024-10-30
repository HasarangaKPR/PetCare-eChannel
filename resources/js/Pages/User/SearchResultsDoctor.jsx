import React, { useState, useEffect } from 'react';

const SearchResultsDoctor = ({ appointmentTime, date, doctorDistrict, doctorCity }) => {
    const [availability, setAvailability] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            // const appointmentTime = {appointmentTime};
            // const date = {date};
            // const doctorDistrict = {doctorDistrict};
            // const doctorCity = {doctorCity};

            // const appointmentTime = '10:00';
            // const date = '2024-10-28';
            // const doctorDistrict = 'matara';
            // const doctorCity = 'matara';
            const response = await fetch(route('searchDoctor', { appointmentTime, date, doctorDistrict, doctorCity}));
            const data = await response.json();
            setAvailability(data.availability);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-[#156862]">Search Results</h2>

                {availability.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {availability.map((user) => (
                            <div key={user.doctorId} className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-center text-[#156862] mb-2">{user.name}</h3>
                                <div className="text-center mt-4">
                                    <button className="bg-[#22AAA1] text-white px-4 py-2 rounded-lg hover:bg-[#156862]">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No doctors found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsDoctor;
