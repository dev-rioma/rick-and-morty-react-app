import React from "react";
import logoHeader from "/src/assets/logo.svg";

const Header = () => {
  return (
    <div className="nav-bar w-full h-16 shadow-md drop-shadow-md">
      <img
        className="w-16 lg:ml-64 md:ml-32 sm:ml-28"
        src={logoHeader}
        alt="logo"
      />
    </div>
  );
};

export default Header;
