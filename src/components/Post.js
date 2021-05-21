import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PortableText from "./PortableText";

// const PostStyles = styled.article`
//   display: grid;
//   grid-template-columns:
//     1fr
//     min(65ch, calc(100% - 64px)) // calc function prevents horizontal scroll
//     1fr;
//   // substitution for padding
//   grid-column-gap: 32px;
//   & > * {
//     grid-column: 2;
//   }
// `;

// const PostHeader = styled.header`
//   color: var(--white);
//   font-family: var(--font-serif);
//   text-shadow: var(--text-shadow);
//   background-color: var(--grey-500);
//   background-image: linear-gradient(
//       to right bottom,
//       rgba(0, 0, 0, 0.2),
//       rgba(0, 0, 0, 0.2)
//     ),
//     url(${(props) => props.backgroundImage});
//   background-position: center;
//   background-size: cover;
//   height: 45vh;
//   width: 100%;
//   grid-column: 1/ -1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
//   padding: 4rem;
//   h1 {
//     font-size: var(--font-40);
//     font-weight: var(--font-bold);
//     text-align: center;
//     max-width: 40rem;
//     @media (max-width: 425px) {
//       font-size: var(--font-30);
//     }
//   }
//   h3 {
//     margin-top: 1rem;
//     font-size: var(--font-24);
//     font-style: italic;
//     @media (max-width: 425px) {
//       font-size: var(--font-20);
//     }
//   }
// `;

const Post = ({ post, ...props }) => {
  const image = getImage(post.image);
  
  return (
    <article {...props}>
      <GatsbyImage image={image} alt="Name of image" />
      <h1>{post.title}</h1>
      <h3>By {post.author}</h3>

      {post.content && <PortableText blocks={post.content} />}
    </article>
  );
};

export default Post;
