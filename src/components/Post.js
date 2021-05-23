import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PortableText from "./PortableText";

const Post = ({ post, ...props }) => {
  const image = getImage(post.image);

  return (
    <article {...props}>
      <GatsbyImage image={image} alt="Name of image" />
      <h1>{post.title}</h1>
      <h3>By {post.author}</h3>

      <div className="prose lg:prose-lg mx-auto">{post.content && <PortableText blocks={post.content} />}</div>
    </article>
  );
};

export default Post;
