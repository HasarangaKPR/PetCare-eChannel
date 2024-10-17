import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import Footer from './Components/Footer'; // Import the Footer component
import { Head } from '@inertiajs/react';
import './SAdashboard.css'; // Import CSS for styling
import DBphoto from './Assets/image.png';

const SAdashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="flex-grow p-6">
                    <div className="welcome-text">
                                <h2>Welcome!</h2>
                                <p>All systems are running smoothly!</p>
                            </div>
                        <div className="mt-4 dashboard-container">
                            <div className="image-container">
                                <img src={DBphoto} alt="Dashboard" className="dashboard-image" />
                            </div>
                            <div className="cards-container">
                                <div className="card">
                                    <p className="card-title">Today's Appointments</p>
                                    <p className="card-output">Output 1</p>
                                </div>
                                <div className="card">
                                    <p className="card-title">Total Appointments</p>
                                    <p className="card-output">Output 2</p>
                                </div>
                                <div className="card">
                                    <p className="card-title">Today's  Bookings</p>
                                    <p className="card-output">Output 3</p>
                                </div>
                                <div className="card">
                                    <p className="card-title">Total  Bookings</p>
                                    <p className="card-output">Output 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
           
        </>
    );
};

export default SAdashboard;
