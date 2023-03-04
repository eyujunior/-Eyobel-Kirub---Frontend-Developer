import React from "react";
import logo from "../../assets/icons/logo.svg";
const Navbar = () => {
  return (
    <div className="layout absolute top-6 left-1/2 -translate-x-1/2">
      <img src={logo} alt="logo" className="h-12" />
    </div>
  );
};

export default Navbar;
