import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaHome, FaUser, FaBookReader } from 'react-icons/fa'; // Example icons

const SideList = () => {
    const { url } = usePage(); // Get the current URL to highlight the active link

    return (
        <nav className="bg-white text-black h-full w-64 p-5 shadow-md">
            <ul className="list-none p-0 m-0">
                <li className={`flex items-center p-3 mb-2 rounded-lg transition duration-300 ${url === '/daycare/dashboard' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] text-gray-500'}`}>
                    <FaHome className={`mr-3 ${url === '/daycare/dashboard' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/daycare/dashboard" className={`${url === '/daycare/dashboard' ? 'text-white' : 'text-gray-500'} font-medium`}>Dashboard</Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition duration-300 ${url === '/daycare/profile' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] text-gray-500'}`}>
                    <FaUser className={`mr-3 ${url === '/daycare/profile' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/daycare/profile" className={`${url === '/daycare/profile' ? 'text-white' : 'text-gray-500'} font-medium`}>Profile</Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition duration-300 ${url === '/daycare/bookings' ?'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] text-gray-500'}`}>
                    <FaBookReader className={`mr-3 ${url === '/daycare/bookings' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/daycare/bookings" className={`${url === '/daycare/bookings' ? 'text-white' : 'text-gray-500'} font-medium`}>Bookings</Link>
                </li>
              
            </ul>
        </nav>
    );
};

export default SideList;
