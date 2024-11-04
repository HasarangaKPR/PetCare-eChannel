import React, { useState, useEffect } from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './components/SideList';

const CBookings = () => {
    const [patients, setPatients] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await fetch(route('displayToDayCareCenterAppointment'));
            const result = await response.json();
            setPatients(result.bookings);
        } catch (error) {
            console.error('Error fetching patients:', error);
        } 
        //finally {
        //     setLoading(false);
        // }
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="w-full overflow-x-auto">
                        <h1 className='font-medium text-2xl my-4'>All Bookings</h1>
                        <table className="min-w-full table-auto bg-[#DEF2F1] ">
                            <thead>
                                <tr className="bg-[#156862] text-white">
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Customer Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Customer Email</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Start Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">End Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Room Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient) => (
                                    <tr key={patient.dayCareCenterId} className="border-b last:border-none">
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.customersName}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.customersEmail}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.start_date}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.end_date}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.room_number}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CBookings;
