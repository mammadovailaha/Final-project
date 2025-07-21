import Card from "../../../components/Cards/Card";
import { useInView } from "react-intersection-observer";
import ShowMoreButton from "../../../components/Buttons/ShowMoreButton";
import { useNavigate } from "react-router-dom";

const images = [
  {
    id: 1,
    url: "https://www.educompany.az/assets/front/image/course/4cf4e11c876789ecf272eadb281ef9a1.jpg",
    alt: " sahmat dersleri",
  },
  {
    id: 2,
    url: "https://www.educompany.az/assets/front/image/course/4cf4e11c876789ecf272eadb281ef9a1.jpg",
    alt: " sahmat dersleri",
  },
  {
    id: 3,
    url: "https://www.educompany.az/assets/front/image/course/4cf4e11c876789ecf272eadb281ef9a1.jpg",
    alt: " sahmat dersleri",
  },
  {
    id: 4,
    url: "https://www.educompany.az/assets/front/image/course/4cf4e11c876789ecf272eadb281ef9a1.jpg",
    alt: " sahmat dersleri",
  },
  {
    id: 5,
    url: "https://www.educompany.az/assets/front/image/course/4cf4e11c876789ecf272eadb281ef9a1.jpg",
    alt: " sahmat dersleri",
  },
  {
    id: 6,
    url: "https://www.educompany.az/assets/front/image/course/4cf4e11c876789ecf272eadb281ef9a1.jpg",
    alt: " sahmat dersleri",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const navigate = useNavigate();
  const navigateServices = () => {
    navigate("/services");
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
          {images.map((image) => (
            <Card key={image.id} src={image.url} alt={image.alt} />
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
