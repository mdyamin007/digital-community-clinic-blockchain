import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="mt-6 flex flex-col items-center">
        <div className="text-center font-bold leading-relaxed text-4xl">
          <h1>
            <span className="text-blue-400">Store</span> & find your medical
            <span className="text-cyan-800"> information</span>
          </h1>
          <h1>
            fast and <span className="text-blue-400">easily</span>
          </h1>
        </div>
        <div className="mt-2 z-10">
          <p className="text-base text-center font-thin">You're a</p>
          <div className="mt-2">
            <Link to="/patient">
              <button
                type="button"
                className="text-xl mr-4 px-4 py-2 cursor-pointer hover:bg-white hover:text-blue-400 border border-blue-400 transition ease-in-out duration-300 bg-blue-400 rounded-md text-white font-bold"
              >
                Patient
              </button>
            </Link>
            <button
              type="button"
              className="text-xl mr-4 px-4 py-2 bg-white cursor-pointer rounded-md text-blue-400 border border-blue-400 font-bold hover:bg-blue-400 hover:text-white transiton ease-in-out duration-300"
            >
              Doctor
            </button>
          </div>
        </div>
        <div className="-mt-8 w-full z-0">
          <img src={Image} className=" w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
