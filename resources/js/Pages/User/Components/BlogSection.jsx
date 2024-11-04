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
            title: 'Lorem ipsum dolor sit amet consectetur.',
            description: 'Lorem ipsum dolor sit amet. Vitae eu iaculis orci elit eget.',
        },
        {
            image: [image2],
            date: 'June 2, 2023',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            description: 'Lorem ipsum dolor sit amet. Vitae eu iaculis orci elit eget.',
        },
        {
            image: [image3],
            date: 'June 2, 2023',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            description: 'Lorem ipsum dolor sit amet. Vitae eu iaculis orci elit eget.',
        },
        {
            image: [image4],
            date: 'June 2, 2023',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            description: 'Lorem ipsum dolor sit amet. Vitae eu iaculis orci elit eget.',
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
