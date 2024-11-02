import React, { useState, useEffect } from 'react';
import SearchResultsDoctor from '../SearchResultsDoctor';

const SearchBarDoctor = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isDoctorAvailable, setIsDoctorAvailable] = useState(true);

    // State to hold form data to be passed as props
    const [searchData, setSearchData] = useState({
        doctorCity: '',
        doctorName: '',
        date: '',
        appointmentTime: ''
    });

    const handleSearch = () => {
        // Update searchData state with the current form values
        setSearchData({
            doctorCity: selectedCity,
            doctorName: selectedDoctor,
            date: selectedDate,
            appointmentTime: selectedTime
        });

    };

    return (
        <>
            <div className="bg-[#156862] shadow-md rounded-lg p-6 mx-auto w-full m-4">
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
                            <option value="new_york">New York</option>
                            <option value="los_angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                            <option value="houston">Houston</option>
                        </select>
                    </div>

                    {/* Doctor Dropdown */}
                    <div className="flex-1">
                        <label htmlFor="doctorName" className="text-sm font-medium text-white mb-2 block">Doctor Name</label>
                        <select
                            id="doctorName"
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                        >
                            <option value="">Select Doctor</option>
                            <option value="Dr. Smith">Dr. Smith</option>
                            <option value="AAAA">AAAA</option>
                            <option value="Dr. Lee">Dr. Lee</option>
                            <option value="Dr. Patel">Dr. Patel</option>
                            <option value="Dr. Garcia">Dr. Garcia</option>
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
                            className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                        />
                    </div>

                    {/* Time Picker */}
                    <div className="flex-1">
                        <label htmlFor="time" className="text-sm font-medium text-white mb-2 block">Select Time</label>
                        <input
                            type="time"
                            id="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                        />
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
            </div>

            {/* Pass searchData as props to SearchResultsDoctor with key to ensure rerender */}
            <SearchResultsDoctor
                key={`${searchData.doctorCity}-${searchData.doctorName}-${searchData.date}-${searchData.appointmentTime}`}
                doctorCity={searchData.doctorCity}
                doctorName={searchData.doctorName}
                date={searchData.date}
                appointmentTime={searchData.appointmentTime}
            />
        </>
    );
};

export default SearchBarDoctor;
