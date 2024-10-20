import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Home" />
            <div className="bg-white text-[#08101A]">
                <div className="">
                    <div className="">
                        {/* Header adjusted to be full width and at the top */}
                        <header className="absolute top-0 left-0 w-full flex items-center justify-between py-4 bg-[#0D1B2A]">
                            <div className="flex items-center mx-4">
                                <img
                                    src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1729397131~exp=1729400731~hmac=3908b6c083bc2253b3f7013d0aecd14a00659e7ff3224988a7c0e419048837f3&w=900"
                                    alt="Company Logo"
                                    onError={handleImageError}
                                    className="h-12"
                                />
                            </div>
                            <nav className="flex flex-1 justify-end ">
                                {auth.user ? (
                                   <div className="flex space-x-12">
                                   <div className="">
                                        <Link
                                            href={route('login')}
                                            className="px-2 py-2 rounded-[24px] text-[#22AAA1] hover:text-white"
                                        >
                                            My Appointments
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2  rounded-[24px] text-[#22AAA1] hover:text-white"
                                        >
                                            My bookings
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2  rounded-[24px] text-[#22AAA1] hover:text-white"
                                        >
                                            My Services
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2  rounded-[24px] text-[#22AAA1] hover:text-white"
                                        >
                                            My SellingAds
                                        </Link>
                                    </div>
                                    
                                    <div className="">
                                            <Link
                                                href={route('logout')} method="post"
                                                className="bg-[#22AAA1] mx-4 px-3 py-2 font-semibold rounded-[24px] text-white hover:bg-[#156862]"
                                            >
                                                Logout
                                            </Link>
                                           
                                        </div>
                                    </div>
                               
                               
                                ) : (


                                        <div className="space-x-4 mx-4"  >
                                            <Link
                                                href={route('login')}
                                                className="bg-[#22AAA1] px-3 py-2 font-semibold rounded-[24px] text-white hover:bg-[#156862]"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="bg-[#22AAA1] px-3 py-2 font-semibold rounded-[24px] text-white hover:bg-[#156862]"
                                            >
                                                Register
                                            </Link>
                                        </div>
                                   
                                )}
                            </nav>
                        </header>

                        <main className="mt-24">
                            <h2 className="text-2xl font-bold">Main</h2>
                        </main>

                        <footer className="py-16 text-center text-sm text-black">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
