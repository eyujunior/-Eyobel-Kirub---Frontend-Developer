import React from "react";
import capsuleImage from "../../assets/images/space.png";

const CapsuleCard = () => {
  return (
    <div className="w-full bg-slate-100 p-4 rounded cursor-pointer text-center space-y-8 relative">
      <div className="absolute top-3 w-11/12 mx-auto flex items-center justify-between">
        <span className="w-min text-primary font-semibold capitalize text-sm rounded-sm">
          #76887
        </span>
        <span className="bg-secondary/20 text-primary py-1 px-1.5 capitalize text-sm rounded-sm">
          retired
        </span>
      </div>
      <img src={capsuleImage} alt="capsule" className="w-2/5 mx-auto" />
      <div className="flex items-center justify-between w-11/12 mx-auto capitalize">
        <h3 className="capitalize font-semibold">dragon1</h3>
        <span>landings: 1</span>
      </div>
    </div>
  );
};

export default CapsuleCard;
