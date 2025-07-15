
// import { TbBrandWechat } from "react-icons/tb";
// <TbBrandWechat className="mx-auto text-2xl" />

interface chatButtonProps{
    onClick:()=>void,
    isOpen:boolean
}

import type React from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

export const ChatButton:React.FC<chatButtonProps> = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={`fixed z-50 bottom-8 right-8 w-16 h-16 rounded-full shadow-xl transition-all flex items-center justify-center ${
      isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"
    } text-white`}
  >
    {isOpen ? (
      <FaTimes className="text-2xl" />
    ) : (
      <FaCommentDots className="text-2xl" />
    )}
  </button>
);