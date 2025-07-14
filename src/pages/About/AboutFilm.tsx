import { CiHome } from "react-icons/ci";
import { PiBooks } from "react-icons/pi";
import { RiServiceLine } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import NavItem from "../../components/NavItem";

const menuItems = [
  { icon: <CiHome />, label: "Əsas səhifə", path: "/" },
  { icon: <PiBooks />, label: "Nəşirlərimiz", path: "/publications" },
  { icon: <RiServiceLine />, label: "Xidmətlər", path: "/allServices" },
  { icon: <CiPhone />, label: "Əlaqə", path: "/contact" },
];
const AboutFilm = () => {
  return (
    <div
      style={{ padding: "20px" }}
      className="w-full flex flex-col justify-center items-center bg-white"
    >
      <h1 className="font-medium text-2xl md:text-4xl leading-7 md:leading-14">
        Tanıtım filmi
      </h1>
      <div
        style={{ padding: "20px" }}
        className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 font-[averta]"
      >
        <div className="w-full md:w-[60%] flex flex-col justify-center items-start gap-5">
          <p className=" font-[averta] text-xs md:text-[16px] leading-3 md:leading-4">
            "EDU Company" Təhsil Şirkəti olaraq biz inanırıq ki, sağlam,
            təhlükəsiz və firəvan cəmiyyət yüksək təhsil sistemi ilə mümkündür.
            Vətəndaşlarımızın hər zaman biliklərini təkmilləşdirmək,
            təhsillərini davam etdirmək imkanı olmalıdır ki, cəmiyyətimiz
            inkişaf etsin, çiçəklənsin. "EDU Company" Təhsil Şirkətinin əsas
            hədəfi vətəndaşlara yaşından asılı olmayaraq təhsil almağa,
            biliklərini genişləndirməyə imkan verən bir Təhsil Şirkəti kimi
            fəaliyyət göstərməkdir.
          </p>
          <div className="w-full">
            <iframe
              className="w-[300px] md:w-[400px] lg:w-[560px] h-40 md:h-50 lg:h-[315px]"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xeL7_t4Etq4?si=Ieq80nAacM4r9V8m"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-2">
          {menuItems.map((item, index) => (
            <NavItem
              className="w-[60%] md:w-[70%] lg:w-[45%] h-10"
              key={index}
              path={item.path}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFilm;
