import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import JobCard from "../components/layout/JobCard";
const Joblist = () => {
  return (
    <div className="bg-green99/50 min-h-screen">
    <div className="layout py-12 space-y-6">
      <div className="flex items-start gap-1">
        <AiOutlineLeft className="text-green50 mt-1" />
        <div>
          <h1 className="text-green50 font-medium mb-1">Posted Jobs</h1>
          <p className="text-sm text-N60 w-11/12 sm:w-3/4">
            This section discusses the types of jobs posted for finding hiring
            labors for this organization
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 2xl:gap-6 text-N70 text-sm ml-6">
        <p className="text-green50 font-semibold">All</p>
        <p>Published</p>
        <p>Draft</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
    </div>
  );
};

export default Joblist;
