import React from "react";
import Capsules from "../components/layout/Capsules";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Capsules />
    </div>
  );
};

export default Home;
