import React, { useState } from 'react';
import { useForm } from '@inertiajs/react'; // Replace with your actual form library

const Details = () => {
    const { data, setData, put, processing, errors, reset } = useForm({
        doctorName: '',
        doctorDistrict: '',
        doctorCity: '',
        doctorContactNumber: '',
        doctorEmail: '',
        averageTime: '',
        openTime: '',
        closeTime: '',
    });
    console.log(data);
    const submit = (e) => {
        e.preventDefault();
        // Replace 'updateEndpoint' with your actual update API endpoint
        put(route('updateDoctor'), {
            //onFinish: () => reset(),
        });
     
    };

    return (
        <div className="bg-[#DEF2F1] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#08101A] mb-4">Additional Information</h2>
            <form onSubmit={submit}>
                <div className="flex flex-col">
                    <label htmlFor="doctorName" className="font-medium text-[#333]">Doctor Name</label>
                    <input
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        value={data.doctorName}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('doctorName', e.target.value)}
                        required
                    />
                    {errors.doctorName && <span className="text-red-500">{errors.doctorName}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="doctorDistrict" className="font-medium text-[#333]">Doctor District</label>
                    <input
                        type="text"
                        id="doctorDistrict"
                        name="doctorDistrict"
                        value={data.doctorDistrict}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('doctorDistrict', e.target.value)}
                        required
                    />
                    {errors.doctorDistrict && <span className="text-red-500">{errors.doctorDistrict}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="doctorCity" className="font-medium text-[#333]">Doctor City</label>
                    <input
                        type="text"
                        id="doctorCity"
                        name="doctorCity"
                        value={data.doctorCity}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('doctorCity', e.target.value)}
                        required
                    />
                    {errors.doctorCity && <span className="text-red-500">{errors.doctorCity}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="doctorContactNumber" className="font-medium text-[#333]">Doctor Contact Number</label>
                    <input
                        type="tel"
                        id="doctorContactNumber"
                        name="doctorContactNumber"
                        value={data.doctorContactNumber}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        onChange={(e) => setData('doctorContactNumber', e.target.value)}
                        required
                    />
                    {errors.doctorContactNumber && <span className="text-red-500">{errors.doctorContactNumber}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="doctorEmail" className="font-medium text-[#333]">Doctor Email</label>
                    <input
                        type="email"
                        id="doctorEmail"
                        name="doctorEmail"
                        value={data.doctorEmail}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('doctorEmail', e.target.value)}
                        required
                    />
                    {errors.doctorEmail && <span className="text-red-500">{errors.doctorEmail}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="averageTime" className="font-medium text-[#333]">Average Time (minutes)</label>
                    <input
                        type="number"
                        id="averageTime"
                        name="averageTime"
                        value={data.averageTime}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        min="1"
                        onChange={(e) => setData('averageTime', e.target.value)}
                        required
                    />
                    {errors.averageTime && <span className="text-red-500">{errors.averageTime}</span>}
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="openTime" className="font-medium text-[#333]">Open Time</label>
                    <input
                        type="time"
                        id="openTime"
                        name="openTime"
                        value={data.openTime}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('openTime', e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-col mt-4">
                    <label htmlFor="closeTime" className="font-medium text-[#333]">Close Time</label>
                    <input
                        type="time"
                        id="closeTime"
                        name="closeTime"
                        value={data.closeTime}
                        className="mt-2 p-3 rounded-md border border-gray-300"
                        onChange={(e) => setData('closeTime', e.target.value)}
                        required
                    />
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
