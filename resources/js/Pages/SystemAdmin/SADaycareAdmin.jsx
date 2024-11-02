import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';
import AddDaycareModal from './Components/AddDaycareModal';

const SADoctors = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const id = 2;
            const response = await fetch(route('viewDoctors', { id }));
            const data = await response.json();
            setUsers(data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    // Function to handle adding a new doctor (after the form is submitted)
    const handleAddDoctor = (newDoctor) => {
        setUsers((prevUsers) => [...prevUsers, newDoctor]);
        setIsModalOpen(false); // Close the modal after submission
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
                            <h2 className="text-2xl font-bold">Doctors Table</h2>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                                onClick={() => setIsModalOpen(true)} // Open the modal on button click
                            >
                                Add Daycare
                            </button>
                        </div>

                        <table className="w-full bg-white shadow-md rounded">
                            <thead className="bg-gray-200 text-left">
                                <tr>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Created At</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="border-t">
                                        <td className="p-3">{user.name}</td>
                                        <td className="p-3">{user.email}</td>
                                        <td className="p-3">{user.created_at}</td>
                                        <td className="p-3">
                                            <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* AddDoctorModal component */}
            <AddDaycareModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)} // Close the modal
            onAddDoctor={handleAddDoctor} // Handle new doctor submission
            />
        
        </>
    );
};

export default SADoctors;
