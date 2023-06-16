import React from "react";
import { MdClose } from "react-icons/md";

const Tag = ({ label, custom }) => {
  return (
    <div
      className={`${custom} flex items-center text-sm justify-center gap-2 capitalize px-2 py-1 rounded-md`}
    >
      <p>{label}</p>
      <MdClose />
    </div>
  );
};

export default Tag;
