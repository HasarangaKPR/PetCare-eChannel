// Components/EditDoctorModal.jsx

import React, { useState, useEffect } from 'react';

const EditDoctorModal = ({ isOpen, onClose, doctor, onUpdateDoctor }) => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        profileImage: null,
    });

    useEffect(() => {
        if (doctor) {
            setDoctorData({
                name: doctor.name,
                email: doctor.email,
                profileImage: null, // Keep this as null if you want to upload a new image
            });
        }
    }, [doctor]);

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
        onUpdateDoctor(doctorData); // Call the function to update the doctor
        onClose(); // Close the modal after updating
    };

    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg w-96"> {/* Increased width for larger popup */}
                <h2 className="text-xl font-bold mb-4">Edit Doctor</h2>
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
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border rounded w-full p-2"
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
                            Update Doctor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDoctorModal;
