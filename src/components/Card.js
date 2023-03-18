import React from "react";
import img1 from "./img/house.webp";

const Card = () => {
  return (
    <div>
      <div className="w-full shadow-lg ">
        <div className="relative">
          <img src={img1} alt="" />
          <div className="absolute top-[0%] left-0 right-0 flex  justify-between m-3">
            <div className="bg-black text-white p-2 rounded-lg ">featured</div>
            <div className="bg-green-500 text-white p-2 rounded-lg">
              For rent
            </div>
          </div>
        </div>
        <div className="flex flex-col m-4">
          <h3 className="text-start font-bold ">Light and Modern Apartment</h3>
          <div className="flex justify-between font-bold">
            <h3>$4500/mo</h3>
            <div className="flex gap-2 font-bold">
              <h3>likes</h3>
              <h3>likes</h3>
              <h3>likes</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
