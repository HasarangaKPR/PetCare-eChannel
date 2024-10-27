import React from 'react';

const SearchResultsDoctor = ({ /*doctors*/ }) => {

     // Dummy data for testing
     const doctors = [
        {
            id: 1,
            name: 'Dr. Samantha Williams',
            profile_picture: 'https://randomuser.me/api/portraits/women/21.jpg',
            contact: '555-1234',
            city: 'New York',
            address: '123 Main St, New York, NY',
            available_times: ['9:00 AM', '12:00 PM', '3:00 PM'],
        },
        {
            id: 2,
            name: 'Dr. Michael Roberts',
            profile_picture: 'https://randomuser.me/api/portraits/men/45.jpg',
            contact: '555-5678',
            city: 'Los Angeles',
            address: '456 Elm St, Los Angeles, CA',
            available_times: ['9:00 AM', '11:00 AM', '4:00 PM'],
        },
        {
            id: 3,
            name: 'Dr. Angela Davis',
            profile_picture: 'https://randomuser.me/api/portraits/women/34.jpg',
            contact: '555-9012',
            city: 'Chicago',
            address: '789 Oak St, Chicago, IL',
            available_times: ['10:00 AM', '1:00 PM', '5:00 PM'],
        },
        
    ];

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-[#156862]">Search Results</h2>

                {doctors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {doctors.map((doctor) => (
                            <div key={doctor.id} className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                                <img
                                    src={doctor.profile_picture}
                                    alt={`${doctor.name}'s profile`}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-center text-[#156862] mb-2">{doctor.name}</h3>
                                <p className="text-center text-gray-600 mb-2">City: {doctor.city}</p>
                                <p className="text-center text-gray-600 mb-2">Contact: {doctor.contact}</p>
                                <p className="text-center text-gray-600 mb-2">Address: {doctor.address}</p>
                                <div className="text-center">
                                    <p className="font-bold text-[#156862]">Available Time Slots</p>
                                    <ul className="text-sm text-gray-500">
                                        {doctor.available_times.map((time, index) => (
                                            <li key={index}>{time}</li>
                                        ))}
                                    </ul>
                                </div>
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
