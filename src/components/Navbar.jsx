import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#00335A] z-100 fixed top-0  h-20 items-center flex justify-between text-white w-full ">
      <div className=" mx-auto font-bold text-3xl">HOUSEZ</div>
      <div className=" text-center mx-auto px-7 items-center hidden md:flex">
        <ul className="flex gap-8 items-center font-bold uppercase ">
          <li> HOMES</li>
          <li>PROPERTIES</li>
          <li>PROPERTY</li>
          <li>REALTOR</li>
          <li>OTHERS</li>
          <li>07067796826</li>
          <button className="bg-[#17a2b8] text-white text-sm p-2 rounded-lg ">
            CREATE A LISTING{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
