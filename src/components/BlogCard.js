import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogCard = ({ post }) => {
  const image = getImage(post.mainImage.asset);

  return (
    <article className="bg-white border border-gray-300 shadow-md ">
      <div className="h-1/2 overflow-hidden">
        <GatsbyImage image={image} alt="Name of image" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold mb-4">{post.title}</h3>
        <Link to={post.slug.current}>
          <span className="text-blue-600">Read More</span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
