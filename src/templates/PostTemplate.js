import React from "react";
import { graphql } from "gatsby";
import Post from "../components/Post";

export default function PostTemplate({ data }) {
  const post = {
    title: data.post?.title,
    date: new Date(data.post?.publishedAt),
    content: data.post?._rawBody,
    image: data.post?.mainImage.asset.gatsbyImageData,
  };

  return <Post post={post} />;
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt
      _rawBody(resolveReferences: { maxDepth: 5 })
      mainImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;
