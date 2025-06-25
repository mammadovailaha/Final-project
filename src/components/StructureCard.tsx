import React from "react";
import { Link } from "react-router-dom";

interface Props {
  key: number;
  src: string;
  alt: string;
  fullName: string;
  role: string;
  path: string;
}

const StructureCard: React.FC<Props> = ({
  key,
  src,
  alt,
  fullName,
  role,
  path,
}) => {
  return (
    <div key={key} className="w-40 h-64 md:w-66 md:h-80 bg-white hover:bg-[#1EB2A6] group transition-all duration-500 ease-in-out">
      <Link to={path}  className="w-full h- full flex flex-col justify-center items-center gap-10">
        <div className="w-full h-32 md:h-40">
          <img 
          className="w-full h-full object-cover"
          src={src} 
          alt={alt} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg md:text-xl text-center leading-4 md:leading-6 font-medium font-[averta] group-hover:text-white transition-all duration-500 ease-in-out">{fullName}</h3>
          <p className="text-[#1EB2A6] group-hover:text-white text-sm md:text-[16px] font-[averta] text-center transition-all duration-500 ease-in-out">{role}</p>
        </div> 
      </Link>
    </div>
  );
};

export default StructureCard;
