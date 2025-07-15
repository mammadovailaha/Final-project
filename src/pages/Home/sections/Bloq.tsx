import React from "react";
import BloqCard from "../../../components/Cards/BloqCard";
import ShowMoreButton from "../../../components/Buttons/ShowMoreButton";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
    alt: "Article image 1",
    text: "Rəqəmsal marketing nədir?",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/1f/fc/ec/1ffcecc4ad6f9bcf85193ebf87f965bc.jpg",
    alt: "Article image 2",
    text: "Niyə ingilis dili öyrənməliyik?",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
    alt: "Article image 1",
    text: "Rəqəmsal marketing nədir?",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/736x/94/fb/ca/94fbca927b2600b5b2cf72a9b57ac8d5.jpg",
    alt: "Article image 2",
    text: "Niyə alman dili öyrənməliyik?",
  },
];

const Bloq = () => {
  const navigate = useNavigate();
  const navigateBloq = () => {
    navigate("/bloq");
  };
  return (
    <div
      className="w-full lg:h-screen  flex flex-col justify-around items-center gap-8 md:gap-11 overflow-x-hidden"
    >
      {/* <div className="w-[98%] flex justify-center items-center absolute  -z-[999] ">
         <div className="opacity-60 bg-gradient-to-r from-[#bbd4d3] via-[#2acac7] to-[rgb(15,161,62)] w-40 md:w-150 h-40 md:h-150  top-[510%] md:top-[325%] right-0 rounded-full  blur-[100px] rotate-45 "/>
      <div className="opacity-60 bg-gradient-to-r from-[#bbd4d3] via-[#2acac7] to-[#5c896a] w-40 md:w-150 h-40 md:h-150 bottom-0  left-0 top-[700%] md:top-[350%] blur-[100px] rounded-full rotate-45"/>
      </div> */}
        
      <h1 className="text-[#4b6043]  font-bold text-2xl md:text-5xl ">Bloq</h1>
      <div className="w-[90%] flex justify-center items-center flex-wrap gap-6 md:gap-10">
        {cardData.map((card) => (
          <BloqCard
            src={card.url}
            alt={card.alt}
            key={card.id}
            text={card.text}
          />
        ))}
      </div>
      <ShowMoreButton
        className="bg-amber-50 "
        onClick={navigateBloq}
        text="Bütün məqalələri gör"
      />
    </div>
  );
};

export default Bloq;
