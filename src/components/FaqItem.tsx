import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`max-w-lg md:min-w-3xl flex flex-col items-center  bg-[#c8edf8] ${isOpen ? "h-20 md:h-30 justify-start " : "h-10 md:h-20 justify-center"}`}>
      <div
        onClick={toggleOpen}
        className={`w-[97%] flex justify-between items-center ${isOpen? "h-5 md:h-8 bg-[#b0d8f0]": "h-full bg-[#c8edf8]"} p-4 cursor-pointer transition-colors duration-300`}>
        <p>{question}</p>
        <div className="cursor-pointer text-2xl text-[#015715] hover:text-[#22caba] transition-colors duration-300">
          {isOpen ? <IoIosRemoveCircleOutline /> : <IoIosAddCircleOutline />}
        </div>
      </div>
      {isOpen && (
        <div className="">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
