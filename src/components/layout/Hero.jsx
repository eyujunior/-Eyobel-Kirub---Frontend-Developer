import React from "react";
import capsuleImage from "../../assets/images/capsule.jpg";
const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="layout  min-h-screen flex items-center justify-between">
        <div className="w-3/5">
          <h1 className="text-6xl sm:leading-[1.3] font-bold mb-4 capitalize text-primary">
            Helping Businesses Grow Online With Simplified Solutions
          </h1>
          <p className="text-primary/80 w-3/4">
            We build quality products and tools that are simple to use,
            affordable, and reliable to help entrepreneurs, professionals, and
            bloggers grow online
          </p>
        </div>
        <img
          src={capsuleImage}
          alt="capsule"
          className="w-1/2 absolute -right-40"
        />
      </div>
    </div>
  );
};

export default Hero;
