import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>My Mail Box</h1>
      <div>
        <NavLink to={"/inbox"}>Inbox</NavLink>
        <NavLink to={"/sentbox"}>Sent</NavLink>
      </div>
    </div>
  );
};

export default Header;
