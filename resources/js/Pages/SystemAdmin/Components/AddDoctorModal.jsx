// Components/AddDoctorModal.jsx

import React, { useState } from 'react';

const AddDoctorModal = ({ isOpen, onClose, onAddDoctor }) => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        profileImage: null, // Change to store file object
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctorData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setDoctorData((prevData) => ({ ...prevData, profileImage: file }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the function to add a doctor
        onAddDoctor(doctorData);
        onClose(); // Close the modal after adding
    };

    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg w-96"> {/* Increased width for larger popup */}
                <h2 className="text-xl font-bold mb-4">Add New Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={doctorData.name}
                            onChange={handleChange}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={doctorData.email}
                            onChange={handleChange}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*" // Accept only image files
                            onChange={handleFileChange}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#22AAA1] text-white py-2 px-4 rounded hover:bg-[#156862] transition-colors"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctorModal;
