import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';

const SAdashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex">
                <SideList />
                <div className="flex-grow p-6">
                    <Header />
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard!</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SAdashboard;
