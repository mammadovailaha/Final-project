import type { FC } from "react";
import AbroadCard from "./AbroadCard";
import StudyAbroadStastics from "./StudyAbroadStastics";
import StudyAbroadForm from "./StudyAbroadForm";

const abroadData = [
  {
    id: 1,
    title: "Poland",
    image:
      "https://www.educompany.az/assets/front/image/abroad/15ffc49c05dff0346303a5be3c40c8b1.jpg",
  },
  {
    id: 2,
    title: "Ukraine",
    image:
      "https://www.educompany.az/assets/front/image/abroad/f3d80a50841140cf3a2bd6730c41d828.jpg",
  },
  {
    id: 3,
    title: "Turkey",
    image:
      "https://www.educompany.az/assets/front/image/abroad/0bbc554969beb8e99fd93b14410bf755.jpg",
  },
];

const StudyAbroad: FC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-around items-center gap-10 pt-5">
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {abroadData.map((item) => (
          <AbroadCard key={item.id} imgUrl={item.image} country={item.title} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center"><StudyAbroadStastics/></div>
      <div className="w-[60%] flex justify-center items-center"><StudyAbroadForm/></div>
    </div>
  );
};

export default StudyAbroad;
