import React from "react";

const BlogCard = ({ date, title, description, imageUrl }) => {
  return (
    <div className="card w-[22.5%] h-auto rounded-lg shadow-lg overflow-hidden mb-2">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <a href="#" className="text-teal-500 text-sm mt-4 inline-block">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
