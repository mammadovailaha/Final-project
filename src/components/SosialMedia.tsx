import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

const SosialMedia = () => {
  return (
    <div className="flex justify-center gap-1">
      <div className="w-10 h-10 flex justify-center items-center rounded-[100%] text-2xl">
          <FaFacebook className="text-[#4b6043] text-6" />
      </div>
    
      <div className="w-10 h-10 flex justify-center items-center rounded-[100%] text-2xl">
        <TfiYoutube className="text-[#4b6043]" />
      </div>
      <div className="w-10 h-10 flex justify-center items-center rounded-[100%] text-2xl">
        <FaInstagram className="text-[#4b6043] text-2xl" />
      </div>
    </div>
  );
};
    

export default SosialMedia;
