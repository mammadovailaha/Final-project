import { FaEye } from "react-icons/fa";
import StudyAbroadCard from "../../../components/Cards/StudyAbroadCard";
import { useGetAllCountriesQuery } from "../../../services/features/country";

// const imageData = [
//   {
//     id: 1,
//     url: "https://www.educompany.az/assets/front/image/abroad/5396e84a2423afd0dc6aa0b5bfd3cd30.png",
//     alt: "EduCompany abroad image",
//     country: "Polsa",
//   },
//   {
//     id: 2,
//     url: "https://www.educompany.az/assets/front/image/abroad/b4da94422a62982245e2400da55128be.png",
//     alt: "EduCompany abroad image",
//     country: "Polsa",
//   },
//   {
//     id: 3,
//     url: "https://www.educompany.az/assets/front/image/abroad/5396e84a2423afd0dc6aa0b5bfd3cd30.png",
//     alt: "EduCompany abroad image",
//     country: "Polsa",
//   },
// ];


interface Country {
  _id: number;
  image: string;
  title: string;
}

const StudyAbroad = () => {
  const {data:country, error, isLoading} = useGetAllCountriesQuery();
  console.log(country);
  const imageData: Country[] = country || [];
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div className="w-full md:h-screen flex flex-col justify-center items-center gap-5 md:gap-10 ">
      <div className=" w-full flex justify-around items-center">
        <p className="font-bold text-base md:text-3xl">Bu ölkələrdə təhsil ala bilərsən!</p>
        <button className="w-20 md:w-34 h-7 md:h-10 px-0.5   text-black rounded-[7px] flex justify-center items-center  gap-0.5 md:gap-1.5 text-[10px] md:text-sm  transition-all duration-700 shadow-lg">
          <FaEye className="text-xs md:text-sm text-black" />
          Hamısına bax
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 ">
        {imageData.map((img) => (
          <StudyAbroadCard 
            key={img._id}
            src={img.image}
            alt={img.title}
            country={img.title}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyAbroad;
