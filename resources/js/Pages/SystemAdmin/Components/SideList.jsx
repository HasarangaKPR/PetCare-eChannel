import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import './SideList.css'; // Import the CSS file
import { FaHome, FaUser, FaStethoscope, FaHospital, FaUsers } from 'react-icons/fa'; // Example icons

const SideList = () => {
    const { url } = usePage(); // Get the current URL to highlight the active link

    return (
        <nav className="sidelist-container">
            <ul>
                <li className={`sidelist-item ${url === '/systemadmin/dashboard' ? 'active' : ''}`}>
                    <FaHome className="sidelist-item-icon" />
                    <Link href="/systemadmin/dashboard">Dashboard</Link>
                </li>
                <li className={`sidelist-item ${url === '/systemadmin/profile' ? 'active' : ''}`}>
                    <FaUser className="sidelist-item-icon" />
                    <Link href="/systemadmin/profile">Profile</Link>
                </li>
                <li className={`sidelist-item ${url === '/systemadmin/doctors' ? 'active' : ''}`}>
                    <FaStethoscope className="sidelist-item-icon" />
                    <Link href="/systemadmin/doctors">Doctors</Link>
                </li>
                <li className={`sidelist-item ${url === '/systemadmin/daycare-admin' ? 'active' : ''}`}>
                    <FaHospital className="sidelist-item-icon" />
                    <Link href="/systemadmin/daycare-admin">Daycare Admins</Link>
                </li>
                <li className={`sidelist-item ${url === '/systemadmin/users' ? 'active' : ''}`}>
                    <FaUsers className="sidelist-item-icon" />
                    <Link href="/systemadmin/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideList;
