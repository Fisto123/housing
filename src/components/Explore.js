import React from "react";

const Explore = () => {
  return (
    <div className="bg-white-600 h-full p-4 mt-10 w-full">
      <div className="max-w-[1440px] mx-auto h-auto ">
        <div className="mx-auto items-center">
          <h2 className="text-center  font-bolder text-2xl items-center">
            Explore Our Properties
          </h2>
          <p className="text-center  font-bolder text-2xl items-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            sollicitudin
          </p>
        </div>
        <div className=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 items-center m-auto text-center gap-2 ">
          <div className="relative h-full mx-auto">
            <img className="h-[40vh]" src="./img/house.webp" alt="" />
            <div className="flex flex-col absolute top-[20%] left-[10%] text-white">
              <h3>17th property</h3>
              <p>Apartment</p>
            </div>
            <div className="absolute bottom-[0%] text-center mx-auto text-black font-bold items-center left-[10%] uppercase">
              More details
            </div>
          </div>
          <div className="relative h-full mx-auto">
            <img className="h-[40vh]" src="./img/house.webp" alt="" />
            <div className="flex flex-col absolute top-[20%] left-[10%] text-white">
              <h3>17th property</h3>
              <p>Apartment</p>
            </div>
            <div className="absolute bottom-[0%] text-center mx-auto text-black font-bold items-center left-[10%] uppercase">
              More details
            </div>
          </div>
          <div className="relative h-full mx-auto">
            <img className="h-[40vh]" src="./img/house.webp" alt="" />
            <div className="flex flex-col absolute top-[20%] left-[10%] text-white">
              <h3>17th property</h3>
              <p>Apartment</p>
            </div>
            <div className="absolute bottom-[0%] text-center mx-auto text-black font-bold items-center left-[10%] uppercase">
              More details
            </div>
          </div>
          <div className="relative h-full mx-auto">
            <img className="h-[40vh]" src="./img/house.webp" alt="" />
            <div className="flex flex-col absolute top-[20%] left-[10%] text-white">
              <h3>17th property</h3>
              <p>Apartment</p>
            </div>
            <div className="absolute bottom-[0%] text-center mx-auto text-black font-bold items-center left-[10%] uppercase">
              More details
            </div>
          </div>
          <div className="relative h-full mx-auto">
            <img className="h-[40vh]" src="./img/house.webp" alt="" />
            <div className="flex flex-col absolute top-[20%] left-[10%] text-white">
              <h3>17th property</h3>
              <p>Apartment</p>
            </div>
            <div className="absolute bottom-[0%] text-center mx-auto text-black font-bold items-center left-[10%] uppercase">
              More details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
