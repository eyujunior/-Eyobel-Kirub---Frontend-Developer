import React from "react";
import skeleton from "../../assets/images/skeleton.png";
import {SlOptionsVertical} from 'react-icons/sl'
const JobCard = () => {
  return (
    <div className="p-4 cursor-pointer rounded-md shadow-xs border flex items-center gap-4 relative">
      <SlOptionsVertical className="absolute top-3 right-3 cursor-pointer text-N30" />
      <div className="relative w-1/2">
        <img src={skeleton} alt="skeleton ui" />
      </div>
      <div className="space-y-2 flex flex-col w-1/2">
        <h3 className="font-semibold text-green50">IT Tech</h3>
        <p className="text-sm text-N60">Employee Required : 12</p>
        <div className="p-2 w-full flex-1 space-y-1 rounded-md bg-green90/30">
            <p className="text-center">Total Applicants</p>
            <p className="text-center text-green10 font-semibold">94</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
