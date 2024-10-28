import React from 'react';

const SearchResultsDoctor = ({ results }) => {
    if (results.length === 0) {
        return <div className="text-center text-gray-500 mt-8">No doctors found. Try adjusting your search criteria.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {results.map((doctor) => (
                <div key={doctor.id} className="bg-white shadow-md rounded-lg p-4">
                    {/* Profile Picture */}
                    <div className="flex items-center justify-center mb-4">
                        <img 
                            src={doctor.profilePic} 
                            alt={`${doctor.name}'s profile`} 
                            className="w-24 h-24 rounded-full object-cover"
                        />
                    </div>

                    {/* Doctor Information */}
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                        <p className="text-gray-600 mb-2">{doctor.address}</p>
                        <p className="text-gray-500 mb-4">Contact: {doctor.contact}</p>

                        {/* Available Channeling Times */}
                        <div className="text-gray-600">
                            <p className="font-semibold">Available Times:</p>
                            <ul className="mt-2">
                                {doctor.availableTimes.map((time, index) => (
                                    <li key={index} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 inline-block m-1">
                                        {time}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Appointment Button */}
                        <button className="mt-4 bg-[#22AAA1] text-white px-4 py-2 rounded-lg hover:bg-[#156862] transition">
                            Book Appointment
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResultsDoctor;
