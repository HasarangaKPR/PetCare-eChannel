import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddDoctorModal = ({ isOpen, onClose, onAddDoctor }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        userType: 'doctor',
        //profile_picture: null,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        const form = new FormData();
        Object.keys(formData).forEach((key) => {
            form.append(key, formData[key]);
        });

        try {
            const response = await axios.post(route('addUser'), form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response.status === 201) {
                toast.success('Doctor Added Successfully!');
                onAddDoctor(formData);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    userType: 'doctor',
                    //profile_picture: null,
                });
            }
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                toast.error('An error occurred while adding the doctor.');
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                    <form onSubmit={submit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md"
                            />
                            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md"
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md"
                            />
                            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md"
                            />
                            {errors.password_confirmation && <p className="mt-2 text-sm text-red-600">{errors.password_confirmation}</p>}
                        </div>

                        {/* <div className="mt-4">
                            <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                            <input
                                type="file"
                                id="profile_picture"
                                name="profile_picture"
                                onChange={handleChange}
                                className="mt-1 block w-full"
                            />
                            {errors.profile_picture && <p className="mt-2 text-sm text-red-600">{errors.profile_picture}</p>}
                        </div> */}

                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                className="bg-[#22AAA1] hover:bg-[#156862] text-white py-2 px-4 rounded disabled:opacity-50"
                                disabled={processing}
                            >
                                Add Doctor
                            </button>
                            <button
                                type="button"
                                className="ml-4 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default AddDoctorModal;
