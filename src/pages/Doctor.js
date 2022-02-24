import React, { useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { SRLWrapper } from "simple-react-lightbox";
import NavBar from "../components/NavBar";

const Doctor = () => {
  const [id, setId] = useState();
  const { data } = useMoralisQuery("Report");
  const [reports, setReports] = useState(null);

  const handleSearch = () => {
    const res = data.filter((val) => val.attributes.username === id);
    setReports(res);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-title text-4xl text-blue-400 text-center">
          Search{" "}
        </h1>
        <div className="flex items-center justify-center mt-2 mb-4">
          <div className="flex border-2 rounded">
            <input
              type="text"
              className="px-4 py-2 w-80"
              placeholder="Medical ID"
              onChange={(e) => setId(e.target.value)}
            />
            <button
              className="flex items-center justify-center px-4 border-l"
              onClick={handleSearch}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>

        <SRLWrapper>
          <div className="flex space-y-4 flex-wrap items-center justify-around">
            {reports &&
              reports.map((report) => (
                <div className="hover:shadow-xl transition-all duration-500 ease-in-out hover:scale-105">
                  <img
                    src={report.attributes.imgUrl}
                    className="h-96 w-96"
                    alt="report"
                  />
                </div>
              ))}
          </div>
        </SRLWrapper>
      </div>
    </>
  );
};

export default Doctor;
