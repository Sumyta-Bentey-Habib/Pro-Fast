import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  const links = (
    <>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Coverage</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Be a Rider</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
            <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
       <div className="gap-10">
         <a className="btn">LogIn </a>
         <a className="btn">Register</a>
       </div>
      </div>
    </div>
  );
};

export default NavBar;
