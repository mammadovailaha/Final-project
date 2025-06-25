import React from "react";
import { Link } from "react-router-dom";
import MoreInfoButton from "./MoreInfoButton";
interface Props {
  key: number;
  src: string;
  alt: string;
  title: string;
  text: string;
  path: string;
}

const BrandsCard: React.FC<Props> = ({ src, alt, key, title, text, path }) => {
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
    <div key={key} className="w-60 md:w-82 h-92 md:h-110 flex flex-col justify-center items-center gap-2 md:gap-4 bg-white">
      <div className="w-full h-60 md:72">
        <img src={src} alt={alt} className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-center gap-1.5 md:gap-3">
        <h3 className=" text-[16px] md:text-lg leading-3 md:leading-4">{title}</h3>
        <p className="text-center text-sm md:text-[16px] leading-3.5 md:leading-4">{firstSentence}</p>
      </div>
      <Link to={path}>
        <MoreInfoButton className="w-20 md:w-28 h-6 md:h-9 outline-none bg-[#22caba] text-white text-sm  md:text-lg rounded-[5px] hover:bg-[#734884]  transition-all duration-500" />
      </Link>
    </div>
  );
};

export default BrandsCard;
