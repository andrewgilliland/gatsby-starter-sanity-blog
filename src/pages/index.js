import * as React from "react";

const IndexPage = () => {
  return (
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
    </main>
  );
};

export default IndexPage;
