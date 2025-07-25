import React from "react";

interface Props {
  key: number;
  src: string;
  title: string;
  onClick: () => void;
}
const ServicesCard: React.FC<Props> = ({ key, src,  title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="lg:w-85 lg:h-50 w-54 h-28 cursor-pointer rounded-lg shadow"
    >
      <div className="relative bg-gray-100 rounded-lg overflow-hidden p-2.5 w-full h-full">
        <div className="absolute inset-0 bg-[#0000004b] z-0  " />
        <img
          className="w-full h-full object-cover rounded-lg
              hover:scale-110 transition-all duration-500"
          key={key}
          src={src}
          alt={`${title} şəkli`}
        />
        <p className="w-[65%] text-sm lg:text-base font-medium absolute z-10 text-white top-[45%] lg:top-[50%]  left-[19%] lg:left-[21%] text-center">{title}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
