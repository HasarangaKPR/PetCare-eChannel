import { Link, Head } from '@inertiajs/react';
import banner from './Assets/banner01.png';
import logo from './Assets/image.png';
import icon1 from './Assets/Ellipse 4-1.png';
import icon2 from './Assets/Ellipse 4-2.png';
import icon3 from './Assets/Ellipse 4.png';
import icon4 from './Assets/Ellipse 6.png';
import BlogSection from './Components/BlogSection';
import SearchBarDaycare from './Components/SearchBarDaycare';

export default function Home2({ auth, laravelVersion, phpVersion }) {
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
                        {/* Header adjusted to be full width, sticky, and at the top */}
                        <header className="sticky top-0 left-0 w-full flex items-center justify-between py-4 bg-[#0D1B2A]">
                            <div className="flex items-center mx-4 w-64">
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    onError={handleImageError}
                
                                />
                            </div>
                            <nav className="flex flex-1 justify-end space-x-8"> {/* Center the nav items */}
                                {auth.user ? (
                                    <div className="flex space-x-12 mx-4">
                                        {/* User logged-in links */}
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2 text-[#22AAA1] hover:text-white"
                                        >
                                            Appointments
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2 text-[#22AAA1] hover:text-white"
                                        >
                                            Bookings
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2 text-[#22AAA1] hover:text-white"
                                        >
                                            Services
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2 text-[#22AAA1] hover:text-white"
                                        >
                                            SellingAds
                                        </Link>
                                        <Link
                                            href={route('logout')} method="post"
                                            className="bg-[#22AAA1] px-3 py-2 text-white hover:bg-[#156862] rounded-[24px] h-10"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex space-x-4 mx-4">
                                        {/* Guest user links */}
                                        <Link
                                            href={route('login')}
                                            className="bg-[#22AAA1] px-3 py-2 font-semibold text-white hover:bg-[#156862] rounded-[24px] transition-transform hover:scale-105"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-[#22AAA1] px-3 py-2 font-semibold text-white hover:bg-[#156862] rounded-[24px] transition-transform hover:scale-105"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </nav>
                        </header>

                        <main className=" "> {/* Added padding to the main content */}
                            <img
                                    src={banner}
                                    alt="Banner Image"
                                    className="w-full h-auto object-cover"
                            />

                            {/* Cards Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-8">
                                {/* Card 1 */}
                                <Link  href={route('user.home1')} className="flex items-center bg-whitw shadow-lg p-4 rounded-3xl hover:shadow-2xl transition-shadow">
                                    <img
                                        src={icon3}
                                        alt="Service Icon"
                                        className="mr-4"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">Doctor Channeling</h3>
                                        <p className="text-sm text-gray-600">Channel a Doctor</p>
                                    </div>
                                </Link>

                                {/* Card 2 */}
                                <Link href={route('user.home2')} className="flex items-center bg-[#156862] shadow-lg p-4 rounded-3xl hover:shadow-2xl transition-shadow">
                                    <img
                                        src={icon4}
                                        alt="Appointments Icon"
                                        className="mr-4"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg text-white">Daycare Bookings</h3>
                                        <p className="text-sm text-gray-200">Book a Daycare</p>
                                    </div>
                                </Link>

                                {/* Card 3 */}
                                <Link href={route('user.home3')} className="flex items-center bg-white shadow-lg p-4 rounded-3xl hover:shadow-2xl transition-shadow">
                                    <img
                                        src={icon1}
                                        alt="Bookings Icon"
                                        className="mr-4"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">Pet Services</h3>
                                        <p className="text-sm text-gray-600">Pet Care Services</p>
                                    </div>
                                </Link>

                                {/* Card 4 */}
                                <Link href="/selling-ads" className="flex items-center bg-white shadow-lg p-4 rounded-3xl hover:shadow-2xl transition-shadow">
                                    <img
                                        src={icon2}
                                        alt="Selling Ads Icon"
                                        className="mr-4"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">Buying & Selling</h3>
                                        <p className="text-sm text-gray-600">Buy or Sell a</p>
                                    </div>
                                </Link>
                    
                            </div>

                            <div className='px-8'>
                                <SearchBarDaycare/>
                            </div>

                            <BlogSection/>

                        </main>

                        <footer className="py-16 text-center text-sm text-white bg-[#156862] mt-12">
                            <p>©Copyright  2024   PetCare. All right reserved.</p>
                            <div className="flex justify-center space-x-4 mt-4">
                                <a href="#" className="text-white">Facebook</a>
                                <a href="#" className="text-white">Twitter</a>
                                <a href="#" className="text-white">Instagram</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
