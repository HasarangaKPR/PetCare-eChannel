import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from "../Button/PrimaryButton";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";

const SearchBar = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleSearch = () => {
    console.log("Searching...");
  };

  return (
    <div className="bg-[#156862] w-[90%] h-[144px] p-4 rounded-lg flex justify-between items-center mx-4">
      <div className="relative w-[292px]">
        <input
          type="text"
          placeholder="Search Nearest City"
          className="input input-bordered w-full h-[48px] bg-white pl-10 ml-6"
        />
      </div>

      <div className="relative w-[396px]">
        <select
          className="input input-bordered w-full h-[48px] bg-white pr-10"
          placeholder="Select Veterinary Hospital"
        >
          <option value="">Select Veterinary Hospital</option>
          <option value="Hospital1">Hospital 1</option>
          <option value="Hospital2">Hospital 2</option>
          <option value="Hospital3">Hospital 3</option>
        </select>
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="relative w-[292px]">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="MM/DD/YYYY"
          className="input input-bordered w-full h-[48px] bg-white pl-10"
        />
        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <PrimaryButton
        onClick={handleSearch}
        text="Search"
        additionalClasses="rounded-[24px] w-[111px] h-[46px] mr-6"
      />
    </div>
  );
};

export default SearchBar;
