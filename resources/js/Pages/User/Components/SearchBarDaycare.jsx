import React, { useState } from 'react';
import SearchResultsDaycare from '../SearchResultsDaycare'; // Adjust import based on your structure

const SearchBarDaycare = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCenter, setSelectedCenter] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [searchData, setSearchData] = useState({
        dayCareCenterCity: '',
        dayCareCenterName: '',
        start_date: '',
        end_date: '',
    });
    
    const [formErrors, setFormErrors] = useState({
        startDate: false,
        endDate: false,
    });

    const handleSearch = () => {
        // Check for validation
        const errors = {
            startDate: !selectedStartDate,
            endDate: !selectedEndDate,
        };

        setFormErrors(errors);

        if (!errors.startDate && !errors.endDate) {
            // Update searchData state with the current form values
            setSearchData({
                dayCareCenterCity: selectedCity,
                dayCareCenterName: selectedCenter,
                start_date: selectedStartDate,
                end_date: selectedEndDate,
            });
        }
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

                    {/* Start Date Picker */}
                    <div className="flex-1">
                        <label htmlFor="start_date" className="text-sm font-medium text-white mb-2 block">Start Date</label>
                        <input
                            type="date"
                            id="start_date"
                            value={selectedStartDate}
                            onChange={(e) => setSelectedStartDate(e.target.value)}
                            className={`w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1] ${formErrors.startDate ? 'border-red-500' : ''}`}
                            required
                        />
                        {formErrors.startDate && <small className="text-red-500">Start date is required.</small>}
                    </div>

                    {/* End Date Picker */}
                    <div className="flex-1">
                        <label htmlFor="end_date" className="text-sm font-medium text-white mb-2 block">End Date</label>
                        <input
                            type="date"
                            id="end_date"
                            value={selectedEndDate}
                            onChange={(e) => setSelectedEndDate(e.target.value)}
                            className={`w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1] ${formErrors.endDate ? 'border-red-500' : ''}`}
                            required
                        />
                        {formErrors.endDate && <small className="text-red-500">End date is required.</small>}
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
                key={`${searchData.dayCareCenterCity}-${searchData.dayCareCenterName}-${searchData.start_date}-${searchData.end_date}`}
                dayCareCenterCity={searchData.dayCareCenterCity}
                dayCareCenterName={searchData.dayCareCenterName}
                start_date={searchData.start_date}
                end_date={searchData.end_date}
            />
        </>
    );
};

export default SearchBarDaycare;
