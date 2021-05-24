import React from "react";

export default function NavLink({ children, toggle, toggleKeyPress }) {
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={toggle}
      onKeyPress={toggleKeyPress}
      className="inline-block font-semibold lg:mx-4 transition-opacity duration-300 hover:opacity-75"
    >
      {children}
    </div>
  );
}
