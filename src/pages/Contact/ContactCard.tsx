import React from "react";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import SosialMedia from "../../components/SosialMedia";
import MoreInfoButton from "../../components/MoreInfoButton";


interface ContactCardProps {
  name: string;
  phone1: string;
  phone2: string;
  key: number;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  phone1,
  phone2,
  key,
  onClick,
}) => {

 

  return (
    <div
      key={key}
      className="w-80  h-78 flex flex-col justify-around items-center gap-1  bg-[#fcfcfc] p-4  shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative"
    >
      <div className="w-full h-14 flex items-center justify-between gap-2 bg-white shadow-xl ">
        <div className="w-30 h-30 rounded-full bg-white flex items-center justify-center shadow-md absolute top-[-20px] left-[-20px] ">
          <FaBuildingColumns className=" text-5xl text-[#1eb2a6]" />
        </div>
        <p className="text-[#1eb2a6] absolute left-32 text-lg font-bold">{name}</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-[#1eb2a6]" />
          <p className="text-[#1eb2a6]">{phone1}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-[#1eb2a6]" />
          <p className="text-[#1eb2a6]">{phone2}</p>
        </div>
        <SosialMedia />
        <MoreInfoButton
        onClick={onClick}
          text="Ətraflı"
          className="w-35 md:w-40 h-10 md:h-12 border bg-white outline-none border-[#22caba] text-[#22caba] text-sm  md:text-lg rounded-[5px] hover:bg-[#22caba] hover:text-white transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default ContactCard;
