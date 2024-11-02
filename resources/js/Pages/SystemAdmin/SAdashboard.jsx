import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';
import DBphoto from './Assets/image.png';

const SAdashboard = () => {
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
                                    <p className="text-lg font-semibold mb-2">Today's Appointments</p>
                                    <p className="text-2xl font-bold">Output 1</p>
                                </div>
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-md text-white">
                                    <p className="text-lg font-semibold mb-2">Total Appointments</p>
                                    <p className="text-2xl font-bold">Output 2</p>
                                </div>
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-md text-white">
                                    <p className="text-lg font-semibold mb-2">Today's Bookings</p>
                                    <p className="text-2xl font-bold">Output 3</p>
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
