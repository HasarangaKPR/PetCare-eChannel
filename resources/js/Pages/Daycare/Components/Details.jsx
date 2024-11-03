import React, { useState } from 'react';
import { useForm } from '@inertiajs/react'; // Replace with your actual form library
import { ToastContainer, toast } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

const Details = () => {
    const { data, setData, put, processing, errors, reset } = useForm({
        dayCareCenterName: '',
        dayCareCenterAddress: '',
        dayCareCenterCity: '',
        dayCareCenterContactNumber: '',
        dayCareCenterEmail: '',
        noOfRooms: '',
    });
    console.log(data);
    const submit = (e) => {
        e.preventDefault();
        // Replace 'updateEndpoint' with your actual update API endpoint
        put(route('updateDayCareCenter'), {
            onFinish: () => toast.success('Daycare Center Data updated Successfully!'),
        });
    };

    return (
        <div className="bg-[#DEF2F1] p-6 rounded-lg shadow-md">
            <ToastContainer position="top-right" autoClose={5000} />
            <h2 className="text-2xl font-semibold text-[#08101A] mb-4">Daycare Center Information</h2>
            <form onSubmit={submit}>
                <div className="flex flex-col">
                    <label htmlFor="dayCareCenterName" className="font-medium text-[#333]">Daycare Center Name</label>
                    <input
                        type="text"
                        id="dayCareCenterName"
                        name="dayCareCenterName"
                        value={data.dayCareCenterName}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('dayCareCenterName', e.target.value)}
                        required
                    />
                    {errors.dayCareCenterName && <span className="text-red-500">{errors.dayCareCenterName}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="dayCareCenterAddress" className="font-medium text-[#333]">Daycare Center Address</label>
                    <input
                        type="text"
                        id="dayCareCenterAddress"
                        name="dayCareCenterAddress"
                        value={data.dayCareCenterAddress}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('dayCareCenterAddress', e.target.value)}
                        required
                    />
                    {errors.dayCareCenterAddress && <span className="text-red-500">{errors.dayCareCenterAddress}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="dayCareCenterCity" className="font-medium text-[#333]">Daycare Center City</label>
                    <select
                        id="dayCareCenterCity"
                        name="dayCareCenterCity"
                        value={data.dayCareCenterCity}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('dayCareCenterCity', e.target.value)}
                        required
                    >
                        <option value="">Select City</option>
                        <option value="Matara">Matara</option>
                        <option value="Galle">Galle</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Colombo">Colombo</option>
                    </select>
                    {errors.dayCareCenterCity && <span className="text-red-500">{errors.dayCareCenterCity}</span>}
                </div>


                <div className="flex flex-col mt-4">
                    <label htmlFor="dayCareCenterContactNumber" className="font-medium text-[#333]">Daycare Center Contact Number</label>
                    <input
                        type="tel"
                        id="dayCareCenterContactNumber"
                        name="dayCareCenterContactNumber"
                        value={data.dayCareCenterContactNumber}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        pattern="^\+?[0-9]{7,15}$"
                        title="Please enter a valid contact number"
                        onChange={(e) => setData('dayCareCenterContactNumber', e.target.value)}
                        required
                    />
                    {errors.dayCareCenterContactNumber && <span className="text-red-500">{errors.dayCareCenterContactNumber}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="dayCareCenterEmail" className="font-medium text-[#333]">Daycare Center Email</label>
                    <input
                        type="email"
                        id="dayCareCenterEmail"
                        name="dayCareCenterEmail"
                        value={data.dayCareCenterEmail}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('dayCareCenterEmail', e.target.value)}
                        required
                    />
                    {errors.dayCareCenterEmail && <span className="text-red-500">{errors.dayCareCenterEmail}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="noOfRooms" className="font-medium text-[#333]">Number of Rooms</label>
                    <input
                        type="number"
                        id="noOfRooms"
                        name="noOfRooms"
                        value={data.noOfRooms}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        min="1"
                        onChange={(e) => setData('noOfRooms', e.target.value)}
                        required
                    />
                    {errors.noOfRooms && <span className="text-red-500">{errors.noOfRooms}</span>}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button
                        type="submit"
                        className="bg-[#22AAA1] text-white font-bold py-2 px-4 rounded-md w-36 hover:bg-[#156862] transition duration-300"
                        disabled={processing}
                        onClick={() => {
                            // Your click handler logic here
                            console.log('Button clicked!');
                        }}
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Details;
