import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <Link to="/">
        <div className="flex justify-center items-center mx-20 my-4">
          <img src={Logo} className="h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold font-title">
            Digital Community Clinic
          </h1>
        </div>
      </Link>
      <div>
        <ul className="flex my-4 mr-10 text-blue-400 text-lg">
          <li className="my-2 mr-8">
            <a href="https://aidoctor.herokuapp.com" rel="noreferrer noopener">
              AI Doctor
            </a>
          </li>
          <li className="my-2 mr-8">
            <Link to="/services">Services</Link>
          </li>
          <li className="my-2 mr-8">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
