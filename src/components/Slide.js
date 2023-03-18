import React from "react";
const bag2 =
  "https://media.istockphoto.com/id/917299236/photo/3d-rendering-of-modern-cozy-house-in-chalet-style.jpg?s=612x612&w=0&k=20&c=gl6J0vMoruB2FZ40oVTsFswYiTIk92NQ0AU8VApLxEU=";
const Slide = () => {
  return (
    <div className="md:h-screen relative bg-red-700 ">
      <img
        className="absolute w-full h-full items-center "
        style={{
          backgroundImage: `url(${bag2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: " 100% 100%",
        }}
      />
      <h4>hello man</h4>

      <div></div>
    </div>
  );
};
//    style={{
//           backgroundImage: `url(${bag2})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: " 100% 100%",
//         }}

export default Slide;
