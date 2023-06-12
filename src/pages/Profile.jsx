import EmployeeCard from "../components/common/EmployeeCard";
import building from "../assets/icons/healthicons_city.png";
import {
  MdInsertLink,
  MdMailOutline,
  MdFax,
  MdPhoneInTalk,
} from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import BranchCard from "../components/common/BranchCard";
import StatusCard from "../components/common/StatusCard";
const Profile = () => {
  return (
    <div className="w-11/12 mx-auto rounded-xl bg-white mt-8 shadow-md">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="profile banner"
        className="w-full h-64 object-cover rounded-t-xl"
      />
      <div className="p-8">
        <div className="-translate-y-1/2 space-y-2">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="image"
            className="w-24 h-24 object-cover rounded-sm mx-auto"
          />
          <div className="text-center">
            <h2 className="text-lg font-medium text-green50 capitalize">
              dangote private co.
            </h2>
            <p className="text-sm text-stone-400 w-2/5 mx-auto">
              Our vision is for West and Central Africa to be cement and clinker
              self-sufficient, with Nigeria the main export hub
            </p>
          </div>
        </div>
        <div className="flex gap-4 xl:gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-4 2xl:gap-6 md:w-1/3">
            <div className="p-4 2xl:p-6 bg-N99/30 rounded-md">
              <h2 className="capitalize font-medium text-green50 mb-1">
                organization description
              </h2>
              <p className="text-sm text-N50">
                The Agricultural Organization is a non-profit organization that
                works to promote sustainable agricultural practices in order to
                ensure the health and well-being of communities, economies, and
                ecosystems. Our mission is to create an equitable food system
                through research, education, advocacy and collaboration with
                partners across the globe. We strive for a world where everyone
                has access to safe and nutritious food while respecting human
                rights throughout all stages of production. Our motto is “Food
                Security for All” which reflects our commitment towards
                achieving this goal by creating economic opportunities along
                with environmental sustainability initiatives that will benefit
                farmers as well as consumers alike.{" "}
              </p>
            </div>
            <div className="p-4 2xl:p-6 bg-white shadow rounded-md">
              <div className="flex items-center gap-4 justify-between mb-4">
                <div>
                  <h2 className="capitalize font-medium text-N40">
                    organization description
                  </h2>
                  <span className="text-xs text-N50">
                    List of employees working in this organization
                  </span>
                </div>
                <button className="text-green50 font-medium capitalize">
                  see more
                </button>
              </div>
              <div className="space-y-4">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <button className="text-green50 font-medium capitalize text-center w-full">
                  see more
                </button>
              </div>
            </div>
            <div className=" bg-white shadow rounded-md">
              <div className="flex items-center gap-4 justify-between p-4 2xl:px-6">
                <h2 className="capitalize font-medium text-N40">Recent Post</h2>
                <button className="text-green50 font-medium capitalize">
                  Expand
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="profile banner"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 space-y-4">
                <p className="text-sm text-N60">
                  Certifcation of the organization through out the whole life
                  time have been approved
                </p>
                <div className="flex items-center gap-4 rounded-md overflow-hidden bg-N99/30">
                  <img
                    src="https://images.unsplash.com/photo-1599595344070-c456bea6ee98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-[30%] rounded-l-md"
                  />
                  <div>
                    <h3 className="font-medium text-sm">
                      Grand Opening of Dangote
                    </h3>
                    <p className="text-xs text-N50">Mexico branch</p>
                  </div>
                </div>
              </div>
            </div>
            <StatusCard status="pending" />
          </div>
          <div className="md:w-2/3 space-y-4 2xl:space-y-6">
            <div className="bg-N99/30 rounded-md p-4 2xl:px-6 space-y-6 xl:space-y-8">
              <div className="flex items-center gap-4 justify-between ">
                <h2 className="capitalize font-medium text-N40">
                  Main Office Residence
                </h2>
                <button className="text-green50 text-sm bg-green90/30 p-3 rounded-md font-medium capitalize">
                  Organization ID: ED5E233A
                </button>
              </div>
              <div className="flex gap-8 justify-between items-start lg:flex-row flex-col">
                <div className="lg:w-1/2 space-y-4">
                  <div className="grid gap-4 grid-cols-2 capitalize text-N20">
                    <div>
                      <span className="text-sm text-N70">kebele</span>
                      <p className="text-sm">Kolfe Keraniyo</p>
                    </div>
                    <div>
                      <span className="text-sm text-N70">Subcity</span>
                      <p className="text-sm">Addis Ababa</p>
                    </div>
                    <div>
                      <span className="text-sm text-N70">House No </span>
                      <p className="text-sm">054</p>
                    </div>
                    <div>
                      <span className="text-sm text-N70">Region</span>
                      <p className="text-sm">Addis Ababa</p>
                    </div>
                    <div>
                      <span className="text-sm text-N70">zone</span>
                      <p className="text-sm">Addis Ababa</p>
                    </div>
                  </div>
                  <div className=" capitalize">
                    <span className="text-sm text-N70">address</span>
                    <p className="text-sm">Stadium Kenema Pharmacy</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                  <div className=" capitalize space-y-1">
                    <span className="text-sm text-N70">
                      Boundaries of the enterprise
                    </span>
                    <div className="flex items-center gap-2 text-green50 bg-green90/30 w-fit p-2 2xl:px-4 rounded">
                      <img src={building} alt="building" />
                      <p>Rural / Urban</p>
                    </div>
                  </div>
                  <div className=" capitalize">
                    <span className="text-sm text-N70">Foreign Residence</span>
                    <p className="text-sm">Stadium Kenema Pharmacy</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                  <div className="text-sm">
                    <p className=" text-N70 capitalize mb-2">
                      Contact information
                    </p>
                    <div className="grid gap-4 grid-cols-2 capitalize text-N20">
                      <div className="flex items-center gap-2">
                        <MdInsertLink className="text-N50" />
                        <p className="font-medium">http://www.agri.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdPhoneInTalk className="text-N50" />
                        <p className="font-medium">+251913428778</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdMailOutline className="text-N50" />
                        <p className="font-medium">info@gmail.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdPhoneInTalk className="text-N50" />
                        <p className="font-medium">+251913428778</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdFax className="text-N50" />
                        <p className="font-medium">fax1232</p>
                      </div>
                    </div>
                  </div>
                  <div className=" capitalize w-4/5">
                    <h3 className="font-medium py-2 border-b mb-4">
                      sector details
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex gap-4 justify-between">
                        <p className="text-N60">sector</p>
                        <h4>agriculture</h4>
                      </div>
                      <div className="flex gap-4 justify-between">
                        <p className="text-N60">Sub sector</p>
                        <h4>Crop Agriculture</h4>
                      </div>
                      <div className="flex gap-4 justify-between">
                        <p className="text-N60">Engaged Fields</p>
                        <h4>Coffee</h4>
                      </div>
                      <div className="flex gap-4 justify-between">
                        <p className="text-N60">Product Supply Market</p>
                        <h4>For Abroad</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/5 md:w-3/4 bg-white rounded-md">
                  <h3 className="text-green20 capitalize p-4 font-medium">
                    Enterprise Main Office Location
                  </h3>
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                    width={600}
                    height={600}
                    alt=""
                  />
                  <div className="p-4">
                    <h4 className=" capitalize text-green50 mb-4">
                      other branches
                    </h4>
                    <div className="divide-y divide-N99">
                      <BranchCard />
                      <BranchCard />
                      <BranchCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-N99/30 rounded-md p-4 2xl:px-6 space-y-4">
              <h2 className="text-N30 font-semibold capitalize">
                enterprise data
              </h2>
              <div className="flex justify-between items-start md:flex-row gap-4 flex-col">
                <div className=" space-y-4">
                  <div>
                    <p className="text-sm text-N60">
                      Tax Payer Identification Number
                    </p>
                    <h3 className="text-xl font-semibold text-green30">
                      ET093442
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm text-N60">Amount of capital</p>
                    <h3 className="font-medium text-green30">30000 ETB</h3>
                  </div>
                  <div>
                    <p className="text-sm text-N60">Source of resource</p>
                    <h3 className="font-medium text-green30">
                      Something reason here of the source
                    </h3>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md md:w-2/5 sm:w-1/2 w-full capitalize font-medium text-N50">
                  <h4 className="mb-2 text-N70">total assets</h4>
                  <div className="flex flex-col divide-y divider-N99 capitalize">
                    <div className="flex items-center gpa-2 justify-between py-2">
                      <p>cash</p>
                      <h3 className="text-green50">1mill</h3>
                    </div>
                    <div className="flex items-center gpa-2 justify-between py-2">
                      <p>material</p>
                      <h3 className="text-green50">4 types</h3>
                    </div>
                    <div className="flex items-center gpa-2 justify-between py-2">
                      <p>saving institution</p>
                      <h3 className="text-green50">5mill</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gpa-2 justify-between py-2 sm:w-1/2 2xl:w-2/5">
                <p className="text-green50">P.R. Certificate</p>
                <h3>E12333D2322</h3>
              </div>
              <div className="flex items-center gpa-2 justify-between py-2 sm:w-1/2 2xl:w-2/5">
                <p className="text-green50">Principal Reg. License number</p>
                <div className="flex items-center gap-2">
                  <BsFiles />
                  princeipalDoc.pdf
                </div>
              </div>
            </div>

            <div className=" space-y-4">
              <h2 className="text-N60 font-medium capitalize">
                number of managed enterprise
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                <div className="p-4 rounded-md shadow space-y-4 flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    width={600}
                    height={600}
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium text-green50">Midroc Cement</h2>
                    <p>Sister company</p>
                  </div>
                </div>
                <div className="p-4 rounded-md shadow space-y-4 flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    width={600}
                    height={600}
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium text-green50">Midroc Cement</h2>
                    <p>Sister company</p>
                  </div>
                </div>
                <div className="p-4 rounded-md shadow space-y-4 flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    width={600}
                    height={600}
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium text-green50">Midroc Cement</h2>
                    <p>Sister company</p>
                  </div>
                </div>
                <div className="p-4 rounded-md shadow space-y-4 flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    width={600}
                    height={600}
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium text-green50">Midroc Cement</h2>
                    <p>Sister company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
