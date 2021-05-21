import React from "react";
import { Link } from "gatsby";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="hidden lg:flex">
      <NavLink>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link to="/blog">Blog</Link>
      </NavLink>
      <NavLink>
        <Link to="/about">About</Link>
      </NavLink>
    </nav>
  );
}
