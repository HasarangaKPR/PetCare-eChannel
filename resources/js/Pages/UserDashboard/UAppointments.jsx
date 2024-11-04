import React, { useState, useEffect } from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './Components/SideList';

const DProfile = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await fetch(route('displayToUserDoctorAppointment'));
            const result = await response.json();
            console.log(result);
            setAppointments(result.appointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="w-full overflow-x-auto">
                        <h1 className='font-medium text-2xl my-4'>My Appointments</h1>
                        <table className="min-w-full table-auto bg-[#DEF2F1]">
                            <thead>
                                <tr className="bg-[#156862] text-white">
                                    <th className="px-6 py-3 text-left text-sm font-medium">Doctor Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Doctor Email</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Appointment Time</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index} className="border-b last:border-none">
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.doctorName
                                        }</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.doctorEmail}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.date}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{appointment.appointmentTime}</td>
                                        
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
