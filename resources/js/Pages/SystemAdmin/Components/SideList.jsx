import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FaHome, FaUser, FaStethoscope, FaHospital, FaUsers } from 'react-icons/fa';

const SideList = () => {
    const { url } = usePage(); // Get the current URL to highlight the active link

    return (
        <nav className="bg-white text-black  w-64 p-5 shadow-md">
            <ul className="list-none p-0 m-0">
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/systemadmin/dashboard' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaHome className={`mr-3 ${url === '/systemadmin/dashboard' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/systemadmin/dashboard" className={`font-medium ${url === '/systemadmin/dashboard' ? 'text-white' : 'text-gray-500'}`}>
                        Dashboard
                    </Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/systemadmin/profile' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaUser className={`mr-3 ${url === '/systemadmin/profile' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/systemadmin/profile" className={`font-medium ${url === '/systemadmin/profile' ? 'text-white' : 'text-gray-500'}`}>
                        Profile
                    </Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/systemadmin/doctors' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaStethoscope className={`mr-3 ${url === '/systemadmin/doctors' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/systemadmin/doctors" className={`font-medium ${url === '/systemadmin/doctors' ? 'text-white' : 'text-gray-500'}`}>
                        Doctors
                    </Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/systemadmin/daycare-admin' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaHospital className={`mr-3 ${url === '/systemadmin/daycare-admin' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/systemadmin/daycare-admin" className={`font-medium ${url === '/systemadmin/daycare-admin' ? 'text-white' : 'text-gray-500'}`}>
                        Daycare
                    </Link>
                </li>
                <li className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 ${url === '/systemadmin/users' ? 'bg-[#156862] text-white' : 'hover:bg-[#DEF2F1] hover:text-black'}`}>
                    <FaUsers className={`mr-3 ${url === '/systemadmin/users' ? 'text-white' : 'text-gray-500'}`} />
                    <Link href="/systemadmin/users" className={`font-medium ${url === '/systemadmin/users' ? 'text-white' : 'text-gray-500'}`}>
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideList;
