import React from 'react';
import { Link } from '@inertiajs/react';

const SideList = () => {
    return (
        <nav className="bg-gray-800 text-white h-screen p-4">
            <ul>
                <li className="mb-2">
                    <Link href="/systemadmin/dashboard" className="hover:underline">Dashboard</Link>
                </li>
                <li className="mb-2">
                    <Link href="/systemadmin/profile" className="hover:underline">Profile</Link>
                </li>
                <li className="mb-2">
                    <Link href="/systemadmin/doctors" className="hover:underline">Doctors</Link>
                </li>
                <li className="mb-2">
                    <Link href="/systemadmin/daycare-admin" className="hover:underline">Daycare Admins</Link>
                </li>
                <li className="mb-2">
                    <Link href="/systemadmin/users" className="hover:underline">Users</Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideList;
