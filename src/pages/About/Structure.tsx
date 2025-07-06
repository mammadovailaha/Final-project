import { useNavigate } from "react-router-dom";
import StructureCard from "../../components/StructureCard";

const staffData = [
  {
    id: 1,
    fullName: "Samir Əzizov",
    role: "Şirkətin təsisçisi və baş direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/1e939aaa5e04ea8a4433d31e44f7e69b.webp",
    alt: "Samir Əzizov şəkli",
    path: "samir-ezizov",
  },
  {
    id: 2,
    fullName: "Eülmar Əsgərov",
    role: "28 May filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/31851fc2fbd6733294f6efd90c7df10e.webp",
    alt: "Eülmar Əsgərov şəkli",
    path: "eulmar-esgerov",
  },
  {
    id: 3,
    fullName: "Nurlana Salmanova",
    role: "Nərimanov filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/d4470b8b2498b1c4cf2b111b4867cc56.webp",
    alt: "Nurlana Salmanova şəkli",
    path: "nurlana-salmanova",
  },
  {
    id: 4,
    fullName: "Kənan Məmmədrzəyev",
    role: "Neftçilər və Xalqlar filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/b6b405fc5c489f547a832cd7647a479a.webp",
    alt: "Kənan Məmmədrzəyev şəkli",
    path: "kenan-memmedrzeyev",
  },
  {
    id: 5,
    fullName: "Ömür Əmirov",
    role: "Sumqayıt filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/b6b405fc5c489f547a832cd7647a479a.webp",
    alt: "Ömür Əmirov şəkli",
    path: "omur-emirov",
  },
  {
    id: 6,
    fullName: "Vaqif Rəhmanov",
    role: "Göyçay filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/ca57381beec5cefb4396ce7623beefbe.webp",
    alt: "Vaqif Rəhmanov şəkli",
    path: "vaqif-rehmanov",
  },
  {
    id: 7,
    fullName: "Orxan Abdullayev",
    role: "Xırdalan filialının direktoru",
    src: "https://www.educompany.az/assets/front/image/structure/509ac35cf5f7486fcd790431602a1c34.jpg",
    alt: "Orxan Abdullayev şəkli",
    path: "orxan-abdullayev",
  },
];

const Structure = () => {
  const navigate = useNavigate();

  return (
    <div style={{padding:"20px"}} className="w-full h-full flex flex-col justify-center items-center gap-10 md:gap-16 bg-[#f7fcff] ">
      <h1 className="text-3xl md:text-5xl font-bold leading-14">Struktur</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {staffData.map((data) => (
          <StructureCard
            path={data.path}
            key={data.id}
            src={data.src}
            alt={data.alt}
            fullName={data.fullName}
            role={data.role}
            onClick={() => navigate(`/staffDetail/${data.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Structure;
