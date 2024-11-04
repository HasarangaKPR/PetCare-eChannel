import React from 'react';
import BlogCard from './BlogCard';
import image1 from '../Assets/Rectangle 8-1.png';
import image2 from '../Assets/Rectangle 8-2.png';
import image3 from '../Assets/Rectangle 8-3.png';
import image4 from '../Assets/Rectangle 8.png';

const BlogSection = () => {
    const blogPosts = [
        {
            image: [image1],
            date: 'June 2, 2023',
            title: 'German Shepherd',
            description: 'The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size.',
        },
        {
            image: [image2],
            date: 'June 2, 2023',
            title: 'Siberian Husky',
            description: 'The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family.',
        },
        {
            image: [image3],
            date: 'June 2, 2023',
            title: 'Alaskan Malamute',
            description: 'The Alaskan Malamute is a large breed of dog that was originally bred for its strength and endurance,',
        },
        {
            image: [image4],
            date: 'June 2, 2023',
            title: 'Scottish folds',
            description: 'Scottish folds are rare felines, prized for their huggable good looks and sweet personalities. ',
        },
    ];

    return (
        <section className="px-4 py-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Latest Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogPosts.map((post, index) => (
                    <BlogCard
                        key={index}
                        image={post.image}
                        date={post.date}
                        title={post.title}
                        description={post.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
