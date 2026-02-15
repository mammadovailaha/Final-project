import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import AbroadCard from "./AbroadCard";
import StudyAbroadStastics from "./StudyAbroadStastics";
import StudyAbroadForm from "./StudyAbroadForm";

const abroadData = [
  {
    id: 1,
    title: "Poland",
    image:
      "https://www.educompany.az/assets/front/image/abroad/15ffc49c05dff0346303a5be3c40c8b1.jpg",
    universityLogos: [
      "https://www.educompany.az/assets/front/image/abroad_uni/a37f27331107d768d27867b43072909b.png",
    ],
  },
  {
    id: 2,
    title: "Ukraine",
    image:
      "https://www.educompany.az/assets/front/image/abroad/f3d80a50841140cf3a2bd6730c41d828.jpg",
    universityLogos: [
      "	https://www.educompany.az/assets/front/image/abroad_uni/8b11c223bfa1fc643f61f227a1cdbd18.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/7fa50b2225b99038f5597c5ed1e6c823.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/394bb6dfd7d0ac5c0db4d65af57141fa.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/94dd1ba5dd6a600a3ab33705a08bc537.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/0117483ce7b9c3d1d3deda5d14beb3a1.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/5632d0cff2ccd7050192133cc160fc81.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/e97d831cd447af6e1ace6876e7f6d163.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/550e31f7a4ee1e20d90bc15bb914bc62.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/f4b61f70f19361ff503879154500828e.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/960edbac23b7072b8651be4a179b0403.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/afc02a68cfa06116a2835dc4f68a71ed.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/d18367b4e691dc59da220c7373fda6c0.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/d86863ca1bf8a87121cd64df67e2f40c.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/e0c3b48734c25b9a29d697173dd4139e.png"
    ],
  },
  {
    id: 3,
    title: "Turkey",
    image:
      "https://www.educompany.az/assets/front/image/abroad/0bbc554969beb8e99fd93b14410bf755.jpg",
    universityLogos: [
      "https://www.educompany.az/assets/front/image/abroad_uni/c081baaacdfeeb7e89ccaf6c5c7753bb.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/e85b7e1166475244f34ddf5536f3f382.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/bbf17083d6e9eac93e5bfd80c85c3a59.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/87c0a7101984e1f085e5ee992e1c8505.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/737fb19ed3ecdd0fbf08379c512f5d2f.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/84b7aedab7052412b7bd2532994de4cd.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/a6ab0fda4653c5a0a4c8d059e24a7808.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/2018261b9cbc6b7ad970d7e0cad23b75.png",
      "	https://www.educompany.az/assets/front/image/abroad_uni/e146ed1647d3354365254ca02e481342.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/506b6d6c742f6b8ba2b45061ba4587dd.png",
      "https://www.educompany.az/assets/front/image/abroad_uni/948e5b49f6a692eb2e58346172e7ac81.png",
    ],
  },
];


const StudyAbroad: FC = () => {
const navigate=useNavigate();
  return (
    <div className="w-full h-auto flex flex-col justify-around items-center gap-10 pt-5">
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {abroadData.map((item) => (
          <AbroadCard 
          id={item.id}
          onClick={() => navigate(`/study-abroad/country-detail/${item.id}`)}
          key={item.id} imgUrl={item.image} country={item.title} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center"><StudyAbroadStastics/></div>
      <div className="w-[90%] md:w-[60%] flex justify-center items-center"><StudyAbroadForm/></div>
    </div>
  );
};

export default StudyAbroad;
