import React from "react";
import DetailModal from "../utils/DetailModal";
import CapsuleCard from "./CapsuleCard";
import NoData from "../../assets/images/no-data.png";
const CapsuleGrid = ({ capsules }) => {
  if (capsules.length < 1) {
    return (
      <div className="layout flex items-center justify-center">
        <img src={NoData} alt="no data" className="w-1/3" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4 mb-16">
      {capsules.map((capsule) => {
        return <CapsuleCard {...capsule} />;
      })}

      {/* <DetailModal /> */}
    </div>
  );
};

export default CapsuleGrid;
