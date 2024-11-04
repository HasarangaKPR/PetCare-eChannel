import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';
import DBphoto from './Assets/image.png';

const SAdashboard = () => {
    const [users, setUsers] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [daycares, setDaycares] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(route('adminSummary'));
            const result = await response.json();
            setUsers(result.userCount);
            setDoctors(result.doctorCount);
            setDaycares(result.daycareCount);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-col h-screen min-w-64">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="flex-grow p-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Welcome!</h2>
                            <p className="text-gray-600 mt-1">All systems are running smoothly!</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-stretch h-[calc(100vh-300px)] gap-4">
                            <div className="flex-1 flex justify-center items-center overflow-hidden">
                                <img src={DBphoto} alt="Dashboard" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-md text-white">
                                    <p className="text-lg font-semibold mb-2">Total Users</p>
                                    <p className="text-2xl font-bold">{users}</p>
                                </div>
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-md text-white">
                                    <p className="text-lg font-semibold mb-2">Total Doctors</p>
                                    <p className="text-2xl font-bold">{doctors}</p>
                                </div>
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-md text-white">
                                    <p className="text-lg font-semibold mb-2">Total Day Care Centers</p>
                                    <p className="text-2xl font-bold">{daycares}</p>
                                </div>
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-md text-white">
                                    <p className="text-lg font-semibold mb-2">Total Bookings</p>
                                    <p className="text-2xl font-bold">Output 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SAdashboard;
