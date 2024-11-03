import React from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './components/SideList';
import UpdateProfileInformation from './Components/UpdateProfileInformation';
import UpdatePasswordForm from './Components/UpdatePasswordForm';
import DeleteUserForm from './Components/DeleteUserForm';
import { Head } from '@inertiajs/react';

const SProfile = ({ auth, mustVerifyEmail, status }) => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="flex-grow p-6">
                        <div className="flex flex-col gap-6">
                        <Head title="Profile" />

                            <div className="py-12">
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <UpdateProfileInformation
                                            mustVerifyEmail={mustVerifyEmail}
                                            status={status}
                                            className="max-w-xl"
                                        />
                                    </div>

                                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <UpdatePasswordForm className="max-w-xl" />
                                    </div>

                                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <DeleteUserForm className="max-w-xl" />
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SProfile;
