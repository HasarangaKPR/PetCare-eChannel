import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function AddDaycareModal({ isOpen, onClose, onAddDoctor }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        userType: 'daycare',
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

        try {
            const formDataObj = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataObj.append(key, formData[key]);
            });

            const response = await axios.post(route('addUser'), formDataObj, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            

            if (response.status === 201) {
                console.log(response);
                toast.success('Daycare Center added successfully');
                onAddDoctor(formData);
            }
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                toast.error('An error occurred. Please try again.');
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

                        {/* <div className="mt-4">
                            <InputLabel htmlFor="profile_picture" value="Profile Picture" />
                            <input
                                id="profile_picture"
                                type="file"
                                name="profile_picture"
                                className="mt-1 block w-full"
                                onChange={handleChange}
                            />
                            <InputError message={errors.profile_picture} className="mt-2" />
                        </div> */}

                        <div className="flex items-center justify-between mt-4">
                            <button 
                                type="submit" 
                                className=" bg-[#22AAA1] hover:bg-[#156862] text-white py-2 px-4 rounded disabled:opacity-50"
                                disabled={processing}
                            >
                                Add Daycare
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
