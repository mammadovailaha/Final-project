import { FaUserTie } from "react-icons/fa";
import {
  MdOutlineAssignmentTurnedIn,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import VacanciesItem from "./VacanciesItem";
import { useNavigate } from "react-router-dom";
import NavItemComponent from "../../components/NavItemComponent";

const menuItems = [
  { icon: <FaUserTie />, label: "Vakansiyalar", path: "/career" },
  {
    icon: <MdOutlineAssignmentTurnedIn />,
    label: "İmtahan nəticələri",
    path: "/career/exam-results",
  },
  {
    icon: <HiOutlineClipboardDocumentList />,
    label: "Müsahibə nəticələri",
    path: "/career/interview-results",
  },
  {
    icon: <MdOutlineQuestionAnswer />,
    label: "Tez-tez verilən suallar",
    path: "/career/faq",
  },
];

const vacancies = [
  {
    id: 1,
    title: "İngilis dili danışıq müəllimi",
    postedDate: "2025-06-24",
    deadline: "2024-06-25",
    description: `Artıq 11-ci ildir ki, yorulmadan, usanmadan, böyük qürur hissi ilə minlərlə vətəndaşımızın təhsilli gələcəyinə, karyerasına çıraq olduğumuz üçün bu müqəddəs missiyamızla qürur duyuruq.`,
    requirements: `İngilis dili müəllimi bu sahədə peşəkar təcrübəyə, səlist danışıq nitqinə, komandada işləmək bacarığına sahib olmalıdır. Beynəlxalq sertifikatların olması üstünlükdür.`,
    responsibilities: `Öncədən təyin edilmiş proqrama əsasən tələbələrə ingilis dili danışıq dərsinin tədrisi.`,
    benefits: `Peşəkar kollektivdə təcrübə, təhsil və tədris bilikləri, artan əmək haqqı sistemi.`,
    additionalInfo: {
      documentation: "ARƏM-nə uyğun sənədləşmə hr@educompany.az",
      experience: "İngilis dili üzrə minimum 1 il",
      education: "Ali",
      languages: ["Azərbaycan dili", "İngilis dili"],
      computerSkills: "MS Office",
      salary: "Müsahibə əsasında təyin edilir",
    },
  },
  {
    id: 2,
    title: "Riyaziyyat müəllimi (abituriyent - rus bölməsi)",
    postedDate: "2025-06-24",
    deadline: "2025-06-30",
    description: `Riyaziyyat müəllimi vakansiyası abituriyent hazırlığında təcrübəli şəxslər üçün nəzərdə tutulub.`,
    requirements: `Fənn üzrə güclü bilik, rus bölməsi ilə işləmək bacarığı, pedaqoji təcrübə.`,
    responsibilities: `Qrup və fərdi şəkildə abituriyentlərə Riyaziyyat fənninin tədrisi.`,
    benefits: `Stabil qrafik, kollektiv dəstək və mütəmadi təlim imkanları.`,
    additionalInfo: {
      documentation: "hr@educompany.az",
      experience: "Minimum 2 il",
      education: "Ali təhsil",
      languages: ["Azərbaycan dili", "Rus dili"],
      computerSkills: "MS Office",
      salary: "Razılaşma əsasında",
    },
  },
  {
    id: 3,
    title: "Mühasibatlıq üzrə müəllim",
    postedDate: "2025-06-24",
    deadline: "2025-06-25",
    description: `Mühasibatlıq və maliyyə sahəsində dərs deyəcək təcrübəli müəllim axtarılır.`,
    requirements: `Mühasibatlıq üzrə ali təhsil, minimum 2 il təcrübə, ACCA və ya digər sertifikatlar üstünlükdür.`,
    responsibilities: `Mühasibatlıq fənnini praktiki və nəzəri əsaslarla tədris etmək.`,
    benefits: `Tədris resurslarına çıxış, inkişaf imkanları və rəqabətli əmək haqqı.`,
    additionalInfo: {
      documentation: "info@educompany.az",
      experience: "Minimum 2 il",
      education: "Ali təhsil (Mühasibatlıq)",
      languages: ["Azərbaycan dili"],
      computerSkills: "MS Excel, Logo, 1C",
      salary: "Müsahibə əsasında müəyyən olunur",
    },
  },
];

const Career = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-10 bg-white p-5"
    >
      <h1 className="font-[averta] text-2xl md:text-5xl leading-6 md:leading-14 font-medium">
        Kariyera
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
        <NavItemComponent className="w-full md:w-[27%]" navItem={menuItems} />

        <div className="w-full md:w-[78%] lg:w-[70%] flex flex-col justify-center items-center gap-5">
          {vacancies.map((item) => (
            <VacanciesItem
              key={item.id}
              deadline={item.deadline}
              postedDate={item.postedDate}
              title={item.title}
              onClick={() => navigate(`/career/vacancies-detail/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
