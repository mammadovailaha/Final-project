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
    <div className="w-full h-8 md:h-14 bg-[#F9FCFF] flex justify-between items-center px-1 md:px-4">
      <div className="w-[90%] h-full flex justify-around items-center">
        <div>
          <Link className="text-[6px] md:text-[16px] text-[#015715] font-[averta]" to={"/"}>
            Sınaq dərs istə
          </Link>
        </div>
        <div className="flex flex-col items-center gap-0.2">
          <span className="text-[6px] md:text-[16px] text-[#015715] font-[averta]">
            09:00-21:00
          </span>
          <span className="text-[6px] md:text-[16px] text-[#015715] font-[averta]">
            iş saatları
          </span>
        </div>
        <div className="flex  items-center gap-0.5 md:gap-1.5">
          <ul className="flex justify-center items-center gap-1 md:gap-1.5">
            {HeaderInfo.map((item, index) => (
              <li
                key={index}
                className={`flex justify-center items-center w-18 md:w-36 h-4 md:h-8 border-gray-700 border-r px-0.5 md:px-1`}
              >
                <Link
                  to={item.path}
                  className={`text-center flex justify-center items-center h-full  w-[97%] text-[8px] md:text-[16px] text-[#015715] font-[averta] ${
                    index === 0 ? "bg-[#015715] text-white" : ""
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
