// Inside SADoctors.jsx

import React, { useState } from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import Footer from './Components/Footer'; 
import { Head } from '@inertiajs/react';
import './SAdashboard.css'; 
import DBphoto from './Assets/image.png'; 
import AddDoctorModal from './Components/AddDoctorModal';
import EditDoctorModal from './Components/EditDoctorModal';

const SAUsers = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentDoctor, setCurrentDoctor] = useState(null);

    const handleAddDoctor = (newDoctor) => {
        // Logic to add the new doctor
        console.log(newDoctor);
    };

    const handleEditDoctor = (doctor) => {
        setCurrentDoctor(doctor);
        setIsEditModalOpen(true);
    };

    const handleUpdateDoctor = (updatedDoctor) => {
        // Logic to update the doctor
        console.log(updatedDoctor);
    };

    return (
        <>
            <Head title="Doctors" />
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="flex-grow p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Users Table</h2>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="bg-[#22AAA1] text-white py-2 px-4 rounded hover:bg-[#156862] transition-colors"
                            >
                                Add User
                            </button>
                        </div>

                        <table className="w-full bg-white shadow-md rounded">
                            <thead className="bg-gray-200 text-left">
                                <tr>
                                    <th className="p-3">Profile</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Created At</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example Doctor Row */}
                                <tr className="border-t">
                                    <td className="p-3">
                                        <img src={DBphoto} alt="Doctor" className="w-12 h-12 rounded-full" />
                                    </td>
                                    <td className="p-3">Dr. John Doe</td>
                                    <td className="p-3">john.doe@example.com</td>
                                    <td className="p-3">2024-10-18</td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => handleEditDoctor({ name: 'Dr. John Doe', email: 'john.doe@example.com' })}
                                            className="bg-[#22AAA1] text-white py-1 px-3 rounded hover:bg-[#156862] transition-colors mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                {/* Repeat for other doctors */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add Doctor Modal */}
            <AddDoctorModal 
                isOpen={isAddModalOpen} 
                onClose={() => setIsAddModalOpen(false)} 
                onAddDoctor={handleAddDoctor} 
            />

            {/* Edit Doctor Modal */}
            <EditDoctorModal 
                isOpen={isEditModalOpen} 
                onClose={() => setIsEditModalOpen(false)} 
                doctor={currentDoctor} 
                onUpdateDoctor={handleUpdateDoctor} 
            />
        </>
    );
};

export default SAUsers;
