import { Link } from "react-router-dom";
import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

const HeaderInfo = [
  { title: "Bilet al", path: "/ticket" },
  { title: "Müraciət et", path: "/apply" },
  { title: "Imtahan nəticələri", path: "/exam-results" },
];

const SocialMediaLinks = [
  { icon: facebookIcon, title: "Facebook", path: "https://www.facebook.com" },
  {
    icon: instagramIcon,
    title: "Instagram",
    path: "https://www.instagram.com",
  },
  { icon: youtubeIcon, title: "YouTube", path: "https://www.youtube.com" },
];

export default function Header() {
  return (
    <div className="w-full h-8 md:h-14 bg-background shadow-lg flex justify-center lg:justify-between items-center px-1 md:px-4">
      <div className="w-[90%] h-full flex justify-around items-center gap-1 lg:gap-2">
        <div>
          <Link className="text-[6px]  leading-1.5 md:leading-3 lg:leading-4 md:text-xs  lg:text-[16px] text-black " to={"/"}>
            Sınaq dərs istə
          </Link>
        </div>
        <div className="flex flex-col items-center gap-0.2">
          <span className="text-[6px] leading-1.5 md:leading-3 lg:leading-4 md:text-xs lg:text-[16px]  text-black ">
            09:00-21:00
          </span>
          <span className="text-[6px]  leading-1.5 md:leading-3 lg:leading-4 md:text-xs lg:text-[16px] text-black ">
            iş saatları
          </span>
        </div>
        <div className="flex  items-center gap-0.5 md:gap-1.5">
          <ul className="flex justify-center items-center gap-1 md:gap-1.5">
            {HeaderInfo.map((item, index) => (
              <li
                key={index}
                className={`flex justify-center items-center w-18 md:w-40 h-4 md:h-8   px-0.5 md:px-1`}
              >
                <Link
                  to={item.path}
                  className={`text-center flex justify-center items-center h-full text-[8px] md:text-sm lg:text-[16px] text-black rounded-lg ${
                    index === 0 ? "bg-[linear-gradient(to_right,_#4b6043,_#f6e9d9)] bg-[length:200%_100%] bg-[position:left] shadow hover:bg-[position:right] transition-[background-position] duration-1000 ease-in-out text-white w-[65%]" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center gap-0.5 md:gap-4">
            {SocialMediaLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-3 md:w-6 h-3 md:h-6"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
