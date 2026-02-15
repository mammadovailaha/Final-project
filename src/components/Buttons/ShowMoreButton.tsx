import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

interface Props{
    text:string;
    className:string;
    onClick:()=>void;
}

const ShowMoreButton:React.FC<Props> = ({text, className, onClick}) => {




  return (
    <div>
      <button onClick={onClick}  className={`${className} group w-43  md:w-2xs h-10 md:h-12 border border-[#4b6043] text-[#4b6043] font-medium text-xs md:text-lg bg-white flex  justify-center items-center gap-1 md:gap-2 rounded-[7px]
        hover:bg-[#4b6043]  hover:text-white transition-all duration-700 ease`}>{text} <FaArrowRight className="text-[#4b6043] group-hover:text-white transition-all duration-700 ease" /></button>
    </div>
  )
}

export default ShowMoreButton
