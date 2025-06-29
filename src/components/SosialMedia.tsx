import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

const SosialMedia = () => {
  return (
    <div className="flex justify-center gap-1">
      <FaFacebook className="text-[#1EB2A6] text-[40px]" />
      <div className="w-10 h-10 bg-[#1EB2A6] flex justify-center items-center rounded-[100%] text-2xl">
        <TfiYoutube className="text-white" />
      </div>
      <div className="w-10 h-10 bg-[#1EB2A6] flex justify-center items-center rounded-[100%] text-2xl">
        <FaInstagram className="text-white text-2xl" />
      </div>
    </div>
  );
};
    

export default SosialMedia;
