import React from "react";
import { useMoralis } from "react-moralis";
import { Link, Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useMoralis();
  console.log(user);

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex w-full min-h-screen">
      <div className="bg-blue-400 min-h-fit w-2/12 text-white">
        <Link to="/">
          <h1 className="font-bold text-xl m-4">
            Digital Community
            <span className="block text-center"> Clinic</span>
          </h1>
        </Link>
        <ul>
          <Link to="/upload">
            <li className="pl-6 py-3">Upload</li>
          </Link>
          <Link to="/view">
            <li className="pl-6 py-3">View</li>
          </Link>
          <li className="pl-6 py-3">Update</li>
          <a href="https://aidoctor.herokuapp.com/">
            <li className="pl-6 py-3 text-red-600">AI Doctor</li>
          </a>
          <li
            className="pl-6 py-3 text-black cursor-pointer"
            onClick={handleLogout}
          >
            Log out
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center min-h-fit w-10/12 items-center">
        <div className="bg-white rounded-lg border p-10 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col justify-center items-center px-4 pt-4">
            <div className="mb-14">
              <h1 className="text-2xl font-bold">
                {user.attributes.firstName} {user.attributes.lastName}
              </h1>
              <p>@{user.attributes.username}</p>
            </div>
            <div className="space-y-4 font-data">
              <p>Date of birth: {user.attributes.DOB}</p>
              <p>Father: {user.attributes.fatherName}</p>
              <p>Mother: {user.attributes.motherName}</p>
              <p>Email: {user.attributes.email}</p>
              <p>Phone: {user.attributes.phone}</p>
              <p>NID / Birth Certificate No.: {user.attributes.NID}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
