import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import QuickRegistration from "../../components/QuickRegistration";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BookOrderModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
const handleDecrement = () => {
  setCount(prev => (prev > 0 ? prev - 1 : 0));
};

  if (!isOpen) return null;

const handleOrder=()=>{
  alert("sifarişiniz qəbul edildi. Sizinlə əlaqə saxlanılacaq.")
}
  return (
    <div className="w-full fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm bg-opacity-50 z-[1002] flex justify-center items-center 	transition-transform duration-300 scale-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[70%] h-[400px] lg:h-[500px]  flex flex-col justify-center items-center gap-5  md:gap-8 mx-4 relative ">
        <div className="w-[90%] h-15 border-b border-gray-400 flex justify-between items-center">
          <p className="text-[16px] md:text-lg font-medium text-[#015715]">
            Sifariş et
          </p>
          <button onClick={onClose}>
            <IoCloseSharp className="text-lg md:text-2xl text-red-600 " />
          </button>
        </div>
        <div className="w-full flex  flex-col md:flex-row justify-around items-center">
          <div className="flex  justify-center items-center gap-4">
            <p className="font-medium font-[averta] text-lg md:text-xl text-[#015715]">Ədəd</p>
            <div className="flex justify-center items-center gap-1 md:gap-2">
              <button
              className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gray-200 flex justify-center items-center"
              onClick={handleDecrement}>
                <CgMathMinus className="text-xs md:text-sm text-black" />
              </button>
              <span className="w-8 md:w-11 h-8 md:h-11 bg-green-200 rounded-full flex justify-center items-center text-xs md:text-sm">{count}</span>
              <button 
              className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gray-200 flex justify-center items-center"
              onClick={handleIncrement}>
                <CgMathPlus  className="text-xs md:text-sm text-black"/>
              </button>
            </div>
          </div>
          <div className="w-[97%] md:w-[55%]">
            <QuickRegistration onClick={handleOrder} text="Sifariş et" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOrderModal;
