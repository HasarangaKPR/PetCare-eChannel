import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import Footer from './Components/Footer'; // Import Footer
import './SAProfile.css'; // Import the separate CSS file for Profile

const SAProfile = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="flex-grow p-6">
                        <div className="dashboard-container">
                            <div className="profile-section">
                                <h2>Profile Information</h2>
                                <form className="profile-form">
                                    <div>
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" id="fullName" placeholder="Enter Your Full Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="Enter Your Email" />
                                    </div>
                                    <button className="save-btn" type="submit">Save</button>
                                </form>
                            </div>

                            <div className="password-section">
                                <h2>Update Password</h2>
                                <form className="password-form">
                                    <div>
                                        <label htmlFor="currentPassword">Current Password</label>
                                        <input type="password" id="currentPassword" placeholder="Enter Your Current Password" />
                                    </div>
                                    <div>
                                        <label htmlFor="newPassword">New Password</label>
                                        <input type="password" id="newPassword" placeholder="Enter Your New Password" />
                                    </div>
                                    <button className="save-btn" type="submit">Save</button>
                                </form>
                            </div>

                            <div className="delete-section">
                                <h2>Delete Account</h2>
                                <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please ensure you have downloaded any data or information you wish to retain.</p>
                                <button className="delete-btn">Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default SAProfile;
