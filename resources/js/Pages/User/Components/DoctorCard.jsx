// DoctorCard.jsx
import React from 'react';

const DoctorCard = ({ profilePic, name, address, contact, timeSlots }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center space-y-4">
            <img
                src={profilePic}
                alt={`${name}'s profile`}
                className="w-24 h-24 rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{address}</p>
            <p className="text-sm text-gray-600">{contact}</p>
            <div className="flex space-x-2">
                {timeSlots.map((slot, index) => (
                    <span
                        key={index}
                        className="bg-[#22AAA1] text-white px-3 py-1 rounded-full text-xs"
                    >
                        {slot}
                    </span>
                ))}
            </div>
            <button className="bg-[#156862] text-white py-2 px-6 rounded-lg hover:bg-[#0A3D48] transition">
                Book Appointment
            </button>
        </div>
    );
};

export default DoctorCard;
