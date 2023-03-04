import React from "react";
import capsuleImage from "../../assets/images/space.png";

const DetailModal = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full z-50 text-primary bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-3/4 max-h-[80%] rounded overflow-y-auto p-4 2xl:p-6 shadow-lg flex gap-8 items-start justify-between">
        <div className="flex gap-8 2xl:gap-12">
          <img src={capsuleImage} alt="capsule" className="w-2/5 border" />
          <div className=" w-1/2 space-y-4">
            <div className="flex items-center capitalize justify-between">
              <h3 className="font-semibold">type</h3>
              <span className="text-sm uppercase">Dragon 1.0</span>
            </div>
            <div className="flex items-center capitalize justify-between">
              <h3 className="font-semibold">capsule serial</h3>
              <span className="text-sm uppercase">C101</span>
            </div>
            <div className="flex items-center capitalize justify-between">
              <h3 className="font-semibold">capsule id</h3>
              <span className="text-sm">dragon1</span>
            </div>
            <div className="flex items-center capitalize justify-between">
              <h3 className="font-semibold">landing</h3>
              <span className="text-sm">2</span>
            </div>
            <div className="flex items-center capitalize justify-between">
              <h3 className="font-semibold">original launch</h3>
              <span className="text-sm">2010-12-08</span>
            </div>
            <div className="flex items-center capitalize justify-between">
              <h3 className="font-semibold">original launch unix</h3>
              <span className="text-sm">dragon1</span>
            </div>
            <div className="flex flex-col gap-2 capitalize">
              <h3 className="font-semibold">missions</h3>
              <div className="flex items-center capitalize justify-between">
                <h3 className="">mission name</h3>
                <span className="text-sm">flight 1</span>
              </div>
              <div className="flex items-center capitalize justify-between">
                <h3 className="">mission name</h3>
                <span className="text-sm">flight 34</span>
              </div>
            </div>
          </div>
        </div>

        <span className="bg-secondary/20 text-primary py-1 px-1.5 capitalize text-sm rounded-sm">
          retired
        </span>
      </div>
    </div>
  );
};

export default DetailModal;
