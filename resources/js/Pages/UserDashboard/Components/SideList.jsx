import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaHome, FaUser, FaStethoscope, FaHospital, FaUsers } from 'react-icons/fa';

const SideList = () => {
    const { url } = usePage(); // Get the current URL to highlight the active link

    return (
        <nav className="bg-white text-black  w-64 p-5 shadow-md">
            <ul className="list-none p-0 m-0">
               
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/user/profile' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaUser className={`mr-3 ${url === '/user/profile' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/user/profile" className={`font-medium ${url === '/user/profile' ? 'text-white' : 'text-gray-500'}`}>
                        Profile
                    </Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/user/appointments' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaStethoscope className={`mr-3 ${url === '/user/appointments' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/user/appointments" className={`font-medium ${url === '/user/appointments' ? 'text-white' : 'text-gray-500'}`}>
                        Appointments
                    </Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/user/bookings' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaHospital className={`mr-3 ${url === '/user/bookings' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/user/bookings" className={`font-medium ${url === '/user/bookings' ? 'text-white' : 'text-gray-500'}`}>
                        Bookings
                    </Link>
                </li>
               
            </ul>
        </nav>
    );
};

export default SideList;
