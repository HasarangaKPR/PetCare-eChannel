import React from 'react';
import Header from './Components/Header';
import SideList from './Components/SideList';
import { Head } from '@inertiajs/react';
import './SAdashboard.css'; // Import the new CSS file for styling
import dbimage from './Assets/image.png'
const SAdashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex">
                <SideList />
                <div className="flex-grow p-6">
                    <Header />
                    <div className="mt-4 dashboard-container">
                        <div className="image-container">
                            <img src={dbimage} alt="Dashboard Image" className="dashboard-image" />
                        </div>
                        <div className="cards-container">
                            <div className="card-row">
                                <div className="card">Card 1</div>
                                <div className="card">Card 2</div>
                            </div>
                            <div className="card-row">
                                <div className="card">Card 3</div>
                                <div className="card">Card 4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SAdashboard;
