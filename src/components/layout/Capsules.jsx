import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import PrimaryDropdown from "../common/PrimaryDropdown";
import CapsuleGrid from "./CapsuleGrid";

const Capsules = () => {
  const [status, setStatus] = useState("active");
  const [type, setType] = useState("Dragon 1.1");
  const [landings, setLandings] = useState(2);
  const [data, setData] = useState([]);

  const fetchCapsules = () => {
    fetch(
      `https://api.spacexdata.com/v3/capsules?status=${status}&landings=${landings}&type=${type}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchCapsules();
  }, []);

  const onSearch = () => {
    fetchCapsules();
  };

  return (
    <div className="layout">
      <h2 className="text-5xl text-center font-bold mb-12 capitalize">
        search your favourite capsules
      </h2>
      <div className="grid grid-cols-4 gap-4 mb-20">
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
          custom="bg-secondary text-primary rounded font-semibold"
        >
          Search
        </Button>
      </div>
      <CapsuleGrid capsules={data} />
    </div>
  );
};

export default Capsules;
