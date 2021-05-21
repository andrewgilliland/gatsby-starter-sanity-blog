import React from "react";
import SanityPortableText from "@sanity/block-content-to-react";
import sanityConfig from "../sanity/config";

// const PortableTextStyles = styled.div`
//   padding: 5rem 0;
//   font-family: var(--font-serif);
//   color: var(--grey-800);
//   h1 {
//     font-size: var(--font-32);
//   }
//   h2 {
//     font-size: var(--font-24);
//   }
//   h3 {
//     font-size: var(--font-20);
//   }
//   h4 {
//     font-size: var(--font-18);
//   }
//   h1,
//   h2,
//   h3,
//   h4 {
//     margin-bottom: 1rem;
//   }
//   p {
//     line-height: var(--leading-loose);
//     margin-bottom: 2rem;
//   }
//   blockquote {
//   }
// `;

const PortableText = ({ blocks }) => (
  <SanityPortableText blocks={blocks} {...sanityConfig} />
);

export default PortableText;
