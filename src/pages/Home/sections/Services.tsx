import { useInView } from "react-intersection-observer";
import ShowMoreButton from "../../../components/Buttons/ShowMoreButton";
import { useNavigate } from "react-router-dom";
import ServicesCard from "../../../components/Cards/ServicesCard";

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


const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const navigate = useNavigate();
  const navigateServices = () => {
    navigate("/course");
  };
  return (
    <div className="w-full md:h-screen  flex flex-col justify-center items-center gap-7 ">
      <h1 className="text-2xl lg:text-[40px] font-medium  text-black">Xidmətlərimiz</h1>
      <div className="flex justify-center items-center">
        <div
          ref={ref}
          className={`w-full  grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-2 md:gap-4 transition-all duration-1500 ease
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"}`}
        >
          {coursesData.map((image) => (
            <ServicesCard title={image.title} onClick={()=>navigate(`/course/course-detail/:id`)} key={image.id} src={image.url} />
          ))}
        </div>
      </div>
     <div>
       <ShowMoreButton
        onClick={navigateServices}
        className={`${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
        }`}
        text="Bütün xidmətləri gör"
      />
     </div>
    </div>
  );
};

export default Services;
