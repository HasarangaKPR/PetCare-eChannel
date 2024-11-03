import React, { useState, useEffect } from 'react';
import SearchResultsDoctor from '../SearchResultsDoctor';

const SearchBarDoctor = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isDoctorAvailable, setIsDoctorAvailable] = useState(true);
    const [doctors, setDoctors] = useState([]); // State for doctors based on city selection
    const [loading, setLoading] = useState(false); // State to manage loading while fetching data

    const [searchData, setSearchData] = useState({
        doctorCity: '',
        doctorName: '',
        date: '',
        appointmentTime: ''
    });

    const [formErrors, setFormErrors] = useState({
        date: false,
        appointmentTime: false
    });

    useEffect(() => {
        // Fetch doctors when selectedCity changes
        const fetchUsers = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch(route('cityDoctors', { city: selectedCity }));
                const result = await response.json();
                setDoctors(result.doctors); // Assuming result.doctors is the array of doctor objects
                console.log(result);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

            fetchUsers();
        
    }, [selectedCity]);
    

    const handleSearch = () => {
        const errors = {
            date: !selectedDate,
            appointmentTime: !selectedTime
        };

        setFormErrors(errors);

        if (!errors.date && !errors.appointmentTime) {
            setSearchData({
                doctorCity: selectedCity,
                doctorName: selectedDoctor,
                date: selectedDate,
                appointmentTime: selectedTime
            });
        }
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
                            // disabled={loading || !doctors.length}
                        >
                            <option value="">Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.doctorName}>{doctor.doctorName}</option>
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
                            className={`w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1] ${formErrors.date ? 'border-red-500' : ''}`}
                            required
                        />
                        {formErrors.date && <small className="text-red-500">Date is required.</small>}
                    </div>

                    {/* Time Picker */}
                    <div className="flex-1">
                        <label htmlFor="time" className="text-sm font-medium text-white mb-2 block">Select Time</label>
                        <input
                            type="time"
                            id="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className={`w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1] ${formErrors.appointmentTime ? 'border-red-500' : ''}`}
                            required
                        />
                        {formErrors.appointmentTime && <small className="text-red-500">Time is required.</small>}
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
