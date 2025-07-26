import type { FC } from "react";
import ServicesCard from "../../components/Cards/ServicesCard";
import { useNavigate } from "react-router-dom";
const coursesData = [
  {
    id: 1,
    title: "Şahmat Kursları",
    description:
      "Şahmat strateji düşüncə, problem həll etmə və analitik bacarıqları inkişaf etdirən bir oyundur. Uşaqlar və böyüklər üçün yararlıdır, diqqət, səbr və planlama qabiliyyətini gücləndirir.",
    url: "https://www.educompany.az/assets/front/image/course/4cf4e11c876789ecf272eadb281ef9a1.jpg",
  },
  {
    id: 2,
    title: "İngilis Dili Kursları",
    description:
      "İngilis dili beynəlxalq ünsiyyət dilidir. Bu kurs dinləmə, danışıq, oxuma və yazma bacarıqlarını inkişaf etdirmək üçün nəzərdə tutulub və həm akademik, həm də peşəkar üstünlüklər yaradır.",
    url: "https://i.pinimg.com/736x/c2/98/c1/c298c13859ab4163ba7843438eefd384.jpg",
  },
  {
    id: 3,
    title: "Robototexnika Kursları",
    description:
      "Robototexnika kursları uşaqlara texnologiya ilə işləməyi, robot qurmağı və proqramlaşdırmağı öyrədir. Bu sahə yaradıcılığı və texniki bacarıqları birləşdirir.",
    url: "https://i.pinimg.com/736x/c2/98/c1/c298c13859ab4163ba7843438eefd384.jpg",
  },
];

const Services: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center gap-10 p-5">
      <h2 className="text-2xl md:text-4xl font-medium">Xidmətlərimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-5">
        {coursesData.map((data) => (
          <ServicesCard
            key={data.id}
            src={data.url}
            title={data.title}
            onClick={()=>navigate(`/course/course-detail/${data.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
