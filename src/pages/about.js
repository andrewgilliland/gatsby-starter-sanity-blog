import * as React from "react";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <main className="flex flex-col items-center justify-center mt-10">
        <title>About Page</title>
        <h1 className="text-5xl text-gray-900">About</h1>
        <p className="mt-3">
          Edit <code>src/pages/about.js</code> to see this page update in
          real-time.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </main>
    </>
  );
};

export default AboutPage;
