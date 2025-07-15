import React from "react";

interface Props {
    key:number;
    src:string;
    alt:string;
  country: string;
}

const StudyAbroadCard: React.FC<Props> = ({key,src, alt, country }) => {
  return (
    <div className="w-62 h-50 md:w-56 md:h-44  bg-[#4b6043] rounded-[7px] flex flex-col justify-end items-center"   style={{
    boxShadow: "-2px 6px 22px 3px rgba(0,0,0,0.25)"
  }}>
      <div className="w-full h-48 md:h-42 bg-white  transition-all duration-500 rounded-br-sm rounded-bl-sm flex flex-col justify-center items-center gap-2.5">
        <div className="w-34 md:w-30 h-24 md:h-20 overflow-hidden" >
          <img
          className="w-full h-full hover:scale-110"
            key={key}
            src={src}
            alt={alt}
          />
        </div>
        <p className=" text-sm font-medium md:text-[16px]">{country}</p>
      </div>
    </div>
  );
};

export default StudyAbroadCard;
