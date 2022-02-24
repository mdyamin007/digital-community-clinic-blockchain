import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Link, Navigate } from "react-router-dom";
import Image from "../assets/images/signup.png";

const Signup = () => {
  const { signup, isAuthenticating, isAuthenticated, authError, user } =
    useMoralis();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [NID, setNID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    await e.preventDefault();
    setFirstName(e.target[0].value);
    setLastName(e.target[1].value);
    setDOB(e.target[2].value);
    setFatherName(e.target[3].value);
    setMotherName(e.target[4].value);
    setUsername(e.target[8].value);
    setPhone(e.target[6].value);
    setEmail(e.target[7].value);
    setNID(e.target[8].value);
    setPassword(e.target[9].value);
    setConfirmPassword(e.target[10].value);
    await signup(username, password, email, {
      firstName,
      lastName,
      DOB,
      fatherName,
      motherName,
      phone,
      NID,
    });
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-full px-20 py-14 flex items-center justify-center bg-rose-200">
      <div className="px-20 py-10 bg-white rounded-2xl shadow-2xl flex">
        <div className="">
          <h2 className="text-center mb-10 text-gray-600 text-3xl font-bold">
            Digital Community Clinic
          </h2>

          <h4 className="mx-8 text-2xl font-semibold text-gray-600">
            Register
          </h4>

          <form
            className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="dateOfBirth"
                >
                  Date of Birth
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                />
              </div>
            </div>
            <div className="mb-4 md:flex ">
              <div className="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="fatherName"
                >
                  Father Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fatherName"
                  type="text"
                  placeholder="Father Name"
                />
              </div>
              <div className="md:ml-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="motherName"
                >
                  Mother Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="motherName"
                  type="text"
                  placeholder="Mother Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex">
              <div className="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Medical ID
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  placeholder="No need to give"
                  disabled
                />
              </div>
              <div className="md:ml-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="mobileNo"
                >
                  Mobile No.
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="mobileNo"
                  type="phone"
                  placeholder="+880"
                />
              </div>
            </div>
            <div className="mb-4 md:flex">
              <div className="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="md:ml-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="nid"
                >
                  NID No. / Birth Certificate No.
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nid"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div className="md:ml-4 w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="c_password"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isAuthenticating}
              >
                Register Account
              </button>
            </div>
            <hr className="mb-6 border-t" />

            <div className="text-center">
              <Link
                to="/login"
                className="inline-block hover:underline text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="./index.html"
              >
                Already have an account? Log in!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
