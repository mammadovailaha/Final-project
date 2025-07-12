import React from "react";
import { useParams } from "react-router-dom";
import NavItem from "../../components/NavItem";
// navItem 
import { FaUserTie } from "react-icons/fa";
import {
  MdOutlineAssignmentTurnedIn,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
// vacanciesDetail icons
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineLanguage } from "react-icons/md";
import { LuComputer } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa";
import { LuCalendarCheck2 } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";

const menuItems = [
  { icon: <FaUserTie />, label: "Vakansiyalar", path: "/vacancies" },
  {
    icon: <MdOutlineAssignmentTurnedIn />,
    label: "İmtahan Nəticələri",
    path: "/career/exam-results",
  },
  {
    icon: <HiOutlineClipboardDocumentList />,
    label: "Müsahibə Nəticələri",
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

const VacanciesDetail = () => {
  const { id } = useParams();
  const data = vacancies.find((item) => item.id === Number(id));
  return (
    <div style={{paddingTop:"40px"}} className="w-full h-screen flex justify-center items-start" >
      <div className="w-[20%] flex flex-col justify-center items-center gap-2">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            className="w-full lg:w-[70%] h-12"
            path={item.path}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
      <div className="w-[75%] flex justify-center items-center gap-10">
        <div style={{padding:"20px"}} className="w-[40%] flex flex-col justify-center items-start gap-2 md:gap-4 shadow">
          <h2 className="font-bold text-2xl md:text-3xl ">{data?.title}</h2>
          <p className="text-sm md:text-base">{data?.description}</p>
          <p className="text-sm md:text-base">
            <strong>Bizim üçün uyğun namizəd:</strong>
            {data?.requirements}
          </p>
          <div>
            <strong>Hansı işləri görəcəksiniz?</strong>
            <p className="text-sm md:text-base">{data?.responsibilities}</p>
          </div>
          <div>
            <strong>Nə əldə edəcəksiniz?</strong>
            <p className="text-sm md:text-base">{data?.benefits}</p>
          </div>
          <div>
            <strong>Əlavə Məlumat</strong>
            <p className="text-sm md:text-base">{data?.additionalInfo.documentation}</p>
          </div>
        </div>
        <div style={{padding:"20px"}} className="w-[35%] flex flex-col justify-center items-start gap-2 md:gap-3 shadow">
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <GiTeacher className="text-base md:text-lg text-[#517741]" />
            <strong>Təcrübə:</strong>{" "}
            <span>{data?.additionalInfo.experience}</span>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <PiStudentBold  className="text-base md:text-lg text-[#517741]"/>
            <strong>Təhsil:</strong>
            <span>{data?.additionalInfo.education}</span>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <MdOutlineLanguage className="text-base md:text-lg text-[#517741]" />
            <strong>Dil biliyi:</strong>
            <span>{data?.additionalInfo.languages}</span>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <LuComputer className="text-base md:text-lg text-[#517741]"/>
            <strong>Kompyuter biliyi:</strong>
            <span>{data?.additionalInfo.computerSkills}</span>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <FaMoneyBillWave className="text-base md:text-lg text-[#517741]" />
            <strong>Əmək haqqı:</strong>
            <span>{data?.additionalInfo.salary}</span>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <LuCalendarCheck2 className="text-base text-[#517741]" />
            <strong> Elanın yerləşdirmə tarix:</strong>
            <span>{data?.postedDate}</span>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-2">
            <LuCalendarDays className="text-base md:text-lg text-[#517741]" />
            <strong>Son müraciət tarixi:</strong>
            <span>{data?.deadline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesDetail;
