import React from "react";
import { Link } from "gatsby";
import NavLink from "./NavLink";

export default function MobileNav({ toggle, isOpen }) {
  return (
    <nav className="flex flex-col items-start text-lg space-y-2 my-8 px-5">
      <NavLink toggle={toggle} isOpen={isOpen}>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink toggle={toggle} isOpen={isOpen}>
        <Link to="/blog">Blog</Link>
      </NavLink>
      <NavLink toggle={toggle} isOpen={isOpen}>
        <Link to="/about">About</Link>
      </NavLink>
    </nav>
  );
}
