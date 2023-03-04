import { createContext, useEffect, useState } from "react";

export const CapsuleContext = createContext();

export const CapsuleProvider = ({ initialTheme, children }) => {
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

  return (
    <CapsuleContext.Provider
      value={{
        data,
        setData,
        type,
        setType,
        status,
        setStatus,
        landings,
        setLandings,
        fetchCapsules,
      }}
    >
      {children}
    </CapsuleContext.Provider>
  );
};
