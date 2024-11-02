import React from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './components/SideList';
import DeleteUserForm from './Components/DeleteUserForm';
import UpdatePasswordForm from './Components/UpdatePasswordForm';
import UpdateProfileInformation from './components/UpdateProfileInformation';
import { Head } from '@inertiajs/react';
import Details from './components/Details';


const CProfile = ({ auth, mustVerifyEmail, status }) => {

    return (
        <>
            <Head title="DProfile" />

            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    {/* Sidebar for larger screens, hide on small screens */}
                    <SideList className="hidden md:flex" />


                    {/* Main content area */}
                    <div className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto space-y-6">
                            {/* Profile Information Form */}
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <UpdateProfileInformation
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-full md:max-w-xl"
                                />
                            </div>

                            {/* Additional info Section */}
                            <Details />


                            {/* Update Password Form */}
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <UpdatePasswordForm className="max-w-full md:max-w-xl" />
                            </div>

                            {/* Delete User Form */}
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <DeleteUserForm className="max-w-full md:max-w-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CProfile;
