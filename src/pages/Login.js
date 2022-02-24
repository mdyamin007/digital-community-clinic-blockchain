import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Background from "../assets/images/background1.jpeg";
import Image from "../assets/images/login.jpg";

const Login = () => {
  const { isAuthenticated, login } = useMoralis();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    login(username, password);
    navigate("/dashboard");
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="relative w-full h-screen">
      <div className="h-full w-full absolute inset-0 z-0">
        <img src={Background} className="w-full h-full" alt="background" />
      </div>
      <div className="absolute z-10 h-full w-full inset-0">
        <div className="w-full h-full flex items-center justify-center">
          <div className="shadow-2xl flex p-10 bg-gradient-to-r bg-gradient-to-r from-slate-200 via-zinc-300 to-gray-200 rounded-3xl">
            <div className="p-8 shadow-xl bg-white rounded-2xl flex items-center justify-center">
              <div className="w-1/2 mx-4">
                <img src={Image} className="h-96 w-96 object-cover" />
              </div>
              <div className="w-1/2 mx-4 ">
                <Link to="/" className="cursor-pointer">
                  <h2 className="text-gray-600 font-light text-2xl text-center">
                    Digital Community Clinic
                  </h2>
                </Link>
                <form>
                  <div className="bg-white px-10 py-8 rounded-xl max-w-sm">
                    <div className="space-y-4">
                      <h1 className="text-center text-2xl font-semibold text-gray-600">
                        Log in
                      </h1>
                      <div>
                        <label
                          htmlFor="username"
                          className="block mb-1 text-gray-600 font-semibold"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-1 text-gray-600 font-semibold"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </div>
                    </div>
                    <button
                      className="mt-4 w-full text-black bg-yellow-500 hover:bg-yellow-600 hover:text-white transition duration-100 ease-in-out font-semibold py-2 rounded-md  tracking-wide"
                      onClick={handleSubmit}
                    >
                      Log in
                    </button>
                  </div>
                </form>
                <p className="text-sm text-center">
                  If you're new,
                  <Link to="/signup">
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      &nbsp;Sign up
                    </span>
                  </Link>
                  &nbsp;here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
