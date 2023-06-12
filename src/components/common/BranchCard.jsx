import React from "react";

const BranchCard = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="employee"
          className="w-14 h-14 rounded object-cover border border-green50"
        />
        <div>
          <h3 className="font-medium text-sm text-N30">Admassu Alelegn</h3>
          <p className="text-xs text-N60">Human resource(HR)</p>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
