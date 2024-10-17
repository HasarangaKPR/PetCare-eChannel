import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';

const SAProfile = () => {
    return (
        <>
            <Head title="Profile" />
            <div className="flex">
                <SideList />
                <div className="flex-grow p-6">
                    <Header />
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Profile Information</h2>
                        {/* Add profile-related content here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SAProfile;
