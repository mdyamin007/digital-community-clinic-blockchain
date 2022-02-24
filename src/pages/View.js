import React from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Navigate } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import NavBar from "../components/NavBar";

const View = () => {
  const { user, isAuthenticated } = useMoralis();
  // console.log(user.attributes.username);

  const { data } = useMoralisQuery("Report", (query) =>
    query.equalTo("username", user.attributes.username)
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // const username = data.imgUrl;

  return (
    <SRLWrapper>
      <NavBar />
      <div className="my-4">
        <h1 className="font-title text-5xl text-blue-400 text-center">
          Reports & prescriptions
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        {data &&
          data.map((value, index) => (
            <img
              src={value.attributes.imgUrl}
              alt="report"
              className="h-96 w-96 m-2"
              key={index}
            />
          ))}
      </div>
    </SRLWrapper>
  );
};

export default View;
