import React, { useState, useEffect } from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './components/SideList';

const DProfile = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);


    const fetchUsers = async () => {
        try {
            const response = await fetch(route('displayToDoctorAppointment'));
            const result = await response.json();
            setAppointments(result.appointments);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="w-full overflow-x-auto">
                        <h1 className='font-medium text-2xl my-4'>All Appointments</h1>
                        <table className="min-w-full table-auto bg-[#DEF2F1] ">
                            <thead>
                                <tr className="bg-[#156862] text-white">
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Customer Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Time</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Customer Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment) => (
                                    <tr key={appointment.appointmentId} className="border-b last:border-none">
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.customerName}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.date}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.appointmentTime}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.customerEmail
                                        }</td>
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

export default DProfile;
