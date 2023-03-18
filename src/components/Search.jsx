import React from "react";

const Search = () => {
  return (
    <div className="text-black">
      <div className="mt-[80px] w-full bg-white  justify-between gap-2 hidden lg:flex">
        <div className=" w-full px-8 py-2 mx-auto items-center  text-center">
          <input
            className="border w-[250px] py-3 p-2"
            type="text"
            placeholder="Search for housing"
          />
        </div>
        <div className="w-full hidden md:block items-center text-center">
          <ul className="flex gap-12 items-center text-center justify-start py-2 px-2 font-bold ">
            <li className="border px-3 p-3 shadow-xl">Status</li>
            <li className="border px-3 p-3 shadow-xl">Beds</li>
            <li className="border px-3 p-3 shadow-xl">Birth</li>
            <li className="border px-3 p-3 shadow-xl">Price</li>
            <li className="border px-3 p-3 shadow-xl">Advanced</li>
            <button className="bg-red-400 px-5 p-3 text-white rounded-md">
              search
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
