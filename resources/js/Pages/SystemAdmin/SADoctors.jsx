// Inside SADoctors.jsx

import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import Footer from './Components/Footer'; 
import { Head } from '@inertiajs/react';
import './SAdashboard.css'; 
import DBphoto from './Assets/image.png'; 
import AddDoctorModal from './Components/AddDoctorModal';
import EditDoctorModal from './Components/EditDoctorModal';

const SADoctors = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(route('viewDoctors'));
            const data = await response.json();
            setUsers(data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
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
                            
                        </div>

                        <table className="w-full bg-white shadow-md rounded">
                            <thead className="bg-gray-200 text-left">
                                <tr>
                                    {/* <th className="p-3">Profile</th> */}
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Created At</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example Doctor Row */}
                                {users.map((user) => (
                                <tr ey={user.id} className="border-t">
                                    {/* <td className="p-3">
                                        <img src={DBphoto} alt="Doctor" className="w-12 h-12 rounded-full" />
                                    </td> */}
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
                                {/* Repeat for other doctors */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default SADoctors;
