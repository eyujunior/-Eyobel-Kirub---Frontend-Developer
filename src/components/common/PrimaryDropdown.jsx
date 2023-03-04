import React, { useState } from "react";

const PrimaryDropdown = ({ label, id, data, onChange, error }) => {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(label);

  const changeSelected = (value) => {
    setSelected(value);
    onChange(value);
  };
  return (
    <>
      <button
        onClick={() => setShowList((prev) => !prev)}
        onBlur={() => setShowList(false)}
        id={id}
        data-dropdown-toggle="dropdown"
        className="text-slate-800 bg-N99/50 border-0 border-b shadow-sm bg-slate-100 border-gray-300  focus:outline-none rounded-sm text-sm px-4 py-4 text-center flex items-center relative gap-2 capitalize group"
        type="button"
      >
        {selected}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <div
          id="dropdown"
          className={`z-[1000] bg-white  absolute top-full left-0 py-2 pb-0 rounded shadow w-full ${
            showList ? " visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <ul
            className=" text-sm text-left max-h-[10rem] overflow-y-auto"
            aria-labelledby="dropdownDefaultButton"
          >
            {data.map((item) => (
              <li key={item} onClick={() => changeSelected(item)}>
                <p className="block border-b border-b-N99/5 px-4 py-1.5">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </>
  );
};

export default PrimaryDropdown;
