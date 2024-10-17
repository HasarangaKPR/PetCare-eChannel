import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';

const SADaycareAdmin = () => {
    return (
        <>
            <Head title="Daycare Admins" />
            <div className="flex">
                <SideList />
                <div className="flex-grow p-6">
                    <Header />
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Manage Daycare Admins</h2>
                        {/* Add daycare admins-related content here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SADaycareAdmin;
