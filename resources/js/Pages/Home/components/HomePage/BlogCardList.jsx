import React from "react";
import BlogCard from "./BlogCard";
import { BlogData } from "../../data/BlogData";

const BlogCardList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">OUR LATEST BLOGS</h2>
      <div className="flex space-x-8 overflow-x-scroll">
        {BlogData.map((blog) => (
          <BlogCard
            key={blog.id}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCardList;
