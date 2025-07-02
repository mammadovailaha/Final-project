import React from "react";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`w-78 sm:w-134 md:min-w-2xl p-5 flex flex-col items-center bg-[#c8edf8] rounded-2xl md:rounded-3xl ${
        isOpen ? "h-auto min-h-35 justify-start" : "h-12 md:h-18 justify-center"
      }`}
    >
      <div
        onClick={() => onToggle(id)}
        className={`w-full flex justify-center items-center rounded-3xl ${
          isOpen ? "h-10 md:h-18 bg-[#b0d8f0]" : "h-full bg-[#c8edf8]"
        } p-4 cursor-pointer transition-colors duration-700 ease-in-out`}
      >
        <div className="w-[95%] h-full flex justify-between items-center">
          <p className=" text-xs md:text-[16px] text-wrap ">{question}</p>
          <div className="cursor-pointer text-2xl text-[#015715] hover:text-[#22caba] transition-colors duration-700 ease-in-out">
            {isOpen ? <IoIosRemoveCircleOutline className="text-lg md:text-2xl" /> : <IoIosAddCircleOutline className="text-lg md:text-2xl" />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-full flex justify-center items-center px-5 py-4 text-[#015715] transition-all duration-700 ease-in-out">
          <p className="text-xs leading-6 md:text-sm w-[95%]  whitespace-pre-line text-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
