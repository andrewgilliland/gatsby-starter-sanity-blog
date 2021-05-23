import * as React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import BlogGrid from "../components/BlogGrid";

const BlogPage = ({ data }) => {
  const posts = data.posts.nodes;

  return (
    <>
    <SEO title="Blog" />
    <main className="flex flex-col items-center justify-center mt-10">
      <title>Blog Page</title>
      <h1 className="text-5xl text-gray-900">Blog</h1>
      <p className="mt-3">
        Edit <code>src/pages/blog.js</code> to see this page update in
        real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <BlogGrid posts={posts} />
    </main>
    </>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query MyQuery {
    posts: allSanityPost {
      nodes {
        title
        publishedAt
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
