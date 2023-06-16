import React from "react";
import { BiPencil } from "react-icons/bi";
import { VscFilePdf } from "react-icons/vsc";
import Tag from "../components/utils/Tag";
import Button from "../components/common/Button";

const JobDetail = ({
  contractSectionInfo,
  additionalJobInfo,
  getValues,
  setCurrentSection,
  agreeToTerms,
  setAgreeToTerms,
}) => {
  return (
    <div className="layout">
      <div className="flex flex-col gap-6 my-8">
         {/* Job Details */}
         <div className="flex flex-col gap-4 p-8 bg-N99/20 rounded-xl">
          <p className="border-b border-N95 pb-3 text-lg text-N20 flex gap-2 items-center font-semibold">
            Job Details
            <BiPencil
              className="text-green50"
              onClick={(e) => setCurrentSection(1)}
            />
          </p>
          <div className="w-full flex flex-col gap-5 text-N60 px-6">
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2">
                <p className=" font-semibold text-green50">Title:</p>
              </div>
              <p>Senior Marketing Manager</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2">
                <p className=" font-semibold text-green50">Sector:</p>
              </div>
              <p>Logistics and others</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2">
                <p className=" font-semibold text-green50">Sub Sector:</p>
              </div>
              <p>Economics and Marketing</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2">
                <p className=" font-semibold text-green50">Description:</p>
              </div>
              <div className="flex flex-col gap-4 ">
                                 
                <p>
                  Finance & Accounting Professional <br />
                  Working Hour:- Regular Hours (2:00 – 11:00 LT)
                </p>

                <p>
                  <span className="text-green50 font-semibold">
                    Roles & Responsibilities
                  </span>
                  <br />
                  Financial related Assist the Senior & Finance Manager Cash
                  <br />
                  collection roles Payment request & Payroll management tasks
                  <br />
                  Other assigned accounting & financial assignments
                </p>

                <p>
                  <span className="text-green50 font-semibold">
                    Skills Required
                  </span>
                  <br />
                  Communicator & Presentable Active & Energized Passionate &
                  <br />
                  Motivated Honesty & Integrity
                </p>

                <p>
                  <span className="text-green50 font-semibold">
                    Qualifications
                  </span>
                  <br />
                  BA in Accounting Preferably Reception & Customer Service
                  related
                  <br />
                  fields Experience in Education or Hospitality industry Should
                  <br />
                  have a minimum 1 year experience as Cashier or Junior <br />
                  Accountantv
                </p>
              </div>
            </div>
          </div>
        </div>
 

        {/* Contract and Educ Info */}
        <div className="flex flex-col gap-4 p-8 bg-N99/20 rounded-xl">
          <p className="border-b border-N95 pb-3 text-lg text-N20 flex gap-2 items-center font-semibold">
            Contract and Educ Info
            <BiPencil
              className="text-green50"
              onClick={(e) => setCurrentSection(2)}
            />
          </p>
          <div className="w-full flex flex-col gap-5 text-N60 px-6">
          <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">job location</p>
              </div>
              <p>Addis Ababa , Piassa</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">employment type</p>
              </div>
              <p>Permanent</p>
            </div>

            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Field of Study</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                        <Tag
                          custom="bg-green50/20 text-N20"
                          label="Computer Science"
                        />
                        <Tag
                          custom="bg-green50/20 text-N20"
                          label="marketing"
                        />
              </div>
            </div>

            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">
                  Education Qualification
                </p>
              </div>
              {/* <p>Degree and above</p> */}
              <div className="flex flex-col gap-1">
                    <p>
                       Degree with 5 years  <br />
                      Masters with 2 years
                    </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Skills</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                        <Tag
                          custom="bg-green50/20 text-N20"
                          label="JS"
                        />
                        <Tag
                          custom="bg-green50/20 text-N20"
                          label="Photoshop"
                        />
                        <Tag
                          custom="bg-green50/20 text-N20"
                          label="Social Studies"
                        />
                        <Tag
                          custom="bg-green50/20 text-N20"
                          label="Management"
                        />
              </div>
            </div>
          </div>
        </div>

        {/* Job’s Salary config */}
        <div className="flex flex-col gap-4 p-8 bg-N99/20 rounded-xl">
          <p className="border-b border-N95 pb-3 text-lg text-N20 flex gap-2 items-center font-semibold">
            Job’s Salary config
            <BiPencil
              className="text-green50"
              onClick={(e) => setCurrentSection(3)}
            />
          </p>
          <div className="w-full flex flex-col gap-5 text-N60 px-6">
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Salary Type</p>
              </div>
              <p>Fixed</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Payment Type</p>
              </div>
              <p>Per-week</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Salary Range</p>
              </div>
              <p>
              3,200 ETB - 5,000 ETB             
              </p>
            </div>
          </div>
        </div>

        {/* Amount of Employees */}
        <div className="flex flex-col gap-4  p-8 bg-N99/20 rounded-xl">
          <p className="border-b border-N95 pb-3 text-lg text-N20 flex gap-2 items-center font-semibold">
            Amount of Employees
            <BiPencil
              className="text-green50"
            //   onClick={(e) => setCurrentSection(4)}
            />
          </p>
          <div className="w-full flex flex-col gap-5 text-N60 px-6 ">
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">
                  Req. number of employees
                </p>
              </div>
              <p>32</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Gender priority</p>
              </div>
              <p>Female</p>
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">
                  Application deadline
                </p>
              </div>
              <p>June 12, 2023 (In 2 weeks)</p>
            </div>
          </div>
        </div>

        {/* Amount of Employees */}
        <div className="flex flex-col gap-4  p-8 bg-N99/20 rounded-xl">
          <p className="border-b border-N95 pb-3 text-lg text-N20 flex gap-2 items-center font-semibold">
            Additional Information
            <BiPencil
              className="text-green50"
              onClick={(e) => setCurrentSection(5)}
            />
          </p>
          <div className="w-full flex flex-col gap-5 text-N60 px-6 ">
          

            {additionalJobInfo?.docPath?.name ? (
              <div className="flex lg:flex-row flex-col items-start gap-4">
                <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                  <p className=" font-semibold text-green50">Document Type</p>
                </div>
                <div className="flex items-center gap-4 rounded-lg shadow-sm bg-white">
                  <div className="p-2 bg-green rounded-l-lg h-full">
                    <VscFilePdf className="text-2xl text-white" />
                  </div>

                  <div className="pr-6">
                    <p className="text-sm text-N20 font-semibold">
                      {additionalJobInfo?.docPath?.name}
                    </p>
                    <p className="text-xs text-N80">Document file uploaded</p>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Cover letter</p>
              </div>
              <input
                disabled
                checked={true}
                type="checkbox"
                className="checked:text-green50 checked:outline-green"
              />
            </div>
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <div className="flex w-full lg:w-1/5 gap-2 capitalize">
                <p className=" font-semibold text-green50">Portfolio</p>
              </div>
              <input
                disabled
                checked={false}
                type="checkbox"
                className="checked:text-green50 checked:outline-green"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center bg-green50/20 rounded-md p-6">
          <input
            checked={agreeToTerms}
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500 "
            onChange={(e) => setAgreeToTerms(!agreeToTerms)}
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm text-N50"
          >
            When E-LMIS posted this job, I agreed to the <span className="text-green50">Terms and Conditions</span>  of the LMIS job portal.          </label>
        </div>
        <div className="flex items-center justify-end gap-2 md:w-1/2 2xl:w-2/5 ml-auto">
            <Button custom="bg-green50 text-white py-2 border-2 border-green50 w-1/2 hover:bg-green40">Save</Button>
            <Button custom="text-green50 border-2 border-green50 bg-white py-2 w-1/2 hover:bg-green90/20">Publish</Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
