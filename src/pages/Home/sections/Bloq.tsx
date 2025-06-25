import React from "react";
import BloqCard from "../../../components/BloqCard";
import ShowMoreButton from "../../../components/ShowMoreButton";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 1,
    url: "https://www.educompany.az/assets/front/image/articles/df825c19017a780c9a79f429cc3754a3.jpg",
    alt: "Article image 1",
    text: "Rəqəmsal marketing nədir?",
  },
  {
    id: 2,
    url: "https://www.educompany.az/assets/front/image/articles/c122d25456c3696a065b23a8bb3e257b.jpg",
    alt: "Article image 2",
    text: "Niyə ingilis dili öyrənməliyik?",
  },
  {
    id: 3,
    url: "https://www.educompany.az/assets/front/image/articles/df825c19017a780c9a79f429cc3754a3.jpg",
    alt: "Article image 1",
    text: "Rəqəmsal marketing nədir?",
  },
  {
    id: 4,
    url: "https://www.educompany.az/assets/front/image/articles/c122d25456c3696a065b23a8bb3e257b.jpg",
    alt: "Article image 2",
    text: "Niyə ingilis dili öyrənməliyik?",
  },
];

const Bloq = () => {
  const navigate = useNavigate();
  const navigateBloq = () => {
    navigate("/bloq");
  };
  return (
    <div
      className="w-full lg:h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-around items-center gap-8 md:gap-11"
      style={{
        backgroundImage:
          "url('https://www.educompany.az/assets/front/image/blog_bg.webp')",
      }}
    >
      <h1 className="text-white  font-bold text-2xl md:text-5xl ">Bloq</h1>
      <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10">
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
        className="bg-amber-50"
        onClick={navigateBloq}
        text="Bütün məqalələri gör"
      />
    </div>
  );
};

export default Bloq;
