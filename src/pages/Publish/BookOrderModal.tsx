import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import QuickRegistration from "../../components/QuickRegistration";

interface Props{
    isOpen:boolean;
    onClose:() => void;
 
}

const BookOrderModal:React.FC<Props> = ({ isOpen, onClose }) => {
    if(!isOpen) return null;
  return (
    <div className="w-full fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm bg-opacity-50 z-[1002] flex justify-center items-center 	transition-transform duration-300 scale-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[70%] flex flex-col justify-center items-center  gap-8 mx-4 relative">
          <div className="w-[90%] h-15 border-b border-gray-400 flex justify-between items-center">
        <p className="text-[16px] md:text-lg font-medium text-[#015715]">Sifariş et</p>
        <button  
        onClick={onClose} >
          <IoCloseSharp  className="text-lg md:text-2xl text-red-600 "/>
        </button>
      </div>
      <div className="w-full flex justify-around items-center">
        <div className="flex justify-center items-center gap-2">
          <p>Ədəd</p>
          <div className="flex justify-center items-center gap-1">
            <CgMathMinus />
            <span>0</span> <CgMathPlus />
          </div>
        </div>
        <div className="w-[55%] ">
            <QuickRegistration text="Sifariş et"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookOrderModal;
