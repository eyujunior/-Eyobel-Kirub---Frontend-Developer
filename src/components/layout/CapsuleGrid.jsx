import React from "react";
import DetailModal from "../utils/DetailModal";
import CapsuleCard from "./CapsuleCard";
import NoData from "../../assets/images/no-data.png";
import { Link, useLocation } from "react-router-dom";
const CapsuleGrid = ({ capsules }) => {
  const location = useLocation();
  if (capsules.length < 1) {
    return (
      <div className="layout flex items-center justify-center">
        <img src={NoData} alt="no data" className="w-3/5 sm:w-1/3" />
      </div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
      {capsules.map((capsule) => {
        return (
          <Link
            to={`/capsule?id=${capsule.capsule_serial}`}
            state={{ background: location }}
            key={capsule.capsule_serial}
          >
            <CapsuleCard {...capsule} />
          </Link>
        );
      })}

      {/* <DetailModal /> */}
    </div>
  );
};

export default CapsuleGrid;
