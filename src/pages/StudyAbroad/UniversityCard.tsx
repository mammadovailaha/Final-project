import { type FC } from "react";
import { Info } from "lucide-react"; // Lucide ikonu, istəsən dəyişə bilərik
import { useNavigate } from "react-router-dom";

interface UniversityCardProps {
  id: number;
  logoUrl: string;
  uniTitle: string;
}

const UniversityCard: FC<UniversityCardProps> = ({ logoUrl, uniTitle, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/study-abroad/country-detail/University-detail/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="relative w-44 h-24 md:w-64 md:h-44 bg-white rounded-2xl shadow-md overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 flex flex-col justify-center items-center"
    >
      <img
        src={logoUrl}
        alt={`${uniTitle} loqosu`}
        loading="lazy"
        className="w-38 md:w-[90%] h-18 md:h-[90%] object-contain transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm z-10"
      />
      <p className="text-xs font-medium opacity-100 md:opacity-0 text-center">
        {uniTitle}
      </p>
      <div className="z-0 absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-3">
        <div className="flex items-center gap-2 text-white">
          <Info className="w-4 h-4 text-white opacity-80" />
          <span className="text-sm font-medium tracking-wide">{uniTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
