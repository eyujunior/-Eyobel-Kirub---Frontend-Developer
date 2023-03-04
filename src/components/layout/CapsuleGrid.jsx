import React from "react";
import DetailModal from "../utils/DetailModal";
import CapsuleCard from "./CapsuleCard";
const CapsuleGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-16">
      <CapsuleCard />
      <CapsuleCard />
      <CapsuleCard />
      <CapsuleCard />
      {/* <DetailModal /> */}
    </div>
  );
};

export default CapsuleGrid;
