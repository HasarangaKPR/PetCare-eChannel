import React from 'react';
import Logo from '../Assets/Logo.png'; // Import your logo image
import { Link } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';

const Header = () => {
    return (
        
        <header className="flex justify-between items-center bg-[#08101A] text-white p-6"> {/* Increased padding */}
            {/* Logo on the left side */}
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-8" /> {/* Adjust height as needed */}
            </div>

            {/* LogOut link on the right side */}
            <div>
                <Link 
                    href="/" 
                    className="text-[#22AAA1] hover:text-white pr-4" // Right padding added and hover color changed
                >
                    Logout
                </Link>
            </div>
        </header>
        
    );
};

export default Header;
