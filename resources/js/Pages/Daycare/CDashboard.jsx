import React from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';
import DBphoto from './Assets/image.png';

const CDashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="flex-grow p-6">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold">Welcome!</h2>
                            <p className="text-gray-600">Effortless care, seamless scheduling</p>
                        </div>
                        <div className="mt-4 flex justify-between gap-5 h-[calc(100vh-300px)]">
                            <div className="flex-1 flex justify-center items-center overflow-hidden">
                                <img src={DBphoto} alt="Dashboard" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-5">
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-lg text-white text-center hover:bg-[#08101A] transition-colors">
                                    <p className="text-lg font-bold mb-2">Today's Bookings</p>
                                    <p className="text-2xl font-bold">Output 1</p>
                                </div>
                                <div className="bg-teal-600 flex flex-col justify-center items-center p-5 rounded-lg shadow-lg text-white text-center hover:bg-[#08101A] transition-colors">
                                    <p className="text-lg font-bold mb-2">Total Bookings</p>
                                    <p className="text-2xl font-bold">Output 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default CDashboard;
