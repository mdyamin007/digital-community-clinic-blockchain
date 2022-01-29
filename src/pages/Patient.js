import React from "react";
import NavBar from "../components/NavBar";
import Image from "../assets/images/image-clinic-1.jpg";
import { Link } from "react-router-dom";

const Patient = () => {
  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-4">
          <img src={Image} alt="Clinic" />
        </div>
        <div className="mt-10 flex">
          <Link to="/login">
            <button className="px-6 py-2 bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-blue-600 transition duration-300 ease-in-out text-lg font-bold rounded mx-4">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 bg-rose-600 text-white hover:bg-white hover:text-rose-600 border border-rose-600 transition duration-300 ease-in-out text-lg font-bold rounded mx-4">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Patient;
