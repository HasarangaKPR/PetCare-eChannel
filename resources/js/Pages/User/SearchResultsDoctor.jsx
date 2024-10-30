import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const SearchResultsDoctor = ({ appointmentTime, date, doctorDistrict, doctorCity }) => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shouldBook, setShouldBook] = useState(false);
    
    const { data, setData, post, processing } = useForm({
        doctorId: '',
        appointmentTime: appointmentTime,
        date: date,
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (shouldBook) {
            post(route('addDoctorAppointment'));
        }
    }, [shouldBook]);

    const fetchUsers = async () => {
        try {
            const response = await fetch(route('searchDoctor', { appointmentTime, date, doctorDistrict, doctorCity }));
            const result = await response.json();
            setDoctors(result.doctors);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleBookAppointment = (doctorId) => {
        setData('doctorId', doctorId); // Set the doctorId
        setShouldBook(true); // Trigger the booking process
    };

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-[#156862]">Search Results</h2>
                {doctors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {doctors.map((doctor) => (
                            <div key={doctor.doctorId} className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-center text-[#156862] mb-2">{doctor.name}</h3>
                                <div className="text-center mt-4">
                                    <button
                                        onClick={() => handleBookAppointment(doctor.doctorId)}
                                        className="bg-[#22AAA1] text-white px-4 py-2 rounded-lg hover:bg-[#156862]"
                                        disabled={processing}
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No doctors found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsDoctor;
