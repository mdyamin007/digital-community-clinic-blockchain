import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main className="h-screen w-full">
      <NavBar />
      <Hero />
    </main>
  );
};

export default Home;
