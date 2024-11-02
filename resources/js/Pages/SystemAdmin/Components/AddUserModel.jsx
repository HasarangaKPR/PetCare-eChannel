import React, { useState } from 'react';
import axios from 'axios';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function AddUserModal({ isOpen, onClose, onAddDoctor }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        userType: '',
        profile_picture: null,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({ ...prevData, profile_picture: e.target.files[0] }));
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await axios.post(route('addUser'), data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response.status === 201) {
                toast.success('User added successfully.');
                onAddDoctor(formData);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    userType: 'user',
                    profile_picture: null,
                });
                onClose();
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
                toast.error('Validation failed. Please check your input.');
            } else {
                toast.error('An error occurred while adding the user.');
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
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={formData.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={handleChange}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={handleChange}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={handleChange}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={handleChange}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        {/* User Type Dropdown */}
                        <div className="mt-4">
                            <InputLabel htmlFor="userType" value="User Type" />
                            <select
                                id="userType"
                                name="userType"
                                value={formData.userType}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select User</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                            <InputError message={errors.userType} className="mt-2" />
                        </div>

                        {/* Uncomment to enable profile picture upload */}
                        {/* <div className="mt-4">
                            <InputLabel htmlFor="profile_picture" value="Profile Picture" />
                            <input
                                id="profile_picture"
                                type="file"
                                name="profile_picture"
                                className="mt-1 block w-full"
                                onChange={handleFileChange}
                            />
                            <InputError message={errors.profile_picture} className="mt-2" />
                        </div> */}

                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                className="bg-[#22AAA1] hover:bg-[#156862] text-white py-2 px-4 rounded disabled:opacity-50"
                                disabled={processing}
                            >
                                Add User
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
}
