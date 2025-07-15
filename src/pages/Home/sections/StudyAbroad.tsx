import { FaEye } from "react-icons/fa";
import StudyAbroadCard from "../../../components/Cards/StudyAbroadCard";

const imageData = [
  {
    id: 1,
    url: "https://www.educompany.az/assets/front/image/abroad/5396e84a2423afd0dc6aa0b5bfd3cd30.png",
    alt: "EduCompany abroad image",
    country: "Polsa",
  },
  {
    id: 2,
    url: "https://www.educompany.az/assets/front/image/abroad/b4da94422a62982245e2400da55128be.png",
    alt: "EduCompany abroad image",
    country: "Polsa",
  },
  {
    id: 3,
    url: "https://www.educompany.az/assets/front/image/abroad/5396e84a2423afd0dc6aa0b5bfd3cd30.png",
    alt: "EduCompany abroad image",
    country: "Polsa",
  },
];

const StudyAbroad = () => {
  return (
    <div className="w-full md:h-screen flex flex-col justify-center items-center gap-5 md:gap-10 ">
      <div className=" w-full flex justify-around items-center">
        <p className="font-bold text-lg md:text-3xl">Bu ölkələrdə təhsil ala bilərsən!</p>
        <button className="w-22 md:w-34 h-7 md:h-10  text-black rounded-[7px] flex justify-center items-center  gap-1 md:gap-1.5 text-[10px] md:text-sm  transition-all duration-700 shadow-lg">
          <FaEye className="w-3.5 h-3 text-black" />
          Hamısına bax
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 ">
        {imageData.map((img) => (
          <StudyAbroadCard 
            key={img.id}
            src={img.url}
            alt={img.alt}
            country={img.country}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyAbroad;
