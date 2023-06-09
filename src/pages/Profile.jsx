import EmployeeCard from "../components/common/EmployeeCard";
import building from "../assets/icons/healthicons_city.png";
import {
  MdInsertLink,
  MdMailOutline,
  MdFax,
  MdPhoneInTalk,
} from "react-icons/md";
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
          <div className="flex flex-col gap-4 2xl:gap-6 w-1/3">
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
          </div>
          <div className="w-2/3 bg-N99/30 rounded-md p-4 2xl:px-6 space-y-4">
            <div className="flex items-center gap-4 justify-between ">
              <h2 className="capitalize font-medium text-N40">
                Main Office Residence
              </h2>
              <button className="text-green50 text-sm bg-green90/30 p-3 rounded-md font-medium capitalize">
                Organization ID: ED5E233A
              </button>
            </div>
            <div className="flex gap-8">
              <div className="w-1/2 space-y-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
