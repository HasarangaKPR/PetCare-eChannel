import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';

const SADoctors = () => {
    return (
        <>
            <Head title="Doctors" />
            <div className="flex">
                <SideList />
                <div className="flex-grow p-6">
                    <Header />
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Manage Doctors</h2>
                        {/* Add doctors-related content here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SADoctors;
