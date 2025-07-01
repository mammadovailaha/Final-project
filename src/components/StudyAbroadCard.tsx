import React from "react";

interface Props {
    key:number;
    src:string;
    alt:string;
  country: string;
}

const StudyAbroadCard: React.FC<Props> = ({key,src, alt, country }) => {
  return (
    <div className="w-62 h-50 md:w-56 md:h-44  bg-[#DB133C] rounded-[7px] flex flex-col justify-end items-center"   style={{
    boxShadow: "-2px 6px 22px 3px rgba(0,0,0,0.25)"
  }}>
      <div className="w-full h-48 md:h-42 bg-white group hover:bg-[#22C8BA] transition-all duration-500 rounded-br-sm rounded-bl-sm flex flex-col justify-center items-center gap-2.5">
        <div className="w-34 md:w-30 h-24 md:h-20" >
          <img
          className="w-full h-full"
            key={key}
            src={src}
            alt={alt}
          />
        </div>
        <p className="group-hover:text-white text-sm md:text-[16px]">{country}</p>
      </div>
    </div>
  );
};

export default StudyAbroadCard;
