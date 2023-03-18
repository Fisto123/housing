import React from "react";
import {
  FaFacebookF,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-green-400 md:h-[30vh] ">
      <div className="text-center mx-auto items-center  max-w-[500px]">
        <ul className="flex gap-3 text-center items-center px-9 py-6">
          <div className="flex flex-row gap-2 text-white">
            <FaFacebookF size={20} />
            <li>Facebook</li>
          </div>
          <div className="flex flex-row gap-2 text-white">
            <FaGithubSquare size={20} />
            <li>Github</li>
          </div>
          <div className="flex flex-row gap-2 text-white">
            <FaInstagram size={20} />
            <li>Instagram</li>
          </div>
          <div className="flex flex-row gap-2 text-white">
            <FaTwitterSquare size={20} />
            <li>Twitter</li>
          </div>
          <div className="flex flex-row gap-2 text-white">
            <FaDribbbleSquare size={20} />
            <li>Dribble</li>
          </div>
        </ul>
        <div className="text-white text-3xl font-bold py-3">HOUSEZ</div>
        <p className="text-white text-2xl font-bold py-3">
          © Houzez - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
