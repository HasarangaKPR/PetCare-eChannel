import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';

const SAUsers = () => {
    return (
        <>
            <Head title="Users" />
            <div className="flex">
                <SideList />
                <div className="flex-grow p-6">
                    <Header />
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Manage Users</h2>
                        {/* Add users-related content here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SAUsers;
