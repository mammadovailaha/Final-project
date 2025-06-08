import DropdownMenu from "../components/DropdownMenu";
import { Link } from "react-router-dom";
export default function Navbar() {
  const XidmetlerItems = [
    { label: "Xidmət 1", path: "/xidmetler/xidmet1" },
    { label: "Xidmət 2", path: "/xidmetler/xidmet2" },
    { label: "Xidmət 3", path: "/xidmetler/xidmet3" },
  ];

  const AboutItems = [
    { label: "Nailliyyətlərimiz", path: "/about/achievements" },
    { label: "Struktur", path: "/about/structure" },
    { label: "Brendlərimiz", path: "/about/brands" },
    { label: "Məqsəd və dəyərlərimiz", path: "/about/ Mission-and-Values" },
    { label: "Tanıtım filmi", path: "/about/film" },
    { label: "Bloq", path: "/about/bloq" },
  ];
  const FilialItems = [
    { label: "Elmlər A", path: "/branches/elmler-a" },
    { label: "28 May", path: "/branches/28-may" },
    { label: "Nizami", path: "/branches/nizami" },
    { label: "Nəriman Nərimanov", path: "/branches/n-nermanov" },
    { label: "Gəncə", path: "/branches/gence" },
    { label: "Sumqayıt", path: "/branches/sumqait" },
    { label: "Elmlər B", path: "/branches/elmler-b" },
    { label: "Göyçay", path: "/branches/goycay" },
    { label: "Xırdalan", path: "/branches/xirdalan" },
  ];

  return (
    <div className="w-full h-[100px] bg-[#015715]">
      <div className="w-full h-full  flex justify-around items-center">
        <div>
          <h1 className="text-white font-[averta] text-[45px] tracking-normal leading-6">
            EDU COMPANY
          </h1>
          <span className="text-white font-[averta] text-[12px tracking-normal]">
            Education & Consulting Centre
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-7">
            <DropdownMenu title="Haqqımızda" items={AboutItems} />
            <li>
              <Link
                to="/career"
                className="font-[averta] text-[15px] text-white"
              >
                Kariyera
              </Link>
            </li>
            <DropdownMenu title="Xidmətlər" items={XidmetlerItems} />
            <li>
              <Link
                to="/publications"
                className="font-[averta] text-[15px] text-white"
              >
                Nəşrlər
              </Link>
            </li>
            <li>
              <Link
                to="/study-abroad"
                className="font-[averta] text-[15px] text-white"
              >
                Xaricdə təhsil
              </Link>
            </li>
            <DropdownMenu title="Filiallar" items={FilialItems} />
            <li>
              <Link
                to="/contact"
                className="font-[averta] text-[15px] text-white"
              >
                Əlaqə
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
