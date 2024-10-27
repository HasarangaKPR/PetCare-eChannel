import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResultsDoctor from '../SearchResultsDoctor';

const SearchBarDoctor = () => {
    const [cities, setCities] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isDoctorAvailable, setIsDoctorAvailable] = useState(true);

    useEffect(() => {
        // Fetch cities and doctor names from the backend when the component loads
        axios.get('/search-doctors')
            .then(response => {
                setDoctors(response.data);
                const uniqueCities = [...new Set(response.data.map(doctor => doctor.city))];
                setCities(uniqueCities);
            })
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    const handleSearch = () => {
        // Perform a search with selected values
        axios.get('/search-doctors', {
            params: {
                city: selectedCity,
                doctor_name: selectedDoctor,
                date: selectedDate,
                time: selectedTime
            }
        })
            .then(response => {
                const doctors = response.data;
                if (doctors.length > 0) {
                    setIsDoctorAvailable(doctors[0].is_available);
                } else {
                    setIsDoctorAvailable(false);
                }
            })
            .catch(error => console.error('Error searching doctors:', error));
    };

    return (
        <><div className="bg-[#156862] shadow-md rounded-lg p-6 mx-auto w-full m-4">
            <div className="flex flex-col md:flex-row md:items-end gap-4">
                {/* Nearest City Dropdown */}
                <div className="flex-1">
                    <label htmlFor="city" className="text-sm font-medium text-white mb-2 block">Nearest City</label>
                    <select
                        id="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    >
                        <option value="">Select City</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                {/* Doctor Dropdown */}
                <div className="flex-1">
                    <label htmlFor="doctor" className="text-sm font-medium text-white mb-2 block">Doctor Name</label>
                    <select
                        id="doctor"
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                        ))}
                    </select>
                </div>

                {/* Date Picker */}
                <div className="flex-1">
                    <label htmlFor="date" className="text-sm font-medium text-white mb-2 block">Select Date</label>
                    <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]" />
                </div>

                {/* Time Picker */}
                <div className="flex-1">
                    <label htmlFor="time" className="text-sm font-medium text-white mb-2 block">Select Time</label>
                    <input
                        type="time"
                        id="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]" />
                </div>

                {/* Search Button */}
                <div className="md:flex-shrink-0">
                    <button
                        onClick={handleSearch}
                        className="w-full bg-[#22AAA1] text-white px-6 py-2 rounded-lg hover:bg-[#156862] transition mt-4 md:mt-0"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Doctor availability */}
            {!isDoctorAvailable && (
                <div className="text-red-500 mt-4">Doctor is not available at the selected time.</div>
            )}
        </div><div><SearchResultsDoctor /></div></>
    );
};

export default SearchBarDoctor;
