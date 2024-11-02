import React, { useState } from 'react';
import SearchResultsDaycare from '../SearchResultsDaycare'; // Adjust import based on your structure

const SearchBarDaycare = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCenter, setSelectedCenter] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [searchData, setSearchData] = useState({
        dayCareCenterCity: '',
        dayCareCenterName: '',
        date: ''
    });

    const handleSearch = () => {
        // Update searchData state with the current form values
        setSearchData({
            dayCareCenterCity: selectedCity,
            dayCareCenterName: selectedCenter, // Corrected this line
            date: selectedDate
        });
    };

    return (
        <>
            <div className="bg-[#156862] shadow-md rounded-lg p-6 mx-auto w-full m-4">
                <div className="flex flex-col md:flex-row md:items-end gap-4">
                    {/* Nearest City Dropdown */}
                    <div className="flex-1">
                        <label htmlFor="dayCareCenterCity" className="text-sm font-medium text-white mb-2 block">City</label>
                        <select
                            id="dayCareCenterCity"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                        >
                            <option value="">Select City</option>
                            <option value="kalutara">Kalutara</option>
                            <option value="matara">Matara</option>
                            <option value="aluthgama">Aluthgama</option>
                            <option value="hakmana">Hakmana</option>
                        </select>
                    </div>

                    {/* Daycare Center Dropdown */}
                    <div className="flex-1">
                        <label htmlFor="dayCareCenterName" className="text-sm font-medium text-white mb-2 block">Daycare Center Name</label>
                        <select
                            id="dayCareCenterName"
                            value={selectedCenter}
                            onChange={(e) => setSelectedCenter(e.target.value)}
                            className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                        >
                            <option value="">Select Daycare Center</option>
                            <option value="hospital1">Hospital 1</option>
                            <option value="hospital2">Hospital 2</option>
                            <option value="hospital3">Hospital 3</option>
                            <option value="hospital4">Hospital 4</option>
                        </select>
                    </div>

                    {/* Date Picker */}
                    <div className="flex-1">
                        <label htmlFor="date" className="text-sm font-medium text-white mb-2 block">Date</label>
                        <input
                            type="date"
                            id="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
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
            </div>

            {/* Pass searchData as props to SearchResultsDaycare */}
            <SearchResultsDaycare
                key={`${searchData.dayCareCenterCity}-${searchData.dayCareCenterName}-${searchData.date}`}
                dayCareCenterCity={searchData.dayCareCenterCity}
                dayCareCenterName={searchData.dayCareCenterName}
                date={searchData.date}
            />
        </>
    );
};

export default SearchBarDaycare;
