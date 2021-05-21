import React from "react";

export default function Overlay({ toggle, isOpen }) {
  return (
    <div
      onClick={toggle}
      className={`fixed top-0 left-0 h-full w-full bg-gray-900 transition-opacity duration-300 transform ${
        isOpen ? "z-10 ease-out opacity-30" : "hidden ease-in opacity-0"
      }`}
    />
  );
}
