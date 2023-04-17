import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/cart">My Cart</NavLink>
      </div>
      <div>
        <NavLink to="/wishlist">My wishlist</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
