import React from "react";
import { CiHome } from "react-icons/ci";
import { PiBooks } from "react-icons/pi";
import { RiServiceLine } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: <CiHome />, label: "Əsas səhifə" , path:"/"},
  { icon: <PiBooks />, label: "Nəşirlərimiz",path:"/publications" },
  { icon: <RiServiceLine />, label: "Xidmətlər", path:"/allServices" },
  { icon: <CiPhone />, label: "Əlaqə", path:"/contact" },
];

const AboutFilm = () => {
  return (
    <div
      style={{ padding: "20px" }}
      className="w-full flex flex-col justify-center items-center bg-[#f7fcff]"
    >
      <h1 className="font-medium text-2xl md:text-4xl leading-7 md:leading-14">
        Tanıtım filmi
      </h1>
      <div style={{padding:"20px"}} className="w-full flex  justify-center items-center gap-20 font-[averta]">
        <div className="w-[60%] flex flex-col justify-start items-center">
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
        <div className="w-[40%] flex flex-col justify-center items-center gap-2">
          {menuItems.map((item, index) => (
           <Link className="w-[38%] h-10" to={item.path}>
            <div
              className="w-full h-full bg-[#f7fcff] hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 transition-all duration-700 ease-in-out  flex justify-start items-center gap-2 rounded-[2rem] group"
              key={index}
            >
              <span className="w-10 h-10 rounded-full bg-blue-200 group-hover:bg-transparent transition-all duration-700  ease-in-out flex justify-center items-center">
                {item.icon}
              </span>
              <span className="w-[78%] h-full bg-green-200 group-hover:bg-transparent rounded-[2rem] flex justify-center items-center transition-all ease-in-out duration-700">
                {item.label}
              </span>
            </div>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFilm;
