import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div
      className="grid min-h-screen"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      <Header />
      <div className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
