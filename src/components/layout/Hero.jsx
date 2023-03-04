import React from "react";
import capsuleImage from "../../assets/images/capsule.jpg";
const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="layout min-h-screen flex sm:items-center flex-col sm:flex-row gap-8 sm:justify-between justify-center">
        <div className="sm:w-3/5 w-11/12">
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-normal sm:leading-[1.3] md:leading-[1.3] lg:leading-[1.3] xl:leading-[1.3] font-bold mb-2 xl:mb-4 capitalize text-primary">
            Helping Businesses Grow Online With Simplified Solutions
          </h1>
          <p className="text-primary/80 md:w-3/4">
            We build quality products and tools that are simple to use,
            affordable, and reliable to help entrepreneurs, professionals, and
            bloggers grow online
          </p>
        </div>
        <img
          src={capsuleImage}
          alt="capsule"
          className="sm:w-1/2 sm:absolute -right-24 xl:-right-40"
        />
      </div>
    </div>
  );
};

export default Hero;
