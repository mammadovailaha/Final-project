import type React from "react";
import { RiChatSmileAiLine } from "react-icons/ri";
import { PiChatCircleSlash } from "react-icons/pi";


interface chatButtonProps{
    onClick:()=>void,
    isOpen:boolean
}




export const ChatButton:React.FC<chatButtonProps> = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={`fixed z-[1001] bottom-8 right-8 w-12 h-12 md:w-16 md:h-16 rounded-full shadow-xl transition-all flex items-center justify-center ${
      isOpen ? "bg-red-600 hover:bg-red-700" : "bg-[#576d4ff2] hover:bg-[#424a3ff2]"
    } text-white`}
  >
    {isOpen ? (
     <PiChatCircleSlash  className="text-2xl md:text-4xl"/>
    ) : (
     <RiChatSmileAiLine  className="mx-auto text-2xl md:text-4xl"/>
    )}
  </button>
);