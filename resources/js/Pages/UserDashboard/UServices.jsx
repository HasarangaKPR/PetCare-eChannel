import React from 'react';
import Header from '../SystemAdmin/Components/Header';
import SideList from './Components/SideList';

const UServices = () => {

    const patients = [
        { name: 'Virginia Gusikowski', date: '5/27/15', time: '10', contact: '(406) 555-0120' },
        { name: 'Jay Lakin', date: '4/4/18', time: '8', contact: '(219) 555-0114' },
        { name: 'Ruth Schamberger', date: '5/7/16', time: '8', contact: '(205) 555-0100' },
        { name: 'Colin Lesch', date: '4/21/12', time: '6', contact: '(405) 555-0128' },
        { name: 'Lula Thiel', date: '8/30/14', time: '2', contact: '(217) 555-0113' },
        { name: 'Dave Casper', date: '5/19/12', time: '6', contact: '(316) 555-0116' },
        { name: 'Brooke Ondricka', date: '6/19/14', time: '8', contact: '(702) 555-0122' },
        { name: 'Terry Douglas', date: '8/16/13', time: '10', contact: '(252) 555-0126' },
        { name: 'Vera Kihn', date: '8/15/17', time: '6', contact: '(201) 555-0124' },
        { name: 'Clinton Schaden', date: '5/27/15', time: '6', contact: '(603) 555-0123' },
        { name: 'Marilyn McDermott', date: '11/7/16', time: '8', contact: '(319) 555-0115' },
        { name: 'Merle Jakubowski', date: '2/11/12', time: '2', contact: '(208) 555-0112' },
        { name: 'Lorraine Stroman', date: '1/28/17', time: '6', contact: '(209) 555-0104' },
        { name: 'Clarence Donnelly', date: '10/28/12', time: '2', contact: '(207) 555-0119' },
    ];

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-grow">
                    <SideList />
                    <div className="w-full overflow-x-auto">
                        <h1 className='font-medium text-2xl my-4'>My Services</h1>
                        <table className="min-w-full table-auto bg-[#DEF2F1] ">
                            <thead>
                                <tr className="bg-[#156862] text-white">
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Owner Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Time</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium ">Contact Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient, index) => (
                                    <tr key={index} className="border-b last:border-none">
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.name}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.date}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.time}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">{patient.contact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UServices;
