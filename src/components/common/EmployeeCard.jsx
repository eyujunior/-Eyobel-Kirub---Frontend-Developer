import React from "react";

const EmployeeCard = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="employee"
          className="w-16 h-16 rounded object-cover border border-green50"
        />
        <div>
          <h3 className="font-medium text-sm text-N30">Admassu Alelegn</h3>
          <p className="text-xs text-N60">Human resource(HR)</p>
        </div>
      </div>
      <button className="text-green50 bg-green90/30 py-1.5 px-3 rounded-full hover:text-green-500 capitalize text-sm">
        admin
      </button>
    </div>
  );
};

export default EmployeeCard;
