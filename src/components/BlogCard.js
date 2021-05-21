import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// const BlogCardStyles = styled.article`
//
//
//   .card-img {
//     background-size: cover;
//     background-position: center;
//     // 16:9 ratio
//     padding-bottom: 62.5%;
//   }
//


const BlogCard = ({ post }) => {
  const image = getImage(post.mainImage.asset);

  return (
    <div className="bg-white border border-gray-300 shadow-md overflow-hidden">
      <div className="bg-cover bg-center pb-10">

      <GatsbyImage image={image} alt="Name of image" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold mb-4">{post.title}</h3>
        <Link to={post.slug.current}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
