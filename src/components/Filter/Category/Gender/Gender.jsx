import React, { useState, useContext } from "react";
import { ApiContext } from "../../../../context/Apicontext";

const Gender = () => {
  const { setPage, setGender, setMoreCharacters } = useContext(ApiContext);
  const [IsActivate, setIsActivate] = useState(false);
  const [selected, setSelected] = useState("Gender");
  let gendersList = ["female", "male", "genderless", "unknown"];

  return (
    <div className="dropdown w-64">
      <button
        onClick={(e) => setIsActivate(!IsActivate)}
        type="button"
        className="dropdown-btn inline-flex w-full justify-center rounded-md border border-gray-300 bg-white h-16 items-center px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        {selected}
        <svg
          className="-mr-1 ml-28 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fillRule="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {IsActivate && (
        <ul className="dropdown-content absolute  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {gendersList.map((stat, index) => {
            return (
              <li
                onClick={(e) => {
                  setPage(1);
                  setGender(stat);
                  setMoreCharacters(8);
                  setIsActivate(false);
                  setSelected(stat);
                }}
                className="dropdown-item text-gray-700 block px-4 py-2 text-sm active:bg-gray-100 text-gray-900 font-bold hover:bg-gray-100 text-gray-900"
                key={index}
              >
                {stat}
              </li>
            );
          })}
          <li
            onClick={() => {
              setPage(1);
              setGender("");
              setMoreCharacters(8);
              setIsActivate(false);
              setSelected("Gender");
            }}
            className="dropdown-item text-gray-700 block px-4 py-2 text-sm active:bg-gray-100 text-gray-900 font-bold hover:bg-gray-100 text-gray-900"
          >
            Clear filter
          </li>
        </ul>
      )}
    </div>
  );
};

export default Gender;
