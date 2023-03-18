import React from "react";

const Meet = () => {
  return (
    <div className="md:h-screen bg-white-600 w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col py-14">
          <h2 className="text-3xl font-bold">Meet Our Real Estate Agents</h2>
          <p className="text-md font-bold text-gray-160 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            sollicitudin
          </p>
        </div>
        <div className="h-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center p-2">
          <div className="shadow-lg h-[50vh] py-10">
            <img
              className="w-20 h-20 border rounded-full items-center mx-auto "
              src="./img/aisha.jpeg"
              alt="img"
            />
            <div className="flex flex-col text-center">
              <h4 className="py-3 font-medium">Brittany Watkins</h4>
              <p className="w-[175px] font-bold text-center items-center mx-auto">
                Company Agent , All American Real Estate
              </p>
              <p className="w-[225px] py-5 font-bold text-center items-center mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
              <button className="text-blue-600 font-bold">View Profile</button>
            </div>
          </div>
          <div className="shadow-lg h-[50vh] py-10">
            <img
              className="w-20 h-20 border rounded-full items-center mx-auto "
              src="./img/saliba.jpg"
              alt="img"
            />
            <div className="flex flex-col text-center">
              <h4 className="py-3 font-medium">Brittany Watkins</h4>
              <p className="w-[175px] font-bold text-center items-center mx-auto">
                Company Agent , All American Real Estate
              </p>
              <p className="w-[225px] py-5 font-bold text-center items-center mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
              <button className="text-blue-600 font-bold">View Profile</button>
            </div>
          </div>
          <div className="shadow-lg h-[50vh] py-10">
            <img
              className="w-20 h-20 border rounded-full items-center mx-auto "
              src="./img/messi9.jpg"
              alt="img"
            />
            <div className="flex flex-col text-center">
              <h4 className="py-3 font-medium">Brittany Watkins</h4>
              <p className="w-[175px] font-bold text-center items-center mx-auto">
                Company Agent , All American Real Estate
              </p>
              <p className="w-[225px] py-5 font-bold text-center items-center mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
              <button className="text-blue-600 font-bold">View Profile</button>
            </div>
          </div>
          <div className="shadow-lg h-[50vh] py-10">
            <img
              className="w-20 h-20 border rounded-full items-center mx-auto "
              src="./img/oyefade.jpeg"
              alt="img"
            />
            <div className="flex flex-col text-center">
              <h4 className="py-3 font-medium">Brittany Watkins</h4>
              <p className="w-[175px] font-bold text-center items-center mx-auto">
                Company Agent , All American Real Estate
              </p>
              <p className="w-[225px] py-5 font-bold text-center items-center mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...{" "}
              </p>
              <button className="text-blue-600 font-bold">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
