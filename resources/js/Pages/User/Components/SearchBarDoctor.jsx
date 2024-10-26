// SearchBarDoctor.jsx
import { Link } from '@inertiajs/react';
import React from 'react';
// import { usePage } from '@inertiajs/react';

const SearchBarDoctor = () => {
    // const { cities, doctors } = usePage().props; // Fetch cities and doctors from backend
    
     // Dummy data for testing
     const cities = [
        { id: 1, name: 'New York' },
        { id: 2, name: 'Los Angeles' },
        { id: 3, name: 'Chicago' },
        { id: 4, name: 'Houston' }
    ];

    const doctors = [
        { id: 1, name: 'Dr. John Doe' },
        { id: 2, name: 'Dr. Sarah Smith' },
        { id: 3, name: 'Dr. William Brown' },
        { id: 4, name: 'Dr. Emily Davis' }
    ];
    
    return (
        <div className="bg-[#156862] shadow-md rounded-lg p-6 mx-auto w-full m-4">
            <div className="flex flex-col md:flex-row md:items-end gap-4">
                
                {/* Nearest City Dropdown */}
                <div className="flex-1">
                    <label htmlFor="city" className="text-sm font-medium text-white mb-2 block">Nearest City</label>
                    <select
                        id="city"
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select>
                </div>

                {/* Doctor Dropdown */}
                <div className="flex-1">
                    <label htmlFor="doctor" className="text-sm font-medium text-white mb-2 block">Doctor Name</label>
                    <select
                        id="doctor"
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                        ))}
                    </select>
                </div>

                {/* Date Picker */}
                <div className="flex-1">
                    <label htmlFor="date" className="text-sm font-medium text-white mb-2 block">Date</label>
                    <input
                        type="date"
                        id="date"
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    />
                </div>

                {/* Search Button */}
                <Link href={route('user.searchresults')}>
                <div className="md:flex-shrink-0">
                    <button className="w-full bg-[#22AAA1] text-white px-6 py-2 rounded-lg hover:bg-[#156862] transition mt-4 md:mt-0">
                        Search
                    </button>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default SearchBarDoctor;
