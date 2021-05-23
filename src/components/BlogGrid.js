import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-16"
    >
      {posts.map((post, i) => (
        <BlogCard key={i} post={post} />
      ))}
    </div>
  );
}
