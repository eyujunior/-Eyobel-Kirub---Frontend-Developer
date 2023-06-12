import React from "react";
import { MdHourglassFull } from "react-icons/md";
import logoStatus from "../../assets/icons/logo-status.png";
const StatusCard = ({ status }) => {
  return (
    <div
      className={`p-4 rounded-md bg-gradient-to-br relative max-w-sm flex items-start gap-4 justify-between ${
        status === "pending" && "from-yellow-500 to-yellow-600"
      } ${status === "rejected" && "from-red-500 to-red-700"}`}
    >
      <div>
        <div className="flex items-start justify-between h-max flex-col gap-1">
          <span className=" capitalize text-white font-medium">
            verification status
          </span>
          <div
            className={`w-fit py-1 px-2 rounded-full capitalize  flex items-center justify-center gap-2 ${
              status == "rejected" && "bg-white/20 text-N99"
            } ${status == "pending" && "bg-white/50 text-N30"}`}
          >
            <MdHourglassFull />
            <h3>{status}</h3>
          </div>
        </div>
        <p
          className={`absolute bottom-4 capitalize text-sm font-medium left-4 ${
            status == "rejected" && "text-N95"
          } ${status == "pending" && "text-N40"}`}
        >
          Created date : June 12, 2023
        </p>
      </div>
      <img src={logoStatus} alt="logo icon" className="w-28 translate-x-4" />
    </div>
  );
};

export default StatusCard;
