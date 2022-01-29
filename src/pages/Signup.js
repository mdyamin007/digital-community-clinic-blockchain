import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/signup.png";

const Signup = () => {
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

          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="firstName"
                >
                  First Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  Last Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="dateOfBirth"
                >
                  Date of Birth
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                />
              </div>
            </div>
            <div class="mb-4 md:flex ">
              <div class="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="fatherName"
                >
                  Father Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fatherName"
                  type="text"
                  placeholder="Father Name"
                />
              </div>
              <div class="md:ml-4 w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="motherName"
                >
                  Mother Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="motherName"
                  type="text"
                  placeholder="Mother Name"
                />
              </div>
            </div>

            <div class="mb-4 md:flex">
              <div class="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="md:ml-4 w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="mobileNo"
                >
                  Mobile No.
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="mobileNo"
                  type="phone"
                  placeholder="+880"
                />
              </div>
            </div>
            <div className="mb-4 md:flex">
              <div class="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="photo"
                >
                  Profile Picture
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="file"
                />
              </div>
              <div class="md:ml-4 w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="nid"
                >
                  NID No. / Birth Certificate No.
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nid"
                  type="text"
                />
              </div>
            </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="w-1/2 mb-4 md:mr-4 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p class="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div class="md:ml-4 w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register Account
              </button>
            </div>
            <hr class="mb-6 border-t" />

            <div class="text-center">
              <Link
                to="/login"
                class="inline-block hover:underline text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="./index.html"
              >
                Already have an account? Log in!
              </Link>
            </div>
          </form>
        </div>
        {/* <div className="w-1/3 bg-blue-300 inline-flex items-center justify-center">
          <img
            src={Image}
            alt="Image"
            style={{ height: "204px", width: "204px", objectFit: "contain" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
