import React from "react";
import logo from "../assets/logo/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <div>
        <img 
        className="mb-2"
        src={logo} alt="" />
      </div>
      <div className="text-3xl -ml-2">ProFast</div>
    </div>
  );
};

export default Logo;
