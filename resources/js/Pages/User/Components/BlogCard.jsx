import React from 'react';

const BlogCard = ({ image, date, title, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
            <img src={image} alt="Blog" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-gray-500">{date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <a href="#" className="text-[#22AAA1] hover:text-[#156862] text-sm font-medium">
                    Learn more &rarr;
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
