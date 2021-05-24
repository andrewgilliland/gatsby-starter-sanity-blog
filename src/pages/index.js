import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <main className="flex flex-col items-center justify-center mt-10">
        <title>Home Page</title>
        <h1 className="text-5xl text-gray-900">Gatsby Starter Sanity Blog</h1>
        <p className="mt-3">
          Edit <code>src/pages/index.js</code> to see this page update in
          real-time.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
        <div className="mt-10">
          <StaticImage
            src="../images/robot-1.jpg"
            alt="A robot"
            placeholder="tracedSVG"
            layout="fixed"
            width={300}
            height={200}
          />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
