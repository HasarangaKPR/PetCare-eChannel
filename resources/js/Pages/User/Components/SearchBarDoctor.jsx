// SearchBar.jsx
import React from 'react';

const SearchBarDoctor = () => {
    return (
        <div className="bg-[#156862] shadow-md rounded-lg p-6 mx-auto w-full m-4 "> {/* Full width, with max-width */}
            <div className="flex flex-col md:flex-row md:items-end gap-4">
                {/* Nearest City Dropdown */}
                <div className="flex-1">
                    <label htmlFor="city" className="text-sm font-medium text-white mb-2 block">Nearest City</label>
                    <select
                        id="city"
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    >
                        <option value="">Select City</option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                        <option value="city3">City 3</option>
                        <option value="city4">City 4</option>
                    </select>
                </div>

                {/* Veterinary Hospital Dropdown */}
                <div className="flex-1">
                    <label htmlFor="hospital" className="text-sm font-medium text-white mb-2 block">Veterinary Hospital</label>
                    <select
                        id="hospital"
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    >
                        <option value="">Select Hospital</option>
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
                        className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#22AAA1]"
                    />
                </div>

                {/* Search Button - aligned with inputs */}
                <div className="md:flex-shrink-0">
                    <button className="w-full bg-[#22AAA1] text-white px-6 py-2 rounded-lg hover:bg-[#156862] transition mt-4 md:mt-0">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBarDoctor;
