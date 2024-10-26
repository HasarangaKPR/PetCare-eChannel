// SearchResults.jsx
import React from 'react';
import DoctorCard from './Components/DoctorCard';

const SearchResults = () => {
    // Dummy data for demonstration
    const sampleResults = [
        {
            profilePic: 'https://via.placeholder.com/150', // Placeholder image
            name: 'Dr. Sarah Wilson',
            address: '123 Pet Street, City',
            contact: '123-456-7890',
            timeSlots: ['9:00 AM', '12:00 PM', '3:00 PM'],
        },
        {
            profilePic: 'https://via.placeholder.com/150', // Placeholder image
            name: 'Dr. John Doe',
            address: '456 Animal Ave, Town',
            contact: '987-654-3210',
            timeSlots: ['10:00 AM', '1:00 PM', '4:00 PM'],
        },
        {
            profilePic: 'https://via.placeholder.com/150', // Placeholder image
            name: 'Dr. Emily Carter',
            address: '789 Pet Lane, Village',
            contact: '555-123-4567',
            timeSlots: ['11:00 AM', '2:00 PM', '5:00 PM'],
        },
        {
            profilePic: 'https://via.placeholder.com/150', // Placeholder image
            name: 'Dr. Alex Kim',
            address: '321 Furry Road, City',
            contact: '222-333-4444',
            timeSlots: ['9:30 AM', '12:30 PM', '3:30 PM'],
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {sampleResults.map((doctor, index) => (
                <DoctorCard
                    key={index}
                    profilePic={doctor.profilePic}
                    name={doctor.name}
                    address={doctor.address}
                    contact={doctor.contact}
                    timeSlots={doctor.timeSlots}
                />
            ))}
        </div>
    );
};

export default SearchResults;
