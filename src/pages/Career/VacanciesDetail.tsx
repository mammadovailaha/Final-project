import React from "react";
import { useParams } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import {
  MdOutlineAssignmentTurnedIn,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import NavItem from "../../components/NavItem";
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
    <div className="w-full flex justify-center items-center" >
      <div>
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
      <div>
        <div>
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          <p>
            <strong>Bizim üçün uyğun namizəd:</strong>
            {data?.requirements}
          </p>
          <div>
            <strong>Hansı işləri görəcəksiniz?</strong>
            <p>{data?.responsibilities}</p>
          </div>
          <div>
            <strong>Nə əldə edəcəksiniz?</strong>
            <p>{data?.benefits}</p>
          </div>
          <div>
            <strong>Əlavə Məlumat</strong>
            <p>{data?.additionalInfo.documentation}</p>
          </div>
        </div>
        <div>
          <div>
            <GiTeacher />
            <strong>Təcrübə:</strong>{" "}
            <span>{data?.additionalInfo.experience}</span>
          </div>
          <div>
            <PiStudentBold />
            <strong>Təhsil:</strong>
            <span>{data?.additionalInfo.education}</span>
          </div>
          <div>
            <MdOutlineLanguage />
            <strong>Dil biliyi:</strong>
            <span>{data?.additionalInfo.languages}</span>
          </div>
          <div>
            <LuComputer />
            <strong>Kompyuter biliyi:</strong>
            <span>{data?.additionalInfo.computerSkills}</span>
          </div>
          <div>
            <FaMoneyBillWave />
            <strong>Əmək haqqı:</strong>
            <span>{data?.additionalInfo.salary}</span>
          </div>
          <div>
            <LuCalendarCheck2 className="text-[16px] text-green-800" />
            <strong> Elanın yerləşdirmə tarix:</strong>
            <span>{data?.postedDate}</span>
          </div>
          <div>
            <LuCalendarDays className="text-[16px] text-green-800" />
            <strong>Son müraciət tarixi:</strong>
            <span>{data?.deadline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesDetail;
