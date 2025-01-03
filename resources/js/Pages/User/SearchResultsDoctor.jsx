import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchResultsDoctor = ({ appointmentTime, date, doctorName, doctorCity }) => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shouldBook, setShouldBook] = useState(false);
    const [formData, setFormData] = useState({
        doctorId: '',
        appointmentTime: appointmentTime,
        date: date,
    });
    

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (shouldBook) {
            bookAppointment();
        }
    }, [shouldBook]);

    const fetchUsers = async () => {
        try {
            const response = await fetch(route('searchDoctor', { appointmentTime, date, doctorName, doctorCity }));
            const result = await response.json();
            console.log(result);
            setDoctors(result.doctors);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const bookAppointment = async () => {
        try {   
            const response = await axios.post(route('addDoctorAppointment'), formData);
            if(response.status === 201){
                toast.success('The appointment has been successfully added.');
            }
            else{
                toast.error('Doctor is not available at the selected time.');
            }
            setShouldBook(false); // Reset shouldBook after the post request is complete
        } catch (error) {
            console.error('Error booking appointment:', error);
        }
    };

    const handleBookAppointment = (doctorId) => {
        setFormData((prevData) => ({ ...prevData, doctorId })); // Set the doctorId in formData
        setShouldBook(true); // Trigger the booking process
    };

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
            <ToastContainer position="top-right" autoClose={5000} />
                <h2 className="text-2xl font-bold mb-6 text-[#156862]">Search Results</h2>
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : doctors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {doctors.map((doctor) => (
                            <div key={doctor.doctorId} className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-center text-[#156862] mb-2">{doctor.name}</h3>
                                <h4 className="text-sm font-semibold text-center text-[#156862] mb-2">Open Time : {doctor.openTime}</h4>
                                <h4 className="text-sm font-semibold text-center text-[#156862] mb-2">Close Time : {doctor.closeTime}</h4>
                                <h4 className="text-sm font-semibold text-center text-[#156862] mb-2">City : {doctor.city}</h4>
                                <h4 className="text-sm font-semibold text-center text-[#156862] mb-2">Address : {doctor.address}</h4>
                                <h4 className="text-sm font-semibold text-center text-[#156862] mb-2">Contact No : {doctor.contact}</h4>
                                <div className="text-center mt-4">
                                    <button
                                        onClick={() => handleBookAppointment(doctor.doctorId)}
                                        className="bg-[#22AAA1] text-white px-4 py-2 rounded-lg hover:bg-[#156862]"
                                        disabled={shouldBook}
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
