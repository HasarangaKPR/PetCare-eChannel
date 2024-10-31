import React from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './components/SideList';
import Details from './components/Details'; // Import the new Details component

const DProfile = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="flex-grow p-6">
                        <div className="flex flex-col gap-6">
                            {/* Profile Section */}
                            <div className="bg-[#DEF2F1] p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-[#08101A] mb-4">Profile Information</h2>
                                <form className="flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="fullName" className="font-medium text-[#333]">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="fullName" 
                                            placeholder="Enter Your Full Name" 
                                            className="mt-2 p-3 rounded-md border border-gray-300"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="font-medium text-[#333]">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            placeholder="Enter Your Email" 
                                            className="mt-2 p-3 rounded-md border border-gray-300"
                                        />
                                    </div>
                                    <button 
                                        className="bg-[#22AAA1] text-white font-bold py-2 px-4 rounded-md w-36 hover:bg-[#156862] transition duration-300"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>

                            {/* Additional Info Section - Now using Details component */}
                            <Details />

                            {/* Password Section */}
                            <div className="bg-[#DEF2F1] p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-[#08101A] mb-4">Update Password</h2>
                                <form className="flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="currentPassword" className="font-medium text-[#333]">Current Password</label>
                                        <input 
                                            type="password" 
                                            id="currentPassword" 
                                            placeholder="Enter Your Current Password" 
                                            className="mt-2 p-3 rounded-md border border-gray-300"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="newPassword" className="font-medium text-[#333]">New Password</label>
                                        <input 
                                            type="password" 
                                            id="newPassword" 
                                            placeholder="Enter Your New Password" 
                                            className="mt-2 p-3 rounded-md border border-gray-300"
                                        />
                                    </div>
                                    <button 
                                        className="bg-[#22AAA1] text-white font-bold py-2 px-4 rounded-md w-36 hover:bg-[#156862] transition duration-300"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>

                            {/* Delete Section */}
                            <div className="bg-[#DEF2F1] p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-[#08101A] mb-4">Delete Account</h2>
                                <p className="mb-4 text-[#333]">
                                    Once your account is deleted, all of its resources and data will be permanently deleted. 
                                    Before deleting your account, please ensure you have downloaded any data or information you wish to retain.
                                </p>
                                <button 
                                    className="bg-red-600 text-white font-bold py-2 px-4 rounded-md w-40 hover:bg-red-800 transition duration-300"
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DProfile;
