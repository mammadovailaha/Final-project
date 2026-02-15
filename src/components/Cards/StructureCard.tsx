import React from "react";
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from "react-icons/im";

interface Props {
  key: number;
  src: string;
  alt: string;
  fullName: string;
  role: string;
  path: string;
  onClick:()=>void;
}

const StructureCard: React.FC<Props> = ({
  key,
  src,
  alt,
  fullName,
  role,
  path,
  onClick,
}) => {
  return (
    <div onClick={onClick} key={key} className="w-76 h-66 md:w-110 md:h-90 bg-gray-100 rounded-lg border border-gray-300 shadow-lg  group group-hover:mt-2 transition-all duration-500 ease-in-out">
      <div className="w-full h- full flex flex-col justify-center items-center gap-5 md:gap-7">
        <div style={{padding:"10px"}} className="w-full h-40 md:h-60 rounded-lg">
          <img 
          className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition duration-300"
          src={src} 
          alt={alt} />
        </div>
       <div className="w-[80%] flex justify-between items-center">
         <div className="flex flex-col justify-center items-start">
          <h3 className="text-base md:text-xl leading-4 md:leading-6 font-bold  ">{fullName}</h3>
          <p className="text-black  text-xs md:text-base">{role}</p>
        </div> 
       <Link to={path}>
        <div className="w-10 h-10 rounded-full bg-[#4f813b] flex justify-center items-center"><ImArrowUpRight2 className="text-white text-2xl" /></div>
       </Link>
       
       </div>
      </div>
    </div>
  );
};

export default StructureCard;
