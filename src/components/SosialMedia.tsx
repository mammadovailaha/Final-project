import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

const SosialMedia = () => {
  return (
    <div className="flex justify-center gap-1">
      <div className="w-4 h-4   flex justify-center items-center rounded-full text-sm md:text-2xl">
        <Link to={"https://www.facebook.com/edu.company14/"}>
          <FaFacebook className="text-[#4b6043] text-sm md:text-lg " />
        </Link>
      </div>

      <div className="w-4 h-4 flex justify-center items-center rounded-full text-sm md:text-2xl">
        <Link to={"https://www.youtube.com/channel/UCWxX_3DMER-CSPOrCP82d4Q"}>
          <TfiYoutube className="text-[#4b6043] text-sm md:text-lg" />
        </Link>
      </div>
      <div className="w-4 h-4  flex justify-center items-center rounded-full text-sm md:text-2xl">
        <Link to={"https://www.instagram.com/edu_company_official/"}>
          <FaInstagram className="text-[#4b6043] text-sm md:text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default SosialMedia;
