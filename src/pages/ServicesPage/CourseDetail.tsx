import { useParams } from "react-router-dom";
import ScrollAnimation from "../../components/ScrollAnimation";
import QuickContact from "../Auth/QuickContact";

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

const CourseDetail = () => {
  const { id } = useParams();
  const data = coursesData.find((item) => item.id === Number(id));

  return (
    <ScrollAnimation>
      <div>
        <div>
          <h2>{data?.title}</h2>
          <div>
            <img src={data?.url} alt={`${data?.title} şəkli`} />
          </div>
        </div>
        <div>
          <QuickContact title="Sürətli əlaqə" />
        </div>
        <div>{data?.description}</div>
      </div>
    </ScrollAnimation>
  );
};

export default CourseDetail;
