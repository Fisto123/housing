import React from "react";
import Card from "./Card";
const Discover = () => {
  return (
    <div className=" w-full  h-auto py-10 z-0">
      <h3 className="font-bold text-center text-3xl">
        Discover our best deals
      </h3>
      <p className="font-bold text-center text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
        sollicitudin
      </p>
      <div className="max-w-[1440px] bg-white mx-auto grid lg:grid-cols-3 md:grid-cols-2 text-center p-4 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="  text-center items-center justify-center">
        <button className="border border-blue-500 p-4 px-8 font-bold">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Discover;
