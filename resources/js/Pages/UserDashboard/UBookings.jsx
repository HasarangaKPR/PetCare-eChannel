import React, { useState, useEffect } from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './Components/SideList';

const CBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch(route('displayToUserDayCareCenterAppointment'));
            const result = await response.json();
            console.log(result);
            setBookings(result.bookings);
        } catch (error) {
            console.error('Error fetching bookings:', error);
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
                        <h1 className='font-medium text-2xl my-4'>My Bookings</h1>
                        <table className="min-w-full table-auto bg-[#DEF2F1]">
                            <thead>
                                <tr className="bg-[#156862] text-white">
                                    <th className="px-6 py-3 text-left text-sm font-medium">Day Care Center Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Day Care Center Email</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">Start Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium">End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => (
                                    <tr key={index} className="border-b last:border-none">
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{booking.dayCareCenterName
                                        }</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{booking.dayCareCenterEmail
                                        }</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{booking.start_date
                                        }</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{booking.end_date}</td>
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
