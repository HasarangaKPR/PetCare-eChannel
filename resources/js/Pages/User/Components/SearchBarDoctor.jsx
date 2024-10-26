import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import SearchResults from '../SearchResults'; // Import the SearchResults component

const SearchBarDoctor = () => {

    // Dummy data for cities
    const cities = [
        { id: 1, name: 'New York' },
        { id: 2, name: 'Los Angeles' },
        { id: 3, name: 'Chicago' },
        { id: 4, name: 'San Francisco' },
        { id: 5, name: 'Houston' },
    ];

    // Dummy data for doctors
    const doctors = [
        { id: 1, name: 'Dr. John Doe', cityId: 1, profilePic: 'doctor1.jpg', contact: '123-456-7890', address: '123 Main St, New York, NY', availableDates: ['2024-10-26', '2024-10-27'] },
        { id: 2, name: 'Dr. Jane Smith', cityId: 2, profilePic: 'doctor2.jpg', contact: '987-654-3210', address: '456 Elm St, Los Angeles, CA', availableDates: ['2024-10-26'] },
        { id: 3, name: 'Dr. Emily Johnson', cityId: 3, profilePic: 'doctor3.jpg', contact: '555-666-7777', address: '789 Pine St, Chicago, IL', availableDates: ['2024-10-27'] },
        { id: 4, name: 'Dr. Michael Brown', cityId: 1, profilePic: 'doctor4.jpg', contact: '222-333-4444', address: '321 Oak St, New York, NY', availableDates: ['2024-10-28', '2024-10-29'] },
        { id: 5, name: 'Dr. Sarah Lee', cityId: 4, profilePic: 'doctor5.jpg', contact: '888-999-0000', address: '654 Maple St, San Francisco, CA', availableDates: ['2024-10-30'] },
        { id: 6, name: 'Dr. David Kim', cityId: 2, profilePic: 'doctor6.jpg', contact: '444-555-6666', address: '987 Cedar St, Los Angeles, CA', availableDates: ['2024-10-27', '2024-10-31'] },
        { id: 7, name: 'Dr. Lisa Patel', cityId: 5, profilePic: 'doctor7.jpg', contact: '777-888-9999', address: '111 Birch St, Houston, TX', availableDates: ['2024-10-28'] },
        { id: 8, name: 'Dr. Kevin Zhang', cityId: 3, profilePic: 'doctor8.jpg', contact: '999-111-2222', address: '222 Walnut St, Chicago, IL', availableDates: ['2024-10-26', '2024-10-27'] },
    ];



    //const { cities, doctors } = usePage().props; // Fetch cities and doctors from backend
    
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    const handleSearch = () => {
        // Filter logic based on city, doctor, and date
        const results = doctors.filter(doctor => {
            return (
                (!selectedCity || doctor.cityId === parseInt(selectedCity)) &&
                (!selectedDoctor || doctor.id === parseInt(selectedDoctor)) &&
                (!selectedDate || doctor.availableDates.includes(selectedDate))
            );
        });
        setFilteredDoctors(results); // Set the filtered results
    };

    return (
        <div>
            {/* Search bar section */}
            <div className="bg-[#156862] shadow-md rounded-lg p-6 mx-auto w-full m-4">
                <div className="flex flex-col md:flex-row md:items-end gap-4">
                    
                    {/* Nearest City Dropdown */}
                    <div className="flex-1">
                        <label htmlFor="city" className="text-sm font-medium text-white mb-2 block">Nearest City</label>
                        <select
                            id="city"
                            className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
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
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
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
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>

                    {/* Search Button */}
                    <div className="md:flex-shrink-0">
                        <button
                            onClick={handleSearch}
                            className="w-full bg-[#22AAA1] text-white px-6 py-2 rounded-lg hover:bg-[#0D1B2A] transition mt-4 md:mt-0"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Search results section */}
            <div>
                <SearchResults results={filteredDoctors} />
            </div>
        </div>
    );
};

export default SearchBarDoctor;
