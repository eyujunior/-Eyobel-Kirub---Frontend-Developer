import React, { useContext } from "react";
import Button from "../common/Button";
import PrimaryDropdown from "../common/PrimaryDropdown";
import CapsuleGrid from "./CapsuleGrid";
import { CapsuleContext } from "../../context/capsuleContext";
const Capsules = () => {
  const { data, setData, fetchCapsules, setType, setLandings, setStatus } =
    useContext(CapsuleContext);
  const onSearch = () => {
    fetchCapsules();
  };

  return (
    <div className="layout">
      <h2 className="xl:text-5xl text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-12 capitalize">
        search your favourite capsules
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
        <PrimaryDropdown
          onChange={setStatus}
          label="status"
          data={["active", "retired", "unknown"]}
        />
        <PrimaryDropdown
          onChange={setType}
          label="type"
          data={["Dragon 1.0", "Dragon 1.1", "Dragon 2.0"]}
        />
        <PrimaryDropdown
          onChange={setLandings}
          label="landings"
          data={[1, 2, 3]}
        />
        <Button
          handleClick={onSearch}
          custom="bg-secondary py-2 text-primary rounded-sm font-semibold"
        >
          Search
        </Button>
      </div>
      <CapsuleGrid capsules={data} />
    </div>
  );
};

export default Capsules;
