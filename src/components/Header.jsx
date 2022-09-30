import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        <NavLink to="/" className={"text-4xl"}>
          Home
        </NavLink>
        <NavLink to="/">Favorite</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
