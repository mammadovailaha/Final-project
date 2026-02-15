import React from "react";
import MoreInfoButton from "../Buttons/MoreInfoButton";

interface Props {
  key: number;
  src: string;
  alt: string;
  title: string;
  text: string;
onClick?: () => void; 
}

const BrandsCard: React.FC<Props> = ({ src, alt, key, title, text, onClick }) => {
  const getFirstSentenceWithDots = (text: string): string => {
    const match = text.match(/.*?[.!?,](\s|$)/);
    const firstPart = match ? match[0] : text;


    if (firstPart.length < text.length) {
      return firstPart.trim() + " ...";
    }

    return firstPart;
  };
  const firstSentence = getFirstSentenceWithDots(text);
  return (
    <div key={key} className="w-60 md:w-82 h-92 md:h-110 flex flex-col justify-center items-center gap-2 md:gap-4 bg-white shadow rounded-lg">
      <div className="w-[90%] h-60 md:72 rounded-lg overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full rounded-lg hover:scale-110 transition-all duration-700" />
      </div>
      <div className="flex flex-col justify-center items-center gap-1.5 md:gap-3">
        <h3 className=" text-base font-medium md:text-lg leading-3 md:leading-4">{title}</h3>
        <p className="text-center text-sm md:text-base leading-3.5 md:leading-4">{firstSentence}</p>
      </div>
   
        <MoreInfoButton onClick={onClick} text="Daha ətraflı" className="w-20 md:w-28 h-6 md:h-9 outline-none  text-white text-sm  md:text-lg rounded-[5px] bg-[linear-gradient(to_right,_#4b6043,_#f6e9d9)] bg-[length:200%_100%] bg-[position:left] shadow hover:bg-[position:right] transition-[background-position]  duration-1000 ease-in-out" />
    
    </div>
  );
};

export default BrandsCard;
