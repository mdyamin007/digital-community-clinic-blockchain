import React, { useState } from "react";
import { useMoralis, useMoralisFile, useNewMoralisObject } from "react-moralis";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Upload = () => {
  const { isUploading, saveFile, moralisFile } = useMoralisFile();
  const { isSaving, save } = useNewMoralisObject("Report");
  const { user } = useMoralis();

  const navigate = useNavigate();

  const [file, setFile] = useState();
  const handleUpload = async () => {
    // console.log(file);
    await saveFile(file.name, file, { saveIPFS: true });
  };

  const handleSave = () => {
    save({
      imgUrl: moralisFile._ipfs,
      username: user.attributes.username,
    });
    navigate("/dashboard");
  };

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        {isUploading ? (
          <div className="my-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
              disabled
            >
              <svg
                className="animate-spin h-5 w-5 mr-3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Uploading...
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">
            Upload your reports and prescriptions here...
          </h1>
        </div>
        <div className="border p-10 bg-slate-200">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button
            disabled={isUploading}
            className="px-2 py-2 bg-blue-400 text-white font-semibold"
            onClick={handleUpload}
          >
            Upload
          </button>
          <button
            className="px-2 py-2 bg-blue-400 text-white mx-2 font-semibold"
            onClick={handleSave}
            disabled={isSaving}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
