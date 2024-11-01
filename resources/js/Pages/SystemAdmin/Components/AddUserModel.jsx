import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function AddUserModal({ isOpen, onClose, onAddDoctor }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        userType: 'user',
        profile_picture: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('addUser'), {
            onFinish: () => {
                onAddDoctor(data);
                reset('password', 'password_confirmation', 'profile_picture');
            },
        });
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
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
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
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
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
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
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
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
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
                                onChange={(e) => setData('profile_picture', e.target.files[0])}
                            />
                            <InputError message={errors.profile_picture} className="mt-2" />
                        </div> */}

                        <div className="flex items-center justify-between mt-4">
                            <button 
                                type="submit" 
                                className=" bg-[#22AAA1] hover:bg-[#156862] text-white py-2 px-4 rounded disabled:opacity-50"
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
