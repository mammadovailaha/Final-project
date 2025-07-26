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
  console.log(data);
  console.log(id);
  return (
    <ScrollAnimation>
      <div className="w-full h-screen flex flex-col justify-start items-center gap-10 p-5">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-[50%] lg:w-[45%] xl:w-[60%] flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl md:text-4xl font-medium">{data?.title}</h2>
          <div className="w-100 xl:w-146 h-70 xl:h-90 rounded-3xl p-5 shadow">
            <img className="w-full h-full object-cover rounded-3xl" src={data?.url} alt={`${data?.title} şəkli`} />
          </div>
        </div>
        <div className="w-[90%] md:w-[50%] lg:w-[55%] xl:w-[40%]">
          <QuickContact title="Sürətli əlaqə" />
        </div>
      </div>
        <div className="w-full">
          <p className="text-sm md:text-base ">{data?.description}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default CourseDetail;
