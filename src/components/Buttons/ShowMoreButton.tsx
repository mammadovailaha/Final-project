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
      <button onClick={onClick}  className={`${className} group w-2xs h-12 border border-[#4b6043] text-[#4b6043] font-medium text-lg bg-white flex  justify-center items-center gap-2 rounded-[7px]
        hover:bg-[#4b6043]  hover:text-white transition-all duration-700 ease`}>{text} <FaArrowRight className="text-[#4b6043] group-hover:text-white transition-all duration-700 ease" /></button>
    </div>
  )
}

export default ShowMoreButton
